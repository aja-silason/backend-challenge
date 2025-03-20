import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty, isNotEmpty, IsNumber, IsString } from "class-validator";

export class CriarVeiculoDTO {
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    marca

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    modelo

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    cor

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    placa

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @IsIn(['Moto', 'Carro'])
    tipo
    
}