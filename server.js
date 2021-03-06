var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title:'Article - one | Sunu JOhns',
        heading:'Article 1',
        date:'Sept 27,2016',
        content:`<P>This is my First Article. This is good.This is my First Article. This is good.This is my First Article. This is good.
                This is my First Article. This is good.This is my First Article. This is good.
                This is my First Article. This is good.</P>
                <P>This is my First Article. This is good.This is my First Article. This is good.This is my First Article. This is good.
                This is my First Article. This is good.This is my First Article. This is good.
                This is my First Article. This is good.</P>
                <P>This is my First Article. This is good.This is my First Article. This is good.This is my First Article. This is good.
                This is my First Article. This is good.This is my First Article. This is good.
                This is my First Article. This is good.</P>`
    },
    'article-two': {
        title:'Article - Two | Sunu JOhns',
        heading:'Article 2',
        date:'Sept 28,2016',
        content:`<P>This is my Second Article. This is good.This is my Second Article. This is good.This is my Second Article. This is good.
                </P>`
    },
    'article-three': {
        title:'Article - Three | Sunu JOhns',
        heading:'Article 3',
        date:'Sept 29,2016',
        content:`<P>This is my Third Article. This is good.This is my Third Article. This is good.This is my Third Article. This is good.
                This is my Third Article. This is good.This is my Third Article. This is good.
                This is my First Article. This is good.</P>`
                
    }
};

function createTemplate(data){
    var title=data.title;
    var heading = data.heading;
    var date =  data.date;
    var content = data.content;
var htmlTemplate =`<!DOCTYPE html>
<html>
    <head>
        <title>${title} </title>
        <meta name = "viewport" content = "width-device-width initial-scale-1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class = "container">
        <div>
        <a href= "/" > HOME</a>
        </div>
        <hr/>
        <h3>${heading}</h3>
        <div>${date}</div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>
`; 
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter =0;
app.get('/counter',function(req,res){
    counter = counter+1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name',function(req,res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});


app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});




app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
