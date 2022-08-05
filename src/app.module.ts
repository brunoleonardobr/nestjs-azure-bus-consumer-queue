import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CriarContaModule } from './criar-conta/criar-conta.module';

@Module({
  imports: [CriarContaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
