import {
  Get,
  Param,
  Post,
  Put,
  Body,
  Controller,
  Delete,
} from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { ContractsDto } from './dto/Contracts.dto';

@Controller('contracts')
export class ContractsController {
  constructor(private contractsService: ContractsService) {}
  @Get()
  async getAll() {
    return this.contractsService.getAll();
  }

  @Get(':id')
  async getUnique(@Param('id') id: number) {
    return this.contractsService.getUnique(id);
  }

  @Post()
  async create(@Body() dto: ContractsDto) {
    return this.contractsService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: ContractsDto) {
    return this.contractsService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.contractsService.delete(id);
  }
}
