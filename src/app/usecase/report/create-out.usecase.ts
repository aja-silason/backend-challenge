import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateReportDTO } from "src/domain/report/model/dto/create-report.DTO";
import { ReportRepository } from "src/domain/report/protocol/report.repository";
import { ReportEntity, ReportProps } from "src/domain/report/report/report";
import { SpaceRepository } from "src/domain/space/protocol/space-repository";
import { VehicleRepository } from "src/domain/vehicle/protocol/vehicle.repository";

@Injectable()
export class CreateVehicleOutUseCase {

    constructor(
        
        private readonly repository: ReportRepository,
        private readonly VehicleRepository: VehicleRepository,
        private readonly spaceRepository: SpaceRepository,
    ){}

    public async execute(vehicleId: number, spaceId: number, value: number ){
        
        if(+value !== 2){
            throw new BadRequestException(`You should be provide 2 to make get out, not ${value}`);
        }

        const hasvehicle = await this.VehicleRepository.findOne(+vehicleId)

        const dataVehicle = {
            brand: hasvehicle?.brand,
            type: hasvehicle?.type,
            spaceId: hasvehicle?.spaceId?.id
        }

        
        await this.spaceRepository.findOne(dataVehicle.spaceId)
        
        const hasVehicleEntrance = await this.repository?.findAll();
        const filterReport = hasVehicleEntrance?.filter((item) => item?.vehicle_id == vehicleId && item?.out_time !== null)[0];

        if(filterReport){
            throw new BadRequestException(`vehicle with id ${vehicleId} is not on the park`);
        }

        await this.spaceRepository.register_output_activity_in_slot(dataVehicle.type, +spaceId);

        await this.repository.create_out(+vehicleId);


    }

}