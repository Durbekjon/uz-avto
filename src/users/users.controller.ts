import { Controller, Get, Param, Put, Req, UseGuards } from '@nestjs/common'
import { UsersService } from './users.service'
import { AuthGuard } from '@nestjs/passport'
import { Request } from 'express'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get(':search')
  async search(@Param('search') search: string) {
    return this.usersService.search(search)
  }
  @Get(':id')
  async getUnique(@Param('id') id: number) {
    return this.usersService.getUnique(id)
  }
  @Get()
  async getAll() {
    return this.usersService.getAll()
  }
  @UseGuards(AuthGuard('at-jwt'))
  @Put(':id')
  async setAdmin(@Req() req: Request) {
    const user = req.user
    console.log(user)

    // return this.usersService.setAdmin(req)
  }
}
