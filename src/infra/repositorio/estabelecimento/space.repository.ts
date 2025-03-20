import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Space } from "src/dominio/space/space/space.entidady";
import { SpaceRepository } from "src/dominio/space/protocol/space-repository";
import { MoreThan, Repository } from "typeorm";

@Injectable()
export class EstabelecimentoRepositorio implements SpaceRepository {

    constructor(
        private readonly spaceRps: Repository<Space>
    ){}


    public async create({name, qtd_car_slot, qtd_motorcycle_slot, slot_car, slot_motorcycle, telephone}: Space ): Promise<void> {
        
        try {

            this.spaceRps.create({name, qtd_car_slot,qtd_motorcycle_slot, telephone, slot_car, slot_motorcycle})
            
        } catch (error) {
            
            console.log('falha',error)
        }
    }

   
}