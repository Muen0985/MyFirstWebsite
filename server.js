const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const appName = process.env.APP_NAME || 'MyWebsite';

// express.static 是用來提供靜態檔案的，而在路由設定中使用 app.use 來映射 CSS 檔案時
// 不需要額外的 app.use 語句。應該改成讓 express.static 處理靜態資源
app.use(express.static(path.join(__dirname)));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'indexmain.html'));
    console.log(`Request served by ${appName} node app`);
});

app.listen(port, () => {
    console.log(`${appName} node app is listening on port ${port}`);
});

