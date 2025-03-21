import { Controller, Get, HttpException, Param, Patch, Post } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { ReportService } from "./report.service";


@Controller('park')
@ApiTags('Park')
export class ReportController {

    constructor (
        private readonly reportService: ReportService
    ){}

    @Get('report')
    async find(){
        const allReport = await this.reportService.findAll();

        return this.present(allReport);
    }

    @Get('report/:hour')
    @ApiParam({name: 'hour', type: "number"})
    async findHour(@Param('hour') hour: number ){

        const vehicleThatTravelIntoThePark = await this.reportService.show_in_and_out_per_time(hour);

        console.log("DFGHJ",vehicleThatTravelIntoThePark)

        this.present(vehicleThatTravelIntoThePark)
    }

    @Patch('entrance/:vehicleId/:value')
    @ApiParam({name: 'vehicleId', type: 'number'})
    @ApiParam({name: 'value', type: 'number'})
    async create(@Param('vehicleId') vehicleId: number, @Param('value') value: number){

        await this.reportService.create_entrance(+vehicleId, +value)

    }

    @Patch('out/:vehicleId/:spaceId/:value')
    @ApiParam({name: 'vehicleId', type: 'number'})
    @ApiParam({name: 'value', type: 'number'})
    async out(@Param('vehicleId') vehicleId: number, @Param('spaceId') spaceId: number, @Param('value') value: number){

        await this.reportService.create_out(+vehicleId, +spaceId, +value)

    }

    private present (input: any){
        const time = new Date();

        const hour = `${time.getHours()}:${time.getMinutes()}`
        const date = `${time.getDay()}/${time.getMonth() + 1}/${time.getFullYear()}`

        return {
            time: hour,
            generated_in: date,
            total: input
        }
    }

    

}