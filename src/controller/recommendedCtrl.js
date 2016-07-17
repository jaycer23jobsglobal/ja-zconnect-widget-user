angular.module('ja-zconnect-widget-user')
    .controller('RecommendedCtrl', ['currentUser', '$q', 'ngZconnected', 'jobService', function(currentUser, $q, ngZconnected, jobService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.recommendedjobs = {};
        vm.total;
        vm.limit = 5;
        vm.page = 1;

        vm.paginationChanged = function(currentUser, limit, page) {
            $q.when(jobService.user.getRecommended(currentUser.user_id, limit, page))
            .then(function(recommended) {
                if (ngZconnected._DEBUG)
                    console.log(recommended);
                vm.recommendedjobs = recommended.data;
                vm.total = recommended.total;
            }, function(error) {
                if (ngZconnected._DEBUG)
                    console.log(error);
            });
        }
        vm.paginationChanged(vm.currentUser, vm.limit, vm.page);
    }]);
