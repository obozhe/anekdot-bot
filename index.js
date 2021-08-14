const { Telegraf, Markup } = require('telegraf');
const express = require('express');
const app = express();

const ContentTypes = require('./content-types');
const splitArrayToChunks = require('./heplers/array-to-chunk');
const getContent = require('./heplers/request-content-api');
// const { createNewChat } = require('./db.controller');

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', function () {
  const bot = new Telegraf(process.env.BOT_API);
  const sections = splitArrayToChunks(Object.keys(ContentTypes));

  bot.start((ctx) => {
    ctx.reply(
      'Жми че ты там хочешь и запомни че делать потому что эта инфа больше не появится',
      Markup.keyboard(sections).resize()
    );

    // createNewChat(ctx.message.chat.id);
  });

  bot.help((ctx) => ctx.reply('Боже я думаю ты сам разберешься че тут делать))))'));

  Object.keys(ContentTypes).forEach((contentType) => {
    bot.hears(contentType, (ctx) => {
      const content = `sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]sdfsdfasdfsdfsafdsdfasfasdfas
fasdfasdfasdfasdfklamsdlfkmsa;dfma;sdfmsadfasdfas
dfasdfasdfasd'.;svmhowe8f23p[23f;kfsdv adv]`;
      getContent(ContentTypes[contentType])
        .then((rep) => {
          if (content && content.length > 4096) {
            const reply = content.match(/(.|[\r\n]){1,4096}/g);
            reply.forEach((chunk) => {
              ctx.reply(chunk);
            });
          } else {
            const reply = content || 'Похоже пришел пустой ответ на запрос... Попробуй еще раз';
            ctx.reply(reply);
          }
        })
        .catch(console.error);
    });
  });

  bot.on('text', (ctx) => ctx.reply('Не понял 🤔\nНадо кнопки снизу жать иначе никак'));

  bot.launch();
});
