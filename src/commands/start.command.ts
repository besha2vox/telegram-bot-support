import type { CommandContext } from 'grammy';
import type { TContext } from '@/types/context.type.';
import { startKeyboard } from '@/keyboards';
import { OPERATORS_CHAT_ID } from '@/config';


export function startCommandFilter(ctx: CommandContext<TContext>): boolean {
  return ctx.chat.id !== OPERATORS_CHAT_ID
}

export async function startCommand(
  ctx: CommandContext<TContext>,
): Promise<void> {
  await ctx.reply('Hello! Choose an action:', {
    reply_markup: startKeyboard,
  })
}
