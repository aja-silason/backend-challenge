import { Controller, Param, Patch, Post } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { ReportService } from "./report.service";


@Controller('park')
@ApiTags('Park')
export class ReportController {

    constructor (
        private readonly reportService: ReportService
    ){}

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

    

}