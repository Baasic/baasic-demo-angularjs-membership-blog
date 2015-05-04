angular.module('membershipblog', ['ui.router', 'baasic.security', 'baasic.membership'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider, baasicAppProvider){
    'use strict';

    //routing
    $stateProvider
      .state('login',{
        url: '/login',
        templateUrl: 'membership/login.html',
        controller: 'LoginController'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'membership/register.html',
        controller: 'RegisterController'
      })
      .state('password-recovery', {
        url: '/password-recovery',
        templateUrl: 'membership/password-recovery.html',
        controller: 'PasswordRecoveryController'
      })
      .state('password-change', {
        url: '/password-change?passwordRecoveryToken',
        templateUrl: 'membership/password-change.html',
        controller: 'PasswordChangeController'
      })
      .state('account-activation', {
        url: '/account-activation?activationToken',
        templateUrl: 'membership/account-activation.html',
        controller: 'AccountActivationController'
      });

    //urls without hashbangs
    $locationProvider.html5Mode(true);

    //default page
    $urlRouterProvider.otherwise('/login');

    //define Baasic app
    baasicAppProvider.create('membership-blog', {
      apiRootUrl: 'api.baasic.com',
      apiVersion: 'beta'
    });
  });
