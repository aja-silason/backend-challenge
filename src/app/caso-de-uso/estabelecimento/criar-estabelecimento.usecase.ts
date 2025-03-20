import { Estabelecimento, EstabelecimentoProps } from 'src/dominio/estabelecimento/entidade/estabelecimento.entidade';
import { EstabelecimentoRepositorio } from 'src/infra/repositorio/estabelecimento/estabelecimento.repositorio';

export class CriarEstabelecimento{

  public constructor(private readonly estabelecimentoRps: EstabelecimentoRepositorio){}

  public async execute(input: EstabelecimentoProps) {

    const incommingDatas: EstabelecimentoProps = {
      nome: input?.nome,
      qtd_vagas_carros: input?.qtd_vagas_carros,
      qtd_vagas_motos: input?.qtd_vagas_motos,
      telefone: input?.telefone
    }

      const estabelecimento = Estabelecimento?.create(incommingDatas);
      
      const aStabelecimento = await this.estabelecimentoRps?.create(estabelecimento);  

      return aStabelecimento;
  }


}
