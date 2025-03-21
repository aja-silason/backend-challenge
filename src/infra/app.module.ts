import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigureModule } from './configure/configure.module';
import { SpaceModule } from './http/space/space.module';
import { AppController } from './http/app/app.controller';
import { AppService } from 'src/app/usecase/app.service';
import { VehicleModule } from './http/vehicle/vehicle.module';
import { ReportModule } from './http/report/report.module';

@Module({
  imports: [
    ConfigureModule,
    DatabaseModule,
    
    SpaceModule,
    VehicleModule,
    ReportModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
