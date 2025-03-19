import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World, this is my third try to use Nest, but in this time i´m more capeble';
  }
}
