import { Test, TestingModule } from '@nestjs/testing'
import { ContractsService } from './contracts.service' // Import ContractsService
import { ContractsController } from './contracts.controller'

describe('ContractsController', () => {
  let controller: ContractsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ContractsController],
    }).compile()

    controller = module.get<ContractsController>(ContractsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
