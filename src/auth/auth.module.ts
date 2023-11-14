import { PrismaService } from '../prisma/prisma.service'
import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { AtStrategy } from '../users/strategies/at.strategy'
import { RtStrategy } from '../users/strategies/rt.strategy'
import { JwtModule, JwtService } from '@nestjs/jwt'
import { MailerModule } from '@nestjs-modules/mailer'

@Module({
  controllers: [AuthController],
  providers: [AuthService, AtStrategy, RtStrategy, PrismaService, JwtService],
  imports: [
    JwtModule.register({}),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.elasticemail.com',
        port: 2525,
        auth: {
          user: 'durbeksaydaliyev798@gmail.com',
          pass: 'BC1F92BA6621B95F407D72873229DBBB1064',
        },
      },
      defaults: {
        from: '"Durbekjon" <durbeksaydaliyev798@gmail.com>', // Replace with your Elastic Email email address
      },
    }),
  ],
})
export class AuthModule {}
