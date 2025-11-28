import type { Context, NextFunction } from 'grammy';
import { getCurrentSession, updateSession } from '@/services/session.service';
import { routeOperatorMessage, routeUserMessage, } from '@/services/router.service';
import { OPERATORS_CHAT_ID } from '@/config';


export async function routingMessageSupportToUserHandler(
  ctx: Context,
  next: NextFunction,
): Promise<void> {
  if (!ctx.chat || !ctx.message || !ctx.from) {
    return next()
  }

  const session = getCurrentSession(ctx.from.id, ctx.message.message_thread_id)

  if (!session) return next()

  if (ctx.chat.id !== OPERATORS_CHAT_ID) {
    updateSession(ctx.from.id, { lastActivity: Date.now() })
    await routeUserMessage(ctx, session)
  } else {
    await routeOperatorMessage(ctx, session)
  }
}
