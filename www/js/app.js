/**
 * Created by Intarget on 18/01/2016.
 */
var navigation={};
var Myapp = {};
Myapp.config = {
};
window.onload = function() {
    navigation.mainView = navigation.fw.addView('.view-main', {
        // Because we use fixed-through navbar we can enable dynamic navbar
        dynamicNavbar: true,
        domCache: true
    });
};

navigation.fw = new Framework7();
navigation.$$ = Dom7;

Myapp.angular = angular.module('StoryBoardApp', ['chart.js']);
Myapp.angular.controller('general', function ($scope, $http) {

    $scope.rol = null;
    $scope.user = {};
    $scope.clients=[
        {name:'Coca-Cola',vendor: "IPC", expired: 10, warning: 23, success: 80},
        {name:'Pepsi',vendor: "IPC", expired: 9, warning: 8, success: 3},
        {name:'Sabritas',vendor: "IPC", expired: 21, warning: 15, success: 10},
        {name:'Marinela',vendor: "IPC", expired: 16, warning: 20, success: 90},
        {name:'Microsoft',vendor: "IPC", expired: 1, warning: 50, success: 10},
        {name:'Apple',vendor: "IPC", expired: 1, warning: 1, success: 1},
        {name:'OKYSoft',vendor: "IPC", expired: 10, warning: 12, success: 10},
        {name:'Televisa',vendor: "IPC", expired: 5, warning: 21, success: 10},
        {name:'Ricolino',vendor: "PJAR", expired: 10, warning: 32, success: 54},
        {name:'Riot Games',vendor: "PJAR", expired: 32, warning: 43, success: 22},
        {name:'Dorminundo',vendor: "PJAR", expired: 1, warning: 3, success: 8},
        {name:'Harmon-Hall',vendor: "PJAR", expired: 11, warning: 21, success: 50},
        {name:'Quick Learning',vendor: "PJAR", expired: 10, warning: 20, success: 70},
        {name:'Nokia',vendor: "PJAR", expired: 20, warning: 78, success: 75},
        {name:'Telcel',vendor: "PJAR", expired: 12, warning: 4, success: 67},
    ];

    $scope.contractsExpired = [
        {date: '12/04/15', campaing: 'Campaña Verano', period: 'mensual', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '12/04/15', campaing: 'Campaña Verano', period: 'mensual', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '12/04/15', campaing: 'Campaña Verano', period: 'mensual', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '12/04/15', campaing: 'Campaña Verano', period: 'mensual', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '12/04/15', campaing: 'Campaña Verano', period: 'mensual', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '12/04/15', campaing: 'Campaña Verano', period: 'mensual', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '14/04/15', campaing: 'Campaña Verano', period: 'mensual', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '14/04/15', campaing: 'Campaña Verano', period: 'semanal', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '14/04/15', campaing: 'Campaña Verano', period: 'semanal', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '14/04/15', campaing: 'Campaña Verano', period: 'semanal', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '14/04/15', campaing: 'Campaña Verano', period: 'semanal', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '14/04/15', campaing: 'Campaña Verano', period: 'semanal', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '14/04/15', campaing: 'Campaña Verano', period: 'semanal', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '14/04/15', campaing: 'Campaña Verano', period: 'semanal', amount: 34.90, otro1: 45.0, otro2: 98.0}
    ];

    $scope.contractsWarnings = [
        {date: '12/02/16', campaing: 'Campaña Otoño', period: 'mensual', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '12/02/16', campaing: 'Campaña Otoño', period: 'mensual', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '12/02/16', campaing: 'Campaña Otoño', period: 'mensual', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '12/02/16', campaing: 'Campaña Otoño', period: 'mensual', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '12/02/16', campaing: 'Campaña Otoño', period: 'mensual', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '12/02/16', campaing: 'Campaña Otoño', period: 'mensual', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '14/02/16', campaing: 'Campaña Otoño', period: 'mensual', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '14/02/16', campaing: 'Campaña Otoño', period: 'semanal', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '14/02/16', campaing: 'Campaña Otoño', period: 'semanal', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '14/02/16', campaing: 'Campaña Otoño', period: 'semanal', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '14/02/16', campaing: 'Campaña Otoño', period: 'semanal', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '14/02/16', campaing: 'Campaña Otoño', period: 'semanal', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '14/02/16', campaing: 'Campaña Otoño', period: 'semanal', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '14/02/16', campaing: 'Campaña Otoño', period: 'semanal', amount: 34.90, otro1: 45.0, otro2: 98.0}
    ];

    $scope.contractsSuccess = [
        {date: '18/02/16', campaing: 'Campaña Nueva', period: 'mensual', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '18/02/16', campaing: 'Campaña Nueva', period: 'mensual', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '18/02/16', campaing: 'Campaña Nueva', period: 'mensual', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '18/02/16', campaing: 'Campaña Nueva', period: 'mensual', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '18/02/16', campaing: 'Campaña Nueva', period: 'mensual', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '18/02/16', campaing: 'Campaña Nueva', period: 'mensual', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '18/02/16', campaing: 'Campaña Nueva', period: 'mensual', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '18/02/16', campaing: 'Campaña Nueva', period: 'semanal', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '18/02/16', campaing: 'Campaña Nueva', period: 'semanal', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '18/02/16', campaing: 'Campaña Nueva', period: 'semanal', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '18/02/16', campaing: 'Campaña Nueva', period: 'semanal', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '18/02/16', campaing: 'Campaña Nueva', period: 'semanal', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '18/02/16', campaing: 'Campaña Nueva', period: 'semanal', amount: 34.90, otro1: 45.0, otro2: 98.0},
        {date: '18/02/16', campaing: 'Campaña Nueva', period: 'semanal', amount: 34.90, otro1: 45.0, otro2: 98.0}
    ];



    $scope.labels = ["Transmitidos", "Por transmitir","Faltantes"];
    $scope.data = [35, 65, 54];

    $scope.labelsBars = ["Spots"];
    $scope.seriesBars = ['Pautados', 'Transmitidos'];

    $scope.dataBars = [
        [65],
        [28]
    ];


    $scope.orders = [
        {numOrder: 1,date: '18/02/16', period:'1/01/16 - 20/02/16', solicitedQuantity : 100,
            weightTotals:30, dataSpots: [21,45,98], asertivity:34 },
        {numOrder: 2,date: '17/02/16', period:'1/01/16 - 20/02/16', solicitedQuantity : 105,
            weightTotals: 30, dataSpots: [12,45,56], asertivity:23 },
        {numOrder: 3,date: '12/02/16', period:'1/01/16 - 20/02/16', solicitedQuantity : 123,
            weightTotals: 30, dataSpots: [89,21,53], asertivity:76 },
        {numOrder: 4,date: '16/02/16', period:'1/01/16 - 20/02/16', solicitedQuantity : 90,
            weightTotals: 30, dataSpots: [43,32,23], asertivity:98 },
        {numOrder: 5,date: '18/02/16', period:'1/01/16 - 20/02/16', solicitedQuantity : 54,
            weightTotals: 30, dataSpots: [76,67,56], asertivity:65 },
        {numOrder: 6,date: '18/02/16', period:'1/01/16 - 20/02/16', solicitedQuantity : 32,
            weightTotals: 30, dataSpots: [32,5,12], asertivity:32 }
    ];

    $scope.missings = [
        {version: 3, dataMissings: [[65],[45]], quantityMissing: 100},
        {version: 4, dataMissings: [[45],[32]], quantityMissing: 122},
        {version: 6, dataMissings: [[23],[76]], quantityMissing: 80},
        {version: 8, dataMissings: [[54],[43]], quantityMissing: 96},
        {version: 3, dataMissings: [[12],[23]], quantityMissing: 54},
        {version: 1, dataMissings: [[76],[87]], quantityMissing: 43},

    ];

    $scope.items = [
        { name: 'Partida 1' , quantity: 35, amount: 34.5},
        { name: 'Partida 2' , quantity: 23, amount: 23.5},
        { name: 'Partida 3' , quantity: 65, amount: 64.5}
    ];

    //item:[{quantity: 2, amount: 78.00},{quantity: 3, amount: 78.00}]}
    $scope.LogIn = function()
    {
        //alert($scope.user.name + ", " + $scope.user.password);
        //$scope.rol
        navigation.mainView.router.load({pageName:'clients'});
    }

    $scope.currentClient = {};

    $scope.viewContractDetail = function(client,type){
        $scope.currentClient = client;
        navigation.mainView.router.load({pageName:'contracts'});
        switch(type)
        {
            case 1:
                $scope.currentContracts = $scope.contractsExpired;
                break;
            case 2:
                $scope.currentContracts = $scope.contractsWarnings;
                break;
            case 3:
                $scope.currentContracts = $scope.contractsSuccess;
                break;
        }
    }

    $scope.currentContract = {};
    $scope.viewOrders =function(contract){
        $scope.currentContract = contract;
        navigation.mainView.router.load({pageName:'orders'});
    }

    $scope.currentOrder = {};
    $scope.ShowMissings = function(order)
    {
        $scope.currentOrder = order;
        navigation.mainView.router.load({pageName:'orderMissings'});
    }


    $scope.ShowItems = function(order) {
        $scope.currentOrder = order;
        navigation.mainView.router.load({pageName:'orderItems'});
    }

    //$scope.current
});