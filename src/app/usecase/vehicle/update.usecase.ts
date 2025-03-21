import { Injectable } from '@nestjs/common';
import { SpaceRepository } from 'src/domain/space/protocol/space-repository';
import { SpaceProps } from 'src/domain/space/space/space';
import { VehicleRepository } from 'src/domain/vehicle/protocol/vehicle.repository';
import { VehicleProps } from 'src/domain/vehicle/vehicle/vehicle';

@Injectable()
export class UpdateVehicleUseCase{

  public constructor(private readonly spaceRps: VehicleRepository){}

  public async execute(id: number, {brand, color, model, plate, spaceId, type}: VehicleProps) {
    
    await this.spaceRps.update(id, {brand, color, model, plate, spaceId, type})

  }


}
