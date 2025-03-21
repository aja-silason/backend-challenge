import { HttpException, Injectable } from "@nestjs/common";
import { CreateVehicleUsecase } from "src/app/usecase/vehicle/create.usecase";
import { CreateVehicleDTO } from "src/domain/vehicle/model/dto/create-vehicle.DTO";

@Injectable()
export class VehicleService {

    public constructor(
        private readonly createUseCase: CreateVehicleUsecase,
        
        /*
        private readonly findAllUseCase: FindAllSpaceUseCase,
        private readonly findOneUseCase: FindOneSpaceUseCase,
        private readonly deleteUseCase: DeleteSpaceUsecase,
        private readonly updateUseCase: UpdateSpaceUseCase,
        */
    ){}

    public async create(input: CreateVehicleDTO){
        try {
            await this.createUseCase.execute(input);
        } catch (error) {
            throw new HttpException(error.message, error.statusCode);
        }
    }

    /*

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
            
            await this.updateUseCase.execute(+id, newSpace);

        } catch (error) {
            throw new HttpException(error.message, error.statusCode);
        }

    }

    */


}
