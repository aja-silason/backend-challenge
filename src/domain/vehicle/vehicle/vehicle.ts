import { BadRequestException } from "@nestjs/common";
import { SpaceModel } from "src/domain/space/model/space.model"

export type VehicleProps = {
    id?: number,
    brand: string,
    model: string,
    color: string,
    plate: number,
    type: string,
    spaceId: SpaceModel,
    spaceIdId?: number
}

export class VehicleEntity {

    constructor(private readonly props: VehicleProps){}

    public static create(props: VehicleProps, id?: string){

        this.validate(props);

        return new VehicleEntity({
            ...props
        }) 

    }

    private static validate(props: VehicleProps){

        const isValidate: Array<keyof VehicleProps> = ["brand", "color", "model", "plate", "type", "spaceId"];

        for(const key of isValidate){
            const value = props[key];
            if(value == null  || value == undefined){
                throw new BadRequestException(`${key} should not be null`);
            }
        }

    }

    public get id(){
        return this.props.id;
    }

    public get brand(){
        return this.props.brand;
    }

    public get color(){
        return this.props.color;
    }

    public get model(){
        return this.props.model;
    }

    public get plate(){
        return this.props.plate;
    }

    public get spaceId(){
        return this.props.spaceId;
    }

    public get spaceIdId(){
        return this.props.spaceIdId;
    }

    public get type(){
        return this.props.type;
    }



}