(function(window, undefined) {'use strict';


angular.module('ja-zconnect-widget-user', ['adf.provider', 'ngZconnected'])
    .config(["dashboardProvider", function(dashboardProvider) {
        var baseTemplatePath = '{widgetsPath}/ja-zconnect-widget-user/src/templates/';
        var config = {
            resolve: {
                currentUser: ['userService', function(userService) {
                    return userService.getCurrentUser();
                }]
            }
        }
            var widgetConfig = {
        height: 225
    };

        dashboardProvider
            .widget('profile', angular.extend({
                title: 'Personal Information',
                description: 'personal information widget',
                templateUrl: baseTemplatePath + 'profile/view.html',
                controller: 'ProfileCtrl',
                controllerAs: 'profile',
                edit: {
                    templateUrl: baseTemplatePath + 'profile/edit.html'
                }
            }, config))
            .widget('strength', angular.extend({
                title: 'Profile Strength',
                description: 'profile strength widget',
                templateUrl: baseTemplatePath + 'profile/strength.html',
                controller: 'ProfileCtrl',
                controllerAs: 'profile'
            }, config))
            .widget('contact', angular.extend({
                title: 'Contact Information',
                description: 'contact information widget',
                templateUrl: baseTemplatePath + 'profile/contact.html',
                controller: 'ProfileCtrl',
                controllerAs: 'profile',
                edit: {
                    templateUrl: baseTemplatePath + 'profile/edit.html'
                }
            }, config))
            .widget('view', angular.extend({
                title: 'Profile Total Views',
                description: 'profile total views widget',
                templateUrl: baseTemplatePath + 'profile/views.html',
                controller: 'ProfileCtrl',
                controllerAs: 'profile',
                edit: {
                    templateUrl: baseTemplatePath + 'profile/edit.html'
                }
            }, config))
            .widget('account', angular.extend({
                title: 'General Account Information',
                description: 'account information widget',
                templateUrl: baseTemplatePath + 'profile/account.html',
                controller: 'ProfileCtrl',
                controllerAs: 'profile'
            }, config))
            .widget('cfriend', angular.extend({
                title: 'Total Zconnections',
                description: 'total zconnections widget',
                templateUrl: baseTemplatePath + 'znetwork/cfriend.html',
                controller: 'ZconnectionsCtrl',
                controllerAs: 'znetwork'
            }, config))
            .widget('friends', angular.extend({
                title: 'Zconnections',
                description: 'zconnections widget',
                templateUrl: baseTemplatePath + 'znetwork/friends.html',
                controller: 'ZconnectionsCtrl',
                controllerAs: 'znetwork'
            }, config))
            .widget('zconnectionlist', angular.extend({
                title: 'People You May Know',
                description: 'contacts widget',
                templateUrl: baseTemplatePath + 'znetwork/userlist.html',
                controller: 'ZconnectionsListCtrl',
                controllerAs: 'suggestedUsers'
            }, config))
            .widget('appliedjobs', angular.extend({
                title: 'Total Applied Jobs',
                description: 'applied widget',
                templateUrl: baseTemplatePath + 'jobs/capplied.html',
                controller: 'AppliedCtrl',
                controllerAs: 'applied'
            }, config))
            .widget('listappliedjobs', angular.extend({
                title: 'Applied Jobs',
                description: 'applied widget',
                templateUrl: baseTemplatePath + 'jobs/listapplied.html',
                controller: 'AppliedCtrl',
                controllerAs: 'applied'
            }, config))
            .widget('savedjobs', angular.extend({
                title: 'Total Saved Jobs',
                description: 'saved widget',
                templateUrl: baseTemplatePath + 'jobs/csaved.html',
                controller: 'SavedCtrl',
                controllerAs: 'saved'
            }, config))
            .widget('listsavedjobs', angular.extend({
                title: 'Saved Jobs',
                description: 'saved widget',
                templateUrl: baseTemplatePath + 'jobs/listsaved.html',
                controller: 'SavedCtrl',
                controllerAs: 'saved'
            }, config))
            .widget('recommendedjobs', angular.extend({
                title: 'Total Recommended Jobs',
                description: 'recommended widget',
                templateUrl: baseTemplatePath + 'jobs/crecommended.html',
                controller: 'RecommendedCtrl',
                controllerAs: 'recommended'
            }, config))
            .widget('listrecommendedjobs', angular.extend({
                title: 'Recommended Jobs',
                description: 'recommended widget',
                templateUrl: baseTemplatePath + 'jobs/listrecommended.html',
                controller: 'RecommendedCtrl',
                controllerAs: 'recommended'
            }, config))
            .widget('listjoblist', angular.extend({
                title: 'Latest Jobs',
                description: 'jobs widget',
                templateUrl: baseTemplatePath + 'jobs/listjobs.html',
                controller: 'JobsearchCtrl',
                controllerAs: 'job'
            }, config))
            .widget('joblist', angular.extend({
                title: 'Total Latest Jobs',
                description: 'latest jobs widget',
                templateUrl: baseTemplatePath + 'jobs/cjobs.html',
                controller: 'JobsearchCtrl',
                controllerAs: 'job'
            }, config));
    }]);

angular.module("ja-zconnect-widget-user").run(["$templateCache", function($templateCache) {$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/jobs/capplied.html","<div><center><h1 data-ng-show=\"applied.total != null\" data-ng-bind=applied.total></h1><center></center></center></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/jobs/cjobs.html","<div><center><h1 data-ng-show=\"job.total != null\" data-ng-bind=job.total></h1><center></center></center></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/jobs/crecommended.html","<div><center><h1 data-ng-show=\"recommended.total != null\" data-ng-bind=recommended.total></h1><center></center></center></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/jobs/csaved.html","<div><center><h1 data-ng-show=\"saved.total != null\" data-ng-bind=saved.total></h1><center></center></center></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/jobs/listapplied.html","<div><ul><li data-ng-if=\"applied.total > 0\" data-ng-repeat=\"applieds in applied.appliedjobs\"><span><img ng-src={{applieds.job.image_url}}></span> <span data-ng-bind=applieds.job.job_title></span> <span data-ng-bind=applieds.job.job_group.country></span> <span data-ng-bind=applieds.job.job_group.industry></span> <span data-ng-bind=applieds.date_applied></span></li><li data-ng-if=\"applied.total==0\"><p class=no_suggestion_p>No Applied Jobs at the moment.</p></li></ul><uib-pagination data-ng-if=\"applied.total > 0\" total-items=applied.total ng-model=applied.page max-size=5 class=pagination-sm boundary-link-numbers=true data-ng-change=\"applied.paginationChanged(applied.currentUser, applied.limit, applied.page)\"></uib-pagination></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/jobs/listjobs.html","<form data-ng-submit=job.search(searchForm) name=searchForm novalidate data-ng-init=\"job.searchJobs(job.limit, job.page)\"><div><input data-ng-model=job.searchkey.search name=search type=text><select data-ng-model=job.searchkey.country data-ng-options=\"country.nicename as country.nicename for country in job.country\"></select><input type=submit value=Search></div></form><div><ul data-ng-if=\"job.total > 0 && job.error != 1\"><li data-ng-repeat=\"jobs in job.searchjobs\"><span><img ng-src={{jobs.image_url}}></span> <span data-ng-bind=jobs.job_title></span> <span data-ng-bind=jobs.job_group.country></span> <span data-ng-bind=jobs.job_group.industry></span> <span data-ng-bind=jobs._applied></span></li><uib-pagination boundary-link-numbers=true class=pagination-sm data-ng-change=\"job.searchJobs(job.limit, job.page)\" max-size=5 ng-model=job.page total-items=job.total></uib-pagination></ul><div data-ng-if=\"job.total==0\"><p class=no_suggestion_p>No Jobs at the moment.</p></div><div data-ng-if=\"job.error==1\"><p class=no_suggestion_p>No Jobs Found.</p></div></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/jobs/listrecommended.html","<div><ul><li data-ng-if=\"recommended.total > 0\" data-ng-repeat=\"recommendeds in recommended.appliedjobs\"><span><img ng-src={{recommendeds.job.image_url}}></span> <span data-ng-bind=recommendeds.job.job_title></span> <span data-ng-bind=recommendeds.job.job_group.country></span> <span data-ng-bind=recommendeds.job.job_group.industry></span> <span data-ng-bind=recommendeds.date_applied></span></li><li data-ng-if=\"recommended.total==0\"><p class=no_suggestion_p>No Recommended Jobs at the moment.</p></li></ul><uib-pagination data-ng-if=\"recommended.total > 0\" total-items=recommended.total ng-model=recommended.page max-size=5 class=pagination-sm boundary-link-numbers=true data-ng-change=\"recommended.paginationChanged(recommended.currentUser, recommended.limit, recommended.page)\"></uib-pagination></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/jobs/listsaved.html","<div><ul><li data-ng-if=\"saved.total > 0\" data-ng-repeat=\"saveds in saved.savedjobs\"><span><img ng-src={{saveds.image_url}}></span> <span data-ng-bind=saveds.job_title></span> <span data-ng-bind=saveds.job_group.country></span> <span data-ng-bind=saveds.job_group.industry></span> <span data-ng-bind=saveds.job_group.name></span></li><li data-ng-if=\"saved.total==0\"><p class=no_suggestion_p>No Saved Jobs at the moment.</p></li></ul><uib-pagination data-ng-if=\"saved.total > 0\" total-items=saved.total ng-model=saved.page max-size=5 class=pagination-sm boundary-link-numbers=true data-ng-change=\"saved.paginationChanged(saved.currentUser, saved.limit, saved.page)\"></uib-pagination></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/account.html","<div>Username : <span data-ng-bind=profile.currentUser.email></span></div><div>Password : <span>******************</span> <a href=#>Edit</a></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/contact.html","<div><span data-ng-bind=profile.currentUser.email></span></div><div><span data-ng-bind=profile.currentUser.address.address_1></span> <span data-ng-bind=profile.currentUser.address.address_2></span> <span data-ng-bind=profile.currentUser.address.country></span> <span data-ng-bind=profile.currentUser.address.postal_zip></span></div><div>+<span data-ng-bind=profile.contacts.country_code></span><span data-ng-bind=profile.contacts.phone_number></span></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/edit.html","<form role=form><div class=form-group><label for=sample>Sample</label> <input type=text class=form-control id=sample ng-model=config.sample placeholder=\"Enter sample\"></div></form>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/strength.html","<div><center><h1 data-ng-show=profile.strength.percentage data-ng-bind=\"(profile.strength.percentage*100).toFixed(1) + \' %\'\"></h1><center></center></center></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/view.html","<div><img ng-src={{profile.currentUser.avatar}}></div><div><span data-ng-bind=profile.currentUser.first_name></span> <span data-ng-bind=profile.currentUser.last_name></span></div><div><span data-ng-bind=profile.jobseekerInfo.quote></span></div><div><span data-ng-bind=\"(profile.currentUser.gender===\'M\') ? \'Male\' : \'Female\'\"></span></div><div><span data-ng-bind=profile.currentUser.birthdate></span></div><div><span data-ng-bind=profile.jobseekerInfo.nationality></span></div><div><span data-ng-bind=profile.jobseekerInfo.civil_status></span></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/views.html","<div><center><h1 data-ng-show=\"profile.total != null\" data-ng-bind=profile.total></h1><center></center></center></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/znetwork/cfriend.html","<div><center><h1 data-ng-show=znetwork.total data-ng-bind=znetwork.total></h1><center></center></center></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/znetwork/friends.html","<div><ul><li data-ng-repeat=\"friend in znetwork.znetwork\"><span><img ng-src={{friend.avatar}}></span> <span data-ng-bind=\"friend.first_name + \' \' + friend.last_name\"></span></li></ul><uib-pagination total-items=znetwork.total ng-model=znetwork.page max-size=5 class=pagination-sm boundary-link-numbers=true data-ng-change=\"znetwork.paginationChanged(znetwork.currentUser, znetwork.limit, znetwork.page)\"></uib-pagination></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/znetwork/userlist.html","<div><div class=\"col-sm-12 col-xs-12\"><div class=row><ul class=suggested_contacts><li data-ng-if=\"suggestedUsers.suggestedUsers.length > 0\" data-ng-repeat=\"user in suggestedUsers.suggestedUsers | limitTo: suggestedUsers.limit\"><div class=\"col-sm-12 col-xs-12\"><div class=row><div class=\"col-lg-2 col-sm-2 col-xs-2\"><div class=row><a data-ng-href={{user.profile_url}}><img data-ng-src={{user.avatar}}></a></div></div><div class=\"col-lg-10 col-sm-10 col-xs-10\"><div class=row><a data-ng-href={{user.profile_url}}><p class=contact_name data-ng-bind=\"user.first_name + \' \' + user.last_name\"></p></a><div class=\"col-sm-12 col-xs-12\"><div class=row><a href=javascript: data-ng-click=\"suggestedUsers.addUser(user.user_id, $index)\" class=connect_skip>Connect</a> <a href=javascript: data-ng-click=suggestedUsers.skipUser($index) class=connect_skip>Skip</a></div></div></div></div></div></div></li><li style=\"background:none; padding:0 !important; margin:0; border:none;\" data-ng-if=\"suggestedUsers.suggestedUsers.length==0\"><p class=no_suggestion_p>No suggestions at the moment.</p></li></ul></div></div></div>");}]);
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
angular.module('ja-zconnect-widget-user')
    .controller('ZconnectionsCtrl', ['currentUser', '$q', 'ngZconnected', 'userService', function(currentUser, $q, ngZconnected, userService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.znetwork = {};
        vm.total = 0;
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

angular.module('ja-zconnect-widget-user')
    .controller('SavedCtrl', ['currentUser', '$q', 'ngZconnected', 'jobService', function(currentUser, $q, ngZconnected, jobService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.savedjobs = {};
        vm.total;
        vm.limit = 10;
        vm.page = 1;

        vm.paginationChanged = function(currentUser, limit, page) {
            $q.when(jobService.user.getSaved(currentUser.user_id, limit, page))
            .then(function(saved) {
                if (ngZconnected._DEBUG)
                    console.log(saved);
                vm.savedjobs = saved.data;
                vm.total = saved.total;
            }, function(error) {
                if (ngZconnected._DEBUG)
                    console.log(error);
            });
        }
        vm.paginationChanged(vm.currentUser, vm.limit, vm.page);
    }]);

angular.module('ja-zconnect-widget-user')
    .controller('RecommendedCtrl', ['currentUser', '$q', 'ngZconnected', 'jobService', function(currentUser, $q, ngZconnected, jobService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.recommendedjobs = {};
        vm.total;
        vm.limit = 10;
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

angular.module('ja-zconnect-widget-user')
    .controller('ProfileCtrl', ['currentUser', '$q', 'ngZconnected', 'profileService', 'jobService', function(currentUser, $q, ngZconnected, profileService, jobService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.jobseekerInfo = {};
        vm.contacts = {};
        vm.email = {};
        vm.address = {};
        vm.strength = {};
        vm.views = {};
        vm.total;

        $q.when(profileService.jobseekerInfo.get(vm.currentUser.user_id))
            .then(function(jobseekerInfo) {
                if (ngZconnected._DEBUG)
                    console.log(jobseekerInfo)
                vm.jobseekerInfo = jobseekerInfo;
                return profileService.userEmail.get(vm.currentUser.user_id, vm.currentUser.extra_properties.primary_email);
            })
            .then(function(email) {
                if (ngZconnected._DEBUG)
                    console.log(email);
                vm.email = email;
            })
            .then(function() {
                return profileService.userContactNumber.get(vm.currentUser.user_id, vm.currentUser.extra_properties.primary_contact_number);
            })
            .then(function(contacts) {
                if (ngZconnected._DEBUG)
                    console.log(contacts);
                vm.contacts = contacts;
            }, function(error) {
                if (ngZconnected._DEBUG)
                    console.log(error);
            })
            .then(function(){
                return profileService.profileStrength.get(vm.currentUser.user_id);
            })
            .then(function(strength){
                if (ngZconnected._DEBUG)
                    console.log(strength);
                vm.strength = strength;
            }, function(error) {
                if (ngZconnected._DEBUG)
                    console.log(error);
            })
            .then(function(){
                return profileService.profileViews(vm.currentUser.user_id);
            })
            .then(function(views){
                if (ngZconnected._DEBUG)
                    console.log(views);
                vm.views = views.data;
                vm.total = views.total;
            }, function(error) {
                if (ngZconnected._DEBUG)
                    console.log(error);
            });
    }]);



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
        vm.error = 0;

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
                    vm.error = searchjobs.error;
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

angular.module('ja-zconnect-widget-user')
    .controller('AppliedCtrl', ['currentUser', '$q', 'ngZconnected', 'jobService', function(currentUser, $q, ngZconnected, jobService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.appliedjobs = {};
        vm.total;
        vm.limit = 10;
        vm.page = 1;

        vm.paginationChanged = function(currentUser, limit, page) {
            $q.when(jobService.user.getApplied(currentUser.user_id, limit, page))
            .then(function(applied) {
                if (ngZconnected._DEBUG)
                    console.log(applied);
                vm.appliedjobs = applied.data;
                vm.total = applied.total;
            }, function(error) {
                if (ngZconnected._DEBUG)
                    console.log(error);
            });
        }
        vm.paginationChanged(vm.currentUser, vm.limit, vm.page);
    }]);
})(window);