import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
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
    ) { }


    public async create(input: SpaceModel): Promise<void> {

        const space = this.spaceRps.create(input)
        await this.spaceRps.save(space)

    }


    public async findAll(): Promise<any[]> {

        return await this.spaceRps.find();

    }


    public async findOne(id: number): Promise<any | null> {

        const space = await this.spaceRps.findOne({ where: { id: id } });

        if (!space) {
            throw new NotFoundException('space not found');
        }

        return space;

    }

    async delete(id: number): Promise<void> {
        
        const hasSpace = await this.findOne(+id);
        
        if(!hasSpace){
            throw new NotFoundException('space not found');
        }

        await this.spaceRps.delete(+id);

    }

    async update(id: number, newSpace: SpaceEntity): Promise<void> {
        console.log("Nothing")
    }





}