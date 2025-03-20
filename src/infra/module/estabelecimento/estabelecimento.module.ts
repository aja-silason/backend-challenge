import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CreateSpaceUsecase } from "src/app/usecase/space/create.usecase";
import { SpaceRepository } from "src/dominio/space/protocol/space-repository";
import { EstabelecimentoORM } from "src/dominio/space/model/estabelecimento.model";
import { CriarEstabelecimentoController } from "src/infra/http/space/criar-estabelecimento.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([EstabelecimentoORM])
    ],
    controllers: [CriarEstabelecimentoController],
    
    providers: [
        CreateSpaceUsecase,
        {
            provide: SpaceRepository,
            useClass: EstabelecimentoORM 
        }
    ],

})
export class SpaceModule {}