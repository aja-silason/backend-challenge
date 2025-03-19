import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity({name: 'estabelecimento'})
export class EstabelecimentoORM {

    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column()
    nome: string;

    @Column()
    telefone: number;

    @Column({type: 'int'})
    qtd_vagas_motos: number;
    
    @Column({type: 'int'})
    qtd_vagas_carros: number

    @Column({name: "created_at", type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date

    @Column({name: "updated_at", type: 'datetime', nullable: true, default: null})
    updatedAt: Date

    @Column({name: "delete", type: 'datetime', nullable: true, default: null})
    deletedAt: Date

}