import { bot } from '../bot'
import { OPERATORS_CHAT_ID } from '../config'
import { startKeyboard } from '../keyboards/start.keyboard'

bot.command('start', async (ctx) => {
  if (ctx.chat.id === OPERATORS_CHAT_ID) return
  await ctx.reply('Hello! Choose an action:', {
    reply_markup: startKeyboard,
  })
})
