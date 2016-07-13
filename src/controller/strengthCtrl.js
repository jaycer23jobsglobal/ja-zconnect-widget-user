angular.module('ja-zconnect-widget-user')
    .controller('StrengthCtrl', ['currentUser', '$q', 'ngZconnected', 'profileService', 'jobService', function(currentUser, $q, ngZconnected, profileService, jobService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.strength = {};

        $q.when(profileService.profileStrength.get(vm.currentUser.user_id))
            .then(function(strength){
                if (ngZconnected._DEBUG)
                    console.log(strength);
                vm.strength = strength;
            }, function(error) {
                if (ngZconnected._DEBUG)
                    console.log(error);
            });
    }]);


