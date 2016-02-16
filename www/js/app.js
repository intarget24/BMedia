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

});