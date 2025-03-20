import { BadRequestException } from "@nestjs/common";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export type SpaceProps = {
    id?: number,
    name: string,
    telephone: number,
    qtd_car_slot: number,
    qtd_motorcycle_slot: number,
    slot_motorcycle?: number,
    slot_car?: number,
}

export class SpaceEntity {

    public constructor(private props: SpaceProps){}

    public static create(props: SpaceProps, id?: string){   

        this.validate(props);

        return new SpaceEntity({
            ...props,
            slot_car: props.qtd_car_slot,
            slot_motorcycle: props.qtd_motorcycle_slot,
    
        });
    }

    private static validate(props: SpaceProps){
    
          const isValidate: Array<keyof SpaceProps> = ["name", "telephone", "qtd_car_slot", "qtd_motorcycle_slot"];
    
          for(const key of isValidate){
              const value = props[key];
              if(value == null || value == undefined || value == 0  || Number(value) < 0 || props.name?.trim() == "" ) {
                  throw new BadRequestException(`${key} should be add or diferent than 0`);
              }
          } 
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