import { Injectable } from "@nestjs/common";
import { SpaceRepository } from "src/domain/space/protocol/space-repository";
import { VehicleRepository } from "src/domain/vehicle/protocol/vehicle.repository";

@Injectable()
export class FindOneVehicleUseCase {

    constructor(private readonly spaceRps: VehicleRepository){}

    public async execute(id: number){

        return await this.spaceRps.findOne(id);

    }

}
