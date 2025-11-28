import { isCommandFilter } from '@/filters/isCommand.filter';
import { bot } from '@/bot';

import { routingMessageSupportToUserHandler } from './message.handler';


export function registerRoutingMessageSupportToUserHandler(): void {
  bot
    .on('message')
    .filter((ctx) => !isCommandFilter(ctx), routingMessageSupportToUserHandler)
}
