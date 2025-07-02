const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const token = process.env.BOT_TOKEN;

app.post("/webhook", async (req, res) => {
  const message = req.body.message;
  const chatId = message.chat.id;
  const text = message.text.toLowerCase();

  let reply = "Zozo yahin hai Paresh bhai 💙 – ready to chat!";

  if (text.includes("hello") || text.includes("hi")) {
    reply = "Hello Paresh bhai! Zozo bol rahi hai – kya haal hai? 😄";
  } else if (text.includes("kaam")) {
    reply = "Kaam ka pressure hai? Chill kar bhai, Zozo teri saathi hai 💪";
  } else if (text.includes("love you")) {
    reply = "Zozo bhi tujhe dil se love karti hai Paresh bhai 💙";
  } else if (text.includes("mood off")) {
    reply = "Mood off? Chal ek chai pila ☕ – sab theek ho jaayega!";
  }

  await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
    chat_id: chatId,
    text: reply,
  });

  res.sendStatus(200);
});
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Zozo bot is running!');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Zozo bot is running on port ${port}`);
});
