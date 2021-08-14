// Telegram Bot Api does't allow to send message with length more than 4096 and empty messages
module.exports = (bot) => {
  return (chatId, content) => {
    if (content && content.length > 4096) {
      const reply = content.match(/(.|[\r\n]){1,4096}/g);
      reply.forEach((chunk) => {
        bot.telegram.sendMessage(chatId, chunk);
      });
    } else {
      const reply = content || 'Похоже пришел пустой ответ на запрос... Попробуй еще раз';
      bot.telegram.sendMessage(chatId, reply);
    }
  };
};
