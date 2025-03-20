import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CreateSpaceUsecase } from "src/app/usecase/space/create.usecase";
import { SpaceRepository } from "src/domain/space/protocol/space-repository";
import { EstabelecimentoORM } from "src/domain/space/model/space.model";
import { SpaceController } from "src/infra/http/space/space.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([EstabelecimentoORM])
    ],
    controllers: [SpaceController],
    
    providers: [
        CreateSpaceUsecase,
        {
            provide: SpaceRepository,
            useClass: EstabelecimentoORM 
        }
    ],

})
export class SpaceModule {}