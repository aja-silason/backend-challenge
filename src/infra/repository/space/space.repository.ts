import { Injectable } from "@nestjs/common";
import { Space } from "src/domain/space/space/space.entidady";
import { SpaceRepository } from "src/domain/space/protocol/space-repository";
import { Repository } from "typeorm";

@Injectable()
export class TypeORMSpace implements SpaceRepository {

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