import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSpaceDTO {
    
    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    
    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    telephone: number
    
    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    qtd_motorcycle_slot: number;

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    qtd_car_slot: number

}