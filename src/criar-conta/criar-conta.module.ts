import { Module } from '@nestjs/common';
import { CriarContaController } from './criar-conta.controller';

@Module({
  controllers: [CriarContaController],
})
export class CriarContaModule {}
