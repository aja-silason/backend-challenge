import { BadRequestException } from "@nestjs/common";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export type EntradaSaidaProps = {
    id?: string,
    veiculo: string,
    hora_entrada: string,
    hora_saida: string,
}

export class RelatorioEntradaSaida {

    public constructor(private props: EntradaSaidaProps){}

    public static create(props: EntradaSaidaProps, id?: string){

        const incommingDatas: EntradaSaidaProps = {
            veiculo: props.veiculo,
            hora_entrada: props.hora_entrada,
            hora_saida: props.hora_saida
          }
    
          const isValidate: Array<keyof EntradaSaidaProps> = ["veiculo", "hora_entrada", "hora_entrada"];
    
          for(const key of isValidate){
              const value = incommingDatas[key];
              if(value == null || value == undefined) {
                  throw new BadRequestException(`${key} precisa ser adicionado`);
              }
          }    


        return new RelatorioEntradaSaida({
            veiculo: props.veiculo,
            hora_entrada: props.hora_entrada,
            hora_saida: props.hora_saida
        });
    }

    public get id(){
        return this.props.id;
    }

    public get veiculo(){
        return this.props.veiculo;
    }
    public get hora_entrada(){
        return this.props.hora_entrada;
    }
    public get hora_saida(){
        return this.props.hora_saida;
    }

    public get with(){
        return this.props;
    }

}