export interface EstabelecimentoInterface {
    create(estabelecimento: any): Promise<void>;
    find(): Promise<any>;
    finOne(id: string): Promise<any>;
    update(id: string, estabelecimento: any): Promise<void>;
    delete(id: string): Promise<void>;
}