import { Injectable } from "@nestjs/common";
import { SpaceRepository } from "src/domain/space/protocol/space-repository";
import { Repository } from "typeorm";
import { SpaceEntity } from "src/domain/space/space/space";
import { InjectRepository } from "@nestjs/typeorm";
import { SpaceModel } from "src/domain/space/model/space.model";


@Injectable()
export class TypeORMSpaceRepository implements SpaceRepository {

    constructor(
        @InjectRepository(SpaceModel)
        private readonly spaceRps: Repository<SpaceModel>
    ){}


    public async create(input: SpaceModel ): Promise<void> {
        
        try {

            const space = this.spaceRps.create(input)
            await this.spaceRps.save(space)
            
        } catch (error) {
            
            console.log('falha',error)
        }
    }

   
}