angular.module('app.controllers', ['app.services'])

.controller('homeCtrl', function($scope) {

})

.controller('donateCtrl', function($scope, $rootScope) {

})

.controller('donationDetailsCtrl', function($scope) {

        })

.controller('deliverDonationsCtrl', function($scope) {

        })

.controller('deliveryRequestsCtrl', function($rootScope, $scope, $cordovaGeolocation, PickupPoints) {
	$rootScope.loadMap($scope, $cordovaGeolocation, PickupPoints, "map");
})

.controller('pendingDeliveresCtrl', function($rootScope, $scope, $cordovaGeolocation, PickupPoints) {
        console.log("here");
	$rootScope.loadMap($scope, $cordovaGeolocation, PickupPoints, "map2");
})

.controller('donationDeliveryCtrl', function($scope) {
})

.controller('notesCtrl', function($scope) {

})

.controller('congratulationsCtrl', function($scope, $rootScope) {
  $rootScope.donate.dateSelected = false;
})

.controller('congratulations2Ctrl', function($scope, $rootScope) {
  $rootScope.volunteer.dateSelected = false;
})
