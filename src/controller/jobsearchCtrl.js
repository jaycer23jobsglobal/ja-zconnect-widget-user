angular.module('ja-zconnect-widget-user')
    .controller('JobsearchCtrl', ['currentUser', '$q', 'ngZconnected', 'jobService', 'resourceService', function(currentUser, $q, ngZconnected, jobService, resourceService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.searchjobs = {};
        vm.searchkey = {};
        vm.search = {};
        vm.total;
        vm.limit = 10;
        vm.page = 1;
        vm.country = {};
        
        vm.searchJobs = function(limit, page) {
            $q.when((function() {
                    var deferred = $q.defer();
                    if (vm.searchkey.search || vm.searchkey.country) {
                        jobService.jobs.getJobSearch(vm.searchkey.search, limit, page, vm.searchkey.country)
                            .then(function(jobs) {
                                deferred.resolve(jobs);
                            }, function(error) {
                                deferred.reject(error);
                            });
                    } else {
                        jobService.jobs.getJobs(limit, page)
                            .then(function(jobs) {
                                deferred.resolve(jobs);
                            }, function(error) {
                                deferred.reject(error);
                            });
                    }
                    return deferred.promise;
                })())
                .then(function(searchjobs) {
                    if (ngZconnected._DEBUG)
                        console.log(searchjobs);
                    vm.searchjobs = searchjobs.data;
                    vm.total = searchjobs.total;
                })
                .catch(function(error) {
                    if (ngZconnected._DEBUG)
                        console.log(error);
                });
        }

        vm.search = function(form) {
            if (form.$valid) {
                vm.page = 1;
                vm.searchJobs(vm.limit, vm.page);
            }
        }

        resourceService.countryList.get()
            .then(function(country) {
                if (ngZconnected._DEBUG)
                    console.log(country)
                vm.country = country;
            }, function(error) {
                if (ngZconnected._DEBUG)
                    console.log(error);
            });
    }]);
