import { Injectable } from '@nestjs/common'
import { Role } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async getAll() {
    const numbers = this.prisma.user.findMany({
      select: {
        phone_number: true,
      },
    })
    ;
  }
  async getUnique(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    })
  }

  async search(search: string) {
    console.log(search)

    // const keyword = search.toString()
    return this.prisma.user.findMany({
      where: {
        OR: [{ fname: { startsWith: search } }],
      },
    })
  }

  // async setAdmin(id: number) {
  //   return this.prisma.user.update({
  //     where: {
  //       id: Number(id),
  //     },
  //     data: {
  //       role: 'ADMIN',
  //     },
  //   })
  // }
}
