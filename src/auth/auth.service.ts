import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { Tokens } from './type/tokens.type';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  async getAll() {
    return this.prisma.user.findMany();
  }
  async register(dto: RegisterDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (user) {
      throw new ForbiddenException('This email is already registered');
    } else {
      const password = await this.dataHasher(dto.password);
      const newUser = await this.prisma.user.create({
        data: {
          fname: dto.fname,
          lname: dto.lname,
          email: dto.email,
          phone_number: dto.phone_number,
          password,
        },
      });
      const tokens = await this.getTokens(newUser.id, newUser.email);
      return await this.updateTokens(newUser.id, tokens.refresh_token), tokens;
    }
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) {
      throw new ForbiddenException('User not found');
    }

    const passwordMathes = bcrypt.compare(dto.password, user.password);
    if (!passwordMathes) throw new ForbiddenException('password did not match');
    const tokens = await this.getTokens(user.id, user.email);
    return await this.updateTokens(user.id, tokens.refresh_token), tokens;
  }

  async logout(id: any) {
    const userId = Number(id);
    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        token: null,
      },
    });
  }

  async dataHasher(data: string) {
    return bcrypt.hash(data, 10);
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
        },
      ),
      this.jwtService.signAsync(
        {
          sub: id,
          email,
        },
        {
          secret: 'at-secret',
          expiresIn: 60 * 60 * 24 * 7,
        },
      ),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }
  async updateTokens(id: number, rt: string) {
    const hashedToken = await this.dataHasher(rt);
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        token: hashedToken,
      },
    });
  }
}
