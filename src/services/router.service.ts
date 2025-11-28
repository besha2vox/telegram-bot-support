import type { Context } from 'grammy';
import type { TSession } from '@/types/session.type';
import { removeSession } from '@/services/session.service';
import { OPERATORS_CHAT_ID } from '@/config';


export async function routeUserMessage(
  ctx: Context,
  session: TSession,
): Promise<void> {
  if (!ctx.from) return
  try {
    await ctx.api.sendMessage(
      OPERATORS_CHAT_ID,
      `💬 Client ${ctx.from.username} #${ctx.from.id}:\n${ctx.message?.text}`,
      {
        message_thread_id: session.topicId,
      },
    )
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    ctx.reply('Something went wrong.\nYou can try create a new request.')
    removeSession(ctx.from.id)
  }
}

export async function routeOperatorMessage(
  ctx: Context,
  session: TSession,
): Promise<void> {
  if (!ctx.message?.text) return
  try {
    await ctx.api.sendMessage(
      session.userId,
      `👨‍💼 Support:\n${ctx.message.text}`,
    )
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    ctx.reply('Something went wrong.\nUser unavailable.')
    removeSession(session.userId)
  }
}
