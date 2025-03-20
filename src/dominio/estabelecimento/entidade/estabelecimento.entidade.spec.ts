import { BadRequestException } from "@nestjs/common";
import { Estabelecimento, EstabelecimentoProps } from "./entidade/estabelecimento.entidade";

describe('Teste unitario, estabelecimento', () => {

    //usei o id estatico para poder testar uma vez que o id é atribuido automaticamente
    const id = "meuid"

    it("Deveria criar o estabelecimento", () => {
        let estabelecimentoProps: EstabelecimentoProps = {
            id: id,
            nome: "Statement MC",
            qtd_vagas_carros: 50,
            qtd_vagas_motos: 40,
            telefone: 98765432
        };

        const estabelecimento = Estabelecimento.create(estabelecimentoProps);

        expect(estabelecimento.with).toEqual({
            ...estabelecimentoProps
        })
    })

    it("Deveria retornar uma excepção quando receber undefined", () => {
        let estabelecimentoProps: EstabelecimentoProps = {
            id: id,
            nome: "Statement MC",
            qtd_vagas_carros: 50,
            qtd_vagas_motos: 40,
            telefone: 0
        }

        expect(() => Estabelecimento.create(estabelecimentoProps)).toThrowError(new BadRequestException('Telefone precisa ser adicionado'));

    })

    it("Deveria retornar uma excepção quando receber vazio", () => {
        let estabelecimentoProps: EstabelecimentoProps = {
            id: id,
            nome: "",
            qtd_vagas_carros: 50,
            qtd_vagas_motos: 40,
            telefone: 987654
        }

        expect(() => Estabelecimento.create(estabelecimentoProps)).toThrow(new BadRequestException('nome precisa ser adicionado'));

    })

});