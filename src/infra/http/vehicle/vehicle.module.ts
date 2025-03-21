import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SpaceModel } from "src/domain/space/model/space.model";
import { VehicleRepository } from "src/domain/vehicle/protocol/vehicle.repository";
import { VehicleService } from "./vehicle.service";
import { CreateVehicleUsecase } from "src/app/usecase/vehicle/create.usecase";
import { TypeORMVehicleRepository } from "src/infra/repository/vehicle/vehicle.repository";
import { VehicleController } from "./vehicle.controller";
import { VehicleModel } from "src/domain/vehicle/model/vehicle.model";
import { DeleteVehicleUsecase } from "src/app/usecase/vehicle/delete.usecase";
import { FindAllVehicleUseCase } from "src/app/usecase/vehicle/findAll.usecase";
import { FindOneVehicleUseCase } from "src/app/usecase/vehicle/findOne.usecase";
import { UpdateVehicleUseCase } from "src/app/usecase/vehicle/update.usecase";

@Module({
    imports: [
        TypeOrmModule.forFeature([VehicleModel])
    ],
    controllers: [VehicleController],
    
    providers: [
        VehicleService,
        CreateVehicleUsecase,
        DeleteVehicleUsecase,
        FindAllVehicleUseCase,
        FindOneVehicleUseCase,
        UpdateVehicleUseCase,
        {
            provide: VehicleRepository,
            useClass: TypeORMVehicleRepository 
        }
    ]

})
export class VehicleModule {}