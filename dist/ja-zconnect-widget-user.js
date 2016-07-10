(function(window, undefined) {'use strict';


angular.module('ja-zconnect-widget-user', ['adf.provider', 'ngZconnected', 'ngJoms'])
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
                title: 'Add Contacts',
                description: 'contacts widget',
                templateUrl: baseTemplatePath + 'znetwork/friends.html',
                controller: 'ZconnectionsListCtrl',
                controllerAs: 'suggestedUsers'
            }, config));
    }]);

angular.module("ja-zconnect-widget-user").run(["$templateCache", function($templateCache) {$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/account.html","<div>Username : <span data-ng-bind=profile.currentUser.email></span></div><div>Password : <span>******************</span> <a href=#>Edit</a></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/contact.html","<div><span data-ng-bind=profile.currentUser.email></span></div><div><span data-ng-bind=profile.currentUser.address.address_1></span> <span data-ng-bind=profile.currentUser.address.address_2></span> <span data-ng-bind=profile.currentUser.address.country></span> <span data-ng-bind=profile.currentUser.address.postal_zip></span></div><div>+<span data-ng-bind=profile.contacts.country_code></span><span data-ng-bind=profile.contacts.phone_number></span></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/edit.html","<form role=form><div class=form-group><label for=sample>Sample</label> <input type=text class=form-control id=sample ng-model=config.sample placeholder=\"Enter sample\"></div></form>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/strength.html","<div><center><h1 data-ng-show=profile.strength.percentage data-ng-bind=\"(profile.strength.percentage*100).toFixed(1) + \' %\'\"></h1><center></center></center></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/view.html","<div><img ng-src={{profile.currentUser.avatar}}></div><div><span data-ng-bind=profile.currentUser.first_name></span> <span data-ng-bind=profile.currentUser.last_name></span></div><div><span data-ng-bind=profile.jobseekerInfo.quote></span></div><div><span data-ng-bind=\"(profile.currentUser.gender===\'M\') ? \'Male\' : \'Female\'\"></span></div><div><span data-ng-bind=profile.currentUser.birthdate></span></div><div><span data-ng-bind=profile.jobseekerInfo.nationality></span></div><div><span data-ng-bind=profile.jobseekerInfo.civil_status></span></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/views.html","<div><center><h1 data-ng-show=profile.views.total data-ng-bind=profile.views.total></h1><center></center></center></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/znetwork/cfriend.html","<div><center><h1 data-ng-show=znetwork.total data-ng-bind=znetwork.total></h1><center></center></center></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/znetwork/friends.html","<div><ul><li data-ng-repeat=\"friend in znetwork.znetwork\"><span><img ng-src={{friend.avatar}}></span> <span data-ng-bind=\"friend.first_name + \' \' + friend.last_name\"></span></li></ul><uib-pagination total-items=znetwork.total ng-model=znetwork.page max-size=5 class=pagination-sm boundary-link-numbers=true data-ng-change=\"znetwork.paginationChanged(znetwork.currentUser, znetwork.limit, znetwork.page)\"></uib-pagination></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/znetwork/userlist.html","<div id=suggestedUsers data-ng-controller=\"SuggestedPeopleCtrl as vm\" data-ng-init=vm.init()><div class=\"col-sm-12 col-xs-12\"><div class=row><ul class=suggested_contacts><li data-ng-if=\"vm.suggestedUsers.length > 0\" data-ng-repeat=\"user in vm.suggestedUsers | limitTo: vm.limit\"><div class=\"col-sm-12 col-xs-12\"><div class=row><div class=\"col-lg-2 col-sm-2 col-xs-2\"><div class=row><a data-ng-href={{user.profile_url}}><img data-ng-src={{user.avatar}}></a></div></div><div class=\"col-lg-10 col-sm-10 col-xs-10\"><div class=row><a data-ng-href={{user.profile_url}}><p class=contact_name data-ng-bind=\"user.first_name + \' \' + user.last_name\"></p></a><div class=\"col-sm-12 col-xs-12\"><div class=row><a href=javascript: data-ng-click=\"vm.addUser(user.user_id, $index)\" class=connect_skip>Connect</a> <a href=javascript: data-ng-click=vm.skipUser($index) class=connect_skip>Skip</a></div></div></div></div></div></div></li><li style=\"background:none; padding:0 !important; margin:0; border:none;\" data-ng-if=\"vm.suggestedUsers.length==0\"><p class=no_suggestion_p>No suggestions at the moment.</p></li></ul></div></div></div>");}]);
angular.module('ja-zconnect-widget-user').controller('ZconnectionsListCtrl', ['currentUser', '$q', 'ngZconnected', 'userService', 'ngJoms', function(currentUser, $q, ngZconnected, userService, ngJoms) {
    var vm = this;
    vm.suggestedUsers = [];
    vm.page = 1;
    vm.limit = 3;
    vm.total = 0;
    vm.totalFetched = 0;
    vm.init = function() {
        vm.getSuggestedPeople(vm.limit, vm.page)
    };
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
}]);
angular.element(document).ready(function() {
    angular.bootstrap(document.getElementById('suggestedUsers'), ['ja-zconnect-widget-user']);
});
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
    .controller('ProfileCtrl', ['currentUser', '$q', 'ngZconnected', 'profileService', 'jobService', function(currentUser, $q, ngZconnected, profileService, jobService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.jobseekerInfo = {};
        vm.contacts = {};
        vm.email = {};
        vm.address = {};
        vm.strength = {};
        vm.views = {};

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
                vm.contacts = contacts
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
                vm.strength = strength
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
                vm.views = views
            }, function(error) {
                if (ngZconnected._DEBUG)
                    console.log(error);
            });
        jobService.user.getApplied(vm.currentUser.user_id)
            .then(function(applied) {
                if (ngZconnected._DEBUG)
                    console.log(applied);
                vm.appliedjobs
            }, function(error) {
                if (ngZconnected._DEBUG)
                    console.log(error);
            });
    }]);


})(window);