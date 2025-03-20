import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty, isNotEmpty, IsNumber, IsString } from "class-validator";

export class CriarVeiculoDTO {
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    marca: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    modelo: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    cor: string

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    placa: number

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsIn(['Moto', 'Carro'])
    tipo: any
    
}