import { Injectable } from '@nestjs/common';
import { SpaceRepository } from 'src/domain/space/protocol/space-repository';

@Injectable()
export class DeleteSpaceUsecase {
  
  public constructor(private readonly spaceRps: SpaceRepository){}

  public async execute(id: number){

    await this.spaceRps.delete(+id);

  }

}
