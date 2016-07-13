angular.module('ja-zconnect-widget-user')
    .controller('ViewsCtrl', ['currentUser', '$q', 'ngZconnected', 'profileService', 'jobService', function(currentUser, $q, ngZconnected, profileService, jobService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.views = {};
        vm.total;

        $q.when(profileService.profileViews(vm.currentUser.user_id))
            .then(function(views){
                if (ngZconnected._DEBUG)
                    console.log(views);
                vm.views = views.data;
                vm.total = views.total;
            }, function(error) {
                if (ngZconnected._DEBUG)
                    console.log(error);
            });
    }]);


