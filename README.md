# ejs-intro

## Comments:

ejs outputs the value of the variable in server.js into the template (escaped) and the output is valid HTML that gets rendered. The = sign is a validator (similar to handlebars)
<h1>Hello <%=foo%></h1>

ejs loops through the array on server.js and outputs the data provided
<ul>
    <% for(var person of people) { %>
    <li><%= person.name %></li>
    <% } %>
</ul>
