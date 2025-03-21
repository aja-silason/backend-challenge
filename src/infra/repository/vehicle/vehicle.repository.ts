import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { SpaceRepository } from "src/domain/space/protocol/space-repository";
import { Repository } from "typeorm";
import { SpaceEntity } from "src/domain/space/space/space";
import { InjectRepository } from "@nestjs/typeorm";
import { SpaceModel } from "src/domain/space/model/space.model";
import { UpdateSpaceDTO } from "src/domain/space/model/dto/update-space.DTO";
import { VehicleRepository } from "src/domain/vehicle/protocol/vehicle.repository";
import { VehicleModel } from "src/domain/vehicle/model/vehicle.model";
import { CreateVehicleDTO } from "src/domain/vehicle/model/dto/create-vehicle.DTO";


@Injectable()
export class TypeORMVehicleRepository implements VehicleRepository {

    constructor(
        @InjectRepository(VehicleModel)
        private readonly vehicleRps: Repository<VehicleModel>
    ) { }


    public async create(input: VehicleModel): Promise<void> {

        const space = this.vehicleRps.create(input)
        await this.vehicleRps.save(space)

    }

/*
    public async findAll(): Promise<any[]> {

        return await this.spaceRps.find();

    }


    public async findOne(id: number): Promise<SpaceModel | null | any> {

        const space = await this.spaceRps.findOne({ where: { id: id } });

        if (!space) {
            throw new NotFoundException(`space with id ${id} not found`);
        }

        return space;

    }

    async delete(id: number): Promise<void> {
        
        await this.findOne(+id);
        await this.spaceRps.delete(+id);

    }

    async update(id: number, newSpace: UpdateSpaceDTO): Promise<void> {

        const space = await this.findOne(+id);
        space.updatedAt = new Date();
        this.spaceRps.merge(space, newSpace);
        await this.spaceRps.save(space)
        
    }



*/

}