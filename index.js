const { default: axios } = require('axios');
const dotenv = require('dotenv');
const TelegramBot = require('node-telegram-bot-api/lib/telegram');
dotenv.config();

// Token fetch using @BOTFather

const TOKEN = process.env.BOT_TOKEN;

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('message', (msg) => {
  const text = msg.text;
  console.log('Message received');

  bot.sendMessage(msg.chat.id, 'you said: ' + text);
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello How may i help you!!');
});

bot.onText(/\/joke/, async (msg) => {
  const joke = await axios.get(
    'https://official-joke-api.appspot.com/random_joke'
  );

  const setup = joke.data.setup;
  const punchline = joke.data.punchline;

  bot.sendMessage(msg.chat.id, setup + ' ' + punchline);
});

bot.onText('xyz', (msg) => {
  bot.sendMessage(msg.chat.id, 'Hii Jiii!!!');
});
