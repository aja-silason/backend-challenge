import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CriarRelatorioDTO } from "src/dominio/relatorio/model/dto/Criar-relatorioDTO";
import { RelatorioORM } from "src/dominio/relatorio/model/relatorio.model";
import { Repository } from "typeorm";

@Injectable()
export class RelatorioRepositorio {

    constructor(
        @InjectRepository(RelatorioORM)
        private readonly relatorioRps: Repository<RelatorioORM>
    ){}

    async findOneByOrFail(id: number | any){
        try{
            return await this.relatorioRps.findOneByOrFail(id);
        } catch (error) {
            throw new NotFoundException(error?.error);
        }
    }

    async criar_entrada(relatorio: CriarRelatorioDTO) {
        return await this.relatorioRps.save(this.relatorioRps.create(relatorio));
    }

    async criar_saida(id: number) {

        const listaDeVeiculos = await this.find();
        const veiculo = listaDeVeiculos?.filter((item) => item?.id_veiculo == id)[0]
        
        veiculo.hora_saida = new Date();

        return await this.relatorioRps.save(this.relatorioRps.create(veiculo));
    }

    async find() {
        return await this.relatorioRps.find();
    }


}