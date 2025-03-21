import { Controller, Param, Patch, Post } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { ReportService } from "./report.service";


@Controller('park/entrance')
@ApiTags('Park')
export class ReportController {

    constructor (
        private readonly reportService: ReportService
    ){}

    @Patch(':vehicleId/:value')
    @ApiParam({name: 'vehicleId', type: 'number'})
    @ApiParam({name: 'value', type: 'number'})
    async create(@Param('vehicleId') vehicleId: number, @Param('value') value: number){

        await this.reportService.create_entrance(+vehicleId, +value)

    }

}