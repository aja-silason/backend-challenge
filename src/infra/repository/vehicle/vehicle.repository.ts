import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { VehicleRepository } from "src/domain/vehicle/protocol/vehicle.repository";
import { VehicleModel } from "src/domain/vehicle/model/vehicle.model";
import { UpdateVehicleDTO } from "src/domain/vehicle/model/dto/update-vehicle.DTO copy";


@Injectable()
export class TypeORMVehicleRepository implements VehicleRepository {

    constructor(
        @InjectRepository(VehicleModel)
        private readonly vehicleRps: Repository<VehicleModel>
    ) { }


    public async create(input: VehicleModel): Promise<void> {

        const space = this.vehicleRps.create(input)
        console.log(space)
        await this.vehicleRps.save(space)

    }

    public async findOne(id: number): Promise<VehicleModel | null | any> {
    
        const vehicle = await this.vehicleRps.findOne({ where: { id: id } });
    
        if (!vehicle) {
            throw new NotFoundException(`vehicle with id ${id} not found`);
        }
    
        return vehicle;
    
    }
    public async findAll(): Promise<any[]> {

        return await this.vehicleRps.find();

    }




    async update(id: number, newSpace: UpdateVehicleDTO): Promise<void> {

        const vehicle = await this.findOne(+id);
        vehicle.updatedAt = new Date();
        this.vehicleRps.merge(vehicle, newSpace);
        await this.vehicleRps.save(vehicle)
        
    }

    async delete(id: number): Promise<void> {
        await this.findOne(+id);
        await this.vehicleRps.delete(+id);

    }

}