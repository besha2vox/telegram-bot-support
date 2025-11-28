import type { CallbackQueryContext } from 'grammy';
import type { TContext } from '@/types/context.type.';
import { redirectToTopicKeyboard } from '@/keyboards';
import { TriggersEnumRegexPatern } from '@/enums';

import { getSessionByTopic } from '../../services/session.service';
import { bot } from '../../bot';


export const connectToTopicHandlerTrigger = new RegExp(
  TriggersEnumRegexPatern.CONNECT,
)

export async function connectToTopicHandler(
  ctx: CallbackQueryContext<TContext>,
): Promise<void> {
  const topicId = Number(ctx.match![1])

  const session = getSessionByTopic(topicId)

  if (!session) {
    await ctx.answerCallbackQuery('Session not found.')
    await ctx.editMessageText(`Session for topic ${topicId} not found.`)
    return
  }

  await ctx.answerCallbackQuery(`Link to go to the connected topic created.`)
  await ctx.editMessageText(
    `Operator ${ctx.from.first_name} connected to Working topic.`,
    {
      reply_markup: redirectToTopicKeyboard(topicId),
    },
  )

  await bot.api.sendMessage(
    session.userId,
    'Operator connected and ready to help.',
  )
}
