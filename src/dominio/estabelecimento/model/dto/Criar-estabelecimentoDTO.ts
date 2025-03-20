import { ApiProperty } from "@nestjs/swagger";
import { isNotEmpty, IsNumber, IsString } from "class-validator";

export class CriarEstabelecimentoDTO {
    
    
    @IsString()
    @ApiProperty()
    nome: string;

    @IsNumber()
    @ApiProperty()
    telefone: number

    @IsNumber()
    @ApiProperty()
    qtd_vagas_motos: number;

    @IsNumber()
    @ApiProperty()
    qtd_vagas_carros: number

}