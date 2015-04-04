angular.module('loc8rApp',[]);

var locationListCtrl = function ($scope, loc8rData, geolocation) {
  $scope.message = "Checking your location";

  $scope.getData = function (position) {
    var lat = position.coords.latitude,
        lng = position.coords.longitude;
    $scope.message = "Searching for nearby places";
    loc8rData.locationByCoords(lat, lng)
      .success(function(data) {
        $scope.message = data.length > 0 ? "" : "No locations found nearby";
        $scope.data = { locations: data };
      })
      .error(function (e) {
        $scope.message = "Sorry, something's gone wrong, please try again later";
      });
  };

  $scope.showError = function (error) {
    $scope.$apply(function() {
      $scope.message = error.message;
    });
  };

  $scope.noGeo = function () {
    $scope.$apply(function() {
      $scope.message = "Geolocation is not supported by this browser.";
    });
  };

  geolocation.getPosition($scope.getData,$scope.showError,$scope.noGeo);
};

angular
.module('loc8rApp')
.controller('locationListCtrl', locationListCtrl);

  