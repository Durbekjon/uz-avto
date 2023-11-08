import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'

import { CarsDto } from './dto/cars.dto';

@Injectable()
export class CarsService {
  constructor(private prisma: PrismaService) {}
  async getAll() {
    return await this.prisma.cars.findMany();
  }
  async getUnique(id: number) {
    return this.prisma.cars.findUnique({
      where: {
        id: Number(id),
      },
    });
  }
  async create(dto: CarsDto) {
    return await this.prisma.cars.create({
      data: {
        car_name: dto.car_name,
        car_position: dto.car_position,
        year: dto.year,
        car_price: dto.car_price,
      },
    });
  }
  async update(id: number, dto: CarsDto) {
    return await this.prisma.cars.update({
      where: {
        id: Number(id),
      },
      data: {
        car_name: dto.car_name,
        car_position: dto.car_position,
        year: dto.year,
        car_price: dto.car_price,
      },
    });
  }
  async delete(id: number) {
    await this.prisma.cars.delete({
      where: {
        id: Number(id),
      },
    });
  }
}
