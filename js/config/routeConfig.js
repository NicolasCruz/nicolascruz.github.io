// configurando rotas
app.config(function ($stateProvider, $urlRouterProvider,$locationProvider) {

  $urlRouterProvider.otherwise('/');
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);

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
      title: 'Acesso Educação | Vídeos'
    }
  }
  var museuState = {
    name: 'museu',
    url: '/museu',
    templateUrl: 'views/museu.html',
    data: {
      title: 'Acesso Educação | Museu'
    }
  }
  var atividadesState = {
    name: 'atividades',
    url: '/atividades',
    templateUrl: 'views/atividades.html',
    data: {
      title: 'Acesso Educação | Atividades'
    }
  }
  var atividadesAvisoState = {
    name: 'atividadesAviso',
    url: '/atividades/atividadesAviso',
    templateUrl: 'views/atividadesAviso.html',
    data: {
      title: 'Acesso Educação | Atividades'
    }
  }

  var atividadeOrigemPontaState = {
    controller: 'quizCtrl',
    name: 'atividadeOrigemPonta',
    url: '/atividades/origemPontaPora',
    templateUrl: 'views/atividades/atividadeGuerra.html',
    data: {
      title: 'Acesso Educação | Atividade A Origem de Ponta Porã'
    },
    resolve: {
      questions: function ($quizAPI) {
				return $quizAPI.getQuestions();
			}
    }
  }

  var sobreState = {
    name: 'sobre',
    url: '/sobre',
    templateUrl: 'views/sobre.html',
    data: {
      title: 'Acesso Educação | Sobre'
    }
  }
  var contatoState = {
    name: 'contato',
    url: '/contato',
    templateUrl: 'views/contato.html',
    data: {
      title: 'Acesso Educação | Contato'
    }
  }
  var acessibilidadeState = {
    name: 'acessibilidade',
    url: '/acessibilidade',
    templateUrl: 'views/acessibilidade.html',
    data: {
      title: 'Acesso Educação | Acessibilidade'
    }
  }
  var jogosState = {
    name: 'jogos',
    url: '/jogos',
    templateUrl: 'views/jogos.html',
    data: {
      title: 'Acesso Educação | Jogos'
    }
  }
  var quizState = {
    name: 'quiz',
    url: '/jogos/quiz',
    templateUrl: 'views/jogos/quiz.html',
    data: {
      title: 'Acesso Educação | Quiz'
    }
  }
  var origemPontaPoraState = {
    name: 'origemPontaPora',
    url: '/videos/origemPontaPora',
    templateUrl: 'views/videos/origemPontaPora.html',
    data: {
      title: 'Acesso Educação | Vídeo A Origem de Ponta Porã'
    }
  }

  $stateProvider.state(inicioState);
  $stateProvider.state(videosState);
  $stateProvider.state(museuState);
  $stateProvider.state(atividadesState);
  $stateProvider.state(atividadesAvisoState);
  $stateProvider.state(atividadeOrigemPontaState);
  $stateProvider.state(sobreState);
  $stateProvider.state(contatoState);
  $stateProvider.state(acessibilidadeState);
  $stateProvider.state(jogosState);
  $stateProvider.state(quizState);
  $stateProvider.state(origemPontaPoraState);
});
