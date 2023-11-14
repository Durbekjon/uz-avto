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
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
      defaults: {
        from: '"No reply" <No reply>', // Replace with your Elastic Email email address
      },
    }),
  ],
})
export class AuthModule {}
