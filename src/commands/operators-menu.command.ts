import type { CommandContext } from 'grammy';
import type { TContext } from '@/types/context.type.';
import { operatorKeyboard } from '@/keyboards';
import { OPERATORS_CHAT_ID } from '@/config';


export function operatorsMenuCommandFilter(
  ctx: CommandContext<TContext>,
): boolean {
  return Boolean(
    ctx.chat.id === OPERATORS_CHAT_ID && ctx.message?.message_thread_id,
  )
}

export async function operatorsMenuCommand(
  ctx: CommandContext<TContext>,
): Promise<void> {
  if (ctx.chat.id !== OPERATORS_CHAT_ID || !ctx.message?.message_thread_id) {
    return
  }
  await ctx.reply('Choose an action:', {
    reply_markup: operatorKeyboard(ctx.message?.message_thread_id),
  })
}
