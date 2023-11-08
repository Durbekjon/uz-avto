import { Injectable } from '@nestjs/common'
import { ContractsDto } from './dto/Contracts.dto'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ContractsService {
  constructor(private prisma: PrismaService) {}
  async getAll(page: number) {
    return await this.prisma.contracts.findMany({
      include: {
        client: true,
        car: true,
      },
      take: 10,
      skip: 10 * (page - 1),
    })
  }
  async getUnique(id: number) {
    return this.prisma.contracts.findUnique({
      where: {
        id: Number(id),
      },
    })
  }
  async create(dto: ContractsDto) {
    const nav = await this.prisma.contracts.findMany()
    const navbat = nav.length + 1

    const newContract = await this.prisma.contracts.create({
      data: {
        navbat: nav.length === 0 ? 1 : navbat,
        ready_date: dto.ready_date,
        client: {
          connect: {
            id: Number(dto.client),
          },
        },
        car: {
          connect: {
            id: Number(dto.car),
          },
        },
        payment: dto.payment,
      },
    })
    const car = this.prisma.cars.findUnique({
      where: {
        id: dto.car,
      },
    })
    if (newContract.payment === true && (await car).car_price !== 0) {
      await this.addToCash((await car).car_price)
    }
    return newContract
  }

  async update(id: number, dto: ContractsDto) {
    return await this.prisma.contracts.update({
      where: {
        id: Number(id),
      },
      data: {
        ready_date: dto.ready_date,
        client: {
          connect: {
            id: Number(dto.client),
          },
        },
        car: {
          connect: {
            id: Number(dto.car),
          },
        },
        payment: dto.payment,
      },
    })
  }
  async delete(id: number) {
    await this.prisma.contracts.delete({
      where: {
        id: Number(id),
      },
    })
  }
  async addToCash(price: number) {
    const cash = this.prisma.cash.findMany({})
    if ((await cash).length === 0) {
      this.prisma.cash.create({
        data: {
          cash: 0,
        },
      })
    } else {
      const oldCash = this.prisma.cash.findUnique({
        where: {
          id: 1,
        },
      })
      const money = (await oldCash).cash + price
      this.prisma.cash.update({
        where: {
          id: 1,
        },
        data: {
          cash: money,
        },
      })
    }
  }
}
