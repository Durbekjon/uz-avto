import { PrismaService } from '../prisma/prisma.service'
import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { AtStrategy } from './strategies/at.strategy'
import { RtStrategy } from './strategies/rt.strategy'
import { JwtModule } from '@nestjs/jwt'

@Module({
  controllers: [AuthController],
  providers: [AuthService, AtStrategy, RtStrategy, PrismaService],
  imports: [JwtModule.register({})],
})
export class AuthModule {}
