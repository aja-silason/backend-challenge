import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpaceModel } from '../../domain/space/model/space.model';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SpaceModule } from '../http/space/space.module';
import { VehicleModel } from 'src/domain/vehicle/model/vehicle.model';
import { VehicleModule } from '../http/vehicle/vehicle.module';
import { ReportModel } from 'src/domain/report/model/report.model';
import { ReportModule } from '../http/report/report.module';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({ 
                type: 'mysql',
                host: configService.get('DATABASE_HOST', 'localhost'),
                port: Number(configService.get('DATABASE_PORT', 3306)),
                username: configService.get('DATABASE_USER', 'root'),
                password: configService.get('DATABASE_PASSWORD', '123'),
                database: configService.get('DATABASE_DB', 'estacionamento'),
                entities: [SpaceModel, VehicleModel, ReportModel],
                synchronize: true,
            })
        }),
        SpaceModule,
        VehicleModule,
        ReportModule
    ]
})
export class DatabaseModule {}
