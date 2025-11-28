import { InlineKeyboard } from 'grammy';
import { KeyboardDataEnum, KeyboardTextEnum } from '@/enums/keybord.enums';


export const startKeyboard = new InlineKeyboard().text(
  KeyboardTextEnum.SUPPORT,
  KeyboardDataEnum.SUPPORT,
)
