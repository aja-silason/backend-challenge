import { Injectable } from '@nestjs/common';
import { UseCase } from '../usecase';
import { Estabelecimento } from 'src/dominio/estabelecimento/estabelecimento.entidade';

@Injectable()
export class CriarEstabelecimento implements UseCase <any, any> {
  
  public constructor(private readonly nome: string){}

  public static create(nome: string){
    return new CriarEstabelecimento(nome);
  }

  public async execute(input: any): Promise<any> {
    
    const estabelecimento = Estabelecimento.create(input);
    
  
  }


}
