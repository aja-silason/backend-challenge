import { BadRequestException, Injectable } from "@nestjs/common";
import { ReportRepository } from "src/domain/report/protocol/report.repository";
import { ReportEntity } from "src/domain/report/report/report";
import { SpaceRepository } from "src/domain/space/protocol/space-repository";
import { VehicleRepository } from "src/domain/vehicle/protocol/vehicle.repository";

@Injectable()
export class GenereteEntranceAndOutReportUseCase {

    constructor(
        private readonly repository: ReportRepository,
    ){}

    public async execute(): Promise<any[]>{
        return await this.repository.findAll()
    }

    
}