const fs = require("fs");
module.exports = {
  config:{
  name: "npx",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "farhan", 
  description: "Fun",
  category: "no prefix",
  usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
  const NAYAN = ['.com/ugGG2BY.mp4','ps://i.imgur.com/0HNqXfX.mp4','https://imgur.com/a/tYK6TZc','https://imgur.com/a/tYK6TZc','https://imgur.com/a/tYK6TZc','https://imgur.com/a/tYK6TZc',' https://imgur.com/a/tYK6TZc','https://imgur.com/a/tYK6TZc','https://imgur.com/a/tYK6TZc','https://imgur.com/a/tYK6TZc','https://imgur.com/a/tYK6TZc','https://imgur.com/a/tYK6TZc','https://imgur.com/a/tYK6TZc','https://imgur.com/a/tYK6TZc','https://imgur.com/a/tYK6TZc','https://imgur.com/a/tYK6TZc','https://imgur.com/a/tYK6TZc','https://imgur.com/a/tYK6TZc','https://imgur.com/a/tYK6TZc','https://imgur.com/a/tYK6TZc','https://imgur.com/a/tYK6TZc','https://imgur.com/a/tYK6TZc']
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

  if (body.indexOf("😗")==0 || body.indexOf("🫣")==0 || body.indexOf("🌺")==0 || body.indexOf("😟")==0 || body.indexOf("🧐")==0 || body.indexOf("🫶")==0 || body.indexOf("💘")==0 || body.indexOf("💕")==0 || body.indexOf("💖")==0 || body.indexOf("😒")==0 || body.indexOf("😩")==0 || body.indexOf("😯")==0 || body.indexOf("😫")==0 || body.indexOf("🤡")==0 || body.indexOf("🙈")==0 || body.indexOf("🙀")==0 || body.indexOf("🖤")==0 || body.indexOf("💥")==0 || body.indexOf("👏")==0 || body.indexOf("🤝")==0 || body.indexOf("🤷‍♂️")==0  || body.indexOf("🫡")==0 || body.indexOf("🤐")==0 || body.indexOf("🤨")==0 || body.indexOf("😐")==0 || body.indexOf("😶")==0 || body.indexOf("😑")==0 || body.indexOf("😮‍💨")==0 || body.indexOf("🫥")==0 || body.indexOf("🥴")==0 || body.indexOf("😵")==0 || body.indexOf("🤗")==0 || body.indexOf("🤷‍♀️")==0 || body.indexOf("🤕")==0 || body.indexOf("😎")==0 || body.indexOf("😦")==0 || body.indexOf("😓")==0 || body.indexOf("😖")==0 || body.indexOf("😈")==0 || body.indexOf("👿")==0 || body.indexOf("😻")==0 || body.indexOf("💔")==0 || body.indexOf("🧡")==0 || body.indexOf("🫦")==0 || body.indexOf("🤦‍♂️")==0 || body.indexOf("🤦‍♀️")==0 || body.indexOf("🙆‍♂️")==0 || body.indexOf("🙆‍♀️")==0 || body.indexOf("💏")==0 || body.indexOf("🗣️")==0 || body.indexOf("🫂")==0 || body.indexOf("🐒")==0 || body.indexOf("🐸")==0 || body.indexOf("🏵️")==0 || body.indexOf("🌹")==0 || body.indexOf("🌷")==0 || body.indexOf("🍁")==0 || body.indexOf("🌝")==0 || body.indexOf("⭐")==0 || body.indexOf("💌")==0 || body.indexOf("😞")==0 || body.indexOf("☹️")==0 || body.indexOf("😕")==0 || body.indexOf("😏")==0 || body.indexOf("🤨")==0 || body.indexOf("😔")==0 || body.indexOf("😇")==0 || body.indexOf("🤫")==0) {
    var msg = {
        body: "•⎯͢⎯⃝🙂_𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯⎯͢⎯⃝🤍🫶🌺!-:))",
        attachment: media
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {
  }
}
