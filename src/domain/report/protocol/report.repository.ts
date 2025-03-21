import { CreateReportDTO } from "../model/dto/create-report.DTO";
import { ReportEntity } from "../report/report";

export abstract class ReportRepository {
    abstract findAll(): Promise<ReportEntity[]>;
    abstract create_entrance(payload: CreateReportDTO): Promise<void>;
    abstract create_out(id: number): Promise<void>;
    abstract show_in_and_out(): Promise<any>;
    abstract show_in_and_out_per_time(hour: number): Promise< any>;
}