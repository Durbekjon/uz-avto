import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

import { CarsDto } from './dto/cars.dto'

@Injectable()
export class CarsService {
  constructor(private prisma: PrismaService) {}
  async getAll() {
    return await this.prisma.cars.findMany()
  }
  async getUnique(id: number) {
    return this.prisma.cars.findUnique({
      where: {
        id: id,
      },
    })
  }
  async create(dto: CarsDto) {
    return await this.prisma.cars.create({
      data: {
        car_name: dto.car_name,
        car_position: dto.car_position,
        year: dto.year,
        car_price: dto.car_price,
      },
    })
  }
  async update(id: number, dto: CarsDto) {
    const existingCar = await this.prisma.cars.findUnique({
      where: {
        id: id,
      },
    })

    if (!existingCar) {
      // Ma'lumot topilmadi, 404 Not Found qaytarish
      throw new NotFoundException(`Car with id ${id} not found`)
    }

    // Ma'lumot topildi, yangilashni davom ettiramiz
    return await this.prisma.cars.update({
      where: {
        id: id,
      },
      data: {
        car_name: dto.car_name,
        car_position: dto.car_position,
        year: dto.year,
        car_price: dto.car_price,
      },
    })
  }

  async delete(id: number) {
    const existingCar = await this.prisma.cars.findUnique({
      where: {
        id: id,
      },
    })
    if (!existingCar) {
      throw new NotFoundException(`Car with id ${id} not found`)
    } else {
      await this.prisma.cars.delete({
        where: {
          id: id,
        },
      })
      return 'Car deleted'
    }
  }
}
