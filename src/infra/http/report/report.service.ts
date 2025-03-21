import { HttpException, Injectable } from "@nestjs/common";
import { CreateVehicleEntraceUseCase } from "src/app/usecase/report/create-report.usecase";

@Injectable()
export class ReportService {

    public constructor (
        private readonly createEntranceVehicleUsecase: CreateVehicleEntraceUseCase
    ){}

    public async create_entrance(vehicleId: number, value: number){
        try {
            
            await this.createEntranceVehicleUsecase.execute(vehicleId, value)

        } catch (error) {
            throw new HttpException(error.message, error.statusCode);
        }
    }

}
