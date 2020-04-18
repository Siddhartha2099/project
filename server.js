const express = require('express');
const hbs = require('hbs');
var app = express();
//app.set('view engine', 'hbs');
const port=process.env.PORT || 3000;
hbs.registerPartials(__dirname + '/views/partial')
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear()
});
hbs.registerHelper('Capt',(text)=>{
  return text.toUpperCase();
});
hbs.registerHelper('qwe',([string=''])=>{
  return string.toLowerFirst();
});
app.get('/',(req,res)=>{
  res.render('home.hbs',{
    pageTitle:'Home Page',
    welcomeMessage:'helo welcome'
  });
});
app.get('/welcome',(req,res)=>{
  res.render('welcome.hbs',{
    pageTitle:'Welcome Page',
    string:'Welcome to my web page',
  });
});
app.get('/Details',(req,res)=>{
  res.render('Details.hbs',{
    pageTitle:'About Page',
  })
})

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
  errorMessage: 'Unable to handle request'
  });
});

app.listen(port, () => {
  console.log('Server is up on port $ {port}');
});

