import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

type EstabelecimentoProps = {
    id?: string,
    nome: string,
    telefone: number,
    qtd_vagas_carros: number,
    qtd_vagas_motos: number
}

export class Estabelecimento {

    public constructor(private readonly props: EstabelecimentoProps){}

    public static create(props: EstabelecimentoProps){
        return new Estabelecimento({
            id: crypto.randomUUID(),
            nome: props.nome,
            telefone: props.telefone,
            qtd_vagas_carros: props.qtd_vagas_carros,
            qtd_vagas_motos: props.qtd_vagas_motos
        });
    }

}