const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const path = require('path');

// Replace with your bot token from BotFather
const token = '7689155263:AAHnnO_igzTzou7F4CuFeQwy7Hxa307FFTk';

// Initialize the bot
const bot = new TelegramBot(token, { polling: true });

// Utility function to send an image from the /images folder
function sendImage(chatId, imageName, caption = '') {
  const filePath = path.join(__dirname, 'images', imageName);

  if (fs.existsSync(filePath)) {
    bot.sendPhoto(chatId, fs.createReadStream(filePath), { caption });
  } else {
    bot.sendMessage(chatId, `❌ Image "${imageName}" not found.`);
  }
}

// Define commands and corresponding images
bot.onText(/\/rengmirso/, (msg) => {
  sendImage(msg.chat.id, 'rengmirso.jpg', 'Here’s a whore you can CUM on 🐱');
});

bot.onText(/\/nijarlin/, (msg) => {
  sendImage(msg.chat.id, 'nijarlin.jpg', 'Here’s a cock sucking bitch that loves cum 🐶');
});

bot.onText(/\/junmoni/, (msg) => {
  sendImage(msg.chat.id, 'junmoni.jpg', 'Here’s a by birth street hoe 🐼');
});
bot.onText(/\/urlie/, (msg) => {
  sendImage(msg.chat.id, 'urlie.jpg', 'Here’s a street hoe 🐼');
});
bot.onText(/\/aunt/, (msg) => {
  sendImage(msg.chat.id, 'aunt.jpg', 'Here’s a dirty hoe 🐼');
});
bot.onText(/\/aunty/, (msg) => {
  sendImage(msg.chat.id, 'aunty.jpg', 'Here’s a by birth street hoe 🐼');
});
bot.onText(/\/aunty2/, (msg) => {
  sendImage(msg.chat.id, 'aunty2.jpg', 'Here’s a randi cock sucker 🐼');
});
bot.onText(/\/j2/, (msg) => {
  sendImage(msg.chat.id, 'j2.jpg', 'Here’s a by birth street hoe 🐼');
});
bot.onText(/\/junmoni1/, (msg) => {
  sendImage(msg.chat.id, 'junmoni1.jpeg', 'Here’s a by birth street hoe 🐼');
});
bot.onText(/\/j3/, (msg) => {
  sendImage(msg.chat.id, 'j3.jpg', 'Here’s a by birth street hoe 🐼');
});
bot.onText(/\/m1/, (msg) => {
  sendImage(msg.chat.id, 'm1.jpg', 'Here’s a by birth street hoe 🐼');
});
bot.onText(/\/m2/, (msg) => {
  sendImage(msg.chat.id, 'm2.jpg', 'Here’s a by birth street hoe 🐼');
});
bot.onText(/\/m3/, (msg) => {
  sendImage(msg.chat.id, 'm3.jpg', 'Here’s a by birth street hoe 🐼');
});
bot.onText(/\/n2/, (msg) => {
  sendImage(msg.chat.id, 'n2.jpg', 'Here’s a by birth street hoe 🐼');
});
bot.onText(/\/n3/, (msg) => {
  sendImage(msg.chat.id, 'n3.jpg', 'Here’s a by birth street hoe 🐼');
});
bot.onText(/\/n4/, (msg) => {
  sendImage(msg.chat.id, 'n4', 'Here’s a by birth street hoe 🐼');
});
bot.onText(/\/n5/, (msg) => {
  sendImage(msg.chat.id, 'n5.jpg', 'Here’s a by birth street hoe 🐼');
});
bot.onText(/\/r2/, (msg) => {
  sendImage(msg.chat.id, 'r2.jpg', 'Here’s a by birth street hoe 🐼');
});
bot.onText(/\/r3/, (msg) => {
  sendImage(msg.chat.id, 'r3.jpg', 'Here’s a by birth street hoe 🐼');
});
bot.onText(/\/r4/, (msg) => {
  sendImage(msg.chat.id, 'r4.jpg', 'Here’s a by birth street hoe 🐼');
});
bot.onText(/\/rendipi/, (msg) => {
  sendImage(msg.chat.id, 'rendipi.jpg', 'Here’s a by birth street hoe 🐼');
});
bot.onText(/\/rendipi2/, (msg) => {
  sendImage(msg.chat.id, 'rendipi2.jpg', 'Here’s a by birth street hoe 🐼');
});
// Help command to list available commands
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `👋 Welcome! You can use the following commands:
  /rengmirso - Get a whore photo
  /nijarlin - Get a cock sucker photo
  /junmoni - Get a street hoe photo
  /urlie - Get a street hoe photo
  /aunt - Get a street hoe photo
  /aunty - Get a street hoe photo
  /aunty2 - Get a street hoe photo
  /j2 - Get a street hoe photo
  /junmoni1 - Get a street hoe photo
  /j3 - Get a street hoe photo
  /m1 - Get a street hoe photo
  /m2 - Get a street hoe photo
  /m3 - Get a street hoe photo
  /n2 - Get a street hoe photo
  /n3 - Get a street hoe photo
  /n4 - Get a street hoe photo
  /n5 - Get a street hoe photo
  /r2 - Get a street hoe photo
  /r3 - Get a street hoe photo
  /r4 - Get a street hoe photo
  /rendipi - Get a street hoe photo
  /rendipi2 - Get a street hoe photo`);
  console.log("✅ Bot is running!");

});