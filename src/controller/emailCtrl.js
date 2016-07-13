angular.module('ja-zconnect-widget-user')
    .controller('EmailCtrl', ['currentUser', '$q', 'ngZconnected', 'profileService', 'jobService', function(currentUser, $q, ngZconnected, profileService, jobService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.email = {};

        $q.when(profileService.userEmail.get(vm.currentUser.user_id, vm.currentUser.extra_properties.primary_email))
            .then(function(email) {
                if (ngZconnected._DEBUG)
                    console.log(email);
                vm.email = email;
            }, function(error) {
                if (ngZconnected._DEBUG)
                    console.log(error);
            });
    }]);


