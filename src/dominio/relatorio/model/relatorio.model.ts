import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity({name: 'estabelecimento'})
export class RelatorioORM {

    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column()
    veiculo: string
    
    @Column({type: 'timestamp', default: null})
    hora_entrada: string

    @Column({type: 'timestamp', nullable: true, default: null})
    hora_saida: string

    @Column({name: "created_at", type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date

}