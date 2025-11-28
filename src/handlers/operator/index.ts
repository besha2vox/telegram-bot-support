import { isOperatorChatFilter } from '@/filters';
import { bot } from '@/bot';

import { connectToTopicHandler, connectToTopicHandlerTrigger, } from './connect-to-topic.handler';
import { closeDialogForcefullyHandler, closeDialogForcefullyHandlerTrigger, } from './close-dialog-forcefully.handler';
import { closeDialogByTimeoutHandler, closeDialogByTimeoutHandlerTrigger, } from './close-dialog-by-timeout.handler';


export async function registerOperatorConnectHandler(): Promise<void> {
  bot
    .callbackQuery(connectToTopicHandlerTrigger)
    .filter(isOperatorChatFilter, connectToTopicHandler)

  bot
    .callbackQuery(closeDialogByTimeoutHandlerTrigger)
    .filter(isOperatorChatFilter, closeDialogByTimeoutHandler)

  bot
    .callbackQuery(closeDialogForcefullyHandlerTrigger)
    .filter(isOperatorChatFilter, closeDialogForcefullyHandler)
}
