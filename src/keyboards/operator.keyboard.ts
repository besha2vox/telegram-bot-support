import { InlineKeyboard } from 'grammy';
import { applyReplacements } from '@/utils/string.replace';
import { KeyboardDataEnum, KeyboardTextEnum } from '@/enums';


export const operatorKeyboard = (topicId: number): InlineKeyboard => {
  return new InlineKeyboard()
    .text(
      KeyboardTextEnum.CLOSE_DIALOG_BY_TIMEOUT,
      applyReplacements(KeyboardDataEnum.CLOSE_DIALOG_BY_TIMEOUT, {
        topicId,
      }),
    )
    .row()
    .text(
      KeyboardTextEnum.CLOSE_DIALOG_FORCELY,
      applyReplacements(KeyboardDataEnum.CLOSE_DIALOG_FORCELY, {
        topicId,
      }),
    )
}
