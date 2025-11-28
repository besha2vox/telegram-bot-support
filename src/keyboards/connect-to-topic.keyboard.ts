import { InlineKeyboard } from 'grammy';
import { applyReplacements } from '@/utils';
import { KeyboardDataEnum, KeyboardTextEnum } from '@/enums';
import { OPERATORS_CHAT_ID } from '@/config';


export const connectToTopicKeyboard = (topicId: number): InlineKeyboard => {
  return new InlineKeyboard().text(
    KeyboardTextEnum.CONNECT,
    applyReplacements(KeyboardDataEnum.CONNECT, { topicId }),
  )
}

export const redirectToTopicKeyboard = (topicId: number): InlineKeyboard => {
  return new InlineKeyboard().url(
    KeyboardTextEnum.REDIRECT,
    `https://t.me/c/${String(OPERATORS_CHAT_ID).slice(4)}/${topicId}`,
  )
}
