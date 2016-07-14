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
            }, config))
            .widget('strength', angular.extend({
                title: 'Profile Strength',
                description: 'profile strength widget',
                templateUrl: baseTemplatePath + 'profile/strength.html',
                controller: 'StrengthCtrl',
                controllerAs: 'strength'
            }, config))
            .widget('contact', angular.extend({
                title: 'Contact Information',
                description: 'contact information widget',
                templateUrl: baseTemplatePath + 'profile/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'contact',
                edit: {
                    templateUrl: baseTemplatePath + 'profile/edit.html'
                }
            }, config))
            .widget('view', angular.extend({
                title: 'Profile Total Views',
                description: 'profile total views widget',
                templateUrl: baseTemplatePath + 'profile/views.html',
                controller: 'ViewsCtrl',
                controllerAs: 'views',
                edit: {
                    templateUrl: baseTemplatePath + 'profile/edit.html'
                }
            }, config))
            .widget('account', angular.extend({
                title: 'General Account Information',
                description: 'account information widget',
                templateUrl: baseTemplatePath + 'profile/account.html',
                controller: 'EmailCtrl',
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
    }]);

angular.module("ja-zconnect-widget-user").run(["$templateCache", function($templateCache) {$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/company/listcompany.html","<div><ul><li data-ng-if=\"company.total > 0\" data-ng-repeat=\"comp in company.companyjobs\"><a data-ng-href={{comp.group_url}}><span><img ng-src=/{{comp.avatar}}></span> <span data-ng-bind=comp.name></span></a> <span data-ng-bind=comp.address.country></span> <span data-ng-bind=comp.industry.description></span> <span data-ng-bind=comp.date_created></span></li><li data-ng-if=\"company.total==0\"><p class=no_suggestion_p>No company at the moment.</p></li></ul><uib-pagination data-ng-if=\"company.total > 0\" total-items=company.total ng-model=company.page max-size=5 class=pagination-sm boundary-link-numbers=true data-ng-change=\"company.paginationChanged(company.limit, company.page)\"></uib-pagination></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/event/listevent.html","<div><ul><li data-ng-if=\"events.total > 0\" data-ng-repeat=\"event in events.eventlist\"><a data-ng-href=\"index.php?option=com_community&view=events&task=viewevent&eventid={{event.id}}\"><span><img ng-src=/{{event.avatar}}></span> <span data-ng-bind=event.title></span></a> <span data-ng-bind=event.location></span> <span data-ng-bind=event.startdate></span> <span data-ng-bind=event.enddate></span></li><li data-ng-if=\"events.total==0\"><p class=no_suggestion_p>No event at the moment.</p></li></ul><uib-pagination data-ng-if=\"events.total > 0\" total-items=events.total ng-model=events.page max-size=5 class=pagination-sm boundary-link-numbers=true data-ng-change=\"events.paginationChanged(events.limit, events.page)\"></uib-pagination></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/event/myevent.html","<div><ul><li data-ng-if=\"events.total > 0\" data-ng-repeat=\"event in events.eventlist\"><a data-ng-href=\"index.php?option=com_community&view=events&task=viewevent&eventid={{event.id}}\"><span><img ng-src=/{{event.avatar}}></span> <span data-ng-bind=event.title></span></a> <span data-ng-bind=event.location></span> <span data-ng-bind=event.startdate></span> <span data-ng-bind=event.enddate></span></li><li data-ng-if=\"events.total==0\"><p class=no_suggestion_p>No event at the moment.</p></li></ul><uib-pagination data-ng-if=\"events.total > 0\" total-items=events.total ng-model=events.page max-size=5 class=pagination-sm boundary-link-numbers=true data-ng-change=\"events.paginationChanged(events.limit, events.page)\"></uib-pagination></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/jobs/capplied.html","<div><center><h1 data-ng-show=\"applied.total != null\" data-ng-bind=applied.total></h1><center></center></center></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/jobs/cjobs.html","<div><center><h1 data-ng-show=\"job.total != null\" data-ng-bind=job.total></h1><center></center></center></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/jobs/crecommended.html","<div><center><h1 data-ng-show=\"recommended.total != null\" data-ng-bind=recommended.total></h1><center></center></center></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/jobs/csaved.html","<div><center><h1 data-ng-show=\"saved.total != null\" data-ng-bind=saved.total></h1><center></center></center></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/jobs/listapplied.html","<div><ul><li data-ng-if=\"applied.total > 0\" data-ng-repeat=\"applieds in applied.appliedjobs\"><a data-ng-href={{applieds.job.url}}><span><img ng-src={{applieds.job.image_url}}> <span data-ng-bind=applieds.job.job_title></span></span></a> <span data-ng-bind=applieds.job.job_group.country></span> <span data-ng-bind=applieds.job.job_group.industry></span> <span data-ng-bind=applieds.date_applied></span></li><li data-ng-if=\"applied.total==0\"><p class=no_suggestion_p>No Applied Jobs at the moment.</p></li></ul><uib-pagination data-ng-if=\"applied.total > 0\" total-items=applied.total ng-model=applied.page max-size=5 class=pagination-sm boundary-link-numbers=true data-ng-change=\"applied.paginationChanged(applied.currentUser, applied.limit, applied.page)\"></uib-pagination></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/jobs/listjobs.html","<form data-ng-submit=job.search(searchForm) name=searchForm novalidate data-ng-init=\"job.searchJobs(job.limit, job.page)\"><div><input data-ng-model=job.searchkey.search name=search placeholder=keyword type=text data-ng-required=true> <span class=error-message data-ng-show=\"searchForm.search.$error.required && (searchForm.$submitted || searchForm.search.$touched)\">Please specify keyword.</span><select data-ng-model=job.searchkey.country data-ng-options=\"country.nicename as country.nicename for country in job.country\"><option default>Please Choose Country</option></select><input type=submit value=Search></div></form><div><ul data-ng-if=\"job.total > 0 && job.error != 1\"><li data-ng-repeat=\"jobs in job.searchjobs\"><a data-ng-href={{jobs.url}}><span><img ng-src={{jobs.image_url}}></span> <span data-ng-bind=jobs.job_title></span></a> <span data-ng-bind=jobs.job_group.country></span> <span data-ng-bind=jobs.job_group.industry></span> <span data-ng-bind=jobs._applied></span></li><uib-pagination boundary-link-numbers=true class=pagination-sm data-ng-change=\"job.searchJobs(job.limit, job.page)\" max-size=5 ng-model=job.page total-items=job.total></uib-pagination></ul><div data-ng-if=\"job.total==0\"><p class=no_suggestion_p>No Jobs at the moment.</p></div><div data-ng-if=\"job.error==1\"><p class=no_suggestion_p>No Jobs Found.</p></div></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/jobs/listrecommended.html","<div><ul><li data-ng-if=\"recommended.total > 0\" data-ng-repeat=\"recommendeds in recommended.appliedjobs\"><span><a data-ng-href={{recommendeds.url}}><img ng-src={{recommendeds.job.image_url}}></a></span> <a data-ng-href={{recommendeds.url}}><span data-ng-bind=recommendeds.job.job_title></span></a> <span data-ng-bind=recommendeds.job.job_group.country></span> <span data-ng-bind=recommendeds.job.job_group.industry></span> <span data-ng-bind=recommendeds.date_applied></span></li><li data-ng-if=\"recommended.total==0\"><p class=no_suggestion_p>No Recommended Jobs at the moment.</p></li></ul><uib-pagination data-ng-if=\"recommended.total > 0\" total-items=recommended.total ng-model=recommended.page max-size=5 class=pagination-sm boundary-link-numbers=true data-ng-change=\"recommended.paginationChanged(recommended.currentUser, recommended.limit, recommended.page)\"></uib-pagination></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/jobs/listsaved.html","<div><ul><li data-ng-if=\"saved.total > 0\" data-ng-repeat=\"saveds in saved.savedjobs\"><a data-ng-href={{saveds.url}}><span><img ng-src={{saveds.image_url}}></span> <span data-ng-bind=saveds.job_title></span></a> <span data-ng-bind=saveds.job_group.country></span> <span data-ng-bind=saveds.job_group.industry></span> <span data-ng-bind=saveds.job_group.name></span></li><li data-ng-if=\"saved.total==0\"><p class=no_suggestion_p>No Saved Jobs at the moment.</p></li></ul><uib-pagination data-ng-if=\"saved.total > 0\" total-items=saved.total ng-model=saved.page max-size=5 class=pagination-sm boundary-link-numbers=true data-ng-change=\"saved.paginationChanged(saved.currentUser, saved.limit, saved.page)\"></uib-pagination></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/group/creategroup.html","<div><center><a href=\"/index.php?option=com_community&view=groups&task=create&Itemid=672\">Create Group</a></center></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/group/listgroup.html","<div><ul><li data-ng-if=\"groups.total > 0\" data-ng-repeat=\"gro in groups.groupslist\"><a data-ng-href=\"index.php?option=com_community&view=groups&task=viewgroup&groupid={{gro.id}}\"><span><img ng-src=/{{gro.thumb}}></span> <span data-ng-bind=gro.name></span></a> <span data-ng-bind=gro.date_created></span></li><li data-ng-if=\"groups.total==0\"><p class=no_suggestion_p>No group at the moment.</p></li></ul><uib-pagination data-ng-if=\"groups.total > 0\" total-items=groups.total ng-model=groups.page max-size=5 class=pagination-sm boundary-link-numbers=true data-ng-change=\"groups.paginationChanged(groups.limit, groups.page)\"></uib-pagination></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/group/mygrouplist.html","<div><ul><li data-ng-if=\"groups.total > 0\" data-ng-repeat=\"gro in groups.mygrouplist\"><a data-ng-href=\"index.php?option=com_community&view=groups&task=viewgroup&groupid={{gro.id}}\"><span><img ng-src=/{{gro.thumb}}></span> <span data-ng-bind=gro.name></span></a> <span data-ng-bind=gro.created></span></li><li data-ng-if=\"groups.total==0\"><p class=no_suggestion_p>No group at the moment.</p></li></ul><uib-pagination data-ng-if=\"groups.total > 0\" total-items=groups.total ng-model=groups.page max-size=5 class=pagination-sm boundary-link-numbers=true data-ng-change=\"groups.paginationChanged(groups.limit, groups.page)\"></uib-pagination></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/message/cmessage.html","<div><center><h1 data-ng-show=\"message.total != null\" data-ng-bind=message.total></h1><center></center></center></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/message/listmymessage.html","<div><ul><li data-ng-if=\"message.total > 0\" data-ng-repeat=\"mess in message.mymessage\"><div></div><a data-ng-href=\"/index.php?option=com_zconjobs&view=profile&Itemid=688&lang=en#/{{message.currentUser.user_id}}\"><span data-ng-bind=mess.from_name></span></a> <a data-ng-href=\"/index.php?option=com_community&view=inbox&task=read&msgid={{mess.id}}&Itemid=638&lang=en\"><span data-ng-bind=mess.subject></span></a> <span data-ng-bind=mess.posted_on></span></li><li data-ng-if=\"message.total==0\"><p class=no_suggestion_p>No Message at the moment.</p></li></ul><uib-pagination data-ng-if=\"message.total > 0\" total-items=message.total ng-model=message.page max-size=5 class=pagination-sm boundary-link-numbers=true data-ng-change=\"message.paginationChanged(message.limit, message.page)\"></uib-pagination></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/account.html","<div>Username : <span data-ng-bind=profile.currentUser.email></span></div><div>Password : <span>******************</span> <a href=#>Edit</a></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/contact.html","<div><span data-ng-bind=contact.currentUser.email></span></div><div><span data-ng-bind=contact.currentUser.address.address_1></span> <span data-ng-bind=contact.currentUser.address.address_2></span> <span data-ng-bind=contact.currentUser.address.country></span> <span data-ng-bind=contact.currentUser.address.postal_zip></span></div><div>+<span data-ng-bind=contact.contacts.country_code></span><span data-ng-bind=contact.contacts.phone_number></span></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/edit.html","<form role=form><div class=form-group><label for=sample>Sample</label> <input type=text class=form-control id=sample ng-model=config.sample placeholder=\"Enter sample\"></div></form>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/strength.html","<div><center><h1 data-ng-show=strength.strength.percentage data-ng-bind=\"(strength.strength.percentage*100).toFixed(1) + \' %\'\"></h1><center></center></center></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/view.html","<ul class=user_dashbord_personal_info><li><h6>Name :</h6><p><span data-ng-bind=profile.currentUser.first_name></span> <span data-ng-bind=profile.currentUser.last_name></span></p></li><li><h6>Professional headline :</h6><p data-ng-bind=profile.jobseekerInfo.quote></p></li><li><h6>Gender :</h6><p data-ng-bind=\"(profile.currentUser.gender===\'M\') ? \'Male\' : \'Female\'\"></p></li><li><h6>Birth date :</h6><p data-ng-bind=profile.currentUser.birthdate></p></li><li><h6>Nationality :</h6><p data-ng-bind=profile.jobseekerInfo.nationality></p></li><li><h6>Civil status :</h6><p data-ng-bind=profile.jobseekerInfo.civil_status></p></li></ul>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/profile/views.html","<div><center><h1 data-ng-show=\"views.total != null\" data-ng-bind=views.total></h1><center></center></center></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/znetwork/cfriend.html","<div><center><h1 data-ng-show=znetwork.total data-ng-bind=znetwork.total></h1><center></center></center></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/znetwork/friends.html","<div><ul><li data-ng-repeat=\"friend in znetwork.znetwork\"><a data-ng-href={{friend.profile_url}}><span><img ng-src={{friend.avatar}}></span> <span data-ng-bind=\"friend.first_name + \' \' + friend.last_name\"></span></a></li></ul><uib-pagination total-items=znetwork.total ng-model=znetwork.page max-size=5 class=pagination-sm boundary-link-numbers=true data-ng-change=\"znetwork.paginationChanged(znetwork.currentUser, znetwork.limit, znetwork.page)\"></uib-pagination></div>");
$templateCache.put("{widgetsPath}/ja-zconnect-widget-user/src/templates/znetwork/userlist.html","<div><div class=\"col-sm-12 col-xs-12\"><div class=row><ul class=suggested_contacts><li data-ng-if=\"suggestedUsers.suggestedUsers.length > 0\" data-ng-repeat=\"user in suggestedUsers.suggestedUsers | limitTo: suggestedUsers.limit\"><div class=\"col-sm-12 col-xs-12\"><div class=row><div class=\"col-lg-2 col-sm-2 col-xs-2\"><div class=row><a data-ng-href={{user.profile_url}}><img data-ng-src={{user.avatar}}></a></div></div><div class=\"col-lg-10 col-sm-10 col-xs-10\"><div class=row><a data-ng-href={{user.profile_url}}><p class=contact_name data-ng-bind=\"user.first_name + \' \' + user.last_name\"></p></a><div class=\"col-sm-12 col-xs-12\"><div class=row><a href=javascript: data-ng-click=\"suggestedUsers.addUser(user.user_id, $index)\" class=connect_skip>Connect</a> <a href=javascript: data-ng-click=suggestedUsers.skipUser($index) class=connect_skip>Skip</a></div></div></div></div></div></div></li><li style=\"background:none; padding:0 !important; margin:0; border:none;\" data-ng-if=\"suggestedUsers.suggestedUsers.length==0\"><p class=no_suggestion_p>No suggestions at the moment.</p></li></ul></div></div></div>");}]);
angular.module('ja-zconnect-widget-user').controller('ZconnectionsListCtrl', ['currentUser', '$q', 'ngZconnected', 'userService', 'ngJoms', function(currentUser, $q, ngZconnected, userService, ngJoms) {
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
        vm.total;
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
    .controller('ViewsCtrl', ['currentUser', '$q', 'ngZconnected', 'profileService', 'jobService', function(currentUser, $q, ngZconnected, profileService, jobService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.views = {};
        vm.total;

        $q.when(profileService.profileViews(vm.currentUser.user_id))
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
    .controller('StrengthCtrl', ['currentUser', '$q', 'ngZconnected', 'profileService', 'jobService', function(currentUser, $q, ngZconnected, profileService, jobService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.strength = {};

        $q.when(profileService.profileStrength.get(vm.currentUser.user_id))
            .then(function(strength){
                if (ngZconnected._DEBUG)
                    console.log(strength);
                vm.strength = strength;
            }, function(error) {
                if (ngZconnected._DEBUG)
                    console.log(error);
            });
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

        $q.when(profileService.jobseekerInfo.get(vm.currentUser.user_id))
            .then(function(jobseekerInfo) {
                if (ngZconnected._DEBUG)
                    console.log(jobseekerInfo)
                vm.jobseekerInfo = jobseekerInfo;
            }, function(error) {
                if (ngZconnected._DEBUG)
                    console.log(error);
            });
    }]);



angular.module('ja-zconnect-widget-user')
    .controller('MyGroupListCtrl', ['currentUser', '$q', 'ngZconnected', 'userService', 'resourceService', function(currentUser, $q, ngZconnected, userService, resourceService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.mygrouplist = {};
        vm.total;
        vm.limit = 10;
        vm.page = 1;
        vm.paginationChanged = function(currentUser, limit, page) {
            $q.when(userService.getUserGroup(currentUser.user_id, limit, page))
                .then(function(mygroup) {
                    if (ngZconnected._DEBUG)
                        console.log(mygroup)
                    vm.mygrouplist = mygroup.data;
                    vm.total = mygroup.meta.total;
                }, function(error) {
                    if (ngZconnected._DEBUG)
                        console.log(error);
                });
        }
        vm.paginationChanged(vm.currentUser, vm.limit, vm.page);
    }]);

angular.module('ja-zconnect-widget-user')
    .controller('MyEventListCtrl', ['currentUser', '$q', 'ngZconnected', 'userService', 'resourceService', function(currentUser, $q, ngZconnected, userService, resourceService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.eventlist = {};
        vm.total;
        vm.limit = 10;
        vm.page = 1;
        vm.paginationChanged = function(currentUser, limit, page) {
            $q.when(userService.getUserEvents(currentUser.user_id, limit, page))
                .then(function(event) {
                    if (ngZconnected._DEBUG)
                        console.log(event)
                    vm.eventlist = event.data;
                    vm.total = event.meta.total;
                }, function(error) {
                    if (ngZconnected._DEBUG)
                        console.log(error);
                });
        }
        vm.paginationChanged(vm.currentUser, vm.limit, vm.page);
    }]);

angular.module('ja-zconnect-widget-user')
    .controller('MessageCtrl', ['currentUser', '$q', 'ngZconnected', 'userService', 'resourceService', function(currentUser, $q, ngZconnected, userService, resourceService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.mymessage = {};
        vm.total;
        vm.limit = 10;
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

angular.module('ja-zconnect-widget-user')
    .controller('JobsearchCtrl', ['currentUser', '$q', 'ngZconnected', 'jobService', 'resourceService', function(currentUser, $q, ngZconnected, jobService, resourceService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.searchjobs = {};
        vm.searchkey = {};
        vm.search = "";
        vm.total;
        vm.limit = 10;
        vm.page = 1;
        vm.country = "";
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
    .controller('GroupListCtrl', ['currentUser', '$q', 'ngZconnected', 'userService', 'resourceService', function(currentUser, $q, ngZconnected, userService, resourceService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.groupslist = {};
        vm.total = 0;
        vm.limit = 10;
        vm.page = 1;
        vm.paginationChanged = function(limit, page) {
            $q.when(resourceService.groupList.get(limit, page))
                .then(function(group) {
                    if (ngZconnected._DEBUG)
                        console.log(group)
                    vm.groupslist = group.data;
                    vm.total = group.total;
                }, function(error) {
                    if (ngZconnected._DEBUG)
                        console.log(error);
                });
        }
        vm.paginationChanged(vm.limit, vm.page);
    }]);

angular.module('ja-zconnect-widget-user')
    .controller('EventListCtrl', ['currentUser', '$q', 'ngZconnected', 'userService', 'resourceService', function(currentUser, $q, ngZconnected, userService, resourceService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.eventlist = {};
        vm.total;
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

angular.module('ja-zconnect-widget-user')
    .controller('EmailCtrl', ['currentUser', '$q', 'ngZconnected', 'profileService', 'jobService', function(currentUser, $q, ngZconnected, profileService, jobService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.email = {};

        $q.when(profileService.userEmail.get(vm.currentUser.user_id, vm.currentUser.extra_properties.primary_email))
            .then(function(email) {
                if (ngZconnected._DEBUG)
                    console.log(email);
                vm.email = email;
            }, function(error) {
                if (ngZconnected._DEBUG)
                    console.log(error);
            });
    }]);



angular.module('ja-zconnect-widget-user')
    .controller('ContactCtrl', ['currentUser', '$q', 'ngZconnected', 'profileService', 'jobService', function(currentUser, $q, ngZconnected, profileService, jobService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.contacts = {};

        $q.when(profileService.userContactNumber.get(vm.currentUser.user_id, vm.currentUser.extra_properties.primary_contact_number))
            .then(function(contacts) {
                if (ngZconnected._DEBUG)
                    console.log(contacts);
                vm.contacts = contacts;
            }, function(error) {
                if (ngZconnected._DEBUG)
                    console.log(error);
            });
    }]);



angular.module('ja-zconnect-widget-user')
    .controller('CompanyListCtrl', ['currentUser', '$q', 'ngZconnected', 'userService', 'resourceService', function(currentUser, $q, ngZconnected, userService, resourceService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.companyjobs = {};
        vm.total;
        vm.limit = 10;
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