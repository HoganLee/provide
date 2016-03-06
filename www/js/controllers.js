angular.module('app.controllers', ['app.services','ionic.service.push'])

.controller('homeCtrl', function($scope) {

        })

.controller('donateCtrl', function($scope, $rootScope) {

})

.controller('donationDetailsCtrl', function($scope) {

        })

.controller('deliverDonationsCtrl', function($scope) {

        })

.controller('deliveryRequestsCtrl', function($scope, $cordovaGeolocation, PickupPoints, $rootScope, $ionicUser, $ionicPush) {
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
})

.controller('pendingDeliveresCtrl', function($scope) {

        })

.controller('donationDeliveryCtrl', function($scope) {
})

.controller('notesCtrl', function($scope, $rootScope, $state) {
  $scope.makeApiRequest = function() {
    $rootScope.loading = true;
    setTimeout( function() {
      $state.go('congratulations');
      $rootScope.loading = false;
    }, 1000 );
  }
})

.controller('congratulationsCtrl', function($scope, $rootScope) {
  $rootScope.donate.dateSelected = false;
})

.controller('congratulations2Ctrl', function($scope) {
  $rootScope.volunteer.dateSelected = false;
})
