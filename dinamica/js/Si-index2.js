/**
 * Created by Danilo on 23/04/2015.
 */
<!-- aqui vai o controller (poderia estar em um arquivo a parte) -->
<!-- carrega o módulo -->
var mvcApp = angular.module('mvcApp', []);
mvcApp.controller('siController', function siController($scope) {

    $scope.temasAprender = [

    ];

    $scope.temasAprendidos = [

    ];



    $scope.addTemaAprender = function() {
        $scope.temasAprender.push({name : $scope.temaAprender});
        $scope.temaAprender  = "";

    }

    $scope.addTemaAprendido = function() {
        $scope.temasAprendidos.push({name : $scope.temaAprendido});
        $scope.temaAprendido = "";

    }

    $scope.moveTemaAprendido = function(index) {
        $aprendido = $scope.temasAprendidos[index].name;
        $scope.removeTemaAprendido(index);
        $scope.temaAprender = $aprendido;
        $scope.addTemaAprender();
        addTemaAprender();

    }

    $scope.moveTemaAprender = function(index) {
        $aprender = $scope.temasAprender[index].name;
        $scope.removeTemaAprender(index);
        $scope.temaAprendido = $aprender;
        $scope.addTemaAprendido();
        addTemaAprendido();

    }
        $scope.removeTemaAprender = function(index) {
        $scope.temasAprender.splice(index, 1);
    };


    $scope.removeTemaAprendido = function(index) {
        $scope.temasAprendidos.splice(index, 1);

    }



});





















