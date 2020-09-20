const express = require('express');

const app = express()
const dir = __dirname + '/public/'
console.log('dir', dir)
app.use(express.static(dir)) //allows serving of static files in public folder

const server = app.listen(8686, () => {
  console.log('App listening at port %s', server.address().port)
})

//visit http://127.0.0.1:8686/index.html
//index is in /8values_fe/public/ folder.