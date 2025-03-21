import { HttpException, Injectable } from "@nestjs/common";
import { CreateVehicleEntraceUseCase } from "src/app/usecase/report/create-entrance.usecase";
import { CreateVehicleOutUseCase } from "src/app/usecase/report/create-out.usecase";
import { GenereteReporByHourtUseCase } from "src/app/usecase/report/generate-entrance-by-hour-report.usecase";
import { GenereteEntranceAndOutReportUseCase } from "src/app/usecase/report/generate-entrance-report.usecase";

@Injectable()
export class ReportService {

    public constructor (
        private readonly createEntranceVehicleUsecase: CreateVehicleEntraceUseCase,
        private readonly createOutVehicleUsecase: CreateVehicleOutUseCase,
        private readonly genereteEntranceAndOutReportUseCase: GenereteEntranceAndOutReportUseCase,
        private readonly genereteReporByHourtUseCase: GenereteReporByHourtUseCase
    ){}

    public async findAll(){
        try {
            await this.genereteEntranceAndOutReportUseCase.execute();

        } catch (error) {
            throw new HttpException(error.message, error.statusCode)
        }
    }

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

    public async show_in_and_out_per_time(hour: number){
        try {
            
            return await this.genereteReporByHourtUseCase.execute(hour)

        } catch (error) {
            throw new HttpException(error.message, error.statusCode);
        }
    }



}
