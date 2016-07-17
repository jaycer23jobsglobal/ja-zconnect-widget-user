angular.module('ja-zconnect-widget-user')
    .controller('MyGroupListCtrl', ['currentUser', '$q', 'ngZconnected', 'userService', 'resourceService', function(currentUser, $q, ngZconnected, userService, resourceService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.mygrouplist = {};
        vm.total;
        vm.limit = 5;
        vm.page = 1;
        vm.paginationChanged = function(currentUser, limit, page) {
            $q.when(userService.getUserGroup(currentUser.user_id, limit, page))
                .then(function(mygroup) {
                    if (ngZconnected._DEBUG)
                        console.log(mygroup)
                    vm.mygrouplist = mygroup.data;
                    vm.total = mygroup.meta.total;
                }, function(error) {
                    if (ngZconnected._DEBUG)
                        console.log(error);
                });
        }
        vm.paginationChanged(vm.currentUser, vm.limit, vm.page);
    }]);
