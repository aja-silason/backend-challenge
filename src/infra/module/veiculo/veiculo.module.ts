import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VeiculoORM } from "src/dominio/veiculo/model/veiculo.model";
import { ActualizarVeiculontroller } from "src/infra/http/veiculo/actualizar-veiculo.controller";
import { CriarVeiculoController } from "src/infra/http/veiculo/criar-veiculo.controller";
import { DeletarVeiculoController } from "src/infra/http/veiculo/deletar-estabelecimento.controller";
import { ListarVeiculoController } from "src/infra/http/veiculo/listar-estabelecimento.controller";
import { ListarUmVeiculoController } from "src/infra/http/veiculo/listar-um-estabelecimento.controller";
import { VeiculoRepositorio } from "src/infra/repositorio/veiculo/veiculo.repositorio";

@Module({
    imports: [
        TypeOrmModule.forFeature([VeiculoORM])
    ],
    controllers: [
        CriarVeiculoController,
        ListarVeiculoController,
        ListarUmVeiculoController,
        DeletarVeiculoController,
        ActualizarVeiculontroller
    ],
    
    providers: [VeiculoRepositorio],

})
export class VeiculoModule {}