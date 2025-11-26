import { bot } from '../bot'
import { OPERATORS_CHAT_ID } from '../config'
import { createSession, getSessionByUser } from '../services/session.service'
import { createSupportTopic } from '../services/topic.service'

bot.callbackQuery('support', async (ctx) => {
  if (ctx.from.id === OPERATORS_CHAT_ID) return
  const topic = await createSupportTopic(ctx.from.id)
  const session = getSessionByUser(ctx.from.id)
  if (session) return

  createSession(ctx.from.id, topic.message_thread_id)

  await ctx.answerCallbackQuery()

  await bot.api.sendMessage(
    OPERATORS_CHAT_ID,
    `New request from client ${ctx.from.first_name} #${ctx.from.id}\nTopic: #${topic.name}`,
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Connect',
              callback_data: `connect_${topic.message_thread_id}`,
            },
          ],
        ],
      },
    },
  )
  await ctx.reply(
    'Support request created.\nThe operator will connect shortly.',
  )
})
