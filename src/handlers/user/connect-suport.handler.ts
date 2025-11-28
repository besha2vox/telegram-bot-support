import type { CallbackQueryContext } from 'grammy';
import type { TContext } from '@/types/context.type.';
import { createSupportTopic } from '@/services/topic.service';
import { createSession, getSessionByUser } from '@/services/session.service';
import { connectToTopicKeyboard } from '@/keyboards';
import { OPERATORS_CHAT_ID } from '@/config';


export async function userConnectSupportHandler(
  ctx: CallbackQueryContext<TContext>,
): Promise<void> {
  if (getSessionByUser(ctx.from.id)) {
    await ctx.answerCallbackQuery('You are already connected.')
    return
  }

  const topic = await createSupportTopic(ctx.from.id)

  createSession(ctx.from.id, topic.message_thread_id)

  await ctx.answerCallbackQuery('Support request created.')

  await ctx.api.sendMessage(
    OPERATORS_CHAT_ID,
    `New request from client ${ctx.from.first_name} #${ctx.from.id}\nTopic: #${topic.name}`,
    {
      reply_markup: connectToTopicKeyboard(topic.message_thread_id),
    },
  )

  await ctx.reply(
    'Support request created.\nThe operator will connect shortly.',
  )
}
