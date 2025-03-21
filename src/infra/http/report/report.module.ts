import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReportModel } from "src/domain/report/model/report.model";
import { ReportController } from "./report.controller";
import { ReportService } from "./report.service";
import { CreateVehicleEntraceUseCase } from "src/app/usecase/report/create-entrance.usecase";
import { ReportRepository } from "src/domain/report/protocol/report.repository";
import { TypeORMReportRepository } from "src/infra/repository/report/report.repository";
import { VehicleRepository } from "src/domain/vehicle/protocol/vehicle.repository";
import { TypeORMVehicleRepository } from "src/infra/repository/vehicle/vehicle.repository";
import { TypeORMSpaceRepository } from "src/infra/repository/space/space.repository";
import { SpaceRepository } from "src/domain/space/protocol/space-repository";
import { VehicleModel } from "src/domain/vehicle/model/vehicle.model";
import { SpaceModel } from "src/domain/space/model/space.model";
import { CreateVehicleOutUseCase } from "src/app/usecase/report/create-out.usecase";

@Module({

    imports: [
        TypeOrmModule.forFeature([ReportModel, VehicleModel, SpaceModel])
    ],
    controllers: [ReportController],
    providers: [
        ReportService,
        CreateVehicleEntraceUseCase,
        CreateVehicleOutUseCase,
        {
            provide: ReportRepository,
            useClass: TypeORMReportRepository
        },
        {
            provide: VehicleRepository,
            useClass: TypeORMVehicleRepository
        },
        {
            provide: SpaceRepository,
            useClass: TypeORMSpaceRepository
        }
    ]

})
export class ReportModule {}