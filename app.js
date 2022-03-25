const express = require('express');
const path = require('path')
const app = express();
app.use(express.static('public'));

// const myLogger = (req, res, next) => {
//   console.log('Middleware Log 1');
//   next();
// }



app.use(express.static('public'));
// app.use(myLogger);


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});



app.get('/', (req, res) => {
  const photo = {
    id: 1,
    name: "Photo Name",
    description: "Photo description"
  }
  res.send(photo)
})

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});

