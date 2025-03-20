import { EstabelecimentoORM } from "src/dominio/estabelecimento/model/estabelecimento.model";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity({name: 'veiculo'})
export class VeiculoORM {

    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column()
    marca: string;

    @Column()
    modelo: string;

    @Column({type: 'int'})
    placa: number;
    
    @Column()
    tipo: 'carro' | 'moto'

    @ManyToOne(() => EstabelecimentoORM, (estabelecimento) => estabelecimento.id)
    estabelecimentoId: EstabelecimentoORM

    @Column({name: "created_at", type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date

    @Column({name: "updated_at", type: 'datetime', nullable: true, default: null})
    updatedAt: Date

}