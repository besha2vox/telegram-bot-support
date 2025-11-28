import { Bot } from 'grammy';

import { BOT_TOKEN, OPERATORS_CHAT_ID } from './config';


export const bot = new Bot(BOT_TOKEN)
bot.api.setMyCommands([{ command: 'start', description: 'Start the bot' }])
bot.api.setMyCommands([{ command: 'menu', description: 'Support menu' }], {
  scope: {
    type: 'chat',
    chat_id: OPERATORS_CHAT_ID,
  },
})
