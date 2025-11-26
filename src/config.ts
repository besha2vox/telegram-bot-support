if (!process.env.BOT_TOKEN || !process.env.OPERATORS_CHAT_ID) {
  throw new Error('Missing environment variables')
}

export const BOT_TOKEN = process.env.BOT_TOKEN
export const OPERATORS_CHAT_ID = +process.env.OPERATORS_CHAT_ID
export const COMPANY_NAME = process.env.COMPANY_NAME
