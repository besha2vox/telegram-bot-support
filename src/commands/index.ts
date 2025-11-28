import { bot } from '@/bot'

import {
  operatorsMenuCommand,
  operatorsMenuCommandFilter,
} from './operators-menu.command'
import { startCommand, startCommandFilter } from './start.command'

export default function (): void {
  bot.command('start').filter(startCommandFilter, startCommand)

  bot.command('menu').filter(operatorsMenuCommandFilter, operatorsMenuCommand)
}
