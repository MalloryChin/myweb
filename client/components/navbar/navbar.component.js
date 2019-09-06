/* eslint-disable linebreak-style */
'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [
    {
      title: 'Home',
      link: '/'
    }
  ];

  isNavCollapsed = true; //menu will collapse

  /* initialize variables in the constructor*/
  constructor($location) {
    'ngInject';
    this.$location = $location;
    // window.onscroll = this.shrink();
  }

  $onInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  /* if route is active return path location */
  isActive(route) {
    return route === this.$location.path();
  }

  scroll() {
    var mainNav = document.getElementById('mainNav');
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 50) {
      console.log('shrink!!!');
      mainNav.classList.add('navbar-shrink');
    } else {
      mainNav.classList.remove('navbar-shrink');
    }
  }
}

export default angular.module('directives.navbar', []).component('navbar', {
  template: require('./navbar.html'),
  controller: NavbarComponent,
  controllerAs: 'navbarComponent'
}).name;
