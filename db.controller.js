const mongoose = require('mongoose');
const cron = require('node-cron');

const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const chatSchema = new mongoose.Schema({ chat_id: Number });
const ChatModel = mongoose.model('Chat', chatSchema);

const createNewChat = async (chatId) => {
  const exists = await ChatModel.findOne({ chat_id: chatId });
  if (!exists) {
    ChatModel.create({ chat_id: chatId });
  }
};

cron.schedule('00 05 * * *', async () => {
  const chatIds = (await ChatModel.find({})).map((item) => item.chat_id);
  const randomJoke = await getContent(1);
  chatIds.forEach((chatId) => {
    bot.telegram.sendMessage(chatId, randomJoke);
  });
});

module.exports = { createNewChat };
