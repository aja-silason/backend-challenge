import { Injectable } from '@nestjs/common';
import { Space, SpaceProps } from 'src/domain/space/space/space.entidady';
import { SpaceRepository } from 'src/domain/space/protocol/space-repository';

@Injectable()
export class CreateSpaceUsecase{

  public constructor(private readonly repository: SpaceRepository){}

  public async execute(input: SpaceProps) {

    const incommingDatas: SpaceProps = {
      name: input?.name,
      qtd_car_slot: input?.qtd_car_slot,
      qtd_motorcycle_slot: input?.qtd_motorcycle_slot,
      telephone: input?.telephone
    }

      const space = Space?.create(incommingDatas);
      
      const aStabelecimento = await this.repository?.create(space);  

      return aStabelecimento;

    }


}
