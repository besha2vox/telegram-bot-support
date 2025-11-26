# Telegram Support Bot (Bun + TypeScript + grammY)

A lightweight Telegram support bot built with [grammY](https://grammy.dev/) using **Bun** and **TypeScript**.  
Includes TypeScript support, ESLint, and Prettier for code quality and consistency.

---

## Features

- Chat routing between users and operators
- Inline buttons for connecting and ending support sessions
- Session management per user and topic
- Clean TypeScript architecture
- ESLint + Prettier configured for Bun projects
- Hot reload / watch mode with Bun

---

## Requirements

- [Bun](https://bun.sh/) >= 1.0
- Node environment for Telegram API access (optional, Bun handles TS natively)
- Telegram Bot Token

---

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

This project is licensed under the MIT License. See the LICENSE file for details.
