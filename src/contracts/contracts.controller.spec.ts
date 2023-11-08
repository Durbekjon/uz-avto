import { Test, TestingModule } from '@nestjs/testing'
import { ContractsController } from './contracts.controller'
import { PrismaService } from '../prisma/prisma.service'


describe('ContractsController', () => {
  let controller: ContractsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContractsController],
      imports: [PrismaService],
    }).compile()

    controller = module.get<ContractsController>(ContractsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
