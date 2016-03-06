// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic',
                       'app.controllers',
                       'app.routes',
                       'app.services',
                       'app.directives',
                       'ngCordova',
                       'ionic.service.push'
])
.config(['$ionicAppProvider', function($ionicAppProvider) {
  $ionicAppProvider.identify({
    app_id: '6604d6d0',
    api_key: '687b2bf923a38b4b5941b9516a81ffc1cdeb3bb0fdc6f7e5',
    dev_push: true
  });
}])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.run(function($rootScope) {
  $rootScope.donate = {};
  $rootScope.volunteer = {};
  $rootScope.donate.dateSelected = false;
  $rootScope.donate.categories = [
    {
      icon: 'icon-pasta.png',
      title: 'Pasta <small>(canned or dry) <br />and pasta sauces</small>',
      value: 'pasta',
      selected: false
    },
    {
      icon: 'icon-canned-meat-fish.png',
      title: 'Canned and frozen <br />meats and fish',
      value: 'canned-meat-fish',
      selected: false
    },
    {
      icon: 'icon-meat-alternatives.png',
      title: 'Meat alternatives <br /><small>(peanut butter, soy, <br />assorted nuts)</small>',
      value: 'meat-alternatives',
      selected: false
    },
    {
      icon: 'icon-canned-goods.png',
      title: 'Canned goods <br /><small>(beans, soups, and <br />stews)</small>',
      value: 'canned-goods',
      selected: false
    },
    {
      icon: 'icon-dairy.png',
      title: 'Dairy <br /><small>(fresh, canned, and <br />powdered milk)</small>',
      value: 'dairy',
      selected: false
    },
    {
      icon: 'icon-canned-vegetables-fruit.png',
      title: 'Canned vegetables <br />and fruit<br />&nbsp;',
      value: 'canned-vegetables-fruit',
      selected: false
    },
    {
      icon: 'icon-cereals.png',
      title: 'Whole grain cereals<br />&nbsp;',
      value: 'cereals',
      selected: false
    },
    {
      icon: 'icon-baby-food.png',
      title: 'Infant foods and <br />baby formula',
      value: 'baby-food',
      selected: false
    },
    {
      icon: 'icon-bathroom-tissue.png',
      title: 'Bathroom tissue <br />and diapers',
      value: 'bathroom-tissue',
      selected: false
    },
    {
      icon: 'icon-personal-hygiene.png',
      title: 'Personal hygiene <br />products',
      value: 'personal-hygiene',
      selected: false
    }
  ];
  $rootScope.donate.needDelivery = false;
  $rootScope.volunteer.dateSelected = false;
})
