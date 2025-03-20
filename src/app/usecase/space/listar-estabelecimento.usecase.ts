import { UseCase } from '../usecase';
import { EstabelecimentoRepositorio } from 'src/infra/repositorio/estabelecimento/space.repository';

export class ListarEstabelecimento implements UseCase<any, any>{
  
  public constructor(private readonly estabelecimentoGateway: EstabelecimentoRepositorio){}

  public static create(estabelecimentoGateway: EstabelecimentoRepositorio){
    return new ListarEstabelecimento(estabelecimentoGateway);
  }

  public async execute(){

    try {
      //const estabelecimento = await this.estabelecimentoGateway?.find();    
  
      //return estabelecimento;
      
    } catch (error) {

      throw new Error(error?.message);
      
    }

  }


}
