'use strict';

import angular from 'angular';

export default angular.module('comp3705App.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
