import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ActualizarVeiculoDTO } from "src/dominio/veiculo/model/dto/actualizar-veiculoDTO";
import { CriarVeiculoDTO } from "src/dominio/veiculo/model/dto/Criar-veiculoDTO";
import { VeiculoORM } from "src/dominio/veiculo/model/veiculo.model";
import { Repository } from "typeorm";

@Injectable()
export class VeiculoRepositorio {

    constructor(
        @InjectRepository(VeiculoORM)
        private readonly veiculoRps: Repository<VeiculoORM>
    ){}

    async create(veiculo: CriarVeiculoDTO) {

        return await this.veiculoRps.save(this.veiculoRps.create(veiculo));
    }

    async find() {
        return await this.veiculoRps.find();
    }

    async findOneByOrFail(id: number | any){
        try{
            return await this.veiculoRps.findOneByOrFail(id);
        } catch (error) {
            throw new NotFoundException(error?.error);
        }
    }

    async update(id: number, veiculoUpdate: ActualizarVeiculoDTO){
        const veiculo = await this.findOneByOrFail(id);
        veiculo.updatedAt = new Date();
        this.veiculoRps.merge(veiculo, veiculoUpdate);
        return await this.veiculoRps.save(veiculo);
    }

    async delete(id: number | any){
        const veiculo = await this.findOneByOrFail(id);
        if(!veiculo) {
            throw new NotFoundException(`id ${id} não encontrado`);
        }
        await this.veiculoRps.delete(id);
    }

}