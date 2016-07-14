angular.module('ja-zconnect-widget-user')
    .controller('StrengthCtrl', [
        'currentUser',
        '$q',
        'ngZconnected',
        'profileService',
        'jobService',
        '$scope',
        '$timeout',
        '$window',
        function(currentUser, $q, ngZconnected, profileService, jobService, $scope, $timeout, $window) {
            $scope.currentUser = currentUser;
            $scope.current = 0;
            $scope.preciseCurrent = $scope.current;
            $scope.config = {
                max: 100,
                radius: 50,
                stroke: 5,
                semi: false,
                rounded: false,
                clockwise: true,
                responsive: true,
                duration: 1000,
                animation: "easeInOutElastic",
                delay: 500,
                color: "#45ccce",
                gradient: "url(#gradient)",
                isGradient: false
            };

            $scope.$watch(function() {
                return $scope.current;
            }, function(newValue) {
                if (newValue <= 30) {
                    //red
                    $scope.config.color = '#ff0000';
                } else if (newValue >= 31 && newValue <= 59) {
                    //orange
                    $scope.config.color = '#ffa500';

                } else if (newValue >= 60 && newValue <= 80) {
                    //yellow
                    $scope.config.color = '#9acd32';

                } else {
                    //green
                    $scope.config.color = '#008000';

                }
            });
            var showProfileStrength = function() {

                profileService.profileStrength.get($scope.currentUser.user_id).then(function(resp) {
                    $scope.current = resp.percentage * 100;
                }, function(error) {
                    console.log(error);
                });
            };
            showProfileStrength();
            $scope.showPreciseCurrent = function(amount) {
                $timeout(function() {
                    if (amount <= 0) {
                        $scope.preciseCurrent = $scope.current;
                    } else {
                        var math = $window.Math;
                        $scope.preciseCurrent = math.min(math.round(amount), $scope.max);
                    }
                });
            };

        }
    ]);
