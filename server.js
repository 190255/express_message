const express = require("express");
// expressモジュールの読み込み

const app = express();
// サーバ作成

// ルーティング アロー関数の書き方
app.get("/", (req, res) => {
    res.send("Hello Express!");
});
// Webルートにリクエストされたらレスポンスする
// 無名関数の書き方
// app.get("/", function(req, res) {
// });

app.listen(3000);

console.log("Server listen: http://localhost:3000");