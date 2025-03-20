import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CreateSpaceUsecase } from "src/app/usecase/space/create.usecase";
import { SpaceRepository } from "src/domain/space/protocol/space-repository";
import { SpaceModel } from "src/domain/space/model/space.model";
import { SpaceController } from "src/infra/http/space/space.controller";
import { TypeORMSpaceRepository } from "src/infra/repository/space/space.repository";
import { SpaceService } from "./space.service";
import { FindAllSpaceUseCase } from "src/app/usecase/space/findAll.usecase";

@Module({
    imports: [
        TypeOrmModule.forFeature([SpaceModel])
    ],
    controllers: [SpaceController],
    
    providers: [
        SpaceService,
        CreateSpaceUsecase,
        FindAllSpaceUseCase,
        {
            provide: SpaceRepository,
            useClass: TypeORMSpaceRepository 
        }
    ]

})
export class SpaceModule {}