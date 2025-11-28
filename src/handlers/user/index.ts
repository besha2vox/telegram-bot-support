import { isOperatorChatFilter } from '@/filters';
import { bot } from '@/bot';

import { userConnectSupportHandler } from './connect-suport.handler';


export async function registerUserConnectSupportHandler(): Promise<void> {
  bot
    .callbackQuery('support')
    .filter((ctx) => !isOperatorChatFilter(ctx), userConnectSupportHandler)
}
