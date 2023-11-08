import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { CarsModule } from './cars/cars.module';
import { ContractsModule } from './contracts/contracts.module';

@Module({
  imports: [AuthModule, PrismaModule, CarsModule, ContractsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
