angular.module('ja-zconnect-widget-user')
    .controller('ZconnectionsCtrl', ['currentUser', '$q', 'ngZconnected', 'userService', function(currentUser, $q, ngZconnected, userService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.znetwork = {};
        vm.total;
        vm.limit = 10;
        vm.page = 1;
        vm.paginationChanged = function(currentUser, limit, page) {
            $q.when(userService.getUserFriends(currentUser.user_id, limit, page))
                .then(function(znetwork) {
                    if (ngZconnected._DEBUG)
                        console.log(znetwork)
                    vm.znetwork = znetwork.data;
                    vm.total = znetwork.meta.total;
                }, function(error) {
                    if (ngZconnected._DEBUG)
                        console.log(error);
                });
        }
        vm.paginationChanged(vm.currentUser, vm.limit, vm.page);
    }]);
