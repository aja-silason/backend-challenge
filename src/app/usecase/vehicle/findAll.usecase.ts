import { Injectable } from '@nestjs/common';
import { SpaceRepository } from 'src/domain/space/protocol/space-repository';
import { SpaceEntity } from 'src/domain/space/space/space';
import { VehicleRepository } from 'src/domain/vehicle/protocol/vehicle.repository';
import { VehicleEntity } from 'src/domain/vehicle/vehicle/vehicle';

@Injectable()
export class FindAllVehicleUseCase {
  
  public constructor(private readonly vehicleRps: VehicleRepository){}

  public async execute(): Promise<VehicleEntity[]> {
    return await this.vehicleRps.findAll();
  }


}
