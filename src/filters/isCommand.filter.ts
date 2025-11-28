import type { Context } from 'grammy'

export function isCommandFilter(ctx: Context): boolean {
  return Boolean(
    ctx.message?.entities?.[0]?.type === 'bot_command' ||
      ctx.message?.text?.startsWith('/'),
  )
}
