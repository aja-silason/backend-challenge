import { Injectable } from "@nestjs/common";
import { VehicleRepository } from "src/domain/vehicle/protocol/vehicle.repository";
import { VehicleEntity, VehicleProps } from "src/domain/vehicle/vehicle/vehicle";

@Injectable()
export class CreateVehicleUsecase {

    constructor (private readonly repository: VehicleRepository){}

    public async execute({brand, color, model, plate, spaceId, type}: VehicleProps){

        const vehicle = VehicleEntity.create({brand, color, model, plate, spaceId, type});

        await this.repository.create(vehicle);

    }


}
