import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateSpaceUsecase } from "src/app/usecase/space/create.usecase";
import { DeleteSpaceUsecase } from "src/app/usecase/space/delete.usecase";
import { FindAllSpaceUseCase } from "src/app/usecase/space/findAll.usecase";
import { FindOneSpaceUseCase } from "src/app/usecase/space/findOneusecase";
import { CreateSpaceDTO } from "src/domain/space/model/dto/create-space.DTO";
import { UpdateSpaceDTO } from "src/domain/space/model/dto/update-space.DTO";

@Injectable()
export class SpaceService {

    public constructor(
        private readonly createUseCase: CreateSpaceUsecase,
        private readonly findAllUseCase: FindAllSpaceUseCase,
        private readonly findOneUseCase: FindOneSpaceUseCase,
        private readonly deleteUseCase: DeleteSpaceUsecase,
    ){}

    public async create(input: CreateSpaceDTO){
        try {
            await this.createUseCase.execute(input);
        } catch (error) {
            throw new HttpException(error.message, error.statusCode);
        }
    }

    public async findAll() {
        try {
            
            return await this.findAllUseCase.execute();

        } catch (error) {
            throw new HttpException(error.message, error.statusCode);
        }
    }

    public async finOne(id: number){
        try {
            
            return await this.findOneUseCase.execute(id);

        } catch (error) {
            throw new HttpException(error.message, error.statusCode);
        }
    }

    public async delete(id: number){

        try {

            await this.deleteUseCase.execute(+id);
            
        } catch (error) {
            throw new HttpException(error.message, error.statusCode);
        }

    }

    public async update(id: number, newSpace: UpdateSpaceDTO){

        try {
            
            

        } catch (error) {
            throw new HttpException(error.message, error.statusCode);
        }

    }


}
