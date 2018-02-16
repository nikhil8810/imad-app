var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Blogone = {
  title: 'Blog-one | Nikhil',
  heading: 'Blog-one',
  date:'Feb 16 2018',
  content:`
            <h3>
                Personal details
            </h3>
           </div>
           <dic>
            <p>
                This is Nikhil, and i love developing.
            </p>
        </dic>
        <div>
            <h3>
                Profession details
            </h3>
        </div>
        <div>
            <p>
                This is the list of my work experience:
            </p>
                <ol>
                    <li>
                        company A:serious company.
                    </li>
                    <li>
                       2) company B:lazy company
                    </li>
                </ol>
        `
};

function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
var htmltemplate=`
  <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
          <div>
            <a href='/'>home</a>
          </div>
          <hr/>
             <h1>
               ${heading}
             </h1>
          <div>
               ${date}
          </div>
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

app.get('/blog-one', function (req, res) {
  res.send(createTemplate(Blogone));
});

app.get('/blog-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blog-two.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
