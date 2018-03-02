!function($){function _1(t){var e=0;return $(t).children().each(function(){e+=$(this).outerWidth(!0)}),e}function _2(t){var e=$.data(t,"tabs").options;if("left"!=e.tabPosition&&"right"!=e.tabPosition&&e.showHeader){var a=$(t).children("div.tabs-header"),s=a.children("div.tabs-tool:not(.tabs-tool-hidden)"),i=a.children("div.tabs-scroller-left"),n=a.children("div.tabs-scroller-right"),o=a.children("div.tabs-wrap"),r=a.outerHeight();e.plain&&(r-=r-a.height()),s._outerHeight(r);var l=_1(a.find("ul.tabs")),d=a.width()-s._outerWidth();l>d?(i.add(n).show()._outerHeight(r),"left"==e.toolPosition?(s.css({left:i.outerWidth(),right:""}),o.css({marginLeft:i.outerWidth()+s._outerWidth(),marginRight:n._outerWidth(),width:d-i.outerWidth()-n.outerWidth()})):(s.css({left:"",right:n.outerWidth()}),o.css({marginLeft:i.outerWidth(),marginRight:n.outerWidth()+s._outerWidth(),width:d-i.outerWidth()-n.outerWidth()}))):(i.add(n).hide(),"left"==e.toolPosition?(s.css({left:0,right:""}),o.css({marginLeft:s._outerWidth(),marginRight:0,width:d})):(s.css({left:"",right:0}),o.css({marginLeft:0,marginRight:s._outerWidth(),width:d})))}}function _d(_e){var _f=$.data(_e,"tabs").options,_10=$(_e).children("div.tabs-header");if(_f.tools)if("string"==typeof _f.tools)$(_f.tools).addClass("tabs-tool").appendTo(_10),$(_f.tools).show();else{_10.children("div.tabs-tool").remove();for(var _11=$('<div class="tabs-tool"><table cellspacing="0" cellpadding="0" style="height:100%"><tr></tr></table></div>').appendTo(_10),tr=_11.find("tr"),i=0;i<_f.tools.length;i++){var td=$("<td></td>").appendTo(tr),_12=$('<a href="javascript:void(0);"></a>').appendTo(td);_12[0].onclick=eval(_f.tools[i].handler||function(){}),_12.linkbutton($.extend({},_f.tools[i],{plain:!0}))}}else _10.children("div.tabs-tool").remove()}function _13(t,e){function a(t,e){var a=t.panel("options"),s=a.tab.find("a.tabs-inner"),e=e?e:parseInt(a.tabWidth||i.tabWidth||void 0);e?s._outerWidth(e):s.css("width",""),s._outerHeight(i.tabHeight),s.css("lineHeight",s.height()+"px"),s.find(".easyui-fluid:visible").triggerHandler("_resize")}var s=$.data(t,"tabs"),i=s.options,n=$(t);if(i.doSize){e&&$.extend(i,{width:e.width,height:e.height}),n._size(i);var o=n.children("div.tabs-header"),r=n.children("div.tabs-panels"),l=o.find("div.tabs-wrap"),d=l.find(".tabs");if(d.children("li").removeClass("tabs-first tabs-last"),d.children("li:first").addClass("tabs-first"),d.children("li:last").addClass("tabs-last"),"left"==i.tabPosition||"right"==i.tabPosition?(o._outerWidth(i.showHeader?i.headerWidth:0),r._outerWidth(n.width()-o.outerWidth()),o.add(r)._size("height",isNaN(parseInt(i.height))?"":n.height()),l._outerWidth(o.width()),d._outerWidth(l.width()).css("height","")):(o.children("div.tabs-scroller-left,div.tabs-scroller-right,div.tabs-tool:not(.tabs-tool-hidden)").css("display",i.showHeader?"block":"none"),o._outerWidth(n.width()).css("height",""),i.showHeader?(o.css("background-color",""),l.css("height","")):(o.css("background-color","transparent"),o._outerHeight(0),l._outerHeight(0)),d._outerHeight(i.tabHeight).css("width",""),d._outerHeight(d.outerHeight()-d.height()-1+i.tabHeight).css("width",""),r._size("height",isNaN(parseInt(i.height))?"":n.height()-o.outerHeight()),r._size("width",n.width())),s.tabs.length){var h=d.outerWidth(!0)-d.width(),c=d.children("li:first"),b=c.outerWidth(!0)-c.width(),f=o.width()-o.children(".tabs-tool:not(.tabs-tool-hidden)")._outerWidth(),u=Math.floor((f-h-b*s.tabs.length)/s.tabs.length);if($.map(s.tabs,function(t){a(t,i.justified&&$.inArray(i.tabPosition,["top","bottom"])>=0?u:void 0)}),i.justified&&$.inArray(i.tabPosition,["top","bottom"])>=0){var p=f-h-_1(d);a(s.tabs[s.tabs.length-1],u+p)}}_2(t)}}function _21(t){var e=$.data(t,"tabs").options,a=_24(t);if(a){var s=$(t).children("div.tabs-panels"),i="auto"==e.width?"auto":s.width(),n="auto"==e.height?"auto":s.height();a.panel("resize",{width:i,height:n})}}function _28(t){var e=($.data(t,"tabs").tabs,$(t).addClass("tabs-container")),a=$('<div class="tabs-panels"></div>').insertBefore(e);e.children("div").each(function(){a[0].appendChild(this)}),e[0].appendChild(a[0]),$('<div class="tabs-header"><div class="tabs-scroller-left"></div><div class="tabs-scroller-right"></div><div class="tabs-wrap"><ul class="tabs"></ul></div></div>').prependTo(t),e.children("div.tabs-panels").children("div").each(function(e){var a=$.extend({},$.parser.parseOptions(this),{disabled:!!$(this).attr("disabled")||void 0,selected:!!$(this).attr("selected")||void 0});_3c(t,a,$(this))}),e.children("div.tabs-header").find(".tabs-scroller-left, .tabs-scroller-right").hover(function(){$(this).addClass("tabs-scroller-over")},function(){$(this).removeClass("tabs-scroller-over")}),e.bind("_resize",function(e,a){return($(this).hasClass("easyui-fluid")||a)&&(_13(t),_21(t)),!1})}function _2e(t){function e(t){var e=0;return t.parent().children("li").each(function(a){if(t[0]==this)return e=a,!1}),e}var a=$.data(t,"tabs"),s=a.options;$(t).children("div.tabs-header").unbind().bind("click",function(i){if($(i.target).hasClass("tabs-scroller-left"))$(t).tabs("scrollBy",-s.scrollIncrement);else{if(!$(i.target).hasClass("tabs-scroller-right")){var n=$(i.target).closest("li");if(n.hasClass("tabs-disabled"))return!1;var o=$(i.target).closest("a.tabs-close");if(o.length)_5a(t,e(n));else if(n.length){var r=e(n),l=a.tabs[r].panel("options");l.collapsible?l.closed?_50(t,r):_75(t,r):_50(t,r)}return!1}$(t).tabs("scrollBy",s.scrollIncrement)}}).bind("contextmenu",function(a){var i=$(a.target).closest("li");i.hasClass("tabs-disabled")||i.length&&s.onContextMenu.call(t,a,i.find("span.tabs-title").html(),e(i))})}function _36(t){var e=$.data(t,"tabs").options,a=$(t).children("div.tabs-header"),s=$(t).children("div.tabs-panels");a.removeClass("tabs-header-top tabs-header-bottom tabs-header-left tabs-header-right"),s.removeClass("tabs-panels-top tabs-panels-bottom tabs-panels-left tabs-panels-right"),"top"==e.tabPosition?a.insertBefore(s):"bottom"==e.tabPosition?(a.insertAfter(s),a.addClass("tabs-header-bottom"),s.addClass("tabs-panels-top")):"left"==e.tabPosition?(a.addClass("tabs-header-left"),s.addClass("tabs-panels-right")):"right"==e.tabPosition&&(a.addClass("tabs-header-right"),s.addClass("tabs-panels-left")),1==e.plain?a.addClass("tabs-header-plain"):a.removeClass("tabs-header-plain"),a.removeClass("tabs-header-narrow").addClass(e.narrow?"tabs-header-narrow":"");var i=a.find(".tabs");i.removeClass("tabs-pill").addClass(e.pill?"tabs-pill":""),i.removeClass("tabs-narrow").addClass(e.narrow?"tabs-narrow":""),i.removeClass("tabs-justified").addClass(e.justified?"tabs-justified":""),1==e.border?(a.removeClass("tabs-header-noborder"),s.removeClass("tabs-panels-noborder")):(a.addClass("tabs-header-noborder"),s.addClass("tabs-panels-noborder")),e.doSize=!0}function _3c(t,e,a){e=e||{};var s=$.data(t,"tabs"),i=s.tabs;(void 0==e.index||e.index>i.length)&&(e.index=i.length),e.index<0&&(e.index=0);var n=$(t).children("div.tabs-header").find("ul.tabs"),o=$(t).children("div.tabs-panels"),r=$('<li><a href="javascript:void(0)" class="tabs-inner"><span class="tabs-title"></span><span class="tabs-icon"></span></a></li>');a||(a=$("<div></div>")),e.index>=i.length?(r.appendTo(n),a.appendTo(o),i.push(a)):(r.insertBefore(n.children("li:eq("+e.index+")")),a.insertBefore(o.children("div.panel:eq("+e.index+")")),i.splice(e.index,0,a)),a.panel($.extend({},e,{tab:r,border:!1,noheader:!0,closed:!0,doSize:!1,iconCls:e.icon?e.icon:void 0,onLoad:function(){e.onLoad&&e.onLoad.call(this,arguments),s.options.onLoad.call(t,$(this))},onBeforeOpen:function(){if(e.onBeforeOpen&&0==e.onBeforeOpen.call(this))return!1;var a=$(t).tabs("getSelected");if(a){if(a[0]==this)return _21(t),!1;if($(t).tabs("unselect",_4a(t,a)),a=$(t).tabs("getSelected"))return!1}var s=$(this).panel("options");s.tab.addClass("tabs-selected");var i=$(t).find(">div.tabs-header>div.tabs-wrap"),n=s.tab.position().left,o=n+s.tab.outerWidth();if(n<0||o>i.width()){var r=n-(i.width()-s.tab.width())/2;$(t).tabs("scrollBy",r)}else $(t).tabs("scrollBy",0);var l=$(this).panel("panel");l.css("display","block"),_21(t),l.css("display","none")},onOpen:function(){e.onOpen&&e.onOpen.call(this);var a=$(this).panel("options");s.selectHis.push(a.title),s.options.onSelect.call(t,a.title,_4a(t,this))},onBeforeClose:function(){return(!e.onBeforeClose||0!=e.onBeforeClose.call(this))&&void $(this).panel("options").tab.removeClass("tabs-selected")},onClose:function(){e.onClose&&e.onClose.call(this);var a=$(this).panel("options");s.options.onUnselect.call(t,a.title,_4a(t,this))}})),$(t).tabs("update",{tab:a,options:a.panel("options"),type:"header"})}function _4b(t,e){var a=$.data(t,"tabs"),s=a.options;void 0==e.selected&&(e.selected=!0),_3c(t,e),s.onAdd.call(t,e.title,e.index),e.selected&&_50(t,e.index)}function _51(t,e){e.type=e.type||"all";var a=$.data(t,"tabs").selectHis,s=e.tab,i=s.panel("options"),n=i.title;if($.extend(i,e.options,{iconCls:e.options.icon?e.options.icon:void 0}),"all"!=e.type&&"body"!=e.type||s.panel(),"all"==e.type||"header"==e.type){var o=i.tab;if(i.header)o.find(".tabs-inner").html($(i.header));else{var r=o.find("span.tabs-title"),l=o.find("span.tabs-icon");if(r.html(i.title),l.attr("class","tabs-icon"),o.find("a.tabs-close").remove(),i.closable?(r.addClass("tabs-closable"),$('<a href="javascript:void(0)" class="tabs-close"></a>').appendTo(o)):r.removeClass("tabs-closable"),i.iconCls?(r.addClass("tabs-with-icon"),l.addClass(i.iconCls)):r.removeClass("tabs-with-icon"),i.tools){var d=o.find("span.tabs-p-tool");if(!d.length)var d=$('<span class="tabs-p-tool"></span>').insertAfter(o.find("a.tabs-inner"));if($.isArray(i.tools)){d.empty();for(var h=0;h<i.tools.length;h++){var c=$('<a href="javascript:void(0)"></a>').appendTo(d);c.addClass(i.tools[h].iconCls),i.tools[h].handler&&c.bind("click",{handler:i.tools[h].handler},function(t){$(this).parents("li").hasClass("tabs-disabled")||t.data.handler.call(this)})}}else $(i.tools).children().appendTo(d);var b=12*d.children().length;i.closable?b+=8:(b-=3,d.css("right","5px")),r.css("padding-right",b+"px")}else o.find("span.tabs-p-tool").remove(),r.css("padding-right","")}if(n!=i.title)for(var h=0;h<a.length;h++)a[h]==n&&(a[h]=i.title)}i.disabled?i.tab.addClass("tabs-disabled"):i.tab.removeClass("tabs-disabled"),_13(t),$.data(t,"tabs").options.onUpdate.call(t,i.title,_4a(t,s))}function _5a(t,e){var a=$.data(t,"tabs").options,s=$.data(t,"tabs").tabs,i=$.data(t,"tabs").selectHis;if(_60(t,e)){var n=_61(t,e),o=n.panel("options").title,r=_4a(t,n);if(0!=a.onBeforeClose.call(t,o,r)){var n=_61(t,e,!0);n.panel("options").tab.remove(),n.panel("destroy"),a.onClose.call(t,o,r),_13(t);for(var l=0;l<i.length;l++)i[l]==o&&(i.splice(l,1),l--);var d=i.pop();d?_50(t,d):s.length&&_50(t,0)}}}function _61(t,e,a){var s=$.data(t,"tabs").tabs;if("number"==typeof e){if(e<0||e>=s.length)return null;var i=s[e];return a&&s.splice(e,1),i}for(var n=0;n<s.length;n++){var i=s[n];if(i.panel("options").title==e)return a&&s.splice(n,1),i}return null}function _4a(t,e){for(var a=$.data(t,"tabs").tabs,s=0;s<a.length;s++)if(a[s][0]==$(e)[0])return s;return-1}function _24(t){for(var e=$.data(t,"tabs").tabs,a=0;a<e.length;a++){var s=e[a];if(s.panel("options").tab.hasClass("tabs-selected"))return s}return null}function _6d(t){for(var e=$.data(t,"tabs"),a=e.tabs,s=0;s<a.length;s++){var i=a[s].panel("options");if(i.selected&&!i.disabled)return void _50(t,s)}_50(t,e.options.selected)}function _50(t,e){var a=_61(t,e);a&&!a.is(":visible")&&(_74(t),a.panel("options").disabled||a.panel("open"))}function _75(t,e){var a=_61(t,e);a&&a.is(":visible")&&(_74(t),a.panel("close"))}function _74(t){$(t).children("div.tabs-panels").each(function(){$(this).stop(!0,!0)})}function _60(t,e){return null!=_61(t,e)}function _7b(t,e){var a=$.data(t,"tabs").options;a.showHeader=e,$(t).tabs("resize")}function _7f(t,e){var a=$(t).find(">.tabs-header>.tabs-tool");e?a.removeClass("tabs-tool-hidden").show():a.addClass("tabs-tool-hidden").hide(),$(t).tabs("resize").tabs("scrollBy",0)}$.fn.tabs=function(t,e){return"string"==typeof t?$.fn.tabs.methods[t](this,e):(t=t||{},this.each(function(){var e=$.data(this,"tabs");e?$.extend(e.options,t):($.data(this,"tabs",{options:$.extend({},$.fn.tabs.defaults,$.fn.tabs.parseOptions(this),t),tabs:[],selectHis:[]}),_28(this)),_d(this),_36(this),_13(this),_2e(this),_6d(this)}))},$.fn.tabs.methods={options:function(t){var e=t[0],a=$.data(e,"tabs").options,s=_24(e);return a.selected=s?_4a(e,s):-1,a},tabs:function(t){return $.data(t[0],"tabs").tabs},resize:function(t,e){return t.each(function(){_13(this,e),_21(this)})},add:function(t,e){return t.each(function(){_4b(this,e)})},close:function(t,e){return t.each(function(){_5a(this,e)})},getTab:function(t,e){return _61(t[0],e)},getTabIndex:function(t,e){return _4a(t[0],e)},getSelected:function(t){return _24(t[0])},select:function(t,e){return t.each(function(){_50(this,e)})},unselect:function(t,e){return t.each(function(){_75(this,e)})},exists:function(t,e){return _60(t[0],e)},update:function(t,e){return t.each(function(){_51(this,e)})},enableTab:function(t,e){return t.each(function(){var t=$(this).tabs("getTab",e).panel("options");t.tab.removeClass("tabs-disabled"),t.disabled=!1})},disableTab:function(t,e){return t.each(function(){var t=$(this).tabs("getTab",e).panel("options");t.tab.addClass("tabs-disabled"),t.disabled=!0})},showHeader:function(t){return t.each(function(){_7b(this,!0)})},hideHeader:function(t){return t.each(function(){_7b(this,!1)})},showTool:function(t){return t.each(function(){_7f(this,!0)})},hideTool:function(t){return t.each(function(){_7f(this,!1)})},scrollBy:function(t,e){return t.each(function(){function t(){var t=0,e=s.children("ul");return e.children("li").each(function(){t+=$(this).outerWidth(!0)}),t-s.width()+(e.outerWidth()-e.width())}var a=$(this).tabs("options"),s=$(this).find(">div.tabs-header>div.tabs-wrap"),i=Math.min(s._scrollLeft()+e,t());s.animate({scrollLeft:i},a.scrollDuration)})}},$.fn.tabs.parseOptions=function(t){return $.extend({},$.parser.parseOptions(t,["tools","toolPosition","tabPosition",{fit:"boolean",border:"boolean",plain:"boolean"},{headerWidth:"number",tabWidth:"number",tabHeight:"number",selected:"number"},{showHeader:"boolean",justified:"boolean",narrow:"boolean",pill:"boolean"}]))},$.fn.tabs.defaults={width:"auto",height:"auto",headerWidth:150,tabWidth:"auto",tabHeight:27,selected:0,showHeader:!0,plain:!1,fit:!1,border:!0,justified:!1,narrow:!1,pill:!1,tools:null,toolPosition:"right",tabPosition:"top",scrollIncrement:100,scrollDuration:400,onLoad:function(t){},onSelect:function(t,e){},onUnselect:function(t,e){},onBeforeClose:function(t,e){},onClose:function(t,e){},onAdd:function(t,e){},onUpdate:function(t,e){},onContextMenu:function(t,e,a){}}}(jQuery);