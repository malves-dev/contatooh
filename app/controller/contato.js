

var contatos = [
     {_id: 1, nome: 'João Silva', email: 'js@empresa.com'},
     {_id: 2, nome: 'Carlos Magno', email: 'cm@empresa.com'},
     {_id: 3, nome: 'Charlie Marcos', email: 'chm@empresa.com'},
     {_id: 4, nome: 'Marlene Alves da Silva', email: 'mvs@empresa.com'},
     {_id: 5, nome: 'Júlia Mascarenhas', email: 'jm@empresa.com'},
     {_id: 6, nome: 'Maria Tavares', email: 'mt@empresa.com'}
];

module.exports = function(){

  var controller = {};

  // Lista de contatos
  controller.listaContatos = function(req, res){
        res.json(contatos);
  };

  // Obten contato caso ele exista
  controller.obterContato = function(req, res){
        var idContato = req.params.id;
        var contato = contatos.filter(function(contato){
            return contato._id == idContato;
        })[0];

        contato ? res.json(contato) : res.status(404).send('Contato não encontrado!');
  };

  return controller;
}
