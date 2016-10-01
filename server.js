var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'articleOne': {
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
    'articleTwo': {
        title:'Article - Two | Sunu JOhns',
        heading:'Article 2',
        date:'Sept 28,2016',
        content:`<P>This is my Second Article. This is good.This is my Second Article. This is good.This is my Second Article. This is good.
                </P>`
    },
    'articleThree': {
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

app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articleName));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
