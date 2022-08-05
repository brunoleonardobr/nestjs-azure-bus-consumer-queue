import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('criar-conta')
export class CriarContaController {
  @EventPattern('hands-on-criar-conta')
  async criarConta(@Payload() event) {
    console.log(event);
  }
}
