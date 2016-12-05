

module.exports = function(app){

  var controller = app.controller.contato;

  // Rota para pegar lista
  app.get('/contatos', controller.listaContatos);

  // Rota para pegar um contato
  app.get('/contatos/:id', controller.obterContato);

}
