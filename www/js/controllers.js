angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('donateCtrl', function($scope) {

})
   
.controller('donationDetailsCtrl', function($scope) {

})
   
.controller('deliverDonationsCtrl', function($scope) {

})
   
.controller('deliveryRequestsCtrl', function($scope, $cordovaGeolocation) {
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
    }, function(err) {
        // error
    });

})
   
.controller('pendingDeliveresCtrl', function($scope) {

})

.controller('MapCtrl', function($scope, $cordovaGeolocation) {
})
   
.controller('donationDeliveryCtrl', function($scope) {

})
   
.controller('notesCtrl', function($scope) {

})
   
.controller('congratulationsCtrl', function($scope) {

})
   
.controller('congratulations2Ctrl', function($scope) {

})
