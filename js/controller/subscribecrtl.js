var app = angular.module("subsApp", []);

app.controller('subsController', ['$scope', '$http', function($scope, $http) {

    $scope.subscribe = function() {

        $('#loaderElement').show();
        var email = {
            'email': $scope.email
        }; // json object
        console.log(email);
        document.getElementById("loaderElement").style.display = 'block';
        var url = 'share.html';
        $http({
                method: 'POST',
                url: 'https://ojam-server-demo.herokuapp.com/subscribe',
                dataType: 'json',
                method: 'POST',
                data: email,
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(function successCallback(response) {
                $scope.value = response;
                console.log(response.data.message);
                // this callback will be called asynchronously
                // when the response is available
                document.getElementById("loaderElement").style.display = 'none';
                document.getElementById("message-success").style.display = 'block';
                $scope.msg = response.data.message;
                window.location = url;
                //console.log('second message : ' + msg);

                //console.log('III message : ' + $scope.xx);

            }, function errorCallback(response) {
                $scope.value = "There is some error in processing your request";
                console.log(response);

                // called asynchronously if an error occurs
                // or server returns response with an error status.
                document.getElementById("loaderElement").style.display = 'none';
                document.getElementById("message-error").style.display = 'block';
                $scope.msg = "Error : There is some error in processing your request";
                //console.log('second message : ' + msg);
            })
        document.getElementById("message-error").style.display = 'none';
        document.getElementById("message-success").style.display = 'none';
        document.myForm.reset();
        document.getElementById("emailLabel").style.display = 'none';

    }
}]);