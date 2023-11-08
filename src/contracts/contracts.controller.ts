import {
  Get,
  Param,
  Post,
  Put,
  Body,
  Controller,
  Delete,
  Query,
} from '@nestjs/common'
import { ContractsService } from './contracts.service'
import { ContractsDto } from './dto/Contracts.dto'

@Controller('contracts')
export class ContractsController {
  constructor(private contractsService: ContractsService) {}
  @Get()
  async getAll(@Query('page') page: number) {
    return this.contractsService.getAll(page)
  }

  @Get(':id')
  async getUnique(@Param('id') id: number) {
    return this.contractsService.getUnique(id)
  }

  @Post()
  async create(@Body() dto: ContractsDto) {
    return this.contractsService.create(dto)
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: ContractsDto) {
    return this.contractsService.update(id, dto)
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.contractsService.delete(id)
  }
}
