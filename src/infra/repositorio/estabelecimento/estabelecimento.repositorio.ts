import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ActualizarEstabelecimentoDTO } from "src/dominio/estabelecimento/model/dto/actualizar-estabelecimentoDTO";
import { CriarEstabelecimentoDTO } from "src/dominio/estabelecimento/model/dto/Criar-estabelecimentoDTO";
import { EstabelecimentoORM } from "src/dominio/estabelecimento/model/estabelecimento.model";
import { Repository } from "typeorm";

@Injectable()
export class EstabelecimentoRepositorio {

    constructor(
        @InjectRepository(EstabelecimentoORM)
        private readonly estabelicimentoRps: Repository<EstabelecimentoORM>
    ){}

    async create(estabelecimento: CriarEstabelecimentoDTO) {

        return await this.estabelicimentoRps.save(this.estabelicimentoRps.create(estabelecimento));
    }

    async find() {
        return await this.estabelicimentoRps.find({withDeleted: true});
    }

    async findOneByOrFail(id: number | any){
        try{
            return await this.estabelicimentoRps.findOneByOrFail(id);
        } catch (error) {
            throw new NotFoundException(error?.error);
        }
    }

    async update(id: number, estabelecimentoUpdated: ActualizarEstabelecimentoDTO){
        const estabelecimento = await this.findOneByOrFail(id);
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

}