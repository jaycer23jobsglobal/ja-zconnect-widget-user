angular.module('ja-zconnect-widget-user')
    .controller('AppliedCtrl', ['currentUser', '$q', 'ngZconnected', 'jobService', function(currentUser, $q, ngZconnected, jobService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.appliedjobs = {};
        vm.total = {};
        vm.limit = 10;
        vm.page = 1;

        vm.paginationChanged = function(currentUser, limit, page) {
            $q.when(jobService.user.getApplied(currentUser.user_id, limit, page))
            .then(function(applied) {
                if (ngZconnected._DEBUG)
                    console.log(applied);
                vm.appliedjobs = applied.data;
                vm.total = applied.total;
            }, function(error) {
                if (ngZconnected._DEBUG)
                    console.log(error);
            });
        }
        vm.paginationChanged(vm.currentUser, vm.limit, vm.page);
    }]);
