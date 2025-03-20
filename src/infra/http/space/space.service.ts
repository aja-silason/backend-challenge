import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateSpaceUsecase } from "src/app/usecase/space/create.usecase";
import { DeleteSpaceUsecase } from "src/app/usecase/space/delete.usecase";
import { FindAllSpaceUseCase } from "src/app/usecase/space/findAll.usecase";
import { FindOneSpaceUseCase } from "src/app/usecase/space/findOne.usecase";
import { UpdateSpaceUseCase } from "src/app/usecase/space/update.usecase";
import { CreateSpaceDTO } from "src/domain/space/model/dto/create-space.DTO";
import { UpdateSpaceDTO } from "src/domain/space/model/dto/update-space.DTO";

@Injectable()
export class SpaceService {

    public constructor(
        private readonly createUseCase: CreateSpaceUsecase,
        private readonly findAllUseCase: FindAllSpaceUseCase,
        private readonly findOneUseCase: FindOneSpaceUseCase,
        private readonly deleteUseCase: DeleteSpaceUsecase,
        private readonly updateUseCase: UpdateSpaceUseCase,
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

            //const  a = await this.finOne(+id);

            await this.deleteUseCase.execute(+id);
            
        } catch (error) {
            throw new HttpException(error.message, error.statusCode);
        }

    }

    public async update(id: number, newSpace: UpdateSpaceDTO){

        try {
            
            await this.updateUseCase.execute(+id, newSpace);

        } catch (error) {
            throw new HttpException(error.message, error.statusCode);
        }

    }


}
