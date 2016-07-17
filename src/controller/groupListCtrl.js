angular.module('ja-zconnect-widget-user')
    .controller('GroupListCtrl', ['currentUser', '$q', 'ngZconnected', 'userService', 'resourceService', function(currentUser, $q, ngZconnected, userService, resourceService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.groupslist = {};
        vm.total = 0;
        vm.limit = 5;
        vm.page = 1;
        vm.paginationChanged = function(limit, page) {
            $q.when(resourceService.groupList.get(limit, page))
                .then(function(group) {
                    if (ngZconnected._DEBUG)
                        console.log(group)
                    vm.groupslist = group.data;
                    vm.total = group.total;
                }, function(error) {
                    if (ngZconnected._DEBUG)
                        console.log(error);
                });
        }
        vm.paginationChanged(vm.limit, vm.page);
    }]);
