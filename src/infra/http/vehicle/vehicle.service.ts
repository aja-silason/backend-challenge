import { HttpException, Injectable } from "@nestjs/common";
import { CreateVehicleUsecase } from "src/app/usecase/vehicle/create.usecase";
import { DeleteVehicleUsecase } from "src/app/usecase/vehicle/delete.usecase";
import { FindAllVehicleUseCase } from "src/app/usecase/vehicle/findAll.usecase";
import { FindOneVehicleUseCase } from "src/app/usecase/vehicle/findOne.usecase";
import { UpdateVehicleUseCase } from "src/app/usecase/vehicle/update.usecase";
import { CreateVehicleDTO } from "src/domain/vehicle/model/dto/create-vehicle.DTO";
import { UpdateVehicleDTO } from "src/domain/vehicle/model/dto/update-vehicle.DTO copy";

@Injectable()
export class VehicleService {

    public constructor(
        private readonly createUseCase: CreateVehicleUsecase,
        private readonly findAllUseCase: FindAllVehicleUseCase,
        private readonly findOneUseCase: FindOneVehicleUseCase,
        private readonly deleteUseCase: DeleteVehicleUsecase,
        private readonly updateUseCase: UpdateVehicleUseCase,
    ){}

    public async create(input: CreateVehicleDTO){
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


    public async update(id: number, newVehicle: UpdateVehicleDTO){

        try {
            
            await this.updateUseCase.execute(+id, newVehicle);

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


}
