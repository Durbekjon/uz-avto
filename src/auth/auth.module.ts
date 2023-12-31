import { PrismaService } from '../prisma/prisma.service'
import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { AtStrategy } from '../users/strategies/at.strategy'
import { RtStrategy } from '../users/strategies/rt.strategy'
import { JwtModule, JwtService } from '@nestjs/jwt'

@Module({
  controllers: [AuthController],
  providers: [AuthService, AtStrategy, RtStrategy, PrismaService, JwtService],
  imports: [JwtModule.register({})],
})
export class AuthModule {}
