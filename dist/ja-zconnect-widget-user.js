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
            }, config));
    }]);

angular.module("ja-zconnect-widget-user").run(["$templateCache", function($templateCache) {$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/account.html","<div>Username : <span data-ng-bind=profile.currentUser.email></span></div><div>Password : <span>******************</span> <a href=#>Edit</a></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/contact.html","<div><span data-ng-bind=profile.currentUser.email></span></div><div><span data-ng-bind=profile.currentUser.address.address_1></span> <span data-ng-bind=profile.currentUser.address.address_2></span> <span data-ng-bind=profile.currentUser.address.country></span> <span data-ng-bind=profile.currentUser.address.postal_zip></span></div><div>+<span data-ng-bind=profile.contacts.country_code></span><span data-ng-bind=profile.contacts.phone_number></span></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/edit.html","<form role=form><div class=form-group><label for=sample>Sample</label> <input type=text class=form-control id=sample ng-model=config.sample placeholder=\"Enter sample\"></div></form>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/strength.html","<div><center><h1 data-ng-show=profile.strength.percentage data-ng-bind=\"(profile.strength.percentage*100).toFixed(1) + \' %\'\"></h1><center></center></center></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/view.html","<div><img ng-src={{profile.currentUser.avatar}}></div><div><span data-ng-bind=profile.currentUser.first_name></span> <span data-ng-bind=profile.currentUser.last_name></span></div><div><span data-ng-bind=profile.jobseekerInfo.quote></span></div><div><span data-ng-bind=\"(profile.currentUser.gender===\'M\') ? \'Male\' : \'Female\'\"></span></div><div><span data-ng-bind=profile.currentUser.birthdate></span></div><div><span data-ng-bind=profile.jobseekerInfo.nationality></span></div><div><span data-ng-bind=profile.jobseekerInfo.civil_status></span></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/views.html","<div><center><h1 data-ng-show=profile.views.total data-ng-bind=profile.views.total></h1><center></center></center></div>");}]);
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