/*jslint unparam: true, browser: true, indent: 2 */

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.section = {
    name: 'section',

<<<<<<< HEAD
    version : '4.2.3',

    settings : {
      deep_linking: false,
      small_breakpoint: 768,
      one_up: true,
      section_selector : '[data-section]',
      region_selector : 'section, .section, [data-section-region]',
      title_selector : '.title, [data-section-title]',
      active_region_selector : 'section.active, .section.active, .active[data-section-region]',
      content_selector : '.content, [data-section-content]',
      nav_selector : '[data-section="vertical-nav"], [data-section="horizontal-nav"]',
=======
    version : '4.1.2',

    settings : {
      deep_linking: false,
      one_up: true,
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
      callback: function (){}
    },

    init : function (scope, method, options) {
      var self = this;
      Foundation.inherit(this, 'throttle data_options position_right offset_right');

<<<<<<< HEAD
      if (typeof method === 'object') {
        $.extend(true, self.settings, method);
      }

      if (typeof method !== 'string') {
=======
      if (typeof method != 'string') {
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
        this.set_active_from_hash();
        this.events();

        return true;
      } else {
        return this[method].call(this, options);
      }
    },

    events : function () {
      var self = this;

      $(this.scope)
        .on('click.fndtn.section', '[data-section] .title, [data-section] [data-section-title]', function (e) {
          var $this = $(this),
<<<<<<< HEAD
              section = $this.closest(self.settings.region_selector);

          if (section.children(self.settings.content_selector).length > 0) {
            self.toggle_active.call(this, e, self);
            self.reflow();
          }
=======
              section = $this.closest('[data-section]');

          self.toggle_active.call(this, e, self);
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
        });

      $(window)
        .on('resize.fndtn.section', self.throttle(function () {
          self.resize.call(this);
        }, 30))
        .on('hashchange', function () {
          if (!self.settings.toggled){
            self.set_active_from_hash();
            $(this).trigger('resize');
          }
        }).trigger('resize');

      $(document)
        .on('click.fndtn.section', function (e) {
<<<<<<< HEAD
          if ($(e.target).closest(self.settings.title_selector).length < 1) {
            $(self.settings.nav_selector)
              .children(self.settings.region_selector)
=======
          if ($(e.target).closest('.title, [data-section-title]').length < 1) {
            $('[data-section="vertical-nav"], [data-section="horizontal-nav"]')
              .find('section, .section, [data-section-region]')
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
              .removeClass('active')
              .attr('style', '');
          }
        });

    },

    toggle_active : function (e, self) {
      var $this = $(this),
<<<<<<< HEAD
          self = Foundation.libs.section,
          region = $this.closest(self.settings.region_selector),
          content = $this.siblings(self.settings.content_selector),
          parent = region.parent(),
          settings = $.extend({}, self.settings, self.data_options(parent)),
          prev_active_section = parent
            .children(self.settings.active_region_selector);
=======
          section = $this.closest('section, .section, [data-section-region]'),
          content = section.find('.content, [data-section-content]'),
          parent = section.closest('[data-section]'),
          self = Foundation.libs.section,
          settings = $.extend({}, self.settings, self.data_options(parent));
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2

      self.settings.toggled = true;

      if (!settings.deep_linking && content.length > 0) {
        e.preventDefault();
      }

<<<<<<< HEAD
      if (region.hasClass('active')) {
        // this is causing the style flash.
=======
      if (section.hasClass('active')) {
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
        if (self.small(parent)
          || self.is_vertical_nav(parent)
          || self.is_horizontal_nav(parent)
          || self.is_accordion(parent)) {
<<<<<<< HEAD
            if (prev_active_section[0] !== region[0]
              || (prev_active_section[0] === region[0] && !settings.one_up)) {
              region
                .removeClass('active')
                .attr('style', '');
            }
        }
      } else {
        var prev_active_section = parent
              .children(self.settings.active_region_selector),
            title_height = self.outerHeight(region
              .children(self.settings.title_selector));

        if (self.small(parent) || settings.one_up) {
=======
          section
            .removeClass('active')
            .attr('style', '');
        }
      } else {
        var prev_active_section = null,
            title_height = self.outerHeight(section.find('.title, [data-section-title]'));

        if (self.small(parent) || settings.one_up) {
          prev_active_section = $this.closest('[data-section]').find('section.active, .section.active, .active[data-section-region]');
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2

          if (self.small(parent)) {
            prev_active_section.attr('style', '');
          } else {
<<<<<<< HEAD
            prev_active_section.attr('style',
              'visibility: hidden; padding-top: '+title_height+'px;');
=======
            prev_active_section.attr('style', 'visibility: hidden; padding-top: '+title_height+'px;');
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
          }
        }

        if (self.small(parent)) {
<<<<<<< HEAD
          region.attr('style', '');
        } else {
          region.css('padding-top', title_height);
        }

        region.addClass('active');

        if (prev_active_section.length > 0) {
          prev_active_section
            .removeClass('active')
            .attr('style', '');
=======
          section.attr('style', '');
        } else {
          section.css('padding-top', title_height);
        }

        section.addClass('active');

        if (prev_active_section !== null) {
          prev_active_section.removeClass('active').attr('style', '');
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
        }

        // Toggle the content display attribute. This is done to
        // ensure accurate outerWidth measurements that account for
        // the scrollbar.
        if (self.is_vertical_tabs(parent)) {
          content.css('display', 'block');

          if (prev_active_section !== null) {
            prev_active_section
<<<<<<< HEAD
              .children(self.settings.content_selector)
=======
              .find('.content')
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
              .css('display', 'none');
          }
        }
      }

      setTimeout(function () {
        self.settings.toggled = false;
      }, 300);

      settings.callback();
    },

    resize : function () {
<<<<<<< HEAD
      var self = Foundation.libs.section,
          sections = $(self.settings.section_selector);

      sections.each(function() {
        var $this = $(this),
            active_section = $this
              .children(self.settings.active_region_selector),
=======
      var sections = $('[data-section]'),
          self = Foundation.libs.section;

      sections.each(function() {
        var $this = $(this),
            active_section = $this.find('section.active, .section.active, .active[data-section-region]'),
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
            settings = $.extend({}, self.settings, self.data_options($this));

        if (active_section.length > 1) {
          active_section
            .not(':first')
            .removeClass('active')
            .attr('style', '');
        } else if (active_section.length < 1
          && !self.is_vertical_nav($this)
          && !self.is_horizontal_nav($this)
          && !self.is_accordion($this)) {

<<<<<<< HEAD
          var first = $this.children(self.settings.region_selector).first();

          if (settings.one_up || !self.small($this)) {
=======
          var first = $this.find('section, .section, [data-section-region]').first();

          if (settings.one_up) {
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
            first.addClass('active');
          }

          if (self.small($this)) {
            first.attr('style', '');
          } else {
<<<<<<< HEAD
            first.css('padding-top', self.outerHeight(first
              .children(self.settings.title_selector)));
=======
            first.css('padding-top', self.outerHeight(first.find('.title, [data-section-title]')));
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
          }
        }

        if (self.small($this)) {
          active_section.attr('style', '');
        } else {
<<<<<<< HEAD
          active_section.css('padding-top', self.outerHeight(active_section
            .children(self.settings.title_selector)));
=======
          active_section.css('padding-top', self.outerHeight(active_section.find('.title, [data-section-title]')));
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
        }

        self.position_titles($this);

        if ( (self.is_horizontal_nav($this) && !self.small($this))
<<<<<<< HEAD
          || self.is_vertical_tabs($this) && !self.small($this)) {
=======
          || self.is_vertical_tabs($this)) {
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
          self.position_content($this);
        } else {
          self.position_content($this, false);
        }
      });
    },

    is_vertical_nav : function (el) {
      return /vertical-nav/i.test(el.data('section'));
    },

    is_horizontal_nav : function (el) {
      return /horizontal-nav/i.test(el.data('section'));
    },

    is_accordion : function (el) {
      return /accordion/i.test(el.data('section'));
    },

    is_horizontal_tabs : function (el) {
      return /^tabs$/i.test(el.data('section'));
    },

    is_vertical_tabs : function (el) {
      return /vertical-tabs/i.test(el.data('section'));
    },

    set_active_from_hash : function () {
      var hash = window.location.hash.substring(1),
          sections = $('[data-section]'),
          self = this;
<<<<<<< HEAD
=======

>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
      sections.each(function () {
        var section = $(this),
            settings = $.extend({}, self.settings, self.data_options(section));

        if (hash.length > 0 && settings.deep_linking) {
<<<<<<< HEAD
          var regions = section
            .children(self.settings.region_selector)
            .attr('style', '')
            .removeClass('active');

          var hash_regions = regions.map(function () {
              var content = $(self.settings.content_selector, this),
                  content_slug = content.data('slug');

              if (new RegExp('^' + content_slug + '$', 'i').test(hash)) {
                return content;
              }
            });


          var count = hash_regions.length;

          for (var i = count - 1; i >= 0; i--) {
            $(hash_regions[i]).parents(self.settings.region_selector).addClass('active');
          }
=======
          section
            .find('section, .section, [data-section-region]')
            .attr('style', '')
            .removeClass('active');
          section
            .find('.content[data-slug="' + hash + '"], [data-section-content][data-slug="' + hash + '"]')
            .closest('section, .section, [data-section-region]')
            .addClass('active');
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
        }
      });
    },

    position_titles : function (section, off) {
<<<<<<< HEAD
      var self = this,
          titles = section
            .children(this.settings.region_selector)
            .map(function () {
              return $(this).children(self.settings.title_selector);
            }),
=======
      var titles = section.find('.title, [data-section-title]'),
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
          previous_width = 0,
          previous_height = 0,
          self = this;

      if (typeof off === 'boolean') {
        titles.attr('style', '');

      } else {
        titles.each(function () {
          if (self.is_vertical_tabs(section)) {
            $(this).css('top', previous_height);
            previous_height += self.outerHeight($(this));
          } else {
            if (!self.rtl) {
              $(this).css('left', previous_width);
            } else {
              $(this).css('right', previous_width);
            }
            previous_width += self.outerWidth($(this));
          }
        });
      }
    },

    position_content : function (section, off) {
<<<<<<< HEAD
      var self = this,
          regions = section.children(self.settings.region_selector),
          titles = regions
            .map(function () {
              return $(this).children(self.settings.title_selector);
            }),
          content = regions
            .map(function () {
              return $(this).children(self.settings.content_selector);
            });
=======
      var titles = section.find('.title, [data-section-title]'),
          content = section.find('.content, [data-section-content]'),
          self = this;
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2

      if (typeof off === 'boolean') {
        content.attr('style', '');
        section.attr('style', '');
<<<<<<< HEAD

        // Reset the minHeight and maxWidth values (only applicable to
        // vertical tabs)
        content.css('minHeight', '');
        content.css('maxWidth', '');
=======
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
      } else {
        if (self.is_vertical_tabs(section)
            && !self.small(section)) {
          var content_min_height = 0,
              content_min_width = Number.MAX_VALUE,
              title_width = null;

<<<<<<< HEAD
          regions.each(function () {
            var region = $(this),
                title = region.children(self.settings.title_selector),
                content = region.children(self.settings.content_selector),
=======
          section.find('section, .section, [data-section-region]').each(function () {
            var title = $(this).find('.title, [data-section-title]'),
                content = $(this).find('.content, [data-section-content]'),
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
                content_width = 0;

            title_width = self.outerWidth(title);
            content_width = self.outerWidth(section) - title_width;
<<<<<<< HEAD

=======
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
            if (content_width < content_min_width) {
              content_min_width = content_width;
            }

            // Increment the minimum height of the content region
            // to align with the height of the titles.
            content_min_height += self.outerHeight(title);

            // Set all of the inactive tabs to 'display: none'
            // The CSS sets all of the tabs as 'display: block'
            // in order to account for scrollbars when measuring the width
            // of the content regions.
            if (!$(this).hasClass('active')) {
              content.css('display', 'none');
            }
          });

<<<<<<< HEAD
          regions.each(function () {
            var content = $(this).children(self.settings.content_selector);
=======
          section.find('section, .section, [data-section-region]').each(function () {
            var content = $(this).find('.content, [data-section-content]');
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
            content.css('minHeight', content_min_height);

            // Remove 2 pixels to account for the right-shift in the CSS
            content.css('maxWidth', content_min_width - 2);
          });

<<<<<<< HEAD
        } else {
          regions.each(function () {
            var region = $(this),
                title = region.children(self.settings.title_selector),
                content = region.children(self.settings.content_selector);
            if (!self.rtl) {
              content
                .css({left: title.position().left - 1,
                  top: self.outerHeight(title) - 2});
            } else {
              content
                .css({right: self.position_right(title) + 1,
                  top: self.outerHeight(title) - 2});
=======
          // Adjust the outer section container width to match
          // the width of the title and content
          section.css('maxWidth', title_width + content_min_width);
        } else {
          section.find('section, .section, [data-section-region]').each(function () {
            var title = $(this).find('.title, [data-section-title]'),
                content = $(this).find('.content, [data-section-content]');
            if (!self.rtl) {
              content.css({left: title.position().left - 1, top: self.outerHeight(title) - 2});
            } else {
              content.css({right: self.position_right(title) + 1, top: self.outerHeight(title) - 2});
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
            }
          });

          // temporary work around for Zepto outerheight calculation issues.
          if (typeof Zepto === 'function') {
<<<<<<< HEAD
            section.height(this.outerHeight($(titles[0])));
          } else {
            section.height(this.outerHeight($(titles[0])) - 2);
=======
            section.height(this.outerHeight(titles.first()));
          } else {
            section.height(this.outerHeight(titles.first()) - 2);
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
          }
        }
      }
    },

    position_right : function (el) {
<<<<<<< HEAD
      var self = this,
          section = el.closest(this.settings.section_selector),
          regions = section.children(this.settings.region_selector),
          section_width = el.closest(this.settings.section_selector).width(),
          offset = regions
            .map(function () {
              return $(this).children(self.settings.title_selector);
            }).length;
      return (section_width - el.position().left - el.width() * (el.index() + 1) - offset);
    },

    reflow : function (scope) {
      var scope = scope || document;
      $(this.settings.section_selector, scope).trigger('resize');
=======
      var section = el.closest('[data-section]'),
          section_width = el.closest('[data-section]').width(),
          offset = section.find('.title, [data-section-title]').length;
      return (section_width - el.position().left - el.width() * (el.index() + 1) - offset);
    },

    reflow : function () {
      $('[data-section]').trigger('resize');
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
    },

    small : function (el) {
      var settings = $.extend({}, this.settings, this.data_options(el));
<<<<<<< HEAD

=======
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
      if (this.is_horizontal_tabs(el)) {
        return false;
      }
      if (el && this.is_accordion(el)) {
        return true;
      }
      if ($('html').hasClass('lt-ie9')) {
        return true;
      }
      if ($('html').hasClass('ie8compat')) {
        return true;
      }
<<<<<<< HEAD
      return $(this.scope).width() < settings.small_breakpoint;
=======
      return $(this.scope).width() < 768;
>>>>>>> 310c315ba7b2f49a26f4157f11c5ed489ae622a2
    },

    off : function () {
      $(this.scope).off('.fndtn.section');
      $(window).off('.fndtn.section');
      $(document).off('.fndtn.section')
    }
  };
}(Foundation.zj, this, this.document));
