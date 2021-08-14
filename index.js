require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');
const cron = require('node-cron');

const bot = new Telegraf(process.env.BOT_API);

const ContentTypes = require('./content-types');
const splitArrayToChunks = require('./heplers/array-to-chunk');
const getContent = require('./heplers/request-content-api');
const botReply = require('./heplers/handle-bot-send-message.helper')(bot);
const { createNewChat, getChats } = require('./db.controller');

const sections = splitArrayToChunks(Object.keys(ContentTypes));

bot.start((ctx) => {
  ctx.reply(
    'Выбери из меню категорию и получи случайный анекдот, тост и многое другое.',
    Markup.keyboard(sections).resize()
  );

  createNewChat(ctx.message.chat.id);
});

Object.keys(ContentTypes).forEach((contentType) => {
  bot.hears(contentType, (ctx) => {
    getContent(ContentTypes[contentType])
      .then((content) => {
        botReply(ctx.message.chat.id, content);
      })
      .catch(console.error);
  });
});

bot.on('text', (ctx) => ctx.reply('Не понял 🤔'));

bot.launch();

cron.schedule('00 05 * * *', async () => {
  const chatIds = (await getChats()).map((item) => item.chat_id);
  const randomJoke = await getContent(1);
  const goodMorning = 'Доброе утро 🌞 \nВот тебе случаййный анекдот для поднятия настроения!';
  chatIds.forEach((chatId) => {
    bot.telegram.sendMessage(chatId, goodMorning);
    botReply(chatId, randomJoke);
  });
});
