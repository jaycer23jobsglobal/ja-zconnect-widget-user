angular.module('ja-zconnect-widget-user')
    .controller('EmailCtrl', ['currentUser', '$q', 'ngZconnected', 'profileService', 'userService', function(currentUser, $q, ngZconnected, profileService, userService) {
        var vm = this;
        vm.currentUser = currentUser;
        vm.email = {};
        vm.password = {};
        vm.not_valid = null;

        $q.when(profileService.userEmail.get(vm.currentUser.user_id, vm.currentUser.extra_properties.primary_email))
            .then(function(email) {
                if (ngZconnected._DEBUG)
                    console.log(email);
                vm.email = email;
            }, function(error) {
                if (ngZconnected._DEBUG)
                    console.log(error);
            });

        vm.showInputPassword = function()
        {
            $("#inputPassword").show();
            $("#password").hide();
        }

        vm.cancelEditPassword = function()
        {
            $("#inputPassword").hide();
            $("#password").show();

            vm.not_valid = null;
            vm.password = {};
        }

        vm.editPassword = function(form)
        {
            if (form.$valid) {
            if(vm.password.current_password.length >= 8){
                    if(vm.password.new_password.length >= 8){
                        if(vm.password.retype_password.length >= 8){
                            if(vm.password.new_password == vm.password.retype_password){
                                vm.not_valid = null;
                                vm.password.id = vm.currentUser.user_id;
                                userService.password.save(vm.currentUser.user_id, vm.password)
                                .then(function(response) {
                                    if (ngZconnected._DEBUG)
                                        console.log(response);
                                        Zconnected.helpers.showSystemMessage(response.message, "message");
                                        vm.cancelEditPassword();
                                }, function(error) {
                                    if (ngZconnected._DEBUG)
                                        console.log(error);
                                });
                            } else {
                                vm.not_valid = "New password not match on Retype password.";
                            }
                    }
                }
            }
        }
        }
    }]);


