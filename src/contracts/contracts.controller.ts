import {
  Get,
  Param,
  Post,
  Put,
  Body,
  Controller,
  Delete,
  Query,
  ParseIntPipe,
} from "@nestjs/common";
import { ContractsService } from "./contracts.service";
import { ContractsDto } from "./dto/Contracts.dto";

@Controller("contracts")
export class ContractsController {
  constructor(private contractsService: ContractsService) {}
  @Get()
  async getAll() {
    return this.contractsService.getAll();
  }
  @Get()
  async getPaginated(@Query("page") page: number) {
    return this.contractsService.getPaginated(page);
  }

  @Get(":id")
  async getUnique(@Param("id", ParseIntPipe) id: number) {
    return this.contractsService.getUnique(id);
  }

  @Post()
  async create(@Body() dto: ContractsDto) {
    return this.contractsService.create(dto);
  }

  @Put(":id")
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: ContractsDto
  ) {
    return this.contractsService.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id", ParseIntPipe) id: number) {
    return this.contractsService.delete(id);
  }
}
