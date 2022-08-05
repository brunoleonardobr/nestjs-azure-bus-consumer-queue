import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AzureBusServer } from './criar-conta/azure-bus-server.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    strategy: new AzureBusServer(),
  });
  app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
