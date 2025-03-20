import { BadRequestException } from "@nestjs/common";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export type SpaceProps = {
    id?: string,
    name: string,
    telephone: number,
    qtd_car_slot: number,
    qtd_motorcycle_slot: number,
    slot_motorcycle?: number,
    slot_car?: number,
}

export class Space {

    public constructor(private props: SpaceProps){}

    public static create(props: SpaceProps, id?: string){

        const incommingDatas: SpaceProps = {
            name: props.name,
            qtd_car_slot: props.qtd_car_slot,
            qtd_motorcycle_slot: props.qtd_motorcycle_slot,
            slot_car: props.slot_car,
            slot_motorcycle: props.slot_motorcycle,
            telephone: props.telephone
          }
    
          const isValidate: Array<keyof SpaceProps> = ["name", "telephone", "qtd_car_slot", "qtd_motorcycle_slot"];
    
          for(const key of isValidate){
              const value = incommingDatas[key];
              if(value == null || value == undefined || value == 0  || Number(value) < 0 || incommingDatas?.name?.trim() == "" ) {
                  throw new BadRequestException(`${key} should be add`);
              }
          }    


        return new Space({
            name: props.name,
            qtd_car_slot: props.qtd_car_slot,
            qtd_motorcycle_slot: props.qtd_motorcycle_slot,
            slot_car: props.slot_car,
            slot_motorcycle: props.slot_motorcycle,
            telephone: props.telephone
        });
    }

    public get id(){
        return this.props.id;
    }

    public get name(){
        return this.props.name;
    }
    public get telephone(){
        return this.props.telephone;
    }
    public get qtd_car_slot(){
        return this.props.qtd_car_slot;
    }
    public get qtd_motorcycle_slot(){
        return this.props.qtd_motorcycle_slot;
    }

    public get slot_car(){
        return this.props.slot_car;
    }
    public get slot_motorcycle(){
        return this.props.slot_motorcycle;
    }

    public get with(){
        return this.props;
    }

}