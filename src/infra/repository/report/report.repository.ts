import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateReportDTO } from "src/domain/report/model/dto/create-report.DTO";
import { ReportModel } from "src/domain/report/model/report.model";
import { ReportRepository } from "src/domain/report/protocol/report.repository";
import { ReportEntity } from "src/domain/report/report/report";
import { VehicleModel } from "src/domain/vehicle/model/vehicle.model";
import { VehicleEntity } from "src/domain/vehicle/vehicle/vehicle";
import { Repository } from "typeorm";

@Injectable()
export class TypeORMReportRepository implements ReportRepository {

    constructor(
        @InjectRepository(ReportModel)
        private readonly reportRps: Repository<ReportModel>,
    ) {}

    async create_entrance(payload: CreateReportDTO): Promise<void> {
        await this.reportRps.save(this.reportRps.create(payload))
    }

    async show_in_and_out(): Promise<any[]> {
        return await this.reportRps.find();
    }

    async findAll(): Promise<any[]>{
        return await this.reportRps.find()
    }

}