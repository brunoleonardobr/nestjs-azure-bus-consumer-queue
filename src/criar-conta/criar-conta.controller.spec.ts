import { Test, TestingModule } from '@nestjs/testing';
import { CriarContaController } from './criar-conta.controller';

describe('CriarContaController', () => {
  let controller: CriarContaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CriarContaController],
    }).compile();

    controller = module.get<CriarContaController>(CriarContaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
