import { bot } from '../bot'
import { OPERATORS_CHAT_ID } from '../config'
import {
  routeOperatorMessage,
  routeUserMessage,
} from '../services/router.service'
import {
  getSessionByTopic,
  getSessionByUser,
} from '../services/session.service'

bot.on('message', async (ctx, next) => {
  if (ctx.message?.text?.startsWith('/')) {
    return next()
  }
  const topicId = ctx.message.message_thread_id
  const session = topicId
    ? getSessionByTopic(topicId)
    : getSessionByUser(ctx.chat.id)
  if (!session) {
    return
  }

  if (ctx.chat.id !== OPERATORS_CHAT_ID) {
    await routeUserMessage(ctx)
  } else {
    await routeOperatorMessage(ctx)
  }
})
