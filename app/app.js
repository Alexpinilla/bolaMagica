'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [

])
  .component('app', {
    templateUrl: './app.html',
    controller: function ($scope) {
      this.hola = 'hola mundo'
      this.bolaMagica = [
        "Combatirse a sí mismo es la guerra más difícil; vencerse a sí mismo es la victoria más bella",
        "El verdadero soldado no lucha porque odia lo que tiene delante, sino porque ama lo que tiene detrás",
        "La gente duerme pacíficamente en sus camas por la noche sólo porque existen hombres duros dispuestos a usar la violencia a favor de ellos",
        "El arte supremo de la guerra es someter al enemigo sin luchar.",
        "Puedes tener paz. O puedes tener libertad. Nunca cuentes con tener ambas cosas a la vez.",
        "Solo los muertos han visto el final de la guerra.",
        "Daría todo lo que sé por la mitad de lo que ignoro",
        "Vivir sin filosofar es, propiamente, tener los ojos cerrados, sin tratar de abrirlos jamás",
        "El tiempo es una imagen móvil de la eternidad",
        "La música es para el alma lo que la gimnasia para el cuerpo",
        "Los amigos se convierten con frecuencia en ladrones de nuestro tiempo"
      ]
      this.frase;
      this.fraseDisplay = 'invisible'
      this.log = []
      this.mostrarFrase = () => {
        if ($scope.fraseIntroducida != undefined) {
          this.frase = Math.random()
          console.log(this.frase)
          this.frase = parseInt(this.frase * 10)
          console.log(this.frase)
          this.fraseDisplay = 'visible'
          console.log($scope.fraseIntroducida)
          this.log.push('Tu pregunta: ' + $scope.fraseIntroducida)
          this.log.push('Respuesta de la bola mágica: ' + this.bolaMagica[this.frase])
          $scope.fraseIntroducida = (undefined)
        }
        else {
          alert('Introduce una pregunta')
        }
      }


    }
  })