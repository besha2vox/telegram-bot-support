# Telegram Support Bot (Bun + TypeScript + grammY)

A lightweight Telegram support bot built with [grammY](https://grammy.dev/) using **Bun** and **TypeScript**.  
Includes TypeScript support, ESLint, and Prettier for code quality and consistency.

## Features

- Chat routing between users and operators
- Inline buttons for connecting and ending support sessions
- Session management per user and topic
- Clean TypeScript architecture
- ESLint + Prettier configured for Bun projects
- Hot reload / watch mode with Bun

## Requirements

- [Bun](https://bun.sh/) >= 1.0
- Telegram Bot Token
- Telegram supergroup with **message threads/topics** enabled

## Telegram Setup

### 1. Create a Telegram Bot

1. Open Telegram and search for [@BotFather](https://t.me/BotFather)
2. Start a chat and use `/newbot`
3. Follow the instructions to give your bot a name and username
4. After creation, you will receive a **bot token**.  
   Save it in your config (`BOT_TOKEN`).

### 2. Create a Supergroup

1. In Telegram, create a new group (or convert an existing group to a **supergroup**)
2. Add your bot as a member and **give it admin rights**
3. Enable **Topics**:
   - Go to **Group Settings → Topics → Enable Topics**
   - This allows the bot to create and manage message threads per user request

### 3. Get Group and Bot IDs

- **Bot Token:** from BotFather (example: `123456789:ABCDEF...`)
- **Operator Chat ID (Supergroup ID):**
  1. Send a message in your supergroup
  2. Use [@userinfobot](https://t.me/userinfobot) or a test script in grammY to log `ctx.chat.id`
  3. Save this ID in your `OPERATORS_CHAT_ID` in `src/config.ts`

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/telegram-support-bot.git
cd telegram-support-bot
```

Install dependencies with Bun:

```bash
bun install
```

## Configuration

Create a .env or configure src/config.ts with your bot token and operator chat ID:

```ts
// src/config.ts
export const BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN'
export const OPERATORS_CHAT_ID = 123456789
```

## Project Structure

```sh
src/
├─ bot.ts             # Bot initialization
├─ index.ts           # Entry point
├─ commands/          # Command handlers (e.g., /start)
├─ handlers/          # Message and callback query handlers
├─ services/          # Session, topic, and routing services
├─ keyboards/         # Inline keyboards
tsconfig.json         # TypeScript configuration
.eslintrc.cjs         # ESLint configuration (Flat Config)
.prettierrc           # Prettier configuration
```

## Development

Run the bot in watch mode (auto-restart on file changes):

```bash
bun run dev
```

Lint your code:

```bash
bun run lint
```

Format your code with Prettier:

```bash
bun run format
```

## Usage

1. Start the bot.
2. Users press Support to create a new support topic.
3. Operators see incoming requests and can connect using inline buttons.
4. Both user and operator can end the session using the End Dialog button.
5. Once the session ends, the user can create a new request.

## ESLint + Prettier

- ESLint checks TypeScript code quality and catches potential issues.
- Prettier ensures consistent code formatting.
- Integrated with Bun flat config for modern setup.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
