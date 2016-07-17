angular.module('ja-zconnect-widget-user')
    .controller('SavedCtrl', ['currentUser', '$q', 'ngZconnected', 'jobService', function(currentUser, $q, ngZconnected, jobService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.savedjobs = {};
        vm.total;
        vm.limit = 5;
        vm.page = 1;

        vm.paginationChanged = function(currentUser, limit, page) {
            $q.when(jobService.user.getSaved(currentUser.user_id, limit, page))
            .then(function(saved) {
                if (ngZconnected._DEBUG)
                    console.log(saved);
                vm.savedjobs = saved.data;
                vm.total = saved.total;
            }, function(error) {
                if (ngZconnected._DEBUG)
                    console.log(error);
            });
        }
        vm.paginationChanged(vm.currentUser, vm.limit, vm.page);
    }]);
