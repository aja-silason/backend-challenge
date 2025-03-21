import { BadRequestException } from "@nestjs/common";

export type ReportProps = {
    id?: string,
    vehicle: string,
    vehicle_id: number,
    in_time?: Date,
    out_time?: Date
}


export class ReportEntity {

    constructor(private props: ReportProps){}

    public static create(props: ReportProps, id?: number){

        this.validate(props)

        return new ReportEntity({
            vehicle: props.vehicle,
            vehicle_id: props.vehicle_id,
            out_time: props.out_time,
            in_time: new Date()
        })

    }

    private static validate(props: ReportProps){

        const isValidate: Array<keyof ReportProps> = ["vehicle", "vehicle_id"];
        for(const key of isValidate){
            const value = props[key];
            if(value == undefined || value == null){
                throw new BadRequestException(`${key} should be provided`)
            }
        }

    }

    public get id(){
        return this.props.id;
    }

    public get in_time(){
        return this.props.in_time;
    }

    public get out_time(){
        return this.props.out_time;
    }

    public get vehicle(){
        return this.props.vehicle;
    }

    public get vehicle_id(){
        return this.props.vehicle_id;
    }

}