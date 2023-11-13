import { Test, TestingModule } from '@nestjs/testing'
import { CarsController } from './cars.controller'
import { PrismaService } from '../prisma/prisma.service'
import { CarsService } from './cars.service'

describe('CarsController', () => {
  let controller: CarsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsController],
      providers: [PrismaService, CarsService]
    }).compile()

    controller = module.get<CarsController>(CarsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
