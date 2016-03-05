angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('donate', {
    url: '/donate',
    templateUrl: 'templates/donate.html',
    controller: 'donateCtrl'
  })

  .state('donationDetails', {
    url: '/donation-details',
    templateUrl: 'templates/donationDetails.html',
    controller: 'donationDetailsCtrl'
  })

  .state('deliverDonations', {
    url: '/deliver-donations',
    templateUrl: 'templates/deliverDonations.html',
    controller: 'deliverDonationsCtrl'
  })

  .state('deliveryRequests', {
    url: '/delivery-requests',
    templateUrl: 'templates/deliveryRequests.html',
    controller: 'deliveryRequestsCtrl'
  })

  .state('pendingDeliveres', {
    url: '/pending-deliveries',
    templateUrl: 'templates/pendingDeliveres.html',
    controller: 'pendingDeliveresCtrl'
  })

  .state('donationDelivery', {
    url: '/donation-delivery-request',
    templateUrl: 'templates/donationDelivery.html',
    controller: 'donationDeliveryCtrl'
  })

  .state('notes', {
    url: '/donation-notes',
    templateUrl: 'templates/notes.html',
    controller: 'notesCtrl'
  })

  .state('congratulations', {
    url: '/delivery-requested',
    templateUrl: 'templates/congratulations.html',
    controller: 'congratulationsCtrl'
  })

  .state('congratulations2', {
    url: '/deliveries-finished',
    templateUrl: 'templates/congratulations2.html',
    controller: 'congratulations2Ctrl'
  })

$urlRouterProvider.otherwise('/')

  

});