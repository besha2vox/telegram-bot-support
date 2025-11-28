import type { CallbackQueryContext, Context } from 'grammy';
import { setIdleTimeout } from '@/utils/timeout';
import type { TContext } from '@/types';
import { TriggersEnumRegexPatern } from '@/enums';
import { TIMEOUT_FOR_CLOSE_DIALOG } from '@/config';

import { getSessionByTopic, getSessionByUser, removeSession, updateSession, } from '../../services/session.service';


export const closeDialogByTimeoutHandlerTrigger = new RegExp(
  TriggersEnumRegexPatern.CLOSE_DIALOG_BY_TIMEOUT,
)

async function closeDialogByTimeout(
  ctx: Context,
  userId: number,
  timeoutId?: NodeJS.Timeout,
): Promise<void> {
  const session = getSessionByUser(userId)
  if (!session) {
    clearTimeout(timeoutId)
    await ctx.editMessageText('Session not found.')
    return
  }
  if (
    !session.lastActivity ||
    Date.now() - session.lastActivity >= TIMEOUT_FOR_CLOSE_DIALOG
  ) {
    removeSession(userId)
    await ctx.api.sendMessage(
      userId,
      'Operator disconnected for timeout.\nYou can create a new request if you need.',
    )
    await ctx.editMessageText('Dialog closed.')
  } else {
    clearTimeout(timeoutId)
  }
}

export async function closeDialogByTimeoutHandler(
  ctx: CallbackQueryContext<TContext>,
): Promise<void> {
  const topicId = Number(ctx.match![1])
  const session = getSessionByTopic(topicId)

  if (!session) {
    await ctx.answerCallbackQuery('Session not found.')
    await ctx.editMessageText(`Session for topic ${topicId} not found.`)
    return
  }

  const userId = session.userId

  const timeoutId = setIdleTimeout(closeDialogByTimeout, ctx, userId)

  try {
    updateSession(userId, {
      timeoutId,
      lastActivity: Date.now(),
    })
    await ctx.answerCallbackQuery()
    await ctx.editMessageText(`Timeout for closing this session created.`)
    await ctx.api.sendMessage(userId, 'Do you have any other questions?')
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
    await ctx.answerCallbackQuery()
    await ctx.editMessageText('Error creating timeout.')
  }
}
