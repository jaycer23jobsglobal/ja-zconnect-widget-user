angular.module('ja-zconnect-widget-user')
    .controller('MessageCtrl', ['currentUser', '$q', 'ngZconnected', 'userService', 'resourceService', function(currentUser, $q, ngZconnected, userService, resourceService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.mymessage = {};
        vm.total;
        vm.limit = 5;
        vm.page = 1;
        vm.paginationChanged = function(currentUser, limit, page) {
            $q.when(userService.getUserMessage(currentUser.user_id, limit, page))
                .then(function(mess) {
                    if (ngZconnected._DEBUG)
                        console.log(mess)
                    vm.mymessage = mess.data;
                    vm.total = mess.meta.total;
                }, function(error) {
                    if (ngZconnected._DEBUG)
                        console.log(error);
                });
        }
        vm.paginationChanged(vm.currentUser, vm.limit, vm.page);
    }]);
