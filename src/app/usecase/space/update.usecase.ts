import { SpaceEntity, SpaceProps } from 'src/domain/space/space/space';
import { TypeORMSpaceRepository } from 'src/infra/repository/space/space.repository';

export class UpdateSpace{

  public constructor(private readonly estabelecimentoRps: TypeORMSpaceRepository){}

  public async execute(input: SpaceProps) {

    const incommingDatas: SpaceProps = {
      id: input?.id,
      name: input?.name,
      qtd_car_slot: input?.qtd_car_slot,
      qtd_motorcycle_slot: input?.qtd_motorcycle_slot,
      telephone: input?.telephone
    }

      const estabelecimento = SpaceEntity?.create(incommingDatas);

  }


}
