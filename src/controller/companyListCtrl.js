angular.module('ja-zconnect-widget-user')
    .controller('CompanyListCtrl', ['currentUser', '$q', 'ngZconnected', 'userService', 'resourceService', function(currentUser, $q, ngZconnected, userService, resourceService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.companyjobs = {};
        vm.total;
        vm.limit = 5;
        vm.page = 1;
        vm.paginationChanged = function(limit, page) {
            $q.when(resourceService.companyList.get(limit, page))
                .then(function(company) {
                    if (ngZconnected._DEBUG)
                        console.log(company)
                    vm.companyjobs = company.data;
                    vm.total = company.total;
                }, function(error) {
                    if (ngZconnected._DEBUG)
                        console.log(error);
                });
        }
        vm.paginationChanged(vm.limit, vm.page);
    }]);
