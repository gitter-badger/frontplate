!function(){function n(){$(this).attr("contentEditable",!1)}function o(n){n.preventDefault();var o=$(this).siblings(".fn-code");o.attr("contentEditable",!0),o.focus(),document.execCommand&&document.execCommand("selectAll",!1,null)}function e(){a.trigger("mousewheel"),r.on("blur",".fn-code",n),r.on("click",".fn-pre .fn-icon",o),$(".fn-menu, .fn-bars").rippleEffect(),$(".fn-drawer-trigger").on("click",function(n){n.preventDefault(),u.hasClass("fn-overflow")?t():s()}),$(".fn-content").on("touchstart mousedown",function(){u.hasClass("fn-overflow")&&t()});var e=$('<div class="fn-tooltip"><i class=""></i></div>');u.append(e),$(".fn-preview > *").on("mousemove",function(n){e.html(this.className),e.stop().fadeIn(i).css({top:n.clientY+f,left:n.clientX+l})}).on("mouseleave",function(){e.stop().fadeOut(i)}),d.on("click",function(n){n.preventDefault(),d.removeClass("fn-show"),$("html,body").animate({scrollTop:0},c,"swing")}),hljs.initHighlightingOnLoad()}function t(){u.removeClass("fn-overflow")}function s(){u.addClass("fn-overflow")}var l=10,f=10,i=200,c=450,a=$(window),r=$(document),u=$(document.body),d=$(".fn-pagetop"),m=!1;a.on("resize",function(){var n=a.width();n>680&&u.hasClass("fn-overflow")&&u.removeClass("fn-overflow")}),a.on("mousewheel",function(){0!==a.scrollTop()?m||(d.addClass("fn-show"),m=!0):m&&(d.removeClass("fn-show"),m=!1)}),e()}();