const { Telegraf, Markup } = require('telegraf');

const ContentTypes = require('./content-types');
const splitArrayToChunks = require('./heplers/array-to-chunk');
const getContent = require('./heplers/request-content-api');
const { createNewChat } = require('./db.controller');

const bot = new Telegraf(process.env.BOT_API);
const sections = splitArrayToChunks(Object.keys(ContentTypes));

bot.start(async (ctx) => {
  ctx.reply(
    'Жми че ты там хочешь и запомни че делать потому что эта инфа больше не появится. А ну еще я тебе каждый день в 5 утра буду присылать анекдот, чтобы ты просыпался (-ась господи) с улыбкой до ушей!!! 💖',
    Markup.keyboard(sections).resize()
  );

  createNewChat(ctx.message.chat.id);
});

bot.help((ctx) => ctx.reply('Боже я думаю ты сам разберешься че тут делать))))'));

Object.keys(ContentTypes).forEach((contentType) => {
  bot.hears(contentType, async (ctx) => {
    const content = await getContent(ContentTypes[contentType]);
    ctx.reply(content);
  });
});

bot.on('text', (ctx) => ctx.reply('Не понял 🤔\nНадо кнопки снизу жать иначе никак'));
bot.on('sticker', (ctx) => ctx.reply('Зачем мне стикер? 😵‍💫'));
bot.on('text', (ctx) => ctx.reply('Не понял 🤔\nНадо кнопки снизу жать иначе никак'));

bot.launch();
