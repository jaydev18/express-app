// const express = require ('express')

// //express app
// const app = express()


// //listen for request
// app.listen(3000)
// app.get('/', (req, res)=>{
//     // res.send('<p>Home page</p> ')
//     res.sendFile('./views/index.html',{root: __dirname})
   
// })
// app.get('/about', (req, res)=>{
//     res.send('<p>About page</p> ')
//     // res.sendFile('../views/about.html', {root: __dirname})
// })


const express = require('express');
const path = require('path');

// Express app
const app = express();

// Listen for requests
app.listen(3000);

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../views', 'index.html');
  res.sendFile(filePath);
});

app.get('/about', (req, res) => {
//   res.send('<p>About page</p>');
const filePath = path.join(__dirname, '../views', 'about.html');
res.sendFile(filePath);
});
