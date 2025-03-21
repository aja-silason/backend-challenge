import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'space'})
export class SpaceModel {

    @PrimaryGeneratedColumn({type: 'int'})
    id?: number

    @Column()
    name: string

    @Column()
    telephone: number

    @Column({type: 'int'})
    qtd_car_slot: number
    
    @Column({type: 'int'})
    qtd_motorcycle_slot: number

    @Column({type: 'int'})
    slot_car: number

    @Column({type: 'int'})
    slot_motorcycle: number

    @OneToMany(() => SpaceModel, vehicle => vehicle.vehicles)
    vehicles: SpaceModel[]

    @Column({name: "created_at", type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date

    @Column({name: "updated_at", type: 'datetime', nullable: true, default: null})
    updatedAt: Date

}