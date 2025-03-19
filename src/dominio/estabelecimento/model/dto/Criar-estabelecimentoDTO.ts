import { isNotEmpty, IsNumber, IsString } from "class-validator";

export class CriarEstabelecimentoDTO {
    
    
    @IsString()
    nome: string;

    @IsNumber()
    telefone: number

    @IsNumber()
    qtd_vagas_motos: number;

    @IsNumber()
    qtd_vagas_carros: number

}