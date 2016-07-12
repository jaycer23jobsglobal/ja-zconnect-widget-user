angular.module('ja-zconnect-widget-user')
    .controller('EventListCtrl', ['currentUser', '$q', 'ngZconnected', 'userService', 'resourceService', function(currentUser, $q, ngZconnected, userService, resourceService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.eventlist = {};
        vm.total = 0;
        vm.limit = 10;
        vm.page = 1;
        vm.paginationChanged = function(limit, page) {
            $q.when(resourceService.events.get(limit, page))
                .then(function(event) {
                    if (ngZconnected._DEBUG)
                        console.log(event)
                    vm.eventlist = event.data;
                    vm.total = event.total;
                }, function(error) {
                    if (ngZconnected._DEBUG)
                        console.log(error);
                });
        }
        vm.paginationChanged(vm.limit, vm.page);
    }]);
