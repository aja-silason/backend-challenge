import { IsIn, IsNotEmpty, isNotEmpty, IsNumber, IsString } from "class-validator";

export class CriarVeiculoDTO {
    
    @IsString()
    @IsNotEmpty()
    marca

    @IsString()
    @IsNotEmpty()
    modelo

    @IsString()
    @IsNotEmpty()
    cor

    @IsNumber()
    @IsNotEmpty()
    placa

    @IsString()
    @IsNotEmpty()
    @IsIn(['Moto', 'Carro'])
    tipo
    
}