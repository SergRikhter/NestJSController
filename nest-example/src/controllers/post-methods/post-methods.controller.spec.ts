import { Test, TestingModule } from '@nestjs/testing';
import { PostMethodsController } from './post-methods.controller';

describe('PostMethodsController', () => {
  let controller: PostMethodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostMethodsController],
    }).compile();

    controller = module.get<PostMethodsController>(PostMethodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
