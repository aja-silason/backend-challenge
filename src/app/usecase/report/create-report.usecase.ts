import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateReportDTO } from "src/domain/report/model/dto/create-report.DTO";
import { ReportRepository } from "src/domain/report/protocol/report.repository";
import { ReportEntity, ReportProps } from "src/domain/report/report/report";
import { SpaceRepository } from "src/domain/space/protocol/space-repository";
import { VehicleRepository } from "src/domain/vehicle/protocol/vehicle.repository";

@Injectable()
export class CreateVehicleEntraceUseCase {

    constructor(
        
        private readonly repository: ReportRepository,
        private readonly VehicleRepository: VehicleRepository,
        private readonly spaceRepository: SpaceRepository,
    ){}

    public async execute(vehicleId: number, value: number ){
        
        if(+value !== 1){
            throw new BadRequestException(`You should be provide 1 to make a entrance not ${value}`);
        }

        const hasvehicle = await this.VehicleRepository.findOne(+vehicleId)

        const dataVehicle = {
            brand: hasvehicle?.brand,
            type: hasvehicle?.type,
            spaceId: hasvehicle?.spaceId?.id
        }

        
        const aa = await this.spaceRepository.findOne(dataVehicle.spaceId)
        
        console.log(aa, dataVehicle.spaceId)
        
        const hasVehicleEntrance = await this.repository?.findAll();
        const filterReport = hasVehicleEntrance?.filter((item) => item?.vehicle_id == vehicleId && item?.out_time == null)[0];

        if(filterReport){
            throw new BadRequestException(`vehicle with id ${vehicleId} is already on te park`);
        }


        await this.spaceRepository.register_input_activity_in_slot(dataVehicle.type);

        const newValue: any = {vehicle: dataVehicle?.brand, vehicle_id: vehicleId}
        
        const entrance = ReportEntity.create(newValue);
        
        await this.repository.create_entrance(entrance);

        


    }

}