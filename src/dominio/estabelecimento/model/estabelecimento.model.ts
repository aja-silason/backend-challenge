import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({name: "created_at"})
    createdAt: string

    @Column({name: "deleted_at"})
    deleteddAt: string

}