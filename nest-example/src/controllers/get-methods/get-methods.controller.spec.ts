import { Test, TestingModule } from '@nestjs/testing';
import { GetMethodsController } from './get-methods.controller';

describe('GetMethodsController', () => {
  let controller: GetMethodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetMethodsController],
    }).compile();

    controller = module.get<GetMethodsController>(GetMethodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
