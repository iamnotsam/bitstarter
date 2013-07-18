/*jslint unparam: true, browser: true, indent: 2 */

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.alerts = {
    name : 'alerts',

<<<<<<< HEAD
    version : '4.2.2',
=======
    version : '4.0.0',
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2

    settings : {
      speed: 300, // fade out speed
      callback: function (){}
    },

    init : function (scope, method, options) {
      this.scope = scope || this.scope;

      if (typeof method === 'object') {
        $.extend(true, this.settings, method);
      }

<<<<<<< HEAD
      if (typeof method !== 'string') {
        if (!this.settings.init) { this.events(); }
=======
      if (typeof method != 'string') {
        if (!this.settings.init) this.events();
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2

        return this.settings.init;
      } else {
        return this[method].call(this, options);
      }
    },

    events : function () {
      var self = this;

      $(this.scope).on('click.fndtn.alerts', '[data-alert] a.close', function (e) {
        e.preventDefault();
        $(this).closest("[data-alert]").fadeOut(self.speed, function () {
          $(this).remove();
          self.settings.callback();
        });
      });

      this.settings.init = true;
    },

    off : function () {
      $(this.scope).off('.fndtn.alerts');
<<<<<<< HEAD
    },

    reflow : function () {}
=======
    }
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
  };
}(Foundation.zj, this, this.document));