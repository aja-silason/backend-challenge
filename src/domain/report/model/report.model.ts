import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'report'})
export class ReportModel {

    @PrimaryGeneratedColumn({type: 'int'})
    id?: string

    @Column()
    vehicle: string
    
    @Column({type: 'timestamp', nullable: true, default: null})
    in_time: Date

    @Column({type: 'timestamp', nullable: true, default: null})
    out_time: Date
    
    @Column()
    vehicle_id: number

    @Column({name: 'created_at', type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date

}