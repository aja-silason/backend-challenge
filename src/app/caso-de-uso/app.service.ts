import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {


  getHello(): string {

    const apiurl = 'http://localhost:3003/api/docs';

    return `Olá Anania Augusto aqui, copie e cole na barra de pesquisa do navegador: ${apiurl}`;
  }
}
