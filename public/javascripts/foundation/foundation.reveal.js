/*jslint unparam: true, browser: true, indent: 2 */

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.reveal = {
    name: 'reveal',

<<<<<<< HEAD
    version : '4.2.2',
=======
    version : '4.1.2',
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2

    locked : false,

    settings : {
      animation: 'fadeAndPop',
      animationSpeed: 250,
      closeOnBackgroundClick: true,
<<<<<<< HEAD
      closeOnEsc: true,
=======
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
      dismissModalClass: 'close-reveal-modal',
      bgClass: 'reveal-modal-bg',
      open: function(){},
      opened: function(){},
      close: function(){},
      closed: function(){},
      bg : $('.reveal-modal-bg'),
      css : {
        open : {
          'opacity': 0,
          'visibility': 'visible',
          'display' : 'block'
        },
        close : {
          'opacity': 1,
          'visibility': 'hidden',
          'display': 'none'
        }
      }
    },

    init : function (scope, method, options) {
<<<<<<< HEAD
=======
      this.scope = scope || this.scope;
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
      Foundation.inherit(this, 'data_options delay');

      if (typeof method === 'object') {
        $.extend(true, this.settings, method);
      } else if (typeof options !== 'undefined') {
        $.extend(true, this.settings, options);
      }

<<<<<<< HEAD
      if (typeof method !== 'string') {
=======
      if (typeof method != 'string') {
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
        this.events();

        return this.settings.init;
      } else {
        return this[method].call(this, options);
      }
    },

    events : function () {
      var self = this;

      $(this.scope)
        .off('.fndtn.reveal')
        .on('click.fndtn.reveal', '[data-reveal-id]', function (e) {
          e.preventDefault();
<<<<<<< HEAD

          if (!self.locked) {
            var element = $(this),
                ajax = element.data('reveal-ajax');

            self.locked = true;

            if (typeof ajax === 'undefined') {
              self.open.call(self, element);
            } else {
              var url = ajax === true ? element.attr('href') : ajax;

              self.open.call(self, element, {url: url});
            }
          }
        })
        .on('click.fndtn.reveal', this.close_targets(), function (e) {
          e.preventDefault();
          if (!self.locked) {
            var settings = $.extend({}, self.settings, self.data_options($('.reveal-modal.open')));
            if ($(e.target)[0] === $('.' + settings.bgClass)[0] && !settings.closeOnBackgroundClick) {
              return;
            }

=======
          if (!self.locked) {
            self.locked = true;
            self.open.call(self, $(this));
          }
        })
        .on('click.fndtn.reveal touchend.click.fndtn.reveal', this.close_targets(), function (e) {
          e.preventDefault();
          if (!self.locked) {
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
            self.locked = true;
            self.close.call(self, $(this).closest('.reveal-modal'));
          }
        })
        .on('open.fndtn.reveal', '.reveal-modal', this.settings.open)
        .on('opened.fndtn.reveal', '.reveal-modal', this.settings.opened)
        .on('opened.fndtn.reveal', '.reveal-modal', this.open_video)
        .on('close.fndtn.reveal', '.reveal-modal', this.settings.close)
        .on('closed.fndtn.reveal', '.reveal-modal', this.settings.closed)
        .on('closed.fndtn.reveal', '.reveal-modal', this.close_video);

<<<<<<< HEAD
      $( 'body' ).bind( 'keyup.reveal', function ( event ) {
        var open_modal = $('.reveal-modal.open'),
            settings = $.extend({}, self.settings, self.data_options(open_modal));
        if ( event.which === 27  && settings.closeOnEsc) { // 27 is the keycode for the Escape key
          open_modal.foundation('reveal', 'close');
        }
      });

      return true;
    },

    open : function (target, ajax_settings) {
      if (target) {
        if (typeof target.selector !== 'undefined') {
          var modal = $('#' + target.data('reveal-id'));
        } else {
          var modal = $(this.scope);

          ajax_settings = target;
        }
=======
      return true;
    },

    open : function (target) {
      if (target) {
        var modal = $('#' + target.data('reveal-id'));
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
      } else {
        var modal = $(this.scope);
      }

      if (!modal.hasClass('open')) {
        var open_modal = $('.reveal-modal.open');

        if (typeof modal.data('css-top') === 'undefined') {
          modal.data('css-top', parseInt(modal.css('top'), 10))
            .data('offset', this.cache_offset(modal));
        }

        modal.trigger('open');

        if (open_modal.length < 1) {
          this.toggle_bg(modal);
        }
<<<<<<< HEAD

        if (typeof ajax_settings === 'undefined' || !ajax_settings.url) {
          this.hide(open_modal, this.settings.css.close);
          this.show(modal, this.settings.css.open);
        } else {
          var self = this,
              old_success = typeof ajax_settings.success !== 'undefined' ? ajax_settings.success : null;

          $.extend(ajax_settings, {
            success: function (data, textStatus, jqXHR) {
              if ( $.isFunction(old_success) ) {
                old_success(data, textStatus, jqXHR);
              }

              modal.html(data);
              $(modal).foundation('section', 'reflow');

              self.hide(open_modal, self.settings.css.close);
              self.show(modal, self.settings.css.open);
            }
          });

          $.ajax(ajax_settings);
        }
=======
        this.hide(open_modal, this.settings.css.close);
        this.show(modal, this.settings.css.open);
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
      }
    },

    close : function (modal) {

<<<<<<< HEAD
      var modal = modal && modal.length ? modal : $(this.scope),
=======
      var modal = modal || $(this.scope),
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
          open_modals = $('.reveal-modal.open');

      if (open_modals.length > 0) {
        this.locked = true;
        modal.trigger('close');
        this.toggle_bg(modal);
        this.hide(open_modals, this.settings.css.close);
      }
    },

    close_targets : function () {
      var base = '.' + this.settings.dismissModalClass;

      if (this.settings.closeOnBackgroundClick) {
        return base + ', .' + this.settings.bgClass;
      }

      return base;
    },

    toggle_bg : function (modal) {
      if ($('.reveal-modal-bg').length === 0) {
        this.settings.bg = $('<div />', {'class': this.settings.bgClass})
          .appendTo('body');
      }

      if (this.settings.bg.filter(':visible').length > 0) {
        this.hide(this.settings.bg);
      } else {
        this.show(this.settings.bg);
      }
    },

    show : function (el, css) {
      // is modal
      if (css) {
        if (/pop/i.test(this.settings.animation)) {
          css.top = $(window).scrollTop() - el.data('offset') + 'px';
          var end_css = {
            top: $(window).scrollTop() + el.data('css-top') + 'px',
            opacity: 1
          };

          return this.delay(function () {
            return el
              .css(css)
              .animate(end_css, this.settings.animationSpeed, 'linear', function () {
                this.locked = false;
                el.trigger('opened');
              }.bind(this))
              .addClass('open');
          }.bind(this), this.settings.animationSpeed / 2);
        }

        if (/fade/i.test(this.settings.animation)) {
          var end_css = {opacity: 1};

          return this.delay(function () {
            return el
              .css(css)
              .animate(end_css, this.settings.animationSpeed, 'linear', function () {
                this.locked = false;
                el.trigger('opened');
              }.bind(this))
              .addClass('open');
          }.bind(this), this.settings.animationSpeed / 2);
        }

        return el.css(css).show().css({opacity: 1}).addClass('open').trigger('opened');
      }

      // should we animate the background?
      if (/fade/i.test(this.settings.animation)) {
        return el.fadeIn(this.settings.animationSpeed / 2);
      }

      return el.show();
    },

    hide : function (el, css) {
      // is modal
      if (css) {
        if (/pop/i.test(this.settings.animation)) {
          var end_css = {
            top: - $(window).scrollTop() - el.data('offset') + 'px',
            opacity: 0
          };

          return this.delay(function () {
            return el
              .animate(end_css, this.settings.animationSpeed, 'linear', function () {
                this.locked = false;
                el.css(css).trigger('closed');
              }.bind(this))
              .removeClass('open');
          }.bind(this), this.settings.animationSpeed / 2);
        }

        if (/fade/i.test(this.settings.animation)) {
          var end_css = {opacity: 0};

          return this.delay(function () {
            return el
              .animate(end_css, this.settings.animationSpeed, 'linear', function () {
                this.locked = false;
                el.css(css).trigger('closed');
              }.bind(this))
              .removeClass('open');
          }.bind(this), this.settings.animationSpeed / 2);
        }

        return el.hide().css(css).removeClass('open').trigger('closed');
      }

      // should we animate the background?
      if (/fade/i.test(this.settings.animation)) {
        return el.fadeOut(this.settings.animationSpeed / 2);
      }

      return el.hide();
    },

    close_video : function (e) {
      var video = $(this).find('.flex-video'),
          iframe = video.find('iframe');

      if (iframe.length > 0) {
        iframe.attr('data-src', iframe[0].src);
        iframe.attr('src', 'about:blank');
<<<<<<< HEAD
        video.hide();
=======
        video.fadeOut(100).hide();
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
      }
    },

    open_video : function (e) {
      var video = $(this).find('.flex-video'),
          iframe = video.find('iframe');

      if (iframe.length > 0) {
        var data_src = iframe.attr('data-src');
        if (typeof data_src === 'string') {
          iframe[0].src = iframe.attr('data-src');
<<<<<<< HEAD
        } else {
          var src = iframe[0].src;
          iframe[0].src = undefined;
          iframe[0].src = src;
        }
        video.show();
=======
        }
        video.show().fadeIn(100);
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
      }
    },

    cache_offset : function (modal) {
      var offset = modal.show().height() + parseInt(modal.css('top'), 10);

      modal.hide();

      return offset;
    },

    off : function () {
      $(this.scope).off('.fndtn.reveal');
<<<<<<< HEAD
    },

    reflow : function () {}
=======
    }
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
  };
}(Foundation.zj, this, this.document));