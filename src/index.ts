import registerHandlers from '@/handlers';
import registerCommands from '@/commands';

import { bot } from './bot';


registerCommands()
registerHandlers()

bot.start({
  onStart: () => {
    console.info('Support bot is running...')
  },
})
