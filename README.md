# Anekdot Bot for Telegram on NodeJs with using Telegraf

## Local setup instruction

Telegram Bot for searching jokes and different stuff given by external api. Also uses _node-cron_ sheduler to send joke every morning to all chats that were saved to MongoDB.

0. Install dependencies. And install _nodemon_ package if you don't have it.

```bash
npm i
npm i -g nodemon
```

1. Create .env file with your MongoDB URL and Telegram Bot API key.

```bash
MONGO_URL=*mongo_url*
BOT_API=*bot_api_key*
```

2. Run.

```bash
npm run start:dev
```
