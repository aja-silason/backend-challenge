import { SpaceRepository } from 'src/domain/space/protocol/space-repository';
import { TypeORMSpaceRepository } from 'src/infra/repository/space/space.repository';

export class DeleteSpaceUsecase {
  
  public constructor(private readonly spaceRps: SpaceRepository){}

  public async execute(id: number){

    await this.spaceRps.delete(+id);

  }

}
