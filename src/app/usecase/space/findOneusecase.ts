import { Injectable } from "@nestjs/common";
import { SpaceRepository } from "src/domain/space/protocol/space-repository";

@Injectable()
export class FindOneSpaceUseCase {

    constructor(private readonly spaceRps: SpaceRepository){}

    public async execute(id: number){

        return await this.spaceRps.findOne(id);

    }

}
