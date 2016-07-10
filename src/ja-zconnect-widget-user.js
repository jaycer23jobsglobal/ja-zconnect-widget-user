'use strict';

angular.module('ja-zconnect-widget-user', ['adf.provider', 'ngZconnected', 'ngJoms'])
    .config(function(dashboardProvider) {
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
    });
