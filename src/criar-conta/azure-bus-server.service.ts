import { ServiceBusClient } from '@azure/service-bus';
import {
  CustomTransportStrategy,
  Server,
  Transport,
} from '@nestjs/microservices';

export class AzureBusServer extends Server implements CustomTransportStrategy {
  transportId?: symbol | Transport;
  private serviceBusClient: ServiceBusClient;
  listen(callback: (...optionalParams: unknown[]) => any) {
    this.serviceBusClient = new ServiceBusClient('<AzureBusCredentials>');
    this.messageHandlers.forEach((handle, queue) => {
      const receiver = this.serviceBusClient.createReceiver(queue);
      receiver.subscribe({
        processMessage: async (message) => {
          await handle(message.body);
        },
        processError: async (err) => {
          console.log(err);
        },
      });
    });
    callback();
  }
  close() {
    this.serviceBusClient.close();
  }
}
