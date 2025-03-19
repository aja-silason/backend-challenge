import { BadRequestException } from "@nestjs/common";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export type EstabelecimentoProps = {
    id?: string,
    nome: string,
    telefone: number,
    qtd_vagas_carros: number,
    qtd_vagas_motos: number
}

export class Estabelecimento {

    public constructor(private props: EstabelecimentoProps){}

    public static create(props: EstabelecimentoProps, id?: string){


        return new Estabelecimento({
            nome: props.nome,
            telefone: props.telefone,
            qtd_vagas_carros: props.qtd_vagas_carros,
            qtd_vagas_motos: props.qtd_vagas_motos
        });
    }

    public get id(){
        return this.props.id;
    }

    public get nome(){
        return this.props.nome;
    }
    public get telefone(){
        return this.props.telefone;
    }
    public get qtd_vagas_carros(){
        return this.props.qtd_vagas_carros;
    }
    public get qtd_vagas_motos(){
        return this.props.qtd_vagas_motos;
    }

    public get with(){
        return this.props;
    }

}