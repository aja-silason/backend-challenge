import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateSpaceUsecase } from "src/app/usecase/space/create.usecase";
import { FindAllSpaceUseCase } from "src/app/usecase/space/findAll.usecase";
import { FindOneSpaceUseCase } from "src/app/usecase/space/findOneusecase";
import { CreateSpaceDTO } from "src/domain/space/model/dto/create-space.DTO";

@Injectable()
export class SpaceService {

    public constructor(
        private readonly createUseCase: CreateSpaceUsecase,
        private readonly findAllUseCase: FindAllSpaceUseCase,
        private readonly findOneUseCase: FindOneSpaceUseCase,
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

    public finOne(id: number){
        try {
            
            return this.findOneUseCase.execute(id);

        } catch (error) {
            throw new HttpException(error.message, error.statusCode);
        }
    }

}
