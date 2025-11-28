import type { CallbackQueryContext } from 'grammy';
import type { TContext } from '@/types';
import { getSessionByTopic, removeSession } from '@/services/session.service';
import { TriggersEnumRegexPatern } from '@/enums';


export const closeDialogForcefullyHandlerTrigger = new RegExp(
  TriggersEnumRegexPatern.CLOSE_DIALOG_FORCELY,
)

export const closeDialogForcefullyHandler = async (
  ctx: CallbackQueryContext<TContext>,
): Promise<void> => {
  const topicId = Number(ctx.match![1])
  const session = getSessionByTopic(topicId)
  if (!session) {
    await ctx.editMessageText('Session not found.')
    return
  }

  removeSession(session.userId)
  await ctx.api.sendMessage(
    session.userId,
    'Dialog with operator closed.\nYou can create a new request if you need.',
  )
  await ctx.editMessageText('Dialog closed.')
}
