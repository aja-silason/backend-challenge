import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty, isNotEmpty, IsNumber, IsString } from "class-validator";

export class CriarRelatorioDTO {
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    veiculo: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    hora_entrada: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    hora_saida: string
    
}