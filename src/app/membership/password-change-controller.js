/**
 * Created by Darjan on 28.3.2015..
 */
angular.module('membershipblog')
  .controller('PasswordChangeController', function($scope, $stateParams, baasicPasswordRecoveryService) {
    'use strict';

    var vm = {};
    $scope.vm = vm;

    vm.resetData = {};
    vm.resetData.passwordRecoveryToken = $stateParams.passwordRecoveryToken;
    vm.resetData.newPassword = '';
    vm.confirmPassword = '';

    vm.changePassword = function(){
      if(vm.resetData.newPassword !== vm.confirmPassword){
        vm.message = 'password and confirm password must match';
        return;
      }

      baasicPasswordRecoveryService.reset(vm.resetData)
        .success(function(){
          vm.message = 'You have successfully changed your password.';
        })
        .error(function(data, status){
          vm.message = status + ': ' + data;
        });
    };
  });
