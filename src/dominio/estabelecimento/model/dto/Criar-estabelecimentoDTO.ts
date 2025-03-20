import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CriarEstabelecimentoDTO {
    
    
    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    nome: string;

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    telefone: number

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    qtd_vagas_motos: number;

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    qtd_vagas_carros: number

}