angular.module('ja-zconnect-widget-user').controller('ZconnectionsListCtrl', ['currentUser', '$q', 'ngZconnected', 'userService', function(currentUser, $q, ngZconnected, userService) {
    var vm = this;
    vm.suggestedUsers = [];
    vm.page = 1;
    vm.limit = 3;
    vm.total = 0;
    vm.totalFetched = 0;
    vm.getSuggestedPeople = function(limit, page) {
        userService.getCurrentUserSuggestedUsers(limit, page).then(function(resp) {
            vm.totalFetched += resp.data.length;
            Array.prototype.push.apply(vm.suggestedUsers, resp.data);
            vm.total = resp.meta.total;
            if (ngZconnected._DEBUG) console.log(resp);
        }, function(error) {
            if (ngZconnected._DEBUG) console.log(error);
        });
    };
    vm.skipUser = function(index) {
        vm.suggestedUsers.splice(index, 1);
        if (vm.suggestedUsers.length < vm.limit && vm.totalFetched < vm.total) {
            vm.getSuggestedPeople(vm.limit, vm.page = vm.page + 1);
        }
    };
    vm.addUser = function(userId, index) {
        ngJoms.api.friendAdd(userId)
        vm.skipUser(index);
    }

    vm.getSuggestedPeople(vm.limit, vm.page);
}]);
angular.element(document).ready(function() {
    angular.bootstrap(document.getElementById('suggestedUsers'), ['ja-zconnect-widget-user']);
});