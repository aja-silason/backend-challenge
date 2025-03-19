import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Estabelecimento {

    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column({type: 'varchar'})
    nome: string;

    @Column({type: 'varchar'})
    telefone: string;

    @Column({type: 'int'})
    qtd_vagas_motos: number;
    
    @Column({type: 'int'})
    qtd_vagas_carros: number

}