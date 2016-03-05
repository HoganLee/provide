angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('PickupPoints', [function(){
    return {
        getPickupPoints: function() {
            return [
                {
                    location: "332 6 Ave SE, Calgary, AB T2G 4S6",
                    stopover: true
                }, 
                {
                    location: "615 Macleod Trail SE, Calgary, AB T2G 4T8",
                    stopover: true
                }
            ];
        },
        getDestination: function() {
            return "Calgary, AB";
        }
    };
}]);

