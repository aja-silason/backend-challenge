import { BadRequestException } from "@nestjs/common";
import { EstabelecimentoORM } from "src/dominio/estabelecimento/model/estabelecimento.model";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export type VeiculoProps = {
    id?: number,
    marca: string,
    modelo: string,
    cor: string,
    placa: number
    tipo: string,
    estabelecimentoId: EstabelecimentoORM
}

export class Veiculo {

    public constructor(private props: VeiculoProps){}

    public static create(props: VeiculoProps, id?: number){

        const incommingDatas: VeiculoProps = {
            marca: props.marca,
            modelo: props.modelo,
            cor: props.cor,
            placa: props.placa,
            tipo: props.tipo,
            estabelecimentoId: props?.estabelecimentoId
          }
    
          const isValidate: Array<keyof VeiculoProps> = ["marca", "modelo", "cor", "placa", "tipo"];
    
          for(const key of isValidate){
              const value = incommingDatas[key];
              if(value == null || value == undefined) {
                  throw new BadRequestException(`${key} precisa ser adicionado`);
              }
          }    


        return new Veiculo({
            marca: props.marca,
            modelo: props.modelo,
            cor: props.cor,
            placa: props.placa,
            tipo: props.tipo,
            estabelecimentoId: props.estabelecimentoId
        });
    }

    public get id(){
        return this.props.id;
    }

    public get marca(){
        return this.props.marca;
    }
    public get modelo(){
        return this.props.modelo;
    }
    public get cor(){
        return this.props.cor;
    }
    public get placa(){
        return this.props.placa;
    }

    public get tipo(){
        return this.props.tipo;
    }

    public get estabelecimentoId(){
        return this.props.estabelecimentoId;
    }
    

    public get with(){
        return this.props;
    }

}