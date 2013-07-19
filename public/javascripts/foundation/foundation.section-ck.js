/*jslint unparam: true, browser: true, indent: 2 */(function(e,t,n){"use strict";Foundation.libs.section={name:"section",version:"4.3.1",settings:{deep_linking:!1,small_breakpoint:768,one_up:!0,section_selector:"[data-section]",region_selector:"section, .section, [data-section-region]",title_selector:".title, [data-section-title]",resized_data_attr:"data-section-resized",small_style_data_attr:"data-section-small-style",content_selector:".content, [data-section-content]",nav_selector:'[data-section="vertical-nav"], [data-section="horizontal-nav"]',active_class:"active",callback:function(){}},init:function(t,n,r){var i=this;Foundation.inherit(this,"throttle data_options position_right offset_right");typeof n=="object"&&e.extend(!0,i.settings,n);if(typeof n!="string"){this.events();return!0}return this[n].call(this,r)},events:function(){var r=this,i=[],s=r.settings.section_selector,o=r.settings.region_selector.split(","),u=r.settings.title_selector.split(",");for(var a=0,f=o.length;a<f;a++){var l=o[a];for(var c=0,h=u.length;c<h;c++){var p=s+">"+l+">"+u[c];i.push(p+" a");i.push(p)}}e(r.scope).on("click.fndtn.section",i.join(","),function(t){var n=e(this).closest(r.settings.title_selector);r.close_navs(n);n.siblings(r.settings.content_selector).length>0&&r.toggle_active.call(n[0],t)});e(t).on("resize.fndtn.section",r.throttle(function(){r.resize()},30)).on("hashchange.fndtn.section",r.set_active_from_hash);e(n).on("click.fndtn.section",function(t){if(t.isPropagationStopped&&t.isPropagationStopped())return;if(t.target===n)return;r.close_navs(e(t.target).closest(r.settings.title_selector))});e(t).triggerHandler("resize.fndtn.section");e(t).triggerHandler("hashchange.fndtn.section")},close_navs:function(t){var n=Foundation.libs.section,r=e(n.settings.nav_selector).filter(function(){return!e.extend({},n.settings,n.data_options(e(this))).one_up});if(t.length>0){var i=t.parent().parent();if(n.is_horizontal_nav(i)||n.is_vertical_nav(i))r=r.filter(function(){return this!==i[0]})}r.children(n.settings.region_selector).removeClass(n.settings.active_class)},toggle_active:function(t){var n=e(this),r=Foundation.libs.section,i=n.parent(),s=n.siblings(r.settings.content_selector),o=i.parent(),u=e.extend({},r.settings,r.data_options(o)),a=o.children(r.settings.region_selector).filter("."+r.settings.active_class);!u.deep_linking&&s.length>0&&t.preventDefault();t.stopPropagation();if(!i.hasClass(r.settings.active_class)){a.removeClass(r.settings.active_class);i.addClass(r.settings.active_class);r.resize(i.find(r.settings.section_selector).not("["+r.settings.resized_data_attr+"]"),!0)}else!u.one_up&&(r.small(o)||r.is_vertical_nav(o)||r.is_horizontal_nav(o)||r.is_accordion(o))&&i.removeClass(r.settings.active_class);u.callback()},check_resize_timer:null,resize:function(t,r){var i=Foundation.libs.section,s=i.small(e(n)),o=function(e,t){return!i.is_accordion(e)&&!e.is("["+i.settings.resized_data_attr+"]")&&(!s||i.is_horizontal_tabs(e))&&t===(e.css("display")==="none"||!e.parent().is(":visible"))};t=t||e(i.settings.section_selector);clearTimeout(i.check_resize_timer);s||t.removeAttr(i.settings.small_style_data_attr);t.filter(function(){return o(e(this),!1)}).each(function(){var t=e(this),n=t.children(i.settings.region_selector),s=n.children(i.settings.title_selector),o=n.children(i.settings.content_selector),u=0;if(r&&t.children(i.settings.region_selector).filter("."+i.settings.active_class).length==0){var a=e.extend({},i.settings,i.data_options(t));!a.deep_linking&&(a.one_up||!i.is_horizontal_nav(t)&&!i.is_vertical_nav(t)&&!i.is_accordion(t))&&n.filter(":visible").first().addClass(i.settings.active_class)}if(i.is_horizontal_tabs(t)||i.is_auto(t)){var f=0;s.each(function(){var t=e(this);if(t.is(":visible")){t.css(i.rtl?"right":"left",f);var n=parseInt(t.css("border-"+(i.rtl?"left":"right")+"-width"),10);n.toString()==="Nan"&&(n=0);f+=i.outerWidth(t)-n;u=Math.max(u,i.outerHeight(t))}});s.css("height",u);n.each(function(){var t=e(this),n=t.children(i.settings.content_selector),r=parseInt(n.css("border-top-width"),10);r.toString()==="Nan"&&(r=0);t.css("padding-top",u-r)});t.css("min-height",u)}else if(i.is_horizontal_nav(t)){var l=!0;s.each(function(){u=Math.max(u,i.outerHeight(e(this)))});n.each(function(){var n=e(this);n.css("margin-left","-"+(l?t:n.children(i.settings.title_selector)).css("border-left-width"));l=!1});n.css("margin-top","-"+t.css("border-top-width"));s.css("height",u);o.css("top",u);t.css("min-height",u)}else if(i.is_vertical_tabs(t)){var c=0;s.each(function(){var t=e(this);if(t.is(":visible")){t.css("top",c);var n=parseInt(t.css("border-top-width"),10);n.toString()==="Nan"&&(n=0);c+=i.outerHeight(t)-n}});o.css("min-height",c+1)}else if(i.is_vertical_nav(t)){var h=0,p=!0;s.each(function(){h=Math.max(h,i.outerWidth(e(this)))});n.each(function(){var n=e(this);n.css("margin-top","-"+(p?t:n.children(i.settings.title_selector)).css("border-top-width"));p=!1});s.css("width",h);o.css(i.rtl?"right":"left",h);t.css("width",h)}t.attr(i.settings.resized_data_attr,!0)});e(i.settings.section_selector).filter(function(){return o(e(this),!0)}).length>0&&(i.check_resize_timer=setTimeout(function(){i.resize(t.filter(function(){return o(e(this),!1)}),!0)},700));s&&t.attr(i.settings.small_style_data_attr,!0)},is_vertical_nav:function(e){return/vertical-nav/i.test(e.data("section"))},is_horizontal_nav:function(e){return/horizontal-nav/i.test(e.data("section"))},is_accordion:function(e){return/accordion/i.test(e.data("section"))},is_horizontal_tabs:function(e){return/^tabs$/i.test(e.data("section"))},is_vertical_tabs:function(e){return/vertical-tabs/i.test(e.data("section"))},is_auto:function(e){var t=e.data("section");return t===""||/auto/i.test(t)},set_active_from_hash:function(){var n=Foundation.libs.section,r=t.location.hash.substring(1),i=e(n.settings.section_selector);i.each(function(){var t=e(this),i=e.extend({},n.settings,n.data_options(t)),s=t.children(n.settings.region_selector),o=i.deep_linking&&r.length>0,u=!1;s.each(function(){var t=e(this);if(u)t.removeClass(n.settings.active_class);else if(o){var i=t.children(n.settings.content_selector).data("slug");if(i&&(new RegExp(i,"i")).test(r)){t.hasClass(n.settings.active_class)||t.addClass(n.settings.active_class);u=!0}else t.removeClass(n.settings.active_class)}else t.hasClass(n.settings.active_class)&&(u=!0)});!u&&!i.deep_linking&&(i.one_up||!n.is_horizontal_nav(t)&&!n.is_vertical_nav(t)&&!n.is_accordion(t))&&s.filter(":visible").first().addClass(n.settings.active_class)})},reflow:function(){var t=Foundation.libs.section;e(t.settings.section_selector).removeAttr(t.settings.resized_data_attr);t.throttle(function(){t.resize()},30)()},small:function(t){var n=e.extend({},this.settings,this.data_options(t));return this.is_horizontal_tabs(t)?!1:t&&this.is_accordion(t)?!0:e("html").hasClass("lt-ie9")?!0:e("html").hasClass("ie8compat")?!0:e(this.scope).width()<n.small_breakpoint},off:function(){e(this.scope).off(".fndtn.section");e(t).off(".fndtn.section");e(n).off(".fndtn.section")}};e.fn.reflow_section=function(e){var t=this,n=Foundation.libs.section;t.removeAttr(n.settings.resized_data_attr);n.throttle(function(){n.resize(t,e)},30)();return this}})(Foundation.zj,window,document);