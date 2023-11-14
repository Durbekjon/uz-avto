import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto, RegisterDto } from './dto/auth.dto'
import { AuthGuard } from '@nestjs/passport'
import { Request } from 'express'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get()
  async getAll() {
    return this.authService.getAll()
  }
  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto)
  }
  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto)
  }
  @UseGuards(AuthGuard('at-jwt'))
  @Post('logout')
  async logout(@Req() req: Request) {
    const id = req.user
    return this.authService.logout(id)
  }

  @Get('/send')
  async sendToEmail() {
    return this.authService.send()
  }
}
  