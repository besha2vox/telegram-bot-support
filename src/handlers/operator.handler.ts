import { bot } from '../bot'
import { getSessionByTopic } from '../services/session.service'

bot.callbackQuery(/^connect_(\d+)$/, async (ctx) => {
  const topicId = Number(ctx.match![1])
  const operator = ctx.from
  const session = getSessionByTopic(topicId)
  if (!session) return

  const userId = session.userId

  await ctx.answerCallbackQuery()
  await ctx.editMessageText(
    `Operator ${operator.first_name} connected. Working thread created.`,
  )

  await bot.api.sendMessage(userId, 'Operator connected and ready to help.')
})
