import { BadRequestException, Injectable } from "@nestjs/common";
import { ReportRepository } from "src/domain/report/protocol/report.repository";
import { ReportEntity } from "src/domain/report/report/report";
import { SpaceRepository } from "src/domain/space/protocol/space-repository";
import { VehicleRepository } from "src/domain/vehicle/protocol/vehicle.repository";

@Injectable()
export class GenereteReporByHourtUseCase {

    constructor(
        private readonly repository: ReportRepository,
    ){}

    public async execute(hour: number){

        await this.repository.show_in_and_out_per_time(hour)
    }

    
}