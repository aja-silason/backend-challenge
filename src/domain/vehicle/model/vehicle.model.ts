import { SpaceModel } from "src/domain/space/model/space.model";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'vehicle'})
export class VehicleModel {

    @PrimaryGeneratedColumn({type: 'int'})
    id?: number

    @Column()
    brand: string

    @Column()
    model: string

    @Column()
    color: string

    @Column({type: 'int'})
    plate: number

    @Column()
    type: string

    @ManyToOne(() => SpaceModel, space => space?.vehicles)
    @JoinColumn({name: 'spaceId'})
    spaceId?: SpaceModel

    @Column({name: 'created_at', type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdAt?: Date

    @Column({name: 'updated_at', type: 'datetime', nullable: true, default: null})
    updatedAt?: Date


}