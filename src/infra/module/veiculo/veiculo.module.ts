import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EstabelecimentoORM } from "src/dominio/estabelecimento/model/estabelecimento.model";
import { RelatorioORM } from "src/dominio/relatorio/model/relatorio.model";
import { VeiculoORM } from "src/dominio/veiculo/model/veiculo.model";
import { ActualizarVeiculontroller } from "src/infra/http/veiculo/actualizar-veiculo.controller";
import { CriarVeiculoController } from "src/infra/http/veiculo/criar-veiculo.controller";
import { DeletarVeiculoController } from "src/infra/http/veiculo/deletar-estabelecimento.controller";
import { EntradaVeiculoController } from "src/infra/http/veiculo/entrada-veiculo.controller";
import { ListarVeiculoController } from "src/infra/http/veiculo/listar-estabelecimento.controller";
import { ListarUmVeiculoController } from "src/infra/http/veiculo/listar-um-estabelecimento.controller";
import { SaidaVeiculoController } from "src/infra/http/veiculo/saida-veiculo.controller";
import { EstabelecimentoRepositorio } from "src/infra/repositorio/estabelecimento/estabelecimento.repositorio";
import { RelatorioRepositorio } from "src/infra/repositorio/relatorio/relatorio.repositorio";
import { VeiculoRepositorio } from "src/infra/repositorio/veiculo/veiculo.repositorio";

@Module({
    imports: [
        TypeOrmModule.forFeature([VeiculoORM, RelatorioORM, EstabelecimentoORM])
    ],
    controllers: [
        CriarVeiculoController,
        ListarVeiculoController,
        ListarUmVeiculoController,
        DeletarVeiculoController,
        ActualizarVeiculontroller,

        EntradaVeiculoController,
        SaidaVeiculoController
    ],
    
    providers: [VeiculoRepositorio, RelatorioRepositorio, EstabelecimentoRepositorio],

})
export class VeiculoModule {}