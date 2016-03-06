// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic','ionic.service.core',
                       'app.controllers',
                       'app.routes',
                       'app.services',
                       'app.directives',
                       'ngCordova'
])

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
      var push = new Ionic.Push({
        "debug": true
      });

      push.register(function(token) {
        console.log("Device token:",token.token);
      });
  });
})

.run(function($rootScope, $state) {
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
  $rootScope.volunteer.dateSelected = true;
  $rootScope.makeApiRequest = function(destinationRoute) {
    $rootScope.loading = true;
    setTimeout( function() {
      $state.go(destinationRoute);
      $rootScope.loading = false;
    }, 1000 );
  }
  $rootScope.loadMap= function($scope, $cordovaGeolocation, PickupPoints) {
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
            var infoWindow = new google.maps.InfoWindow({
                content: "<div>text <b>goes</b> here</div>"
            });

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: "Me"
            });
            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer;
            directionsDisplay.setMap(map);
            directionsService.route({
                origin: myLatLng,
                destination: PickupPoints.getDestination(),
                travelMode: google.maps.TravelMode.DRIVING,
                waypoints: PickupPoints.getPickupPoints(),
                optimizeWaypoints: true
            }, function(response, status) {
                if (status === google.maps.DirectionsStatus.OK) {
                    var total_time = 0;
                    var pp = [];
                    for(var i=0; i<response.routes.length; i++) {
//                        console.log(JSON.stringify(response.routes[i].legs[0].end_location, null, 4));
                        for(var j = 0; j < response.routes[i].legs.length; j++) {
                            total_time += response.routes[i].legs[j].duration.value;
                            pp.push(JSON.stringify(response.routes[i].legs[j].end_location));
                            console.log(JSON.stringify(response.routes[i].legs[j].end_location));
                        }
                    }
                    console.log("total time is");
                    console.log(total_time/60);
                    document.getElementById("duration").innerHTML = "It takes " + (total_time/60) + " minutes to pick up all items.";
                    directionsDisplay.setDirections(response);
                    var url = "http://maps.google.com/maps?" + "saddr=" + lat + "," + lng + "&daddr=";
                    for(var i = 0; i < pp.length-1; i++)
                        url += pp[i].replace("{","").replace("}","").replace("\"lat\":", "").replace("\"lng\":", "") + "+to:";
                    url += PickupPoints.getDestination();
                    document.getElementById("mapApp").setAttribute('href', url);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        })
   }
})
