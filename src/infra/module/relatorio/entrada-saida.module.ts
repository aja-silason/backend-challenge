import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RelatorioORM } from "src/dominio/relatorio/model/relatorio.model";
import { VeiculoORM } from "src/dominio/veiculo/model/veiculo.model";
import { ListarEntradaSaidaController } from "src/infra/http/parque/listar-entrada-saida.controller";
import { CriarVeiculoController } from "src/infra/http/veiculo/criar-veiculo.controller";
import { RelatorioRepositorio } from "src/infra/repositorio/relatorio/relatorio.repositorio";
import { VeiculoRepositorio } from "src/infra/repositorio/veiculo/veiculo.repositorio";

@Module({
    imports: [
        TypeOrmModule.forFeature([RelatorioORM])
    ],
    controllers: [
        ListarEntradaSaidaController
    ],
    
    providers: [RelatorioRepositorio],

})
export class EntradaSaidaModule {}