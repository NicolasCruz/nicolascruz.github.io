// configurando rotas
app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  var inicioState = {
    name: 'inicio',
    url: '/',
    templateUrl: 'views/inicio.html'
  }
  var videosState = {
    name: 'videos',
    url: '/videos',
    templateUrl: 'views/videos.html'
  }
  var museuState = {
    name: 'museu',
    url: '/museu',
    templateUrl: 'views/museu.html'
  }
  var atividadesState = {
    name: 'atividades',
    url: '/atividades',
    templateUrl: 'views/atividades.html'
  }
  var sobreState = {
    name: 'sobre',
    url: '/sobre',
    templateUrl: 'views/sobre.html'
  }
  var contatoState = {
    name: 'contato',
    url: '/contato',
    templateUrl: 'views/contato.html'
  }
  var acessibilidadeState = {
    name: 'acessibilidade',
    url: '/acessibilidade',
    templateUrl: 'views/acessibilidade.html'
  }
  var jogosState = {
    name: 'jogos',
    url: '/jogos',
    templateUrl: 'views/jogos.html'
  }
  var quizState = {
    name: 'quiz',
    url: '/jogos/quiz',
    templateUrl: 'views/jogos/quiz.html'
  }
  var guerraState = {
    name: 'guerra',
    url: '/videos/guerra-do-paraguai',
    templateUrl: 'views/videos/guerra-do-paraguai.html'
  }

  $stateProvider.state(inicioState);
  $stateProvider.state(videosState);
  $stateProvider.state(museuState);
  $stateProvider.state(atividadesState);
  $stateProvider.state(sobreState);
  $stateProvider.state(contatoState);
  $stateProvider.state(acessibilidadeState);
  $stateProvider.state(jogosState);
  $stateProvider.state(quizState);
  $stateProvider.state(guerraState);

});
