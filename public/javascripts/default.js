/* ==========================================================
  1. Plugins Combined
*/

// Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs
(function(e){e.respond={};respond.update=function(){};respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches;if(respond.mediaQueriesSupported){return}var w=e.document,s=w.documentElement,i=[],k=[],q=[],o={},h=30,f=w.getElementsByTagName("head")[0]||s,g=w.getElementsByTagName("base")[0],b=f.getElementsByTagName("link"),d=[],a=function(){var D=b,y=D.length,B=0,A,z,C,x;for(;B<y;B++){A=D[B],z=A.href,C=A.media,x=A.rel&&A.rel.toLowerCase()==="stylesheet";if(!!z&&x&&!o[z]){if(A.styleSheet&&A.styleSheet.rawCssText){m(A.styleSheet.rawCssText,z,C);o[z]=true}else{if((!/^([a-zA-Z:]*\/\/)/.test(z)&&!g)||z.replace(RegExp.$1,"").split("/")[0]===e.location.host){d.push({href:z,media:C})}}}}u()},u=function(){if(d.length){var x=d.shift();n(x.href,function(y){m(y,x.href,x.media);o[x.href]=true;u()})}},m=function(I,x,z){var G=I.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),J=G&&G.length||0,x=x.substring(0,x.lastIndexOf("/")),y=function(K){return K.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+x+"$2$3")},A=!J&&z,D=0,C,E,F,B,H;if(x.length){x+="/"}if(A){J=1}for(;D<J;D++){C=0;if(A){E=z;k.push(y(I))}else{E=G[D].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;k.push(RegExp.$2&&y(RegExp.$2))}B=E.split(",");H=B.length;for(;C<H;C++){F=B[C];i.push({media:F.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:k.length-1,hasquery:F.indexOf("(")>-1,minw:F.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:F.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}j()},l,r,v=function(){var z,A=w.createElement("div"),x=w.body,y=false;A.style.cssText="position:absolute;font-size:1em;width:1em";if(!x){x=y=w.createElement("body");x.style.background="none"}x.appendChild(A);s.insertBefore(x,s.firstChild);z=A.offsetWidth;if(y){s.removeChild(x)}else{x.removeChild(A)}z=p=parseFloat(z);return z},p,j=function(I){var x="clientWidth",B=s[x],H=w.compatMode==="CSS1Compat"&&B||w.body[x]||B,D={},G=b[b.length-1],z=(new Date()).getTime();if(I&&l&&z-l<h){clearTimeout(r);r=setTimeout(j,h);return}else{l=z}for(var E in i){var K=i[E],C=K.minw,J=K.maxw,A=C===null,L=J===null,y="em";if(!!C){C=parseFloat(C)*(C.indexOf(y)>-1?(p||v()):1)}if(!!J){J=parseFloat(J)*(J.indexOf(y)>-1?(p||v()):1)}if(!K.hasquery||(!A||!L)&&(A||H>=C)&&(L||H<=J)){if(!D[K.media]){D[K.media]=[]}D[K.media].push(k[K.rules])}}for(var E in q){if(q[E]&&q[E].parentNode===f){f.removeChild(q[E])}}for(var E in D){var M=w.createElement("style"),F=D[E].join("\n");M.type="text/css";M.media=E;f.insertBefore(M,G.nextSibling);if(M.styleSheet){M.styleSheet.cssText=F}else{M.appendChild(w.createTextNode(F))}q.push(M)}},n=function(x,z){var y=c();if(!y){return}y.open("GET",x,true);y.onreadystatechange=function(){if(y.readyState!=4||y.status!=200&&y.status!=304){return}z(y.responseText)};if(y.readyState==4){return}y.send(null)},c=(function(){var x=false;try{x=new XMLHttpRequest()}catch(y){x=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return x}})();a();respond.update=a;function t(){j(true)}if(e.addEventListener){e.addEventListener("resize",t,false)}else{if(e.attachEvent){e.attachEvent("onresize",t)}}})(this);

/* ==========================================================
  2. Initiations / Default Functions
*/
var mainPage, position = 0;

$(document).ready(function(){
  $('html').addClass('home');

  // Detect CSS mask support and hack it into Modernizr
  if ( document.body.style[ '-webkit-mask-repeat' ] !== undefined ) {
    //Modernizr.cssmasks = true;
    $('html').addClass('cssmasks');
  } else {
    //Modernizr.cssmasks = false;
    $('html').addClass('no-cssmasks');
  }

  var scrollTop = 0;

  // go to top when clicked
  $('.footer-logo').on('click', function(){
    $('html,body').animate({
                   scrollTop: 0
    }, 1000);
  })

  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
          || location.hostname == this.hostname) {

          var target = $(this.hash),
              _scrollTop = Math.floor($(document).scrollTop());

          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
             if (target.length && (Math.abs(scrollTop - _scrollTop) > 2)) {
               $('html,body').animate({
                   scrollTop: target.offset().top
              }, 1000);
          }
          
          scrollTop = _scrollTop;
          
          return false;
      }
  });

  // 2.0 Toggle JS Class
  $("html").removeClass('no-js').addClass('js');

  // Other initiations go here within the document ready...
  var mainPage = {},
      Ingredients = function(espresso_range, milk_range, froth_range){
        return {
          espresso: {
            range: espresso_range
          },
          milk: {
            range: milk_range
          },
          froth: {
            range: froth_range
          }
        }
      },
      ddata = {
        espresso: Ingredients(2, 0, 0, "test"),
        cortado:Ingredients(2, 2, "SOME", "test"),
        latte:Ingredients(2, [5,6], "SOME", "test"),
        macchiato:Ingredients(2, 0, "SOME", "test"),
        cappuccino:Ingredients(2, 2, [1, 2], "test")
      },
      addRule = (function(style){
        //console.log(style)
          var sheet = document.head.appendChild(style).sheet;
          return function(selector, css){
            var propText = Object.keys(css).map(function(p){
                return p+":"+css[p]
            }).join(";");
            sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
          }
        }),
      addNavRule = addRule(document.createElement("style")),
      addSproRule = addRule(document.createElement("style")),
      $layers = $('.drink-layer'),
      $highlight = $('#highlight'),  
      $header = $('.header'),
      $headerHeight = $('.coffee-cherries').height(),
      $ingredients = $('#ingredients'),
      $espresso = $('#espresso'), 
      $milk = $('#milk'),
      $froth = $('#froth'),
      $espressok = $('#espresso-key'), 
      $milkk = $('#milk-key'),
      $frothk = $('#froth-key'),  
      $totalk = $('#total-key'),      
      $espressor = $('#espresso-key').find(".range"), 
      $milkr = $('#milk-key').find(".range"),
      $frothr = $('#froth-key').find(".range"),  
      $totalr = $('#total-key').find(".range"),       
      $highlightImg = $('#highlight img'),  
      $drinkGuide = $('#espresso-drink-guide'),
      $drinkName = $('.espresso-description h2'),
      $drinkDescription = $('.espresso-description p'),
      $drinkGuideItems = $('#espresso-drink-guide li'),
      $drinkGuideLinks = $('#espresso-drink-guide ul a'),
      lastRule = undefined,
      currentSelector = "current";

  $.extend(mainPage, {
    // Initializing the app
    init: function(){
      Socialite.load($('#socialite')); // load social buttons
      this.monitorSocialiteButtons();
      this.initDrinks();
      $(".current").click();
    },
    // Initialize drinks selection area
    initDrinks: function(){
      $drinkGuideLinks.on("click", function(){
        var $parent = $(this).parent();
        var whichDrink = $(this).attr('data-name');
        $drinkGuideItems.removeClass(currentSelector);
        $parent.addClass(currentSelector);
        $drinkGuide.removeClass().addClass(whichDrink);
        mainPage.adjustDrinkSelection($parent, whichDrink);
        //return false;
      })
    },
    
    // Move the drink highlight around depending on where it is
    adjustDrinkSelection: function($li, drink){
      // Move Highligher
      var p = $li.position(),
          w = $li.width(),
          dn = ddata[drink];
      $highlight.css("left", p.left);
      $highlight.css("width", w);
      // to sell the movement without fluidly scaling bottom-pointing arrow
      setTimeout(function(){
        var rule = w/2 + "px solid transparent";
        //console.log("okay")
        addNavRule("#highlight:after", {
          "border-left": rule,
          "border-right": rule
        })        
      }, 100);

      // Acquire ranges for example a capp can have 1 or 2 ounces of milk
      var e_range = dn["espresso"].range,
          m_range = dn["milk"].range,
          f_range = dn["froth"].range,
          // Get a number corresponding to how much espresso, milk or froth. this number will be multiplied by another number to get a pixel value
          e_amount = this.getIngredientHeight(dn["espresso"].range),
          m_amount = this.getIngredientHeight(dn["milk"].range),
          f_amount = this.getIngredientHeight(dn["froth"].range);

      $drinkGuide.attr({
        "data-drink": drink,
        "data-espresso-factor": e_amount,
        "data-milk-factor": m_amount,
        "data-froth-factor": f_amount
      })

      // Adjust ratios
      // The volume amounts for the drinks, used to position crema and to activate some texture
      var pixel_scalar = 15,
          e_v = e_amount * pixel_scalar, /* 15 is a magic number to get pixels. we could adjust this to account for the ingredient heights vs the bowl-shaped cup but that is too math-y for now */
          m_v = m_amount * pixel_scalar,
          f_v = f_amount * pixel_scalar,
          lposition = position,
          rando = Math.random();

      $espresso.attr("data-volume", e_v).css("height", e_v);
      $milk.attr("data-volume", m_v).css("height", m_v);
      $froth.attr("data-volume", f_v).css("height", f_v);

      // position of the crema
      position = Math.abs(position + ((rando < .5) ? 1 : -1) * Math.max(30, 200 * rando));

      $espresso.css({
        "background-position-y": (m_v + f_v === 0) ? "100px" : 0,
        "background-position-x": lposition + "px"         
      });

      addSproRule("#froth:after", {
        // MAKE THE crema look bumpy is dynamic ways
        "background-position-x":  - position % 1000 + "px"
      })

      //Adjust equation
      $espressor.html(this.formatWithRange(e_range));
      $milkr.html(this.formatWithRange(m_range));
      $frothr.html(this.formatWithRange(f_range));
      $totalr.html(this.formatTotal([e_range, m_range, f_range]));
    },

    // the summation of trhe drink compoenent totals
    formatTotal: function(ranges){
      var total = [0, 0];
      // do some adding
      $.map( ranges, function(r, i) {
        if (isNaN(r[1])){
          // if this isn't a number, it's a word whose numeric value is zero
          if(isNaN(r)){
            r = 0; 
          }
          total = [total[0] + r, total[1] + r];
        } else {
          total = [total[0] + r[0], total[1] + r[1]];
        }
      });
      // we have the total let's format it
      return this.formatWithRange(total);
    },

    // makes lots of assumptions about the data e.g must be of form 0 or [1, 2]
    formatWithRange: function(r){
      var unit = "OZ";
      if (isNaN(r[1])){
        // if isn't a number r1, then this is a singleton
        if (isNaN(r)){
          return r;
        } else {
          return r + " " + unit;          
        }        
      } else if (r[0] !== r[1]) {
        return (r[0] + "-" + r[1] + " " + unit)
      } else if (r[0] === r[1]) {
        return (r[0] + " " + unit)
      }
    },

    // Get the visual height
    getIngredientHeight: function(r){
      return (isNaN(r[0]) ? ((isNaN(r)) ? .5 : r) : r[0]);
    },

    // Monitor socialite icons to see if they have fully visually loaded the widgets
    monitorSocialiteButtons: function(){
      var interval,
          done = false,
          $lis = $("#socialite li"),
          /* when the icons are loaded fully let's center them. must do it dynamically to avoid goofy social icon top gaps */
          checkLoaded = function(){
            if (-1 === $.inArray(0, $.map($lis, function(el, i){ return $(el).width(); }))){
              if (done === true){
                clearInterval(interval);
                mainPage.centerSocialiteButtons();
              } else {
                done = true;            
              }
            }
          };
      interval = setInterval(checkLoaded, 1000);
    },

    // Visually center the social icons
    centerSocialiteButtons: function(){
      var sum = 0;
      $.map($("#socialite li"), function(el, i){ 
        sum += $(el).width(); 
      })
      $("#socialite").css("width", sum);
    }
  }) 

  mainPage.init();

}); // end document ready