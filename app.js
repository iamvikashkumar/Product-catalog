(function (angular) {
    'use strict';
    var myApp = angular.module('myApp', []);

    myApp.controller('myCtrl', ['$scope', '$http', function ($scope, $http) {
        function init() {
            $http.get(
                    "https://gist.githubusercontent.com/bharadwajturlapati/4e81154dbcc7d6928921b96057fc5b4a/raw/d31da32d6e5c1dd2a11968d7e94d3c60dfd50fcb/products.json"
                )
                .then(function (response) {
                    $scope.data = response.data;
                    changeObjectToArray($scope.data);
                });
        }

        function changeObjectToArray(data) {
            $scope.dataInArray = Object.keys(data).map(i => data[i])
            $scope.general = $scope.dataInArray.filter(data => data.hub === 'general');
            $scope.other = $scope.dataInArray.filter(data => data.hub !== 'general');
        };

        var modal = document.getElementById("myModal");

        $scope.showProductDetails = function (data) {
            $scope.singleData = data;
            modal.style.display = "block";
        };

        $scope.close = function () {
            modal.style.display = "none";
        };

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };

        init();

    }]);
})(window.angular);