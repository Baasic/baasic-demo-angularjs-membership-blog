/**
 * Created by Darjan on 28.3.2015..
 */
angular.module('membershipblog')
  .controller('AccountActivationController', function($scope, $stateParams,  baasicRegisterService){
    'use strict';

    var vm = {};
    $scope.vm = vm;

    vm.message = 'Activating your account, please wait.';

    (function(){
      if($stateParams.activationToken) {
        baasicRegisterService.activate({activationToken: $stateParams.activationToken})
          .success(function () {
            vm.message = 'You have successfully activate your account!';
          })
          .error(function (data, status) {
            vm.message = status + ': ' + data;
          });
      }
      else{
        vm.message = 'Activation token is required';
      }
    })();
  });
