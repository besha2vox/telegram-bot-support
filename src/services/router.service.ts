import type { Context } from 'grammy'

import { bot } from '../bot'
import { OPERATORS_CHAT_ID } from '../config'
import { getSessionByTopic, getSessionByUser } from './session.service'

export async function routeUserMessage(ctx: Context): Promise<void> {
  const userId = ctx.from?.id
  if (!userId) return

  const session = getSessionByUser(userId)
  if (!session) return

  await bot.api.sendMessage(
    OPERATORS_CHAT_ID,
    `💬 Client ${ctx.from.username} #${userId}:\n${ctx.message?.text}`,
    {
      message_thread_id: session.topicId,
    },
  )
}

export async function routeOperatorMessage(ctx: Context): Promise<void> {
  const topicId = ctx.message?.message_thread_id
  if (!topicId) return

  const session = getSessionByTopic(topicId)
  if (!session) return

  await bot.api.sendMessage(session.userId, `👨‍💼 Support:\n${ctx.message.text}`)
}
