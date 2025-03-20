import { HttpException, Injectable } from "@nestjs/common";
import { CreateSpaceUsecase } from "src/app/usecase/space/create.usecase";
import { CreateSpaceDTO } from "src/domain/space/model/dto/create-space.DTO";

@Injectable()
export class SpaceService {

    public constructor(
        private readonly createUseCase: CreateSpaceUsecase,
    ){}

    public async create(input: CreateSpaceDTO){
        try {
            await this.createUseCase.execute(input);
        } catch (error) {
            throw new HttpException(error.message, error.statusCode);
        }
    }

}
