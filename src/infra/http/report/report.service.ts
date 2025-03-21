import { HttpException, Injectable } from "@nestjs/common";
import { CreateVehicleEntraceUseCase } from "src/app/usecase/report/create-entrance.usecase";
import { CreateVehicleOutUseCase } from "src/app/usecase/report/create-out.usecase";

@Injectable()
export class ReportService {

    public constructor (
        private readonly createEntranceVehicleUsecase: CreateVehicleEntraceUseCase,
        private readonly createOutVehicleUsecase: CreateVehicleOutUseCase
    ){}

    public async create_entrance(vehicleId: number, value: number){
        try {

            await this.createEntranceVehicleUsecase.execute(vehicleId, value)

        } catch (error) {
            throw new HttpException(error.message, error.statusCode);
        }
    }

    public async create_out(vehicleId: number, spaceId: number, value: number){
        try {
            
            await this.createOutVehicleUsecase.execute(vehicleId, spaceId, value);

        } catch (error) {
            throw new HttpException(error.message, error.statusCode)   
        }

    }

}
