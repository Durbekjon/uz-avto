import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common'
import { CarsService } from './cars.service'
import { CarsDto } from './dto/cars.dto'

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  async getAll() {
    return this.carsService.getAll()
  }

  @Get(':id')
  async getUnique(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.getUnique(id)
  }

  @Post()
  async create(@Body() dto: CarsDto) {
    return this.carsService.create(dto)
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CarsDto) {
    return this.carsService.update(id, dto)
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.delete(id)
  }
}
