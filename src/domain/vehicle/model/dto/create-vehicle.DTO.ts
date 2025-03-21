import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { SpaceModel } from "src/domain/space/model/space.model";

export class CreateVehicleDTO {
    
    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    brand: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    model: string

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    color: string

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    plate: number

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    @IsIn(['moto', 'carro'])
    type: string

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    spaceId: SpaceModel;
}