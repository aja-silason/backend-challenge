import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ActualizarEstabelecimentoDTO } from "src/dominio/estabelecimento/model/dto/actualizar-estabelecimentoDTO";
import { CriarEstabelecimentoDTO } from "src/dominio/estabelecimento/model/dto/Criar-estabelecimentoDTO";
import { EstabelecimentoORM } from "src/dominio/estabelecimento/model/estabelecimento.model";
import { MoreThan, Repository } from "typeorm";

@Injectable()
export class EstabelecimentoRepositorio {

    constructor(
        @InjectRepository(EstabelecimentoORM)
        private readonly estabelicimentoRps: Repository<EstabelecimentoORM>
    ){}

    async create(estabelecimento: CriarEstabelecimentoDTO) {

        console.log("ORM", estabelecimento)

        return await this.estabelicimentoRps.save(this.estabelicimentoRps.create(estabelecimento));
    }

    async find() {
        return await this.estabelicimentoRps.find();
    }

    async findOneByOrFail(id: number | any){
        try{
            return await this.estabelicimentoRps.findOneByOrFail(id);
        } catch (error) {
            throw new NotFoundException(error?.error);
        }
    }

    async findOne(id: number  | any){
        return await this.estabelicimentoRps.findOne({where: {id: +id}});
    }

    async update(id: number, estabelecimentoUpdated: ActualizarEstabelecimentoDTO){
        const estabelecimento = await this.findOneByOrFail(id);
        estabelecimento.updatedAt = new Date();
        this.estabelicimentoRps.merge(estabelecimento, estabelecimentoUpdated);
        return await this.estabelicimentoRps.save(estabelecimento);
    }

    async delete(id: number | any){
        const estabelecimento = await this.findOneByOrFail(id);
        if(!estabelecimento) {
            throw new NotFoundException(`id ${id} não encontrado`);
        }
        await this.estabelicimentoRps.delete(id);
    }


    async registar_entrada(tipo: string){

        if(tipo == 'Moto'){
            const vagas = await this.estabelicimentoRps.findOne({
                where: {disponiveis_motos: MoreThan(0)}
            });

            if(!vagas) {
                return 'Sem vagas para mais moto'
            }

            vagas.disponiveis_motos -= 1;
            await this.estabelicimentoRps.save(vagas);

        } else if(tipo == 'Carro'){
            const vagas = await this.estabelicimentoRps.findOne({
                where: {disponiveis_motos: MoreThan(0)}
            });

            if(!vagas) {
                return 'Sem vagas para mais carros'
            }

            vagas.disponiveis_carros -= 1;
            await this.estabelicimentoRps.save(vagas);

        }
    }

    async registar_saida(tipo: string, id: number){

        console.log(id)

        const estabelecimento = await this.findOne(+id)

        if(!estabelecimento) {
            return 'Estabelecimento não encontrado'
        }

        if(tipo == 'Moto'){

            if(estabelecimento.disponiveis_motos < estabelecimento.qtd_vagas_motos){
                estabelecimento.disponiveis_motos += 1;
                return await this.estabelicimentoRps.save(estabelecimento);
            }
            return;
        } else if(tipo == 'Carro'){
            if(estabelecimento.disponiveis_carros < estabelecimento.qtd_vagas_carros){
                estabelecimento.disponiveis_carros += 1;
                return await this.estabelicimentoRps.save(estabelecimento);
            }
            return;
        }


    }

}