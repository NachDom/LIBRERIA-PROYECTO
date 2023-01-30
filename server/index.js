const express = require('express');
const morgan = require('morgan')
const app = express();


//Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Routes

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})