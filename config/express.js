var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

// Modulo global do express para a applicação, retorna um instância do express
module.exports = function() {
    var port = 8080;
    var app = express();
    //var home = require('../app/route/home');

    // Porta da app
    app.set('port', port);

    // Middleware, public acessará o mediador express com os recursos estáticos
    app.use(express.static('./public'));

    // Engine ejs ajustada.
    app.set('view engine', 'ejs');

    // Caminho das views para o express
    app.set('views', './app/view');

    // Rota do home
    //home(app);
    load('model', {cwd:'app'})
      .then('controller')
      .then('route')
      .into(app);

    return app;
};
