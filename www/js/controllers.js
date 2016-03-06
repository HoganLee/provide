angular.module('app.controllers', ['app.services'])

.controller('homeCtrl', function($scope) {

        })

.controller('donateCtrl', function($scope, $rootScope) {

})

.controller('donationDetailsCtrl', function($scope) {

        })

.controller('deliverDonationsCtrl', function($scope) {

        })

.controller('deliveryRequestsCtrl', function($scope, $cordovaGeolocation, PickupPoints) {
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
                    directionsDisplay.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            }); 
        })
})

.controller('pendingDeliveresCtrl', function($scope) {

        })

.controller('donationDeliveryCtrl', function($scope, $rootScope) {
  if ( ! $rootScope.hasOwnProperty('needDelivery') ) {
    $rootScope.needDelivery = true;
  }
})

.controller('notesCtrl', function($scope) {

        })

.controller('congratulationsCtrl', function($scope) {

        })

.controller('congratulations2Ctrl', function($scope) {

        })
