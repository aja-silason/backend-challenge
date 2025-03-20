import { Estabelecimento } from "../entidade/estabelecimento.entidade";

export interface EstabelecimentoGateway {
    create(estabelecimento: Estabelecimento): Promise<void>;
    find(): Promise<Estabelecimento[]>;
    finOne(id: string): Promise<Estabelecimento>;
    update(id: string, estabelecimento: Estabelecimento): Promise<void>;
    delete(id: string): Promise<void>;
}