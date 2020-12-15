const express = require('express')
const app = express()
const path = require("path");

const port = 5858
// 위와 같이 express와 app을 변수로 사용한다.
app.get('/', (req, res) => { // get 메소드 일때,
    console.log(path.join(__dirname, "./Youtube_Clone"))
    res.sendFile(path.join(__dirname, "./Youtube_Clone", "index.html"))  //  응답 보내기
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})