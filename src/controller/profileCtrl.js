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


