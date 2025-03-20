import { BadRequestException } from "@nestjs/common";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export type EntradaSaidaProps = {
    id?: string,
    veiculo: string,
    hora_entrada?: Date,
    hora_saida?: Date,
    id_veiculo: number
}

export class RelatorioEntradaSaida {

    public constructor(private props: EntradaSaidaProps){}

    public static create(props: EntradaSaidaProps, id?: string){

        const incommingDatas: EntradaSaidaProps = {
            veiculo: props?.veiculo,
            id_veiculo: props?.id_veiculo
          }
    
          const isValidate: Array<keyof EntradaSaidaProps> = ["veiculo"];
    
          for(const key of isValidate){
              const value = incommingDatas[key];
              if(value == null || value == undefined) {
                  throw new BadRequestException(`${key} precisa ser adicionado`);
              }
          }    


        return new RelatorioEntradaSaida({
            veiculo: props?.veiculo,
            id_veiculo: props?.id_veiculo,
            hora_entrada: new Date(),
            hora_saida: props?.hora_saida
        });
    }

    public get id(){
        return this.props.id;
    }

    public get veiculo(){
        return this.props.veiculo;
    }
    public get hora_saida(){
        return this.props.hora_saida;
    }
    public get hora_entrada(){
        return this.props.hora_entrada;
    }

    public get id_veiculo(){
        return this.props.id_veiculo;
    }

    public get with(){
        return this.props;
    }

}