import { isNotEmpty, IsNumber, IsString } from "class-validator";

export class CriarVeiculoDTO {
    
    @IsString()
    marca

    @IsString()
    modelo

    @IsNumber()
    placa

    @IsString()
    tipo
    
}