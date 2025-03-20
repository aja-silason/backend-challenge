import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CriarRelatorioDTO } from "src/dominio/relatorio/model/dto/Criar-relatorioDTO";
import { RelatorioORM } from "src/dominio/relatorio/model/relatorio.model";
import { ActualizarVeiculoDTO } from "src/dominio/veiculo/model/dto/actualizar-veiculoDTO";
import { CriarVeiculoDTO } from "src/dominio/veiculo/model/dto/Criar-veiculoDTO";
import { VeiculoORM } from "src/dominio/veiculo/model/veiculo.model";
import { Repository } from "typeorm";

@Injectable()
export class Relatorioepositorio {

    constructor(
        @InjectRepository(RelatorioORM)
        private readonly relatorioRps: Repository<RelatorioORM>
    ){}

    async criar_entrada(relatorio: CriarRelatorioDTO) {

        //return await this.relatorioRps.save(this.relatorioRps.create(relatorio));
    }

    async criar_saida(relatorio: CriarVeiculoDTO) {

        //return await this.relatorioRps.save(this.relatorioRps.create(relatorio));
    }

    async find() {
        return await this.relatorioRps.find();
    }

    async findOneByOrFail(id: number | any){
        try{
            return await this.relatorioRps.findOneByOrFail(id);
        } catch (error) {
            throw new NotFoundException(error?.error);
        }
    }

}