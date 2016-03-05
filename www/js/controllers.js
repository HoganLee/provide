angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('MapCtrl', function($scope, $cordovaGeolocation) {
    var posOptions = {timeout: 20000, enableHighAccuracy: false};
    $cordovaGeolocation.getCurrentPosition(posOptions)
    .then(function (position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        var myLatLng = new google.maps.LatLng(lat, lng),
            mapOptions = {
                zoom: 16,
                center: myLatLng
            },
            map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }, function(err) {
        // error
    });
})

/*.directive('map', function() {
    return {
        restrict: 'A',
        link:function(scope, element, attrs){

          var zValue = 8;
          var lat = scope.myLat;
          var lng = scope.myLong;
          var myLatlng = new google.maps.LatLng(lat,lng),
            mapOptions = {
                zoom: zValue,
                center: myLatlng
            },
            map = new google.maps.Map(element[0],mapOptions);
        }
    };
})*/;
