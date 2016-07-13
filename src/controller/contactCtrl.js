angular.module('ja-zconnect-widget-user')
    .controller('ContactCtrl', ['currentUser', '$q', 'ngZconnected', 'profileService', 'jobService', function(currentUser, $q, ngZconnected, profileService, jobService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.contacts = {};

        $q.when(profileService.userContactNumber.get(vm.currentUser.user_id, vm.currentUser.extra_properties.primary_contact_number))
            .then(function(contacts) {
                if (ngZconnected._DEBUG)
                    console.log(contacts);
                vm.contacts = contacts;
            }, function(error) {
                if (ngZconnected._DEBUG)
                    console.log(error);
            });
    }]);


