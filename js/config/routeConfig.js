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
    templateUrl: 'views/videos.html',
    data: {
      title: 'Aprenda História | Vídeos'
    }
  }
  var museuState = {
    name: 'museu',
    url: '/museu',
    templateUrl: 'views/museu.html',
    data: {
      title: 'Aprenda História | Museu'
    }
  }
  var atividadesState = {
    name: 'atividades',
    url: '/atividades',
    templateUrl: 'views/atividades.html',
    data: {
      title: 'Aprenda História | Atividades'
    }
  }
  var sobreState = {
    name: 'sobre',
    url: '/sobre',
    templateUrl: 'views/sobre.html',
    data: {
      title: 'Aprenda História | Sobre'
    }
  }
  var contatoState = {
    name: 'contato',
    url: '/contato',
    templateUrl: 'views/contato.html',
    data: {
      title: 'Aprenda História | Contato'
    }
  }
  var acessibilidadeState = {
    name: 'acessibilidade',
    url: '/acessibilidade',
    templateUrl: 'views/acessibilidade.html',
    data: {
      title: 'Aprenda História | Acessibilidade'
    }
  }
  var jogosState = {
    name: 'jogos',
    url: '/jogos',
    templateUrl: 'views/jogos.html',
    data: {
      title: 'Aprenda História | Jogos'
    }
  }
  var quizState = {
    name: 'quiz',
    url: '/jogos/quiz',
    templateUrl: 'views/jogos/quiz.html',
    data: {
      title: 'Aprenda História | Quiz'
    }
  }
  var guerraState = {
    name: 'guerra',
    url: '/videos/guerra-do-paraguai',
    templateUrl: 'views/videos/guerra-do-paraguai.html',
    data: {
      title: 'Aprenda História | Guerra do Paraguai'
    }
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
