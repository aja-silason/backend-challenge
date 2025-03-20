import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity({name: 'estabelecimento'})
export class EstabelecimentoORM {

    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column()
    veiculo: string
    
    @Column({type: 'int'})
    hora_entrada: number

    @Column({type: 'int'})
    hora_saida: number

    @Column({name: "created_at", type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date

}