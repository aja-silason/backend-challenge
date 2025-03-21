import { Injectable } from '@nestjs/common';
import { SpaceRepository } from 'src/domain/space/protocol/space-repository';
import { VehicleRepository } from 'src/domain/vehicle/protocol/vehicle.repository';

@Injectable()
export class DeleteVehicleUsecase {
  
  public constructor(private readonly vehicleRps: VehicleRepository){}

  public async execute(id: number){

    await this.vehicleRps.delete(+id);

  }

}
