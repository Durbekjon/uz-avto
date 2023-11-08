import { Test, TestingModule } from '@nestjs/testing'
import { ContractsService } from './contracts.service'
import { PrismaService } from '../prisma/prisma.service'

describe('ContractsService', () => {
  let contractsService: ContractsService
  let prismaService: PrismaService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContractsService, PrismaService],
    }).compile()

    contractsService = module.get<ContractsService>(ContractsService)
    prismaService = module.get<PrismaService>(PrismaService)
  })

  it('should be defined', () => {
    expect(prismaService).toBeDefined()
  })
})
