const mongoose = require('mongoose');

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

const getChats = async () => {
  return await ChatModel.find({});
};

module.exports = { createNewChat, getChats };
