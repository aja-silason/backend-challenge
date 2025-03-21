import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateReportDTO {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    vehicle: string
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    in_time: Date
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    out_time: Date

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    vehicle_id: number

}