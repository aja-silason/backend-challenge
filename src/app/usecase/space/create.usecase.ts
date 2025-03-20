import { Injectable } from '@nestjs/common';
import { SpaceRepository } from 'src/domain/space/protocol/space-repository';
import { SpaceEntity, SpaceProps } from 'src/domain/space/space/space';

@Injectable()
export class CreateSpaceUsecase{

  public constructor(private readonly repository: SpaceRepository){}

  public async execute({name, qtd_car_slot, qtd_motorcycle_slot, telephone}: SpaceProps) {

    const incommingDatas: SpaceProps = {
      name: name,
      qtd_car_slot: qtd_car_slot,
      qtd_motorcycle_slot: qtd_motorcycle_slot,
      telephone: telephone
    }

      const space = SpaceEntity?.create(incommingDatas);
      
      const aStabelecimento = await this.repository?.create(space);  

      return aStabelecimento;

    }


}
