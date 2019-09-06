'use strict';
import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './portfolio.routes';

// creates the AdminController class and the constructor/delete functions
export class PortController {
  /*@ngInject*/
  constructor($http) {
    // Use the User $resource to fetch all users
    this.$http = $http;
  }

  $onInit() {}
}

export default angular
  .module('webProjectsApp.portfolio', [ngRoute])
  .config(routing)
  .component('portfolio', {
    template: require('./portfolio.html'),
    controller: PortController,
    controllerAs: 'portController'
  }).name;
