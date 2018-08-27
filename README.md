# ejs-intro

## Comments:

ejs outputs the value of the variable in server.js into the template (escaped) and the output is valid HTML that gets rendered. The = sign is a validator (similar to handlebars)

app.get(‘/‘, function(request, response) {
  response.render(‘index’, {
    foo: ‘bar’
  });
});

Then, in the index.ejs file, you can put the variable foo inside of EJS tags:

<h1>Hello <%= foo %></h1>
    
After running the server, this is what gets rendered:

Hello bar
