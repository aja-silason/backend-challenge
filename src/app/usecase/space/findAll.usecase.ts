import { Injectable } from '@nestjs/common';
import { SpaceRepository } from 'src/domain/space/protocol/space-repository';
import { SpaceEntity } from 'src/domain/space/space/space';

@Injectable()
export class FindAllSpaceUseCase {
  
  public constructor(private readonly spaceRps: SpaceRepository){}

  public async execute(): Promise<SpaceEntity[]> {
    return await this.spaceRps.findAll();
  }


}
