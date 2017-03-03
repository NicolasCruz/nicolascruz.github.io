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
      title: 'Acesso Educação | Vídeos'
    }
  }
  var museuState = {
    name: 'museu',
    url: '/museu',
    templateUrl: 'views/museu.html',
    data: {
      title: 'Acesso Educação| Museu'
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
    url: '/atividadesAviso',
    templateUrl: 'views/atividadesAviso.html',
    data: {
      title: 'Acesso Educação | Atividades'
    }
  }

  var atividadeGuerraState = {
    name: 'atividadeGuerra',
    url: '/atividadeGuerra',
    templateUrl: 'views/atividades/atividadeGuerra.html',
    data: {
      title: 'Acesso Educação | Atividade Guerra do Paraguai'
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
  var guerraState = {
    name: 'guerra',
    url: '/videos/guerra-do-paraguai',
    templateUrl: 'views/videos/guerra-do-paraguai.html',
    data: {
      title: 'Acesso Educação | Guerra do Paraguai'
    }
  }

  $stateProvider.state(inicioState);
  $stateProvider.state(videosState);
  $stateProvider.state(museuState);
  $stateProvider.state(atividadesState);
  $stateProvider.state(atividadesAvisoState);
  $stateProvider.state(atividadeGuerraState);
  $stateProvider.state(sobreState);
  $stateProvider.state(contatoState);
  $stateProvider.state(acessibilidadeState);
  $stateProvider.state(jogosState);
  $stateProvider.state(quizState);
  $stateProvider.state(guerraState);
});
