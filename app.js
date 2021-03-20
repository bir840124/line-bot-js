// Token----------------------------------------------
// 建喵
var channelAccessToken = 'RcNVpDxw1KT5fXiqOxO8IV0UDVMxyASjyRoytm5YIQs+n3rpKPDNc4EaB73hOPrkhUP4/WKZhEWVm2+xaIrHcYKe6ZI5sDaQj2C1koCXra7gB1CncwnVHJ8raeQ0ocP0LPkzons6q5ZDNix9w6xYiQdB04t89/1O/w1cDnyilFU=';
var channelSecret = 'f41862ba4f038bff84debe318aa9ab54';

// 愛豬涵
var ZhuHanchannelAccessToken = 'pygbbeW5kIf60d0MuZC7D7OrfNmS4eMhQZgQR+3YQ1XJ9N35fR59+y5KCLjZQT+W9rv34mI2yIQluWQwtL0R4c9ANb0hrNrO41ON6A/O8EPo4fsqYNUaihmV+9gbWwCte4a7wqNm4HvLpWo1TUMYjQdB04t89/1O/w1cDnyilFU=';
var ZhuHanchannelSecret = '0c1639dc09eea256b78c79c6b86dd65e';


// Group----------------------------------------------
// toYoutube
var toYoutube = "C49598b4a99067a3989b7b0fb04eead6a";
// 歐森朋友們遊戲房
var toOusen = "C44fffd3a5d768c90caf8e6b3ca3c880d";
// Test
var toTest = "Cd7b765b3028cf191d8848fb4e615e855";
// 用8+9蹲姿表現低姿態 邊說著:好想做愛喔!
var toUniversity = "C4ee58af0131b00a254137213fb746a21";
// 智慧管家
var toSmartHousekeeper = "Ccf40ca53c6c035d575510d8be38ea168";
// User----------------------------------------------
// 建喵
var toJianMiau = "U6eab5cfb8cd73d12f0303e09ab1fc0ff";
// 筑涵
var toZhuHan = "Ud24bc3e60bea064e195d209a44785557";
// 愛豬涵->建喵
var toZhuHantoJianMiau = "U5ebf63dae55c8d9983467db928e5bbcf";
// 愛豬涵->豬涵
var toZhuHantoZhuHan = "U499df212964be1fe0277eb7deb15eb76";


// 引用linebot SDK
var linebot = require('linebot');
const fs = require('fs');
const express = require('express');
const app = express();

//讀取憑證及金鑰
const prikey = fs.readFileSync('privkey.pem', 'utf8');
const cert = fs.readFileSync('cert.pem', 'utf8');
const cafile = fs.readFileSync('chain.pem', 'utf-8');

//建立憑證及金鑰
const credentials = {
  key: prikey,
  cert: cert,
  ca: cafile
};

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: toJianMiau,
  channelSecret: channelSecret,
  channelAccessToken: channelAccessToken
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 準備要回傳的內容
  var replyMsg = `Hello你剛才說的是:${event.message.text}`;
  bot.push(toZhuHan, replyMsg);
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  event.reply(replyMsg).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, credentials, function () {
  console.log('[BOT已準備就緒]');
});