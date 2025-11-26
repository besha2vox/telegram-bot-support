import './commands'
import './handlers'

import { bot } from './bot'

bot.start({
  onStart: () => {
    console.log('Support bot is running...')
  },
})
