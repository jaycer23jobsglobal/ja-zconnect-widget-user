'use strict';

angular.module('ja-zconnect-widget-user', ['adf.provider', 'ngZconnected'])
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
            }, config))
            .widget('listcompany', angular.extend({
                title: 'Latest Companies',
                description: 'latest company widget',
                templateUrl: baseTemplatePath + 'company/listcompany.html',
                controller: 'CompanyListCtrl',
                controllerAs: 'company'
            }, config))
            .widget('listgroup', angular.extend({
                title: 'Latest Groups',
                description: 'latest group widget',
                templateUrl: baseTemplatePath + 'group/listgroup.html',
                controller: 'GroupListCtrl',
                controllerAs: 'groups'
            }, config))
            .widget('mygroup', angular.extend({
                title: 'My Groups',
                description: 'my group widget',
                templateUrl: baseTemplatePath + 'group/mygrouplist.html',
                controller: 'MyGroupListCtrl',
                controllerAs: 'groups'
            }, config))
            .widget('creategroup', angular.extend({
                title: 'Create Group',
                description: 'create group widget',
                templateUrl: baseTemplatePath + 'group/creategroup.html',
                controller: '',
                controllerAs: 'groups'
            }, config))
            .widget('listevent', angular.extend({
                title: 'Latest Events',
                description: 'latest event widget',
                templateUrl: baseTemplatePath + 'event/listevent.html',
                controller: 'EventListCtrl',
                controllerAs: 'events'
            }, config))
            .widget('myevent', angular.extend({
                title: 'My Events',
                description: 'my event widget',
                templateUrl: baseTemplatePath + 'event/myevent.html',
                controller: 'MyEventListCtrl',
                controllerAs: 'events'
            }, config))
            .widget('mymessage', angular.extend({
                title: 'My Inbox',
                description: 'my inbox widget',
                templateUrl: baseTemplatePath + 'message/listmymessage.html',
                controller: 'MessageCtrl',
                controllerAs: 'message'
            }, config))
            .widget('totalmessage', angular.extend({
                title: 'Total Message',
                description: 'total message widget',
                templateUrl: baseTemplatePath + 'message/cmessage.html',
                controller: 'MessageCtrl',
                controllerAs: 'message'
            }, config));
    });
