import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Estabelecimento } from "src/dominio/estabelecimento/entidade/estabelecimento.entidade";
import { EstabelecimentoORM } from "src/dominio/estabelecimento/model/estabelecimento.model";
import { Repository } from "typeorm";

@Injectable()
export class EstabelecimentoRepositorio {

    constructor(
        @InjectRepository(EstabelecimentoORM)
        private readonly estabelicimentoRps: Repository<EstabelecimentoORM>
    ){}

    async create(estabelecimento) {


        return await this.estabelicimentoRps.save(this.estabelicimentoRps.create(estabelecimento));
        
    }

    async find() {
        return await this.estabelicimentoRps.find();
    }

    async findOneByOrFail(id: string | any){
        try{
            return await this.estabelicimentoRps.findOneByOrFail(id);
        } catch (error) {
            throw new NotFoundException(error?.message);
        }
    }

    async update(id: string, estabelecimentoUpdated: EstabelecimentoORM){
        const estabelecimento = await this.findOneByOrFail(id);
        this.estabelicimentoRps.merge(estabelecimento, estabelecimentoUpdated);
        return await this.estabelicimentoRps.save(estabelecimento);
    }

    async deleteById(id: string){
        await this.findOneByOrFail(id);
        await this.estabelicimentoRps.softDelete(id);
    }

}