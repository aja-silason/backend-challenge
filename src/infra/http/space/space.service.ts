import { HttpException, Injectable } from "@nestjs/common";
import { CreateSpaceUsecase } from "src/app/usecase/space/create.usecase";
import { FindAllSpaceUseCase } from "src/app/usecase/space/findAll.usecase";
import { CreateSpaceDTO } from "src/domain/space/model/dto/create-space.DTO";

@Injectable()
export class SpaceService {

    public constructor(
        private readonly createUseCase: CreateSpaceUsecase,
        private readonly findAllUseCase: FindAllSpaceUseCase,
    ){}

    public async create(input: CreateSpaceDTO){
        try {
            await this.createUseCase.execute(input);
        } catch (error) {
            throw new HttpException(error.message, error.statusCode);
        }
    }

    public findAll() {
        try {
            
            return this.findAllUseCase.execute();

        } catch (error) {
            throw new HttpException(error.message, error.statusCode);
        }
    }

}
