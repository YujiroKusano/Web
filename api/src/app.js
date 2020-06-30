// モジュールをロード
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require('dotenv').config();

// ポートとホストを設定
const PORT = process.env.PORT;
const HOST = process.env.HOST;

// expressを使用
const app = express();

// データベース接続
mongoose.connect(
  "mongodb://mongo/test",  // testというDBに接続しています
  { useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

const db = mongoose.connection;
db.once("opne", () => {
  // 接続できると以下のログが出力されます。
  // 接続できない場合はエラーが出力されます。
  console.log("Success MongoDB connected!");
});

// 指定されたポートを監視
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);