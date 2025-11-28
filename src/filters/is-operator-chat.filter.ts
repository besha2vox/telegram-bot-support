import type { CallbackQueryContext } from 'grammy';
import type { TContext } from '@/types/context.type.';
import { OPERATORS_CHAT_ID } from '@/config';


export function isOperatorChatFilter(
  ctx: CallbackQueryContext<TContext>,
): boolean {
  return (
    ctx.chatId === OPERATORS_CHAT_ID ||
    ctx.update.callback_query.message?.chat.id === OPERATORS_CHAT_ID
  )
}
