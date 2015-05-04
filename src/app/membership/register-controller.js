/**
 * Created by Darjan on 28.3.2015..
 */
angular.module('membershipblog')
  .controller('RegisterController', function($scope, $state, baasicRegisterService, baasicRecaptchaService) {
    'use strict';

    var vm = {};
    $scope.vm = vm;

    vm.message = '';

    vm.user = {};
    vm.user.activationUrl = $state.href('account-activation', {}, { absolute: true }) + '?activationToken={activationToken}';
    //vm.user.isApproved = true; uncomment this line if you want to circumvent account activation through email. User will be automatically approved.
    vm.user.creationDate = new Date();
    vm.user.challengeIdentifier = '';
    vm.user.challengeResponse = '';

    vm.register = function(){
      if($scope.registrationForm.$valid){
        vm.user.challengeIdentifier = baasicRecaptchaService.challenge();
        vm.user.challengeResponse = baasicRecaptchaService.response();

        if (vm.user.challengeResponse === '') {
          vm.message = 'Captcha code is required.';
          return;
        }

        baasicRegisterService.create(vm.user)
          .success(function(){
            //At this point, you can redirect user to a pages such as Login, etc..., or simply show an appropriate message.
            vm.message = 'You have successfully registered, please go to your email in order to finish registration process';
          })
          .error(function(data, status){
            //You can format your error messages based on status codes or specific error messages
            vm.message = status + ': ' + data;
            baasicRecaptchaService.reload();
          });
      }
    };
  });
