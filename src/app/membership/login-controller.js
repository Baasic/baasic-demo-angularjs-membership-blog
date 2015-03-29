/**
 * Created by Darjan on 28.3.2015..
 */
angular.module('membershipblog')
  .controller('LoginController', function($scope, baasicLoginService, baasicAuthorizationService){
    'use strict';

    var vm = {};
    $scope.vm = vm;
    vm.message = '';

    vm.user = {};
    vm.user.options = ['session', 'sliding'];

    vm.login = function(){
      baasicLoginService.login(vm.user)
        .success(function(data){
          //insert token into local storage
          baasicAuthorizationService.updateAccessToken(data);
            //At this point, you can redirect user to a pages such as Home, Dashboard, etc...
            vm.message = 'Successful login, user token is stored into local storage';
        })
        .error(function(data, status){
            //You can format your error messages based on http status codes
            vm.message = status === 401 ? 'Invalid username or password': 'Unable to login';
        });
    };

    vm.logout = function(){
      var token = baasicAuthorizationService.getAccessToken();

      baasicLoginService.logout(token.access_token, token.token_type)
        .success(function(){
          //delete token from local storage
          baasicAuthorizationService.updateAccessToken(null);
          //At this point, you can redirect user to a pages such as Landing page, etc...
          vm.message = 'You have successfully logout yourself from baasic';
        })
        .error(function(data, status){
          //You can format your error messages based on status codes or specific error messages
          vm.message = status + ': ' + data;
        });
    };
  });
