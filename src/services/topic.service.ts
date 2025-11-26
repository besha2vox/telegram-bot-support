import type { ForumTopic } from 'grammy/types'

import { bot } from '../bot'
import { COMPANY_NAME, OPERATORS_CHAT_ID } from '../config'

export async function createSupportTopic(userId: number): Promise<ForumTopic> {
  const topic = await bot.api.createForumTopic(
    OPERATORS_CHAT_ID,
    `${COMPANY_NAME ?? 'Support'}: ${userId}`,
  )

  return topic
}
