app.controller("fontCtrl", function ($scope) {

  function strReplace(haystack, needle, replacement) {
    var temp = haystack.split(needle);
    return temp.join(replacement);
  }

  function setDefaultZoom(obj_tratados, reset_fonte, reset_linha, contador) {
      for (var i in obj_tratados) {

          var tratados = $(obj_tratados[i]);
          if (contador == 0) {
              reset_fonte[i] = strReplace(tratados.css('fontSize'), 'px', '');
              reset_linha[i] = strReplace(tratados.css('lineHeight'), 'px', '');
          }
      }
  }

  var div = '#content',
      contador = 0,
      obj_tratados = [
                      div,
                      div + ' p',
                      div + ' h3'
                     ],
      reset_fonte = [],
      reset_linha = [];
      var min = 9;
      var max = 32;

  setDefaultZoom(obj_tratados, reset_fonte, reset_linha, contador);

  console.log(reset_fonte);
  console.log(reset_linha);

  $scope.modifyFont = function(param){

    for (var i in obj_tratados) {

      var tratados = $(obj_tratados[i]);
      var tamanho_fonte = strReplace(tratados.css('fontSize'), 'px', '');
      var tamanho_entrelinha = strReplace(tratados.css('lineHeight'), 'px', '');
      switch (param) {
        case 'a_mais':
            if (tamanho_fonte <= max) {
                tamanho_fonte++;
                 // tamanho entrelinha aumento
                 tamanho_entrelinha = (tamanho_fonte * 1.8);
                 tamanho_entrelinha++;
                contador++;

            }
            break;
        case 'a_menos':
            if (tamanho_fonte >= min) {
                tamanho_fonte--;
               // tamanho entrelinha redução;
                var val = tamanho_entrelinha - (tamanho_entrelinha * 3 / 100);
               // tamanho_entrelinha = arredondarValor(val);
               tamanho_entrelinha = (tamanho_fonte * 1.8);
                tamanho_entrelinha--;
                contador++;

            }
            break;
        case 'a_reset':
        default:
            // resetar
            tamanho_fonte = reset_fonte[i];
            tamanho_entrelinha = reset_linha[i];
            break;
      }
      tratados.css({'fontSize': tamanho_fonte + 'px', 'lineHeight': tamanho_entrelinha + 'px'});
    }
  }


});
