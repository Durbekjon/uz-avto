import { PrismaService } from '../prisma/prisma.service'

import { ForbiddenException, Injectable } from '@nestjs/common'
import { LoginDto, RegisterDto } from './dto/auth.dto'
import * as bcrypt from 'bcrypt'
import { Tokens } from './type/tokens.type'
import { JwtService } from '@nestjs/jwt'
import { MailerService } from '@nestjs-modules/mailer'
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private mailer: MailerService
  ) {}
  async getAll() {
    return this.prisma.user.findMany()
  }
  async register(dto: RegisterDto) {
    const password = await this.dataHasher(dto.password)
    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    })

    if (existingUser) {
      const passwordMatches = await bcrypt.compare(
        dto.password,
        existingUser.password
      )

      if (passwordMatches) {
        const tokens = await this.getTokens(existingUser.id, existingUser.email)
        await this.updateTokens(existingUser.id, tokens.refresh_token)
        return tokens
      } else {
        throw new ForbiddenException('User already registered')
      }
    } else {
      const newUser = await this.prisma.user.create({
        data: {
          fname: dto.fname,
          lname: dto.lname,
          email: dto.email,
          phone_number: dto.phone_number,
          password,
        },
      })

      const tokens = await this.getTokens(newUser.id, newUser.email)
      await this.updateTokens(newUser.id, tokens.refresh_token)
      return tokens
    }
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    })
    if (!user) {
      throw new ForbiddenException('User not found')
    }

    const passwordMathes = bcrypt.compare(dto.password, user.password)
    if (!passwordMathes) throw new ForbiddenException('password did not match')
    const tokens = await this.getTokens(user.id, user.email)
    return await this.updateTokens(user.id, tokens.refresh_token), tokens
  }

  async logout(id: any) {
    const userId = Number(id)
    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        token: null,
      },
    })
  }

  async dataHasher(data: string) {
    return bcrypt.hash(data, 10)
  }

  async getTokens(id: number, email: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: id,
          email,
        },
        {
          secret: 'at-secret',
          expiresIn: 60 * 15,
        }
      ),
      this.jwtService.signAsync(
        {
          sub: id,
          email,
        },
        {
          secret: 'at-secret',
          expiresIn: 60 * 60 * 24 * 7,
        }
      ),
    ])

    return {
      access_token: at,
      refresh_token: rt,
    }
  }
  async updateTokens(id: number, rt: string) {
    const hashedToken = await this.dataHasher(rt)
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        token: hashedToken,
      },
    })
  }
  async send() {
    this.mailer.sendMail({
      to: '12012665909@gmail.com',
      from: 'durbeksaydaliyev798@gmail.com',
      subject: 'Testing',
      text: 'Hi friend',
      html: '<b>Hi guys</b>',
    })
  }
}
