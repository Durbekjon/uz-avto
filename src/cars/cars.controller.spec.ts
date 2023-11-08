import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from './cars.controller';
import { PrismaService } from '../prisma/prisma.service'


describe('CarsController', () => {
  let controller: CarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsController],
      imports: [PrismaService],
    }).compile()

    controller = module.get<CarsController>(CarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
