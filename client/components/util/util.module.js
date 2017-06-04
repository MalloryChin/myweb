'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('comp3705App.util', [])
  .factory('Util', UtilService)
  .name;
