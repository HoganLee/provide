angular.module('app.controllers', ['app.services'])

.controller('homeCtrl', function($scope) {

        })

.controller('donateCtrl', function($scope) {
  $scope.categories = [
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

.controller('donationDeliveryCtrl', function($scope) {

        })

.controller('notesCtrl', function($scope) {

        })

.controller('congratulationsCtrl', function($scope) {

        })

.controller('congratulations2Ctrl', function($scope) {

        })
