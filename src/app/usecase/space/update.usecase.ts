import { Space, SpaceProps } from 'src/domain/space/space/space.entidady';
import { EstabelecimentoRepositorio } from 'src/infra/repositorio/estabelecimento/space.repository';

export class UpdateSpace{

  public constructor(private readonly estabelecimentoRps: EstabelecimentoRepositorio){}

  public async execute(input: SpaceProps) {

    const incommingDatas: SpaceProps = {
      id: input?.id,
      name: input?.name,
      qtd_car_slot: input?.qtd_car_slot,
      qtd_motorcycle_slot: input?.qtd_motorcycle_slot,
      telephone: input?.telephone
    }

      const estabelecimento = Space?.create(incommingDatas);

  }


}
