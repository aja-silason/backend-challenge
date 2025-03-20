import { Injectable } from '@nestjs/common';
import { SpaceRepository } from 'src/domain/space/protocol/space-repository';
import { SpaceProps } from 'src/domain/space/space/space';

@Injectable()
export class UpdateSpaceUseCase{

  public constructor(private readonly spaceRps: SpaceRepository){}

  public async execute(id: number, {name, qtd_car_slot, qtd_motorcycle_slot, telephone}: SpaceProps) {
    
    await this.spaceRps.update(id, {name, qtd_car_slot,qtd_motorcycle_slot,telephone})

  }


}
