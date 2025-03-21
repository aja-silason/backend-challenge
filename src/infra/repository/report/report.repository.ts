import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateReportDTO } from "src/domain/report/model/dto/create-report.DTO";
import { ReportModel } from "src/domain/report/model/report.model";
import { ReportRepository } from "src/domain/report/protocol/report.repository";
import { ReportEntity } from "src/domain/report/report/report";
import { Repository } from "typeorm";

@Injectable()
export class TypeORMReportRepository implements ReportRepository {

    constructor(
        @InjectRepository(ReportModel)
        private readonly reportRps: Repository<ReportModel>,
    ) {}

    async create_entrance(payload: CreateReportDTO): Promise<void> {
        const entrance = this.reportRps.create(payload);
        await this.reportRps.save(entrance)
    }


    async create_out(vehicleId: number): Promise<void> {

        const vehicle = await this.reportRps.findOne({where: {vehicle_id: vehicleId}});
        
        const rewriteVehicleObject = {
            ...vehicle,
            out_time: new Date()
            
        }

        await this.reportRps.save(this.reportRps.create(rewriteVehicleObject));

    }

    async show_in_and_out_per_time(hour: number) : Promise<any>{

        
        const entrance_per_hour = await this.reportRps.createQueryBuilder('report')
        .where('extract(hour from report.in_time) = :hour', {hour})
        .getCount();

        const out_per_hour = await this.reportRps.createQueryBuilder('report')
        .where('extract(hour from report.out_time) = :hour', {hour})
        .getCount()
        
        console.log(out_per_hour)
        
        return {
            entrance_per_hour,
            out_per_hour
        }


    }

    async show_in_and_out(): Promise<any> {

        const entrance = await this.reportRps.createQueryBuilder('report')
        .where('report.in_time is not null')
        .getCount();

        const leaves = await this.reportRps.createQueryBuilder('report')
        .where('report.out_time is not null')
        .getCount()

        return {
            entrance,
            leaves
    }}


    async findAll(): Promise<any[]>{
        const all = await this.reportRps.find()
        return all
    }

}