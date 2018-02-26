var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Blogs = {
    'blog-one': {
  title: 'Blog-one | Nikhil',
  heading: 'Blog-one',
  date:'Feb 16 2018',
  content:`
            <h3>
                Personal details
            </h3>
           </div>
           <div>
            <p>
                This is Nikhil, and i love developing.
            </p>
        </div>
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
},
    'blog-two': {
  title: 'Blog-two | Nikhil',
  heading: 'Blog-two',
  date:'Feb 16 2018',
  content:`<div>
            <h3>
                News Headlines
            </h3>
        </div>
        <div>
            <p>
                Todays news:
            </p>
            <ul style="list-style-type:disc">
                <li>
                    company A overtook company B.
                </li>
                <li>
                    Kolkata is the bigest city after Mumbai.
                </li>
                <li>
                    Tanmay bhatt makes the fun of sachin Tendulker.
                </li>
            </ul>
        </div>
        `
        
    }
};

function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
var htmlTemplate=`
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

var counter=0;
app.get('/counter', function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/:blogName', function (req, res) {
  var blogName = req.params.blogName;
  res.send(createTemplate(Blogs[blogName]));
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
