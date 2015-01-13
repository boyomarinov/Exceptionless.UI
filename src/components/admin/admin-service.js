(function () {
  'use strict';

  angular.module('exceptionless.admin', ['restangular'])
    .factory('adminService', ['Restangular', function (Restangular) {
      function changePlan(options) {
        options.organization
        return Restangular.one('admin').customPOST(null, 'change-plan', options);
      }

      var service = {
        changePlan: changePlan
      };

      return service;
    }]);
}());
