angular.module('ja-zconnect-widget-user')
    .controller('ProfileCtrl', ['currentUser', '$q', 'ngZconnected', 'profileService', 'jobService', function(currentUser, $q, ngZconnected, profileService, jobService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.jobseekerInfo = {};

        $q.when(profileService.jobseekerInfo.get(vm.currentUser.user_id))
            .then(function(jobseekerInfo) {
                if (ngZconnected._DEBUG)
                    console.log(jobseekerInfo)
                vm.jobseekerInfo = jobseekerInfo;
            }, function(error) {
                if (ngZconnected._DEBUG)
                    console.log(error);
            });
    }]);


