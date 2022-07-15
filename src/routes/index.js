const bodyParser = require('body-parser');
const pessoasRoute = require('./pessoasRoute');
const niveisRoute = require('./niveisRoute');

module.exports = app => {    

    app.get('/', (req, res) => res.send('Hello World'));
    
    app.use(
        bodyParser.json(),
        pessoasRoute,
        niveisRoute
        );
        
}