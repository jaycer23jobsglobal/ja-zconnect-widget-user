angular.module('ja-zconnect-widget-user')
    .controller('MyEventListCtrl', ['currentUser', '$q', 'ngZconnected', 'userService', 'resourceService', function(currentUser, $q, ngZconnected, userService, resourceService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.eventlist = {};
        vm.total;
        vm.limit = 5;
        vm.page = 1;
        vm.paginationChanged = function(currentUser, limit, page) {
            $q.when(userService.getUserEvents(currentUser.user_id, limit, page))
                .then(function(event) {
                    if (ngZconnected._DEBUG)
                        console.log(event)
                    vm.eventlist = event.data;
                    vm.total = event.meta.total;
                }, function(error) {
                    if (ngZconnected._DEBUG)
                        console.log(error);
                });
        }
        vm.paginationChanged(vm.currentUser, vm.limit, vm.page);
    }]);
