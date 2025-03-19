import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Estabelecimento } from "src/dominio/estabelecimento/entidade/estabelecimento.entidade";
import { EstabelecimentoGateway } from "src/dominio/estabelecimento/gateway/estabelecimento.interface";
import { Repository } from "typeorm";

@Injectable()
export class EstabelecimentoRepositorio implements EstabelecimentoGateway {

    constructor(
        @InjectRepository(Estabelecimento)
        private readonly estabelicimentoGateway: Repository<Estabelecimento>
    ){}

    async create(estabelecimento: Estabelecimento): Promise<void> {
        await this.estabelicimentoGateway.save(estabelecimento);
    }

    async find(): Promise<Estabelecimento[]> {
        const estabelecimento = await this.estabelicimentoGateway.find();
        return estabelecimento;
    }

    async finOne(id: string | any): Promise<Estabelecimento | any> {
        const estabelecimento = await this.estabelicimentoGateway.findOne(id);
    }

    async update(id: string, estabelecimentoUpdated: Estabelecimento): Promise<void> {
        await this.estabelicimentoGateway.update(id, estabelecimentoUpdated);
    }

    async delete(id: string): Promise<void> {
        
        this.estabelicimentoGateway.delete(id);
        
    }

}