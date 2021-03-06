const path = require('path');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


//default root directories for css,js,images(Static Files)
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

//view engine pug/ejs to dynamicly control front end
app.set('view engine', 'ejs');

//views with start root directory which is natours
app.set('views', '');

//adding the route
const route = require('./routes/route');
app.use(route);

const error = require('./controllers/error');
app.use(error.get404);
//Start the server
console.log("Listening on " + port);
app.listen(port, () => {
});