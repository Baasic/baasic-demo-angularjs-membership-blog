angular.module('membershipblog', ['ui.router', 'baasic.security', 'baasic.membership'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider, baasicAppProvider, Constants){
    'use strict';

    //routing
    $stateProvider
      .state('login',{
        url: '/login',
        templateUrl: Constants.templatesPath + 'membership/login.html',
        controller: 'LoginController'
      })
      .state('register', {
        url: '/register',
        templateUrl: Constants.templatesPath + 'membership/register.html',
        controller: 'RegisterController'
      })
      .state('password-recovery', {
        url: '/password-recovery',
        templateUrl: Constants.templatesPath + 'membership/password-recovery.html',
        controller: 'PasswordRecoveryController'
      })
      .state('password-change', {
        url: '/password-change?passwordRecoveryToken',
        templateUrl: Constants.templatesPath + 'membership/password-change.html',
        controller: 'PasswordChangeController'
      })
      .state('account-activation', {
        url: '/account-activation?activationToken',
        templateUrl: Constants.templatesPath + 'membership/account-activation.html',
        controller: 'AccountActivationController'
      });

    //urls without hashbangs
    $locationProvider.html5Mode({
          enabled: true,
          requireBase: true
      });

    //default page
    $urlRouterProvider.otherwise('/login');

    //define Baasic app
    baasicAppProvider.create('membership-blog', {
      apiRootUrl: 'api.baasic.com',
      apiVersion: 'beta'
    });
  });
