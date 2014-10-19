(function(e){"use strict";var t={i18n:{ar:{months:["كانون الثاني","شباط","آذار","نيسان","مايو","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"],dayOfWeek:["ن","ث","ع","خ","ج","س","ح"]},ro:{months:["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"],dayOfWeek:["l","ma","mi","j","v","s","d"]},id:{months:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],dayOfWeek:["Sen","Sel","Rab","Kam","Jum","Sab","Min"]},bg:{months:["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],dayOfWeek:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"]},fa:{months:["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],dayOfWeek:["یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"]},ru:{months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],dayOfWeek:["Вск","Пн","Вт","Ср","Чт","Пт","Сб"]},uk:{months:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],dayOfWeek:["Ндл","Пнд","Втр","Срд","Чтв","Птн","Сбт"]},en:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],dayOfWeek:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},el:{months:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],dayOfWeek:["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"]},de:{months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],dayOfWeek:["So","Mo","Di","Mi","Do","Fr","Sa"]},nl:{months:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],dayOfWeek:["zo","ma","di","wo","do","vr","za"]},tr:{months:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],dayOfWeek:["Paz","Pts","Sal","Çar","Per","Cum","Cts"]},fr:{months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],dayOfWeek:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"]},es:{months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],dayOfWeek:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"]},th:{months:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],dayOfWeek:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."]},pl:{months:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"],dayOfWeek:["nd","pn","wt","śr","cz","pt","sb"]},pt:{months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],dayOfWeek:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"]},ch:{months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayOfWeek:["日","一","二","三","四","五","六"]},se:{months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],dayOfWeek:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"]},kr:{months:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],dayOfWeek:["일","월","화","수","목","금","토"]},it:{months:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],dayOfWeek:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"]},da:{months:["January","Februar","Marts","April","Maj","Juni","July","August","September","Oktober","November","December"],dayOfWeek:["Søn","Man","Tir","Ons","Tor","Fre","Lør"]},no:{months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],dayOfWeek:["Søn","Man","Tir","Ons","Tor","Fre","Lør"]},ja:{months:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dayOfWeek:["日","月","火","水","木","金","土"]},vi:{months:["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],dayOfWeek:["CN","T2","T3","T4","T5","T6","T7"]},sl:{months:["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],dayOfWeek:["Ned","Pon","Tor","Sre","Čet","Pet","Sob"]},cs:{months:["Leden","Únor","Březen","Duben","Květen","Červen","Červenec","Srpen","Září","Říjen","Listopad","Prosinec"],dayOfWeek:["Ne","Po","Út","St","Čt","Pá","So"]},hu:{months:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],dayOfWeek:["Va","Hé","Ke","Sze","Cs","Pé","Szo"]}},value:"",lang:"en",format:"Y/m/d H:i",formatTime:"H:i",formatDate:"Y/m/d",startDate:false,step:60,monthChangeSpinner:true,closeOnDateSelect:false,closeOnWithoutClick:true,closeOnInputClick:true,timepicker:true,datepicker:true,weeks:false,defaultTime:false,defaultDate:false,minDate:false,maxDate:false,minTime:false,maxTime:false,allowTimes:[],opened:false,initTime:true,inline:false,theme:"",onSelectDate:function(){},onSelectTime:function(){},onChangeMonth:function(){},onChangeYear:function(){},onChangeDateTime:function(){},onShow:function(){},onClose:function(){},onGenerate:function(){},withoutCopyright:true,inverseButton:false,hours12:false,next:"xdsoft_next",prev:"xdsoft_prev",dayOfWeekStart:0,parentID:"body",timeHeightInTimePicker:25,timepickerScrollbar:true,todayButton:true,defaultSelect:true,scrollMonth:true,scrollTime:true,scrollInput:true,lazyInit:false,mask:false,validateOnBlur:true,allowBlank:true,yearStart:1950,yearEnd:2050,style:"",id:"",fixed:false,roundTime:"round",className:"",weekends:[],yearOffset:0,beforeShowDay:null};if(!Array.prototype.indexOf){Array.prototype.indexOf=function(e,t){var n,r;for(n=t||0,r=this.length;n<r;n+=1){if(this[n]===e){return n}}return-1}}Date.prototype.countDaysInMonth=function(){return(new Date(this.getFullYear(),this.getMonth()+1,0)).getDate()};e.fn.xdsoftScroller=function(t){return this.each(function(){var n=e(this),r=function(e){var t={x:0,y:0},n;if(e.type==="touchstart"||e.type==="touchmove"||e.type==="touchend"||e.type==="touchcancel"){n=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];t.x=n.pageX;t.y=n.pageY}else if(e.type==="mousedown"||e.type==="mouseup"||e.type==="mousemove"||e.type==="mouseover"||e.type==="mouseout"||e.type==="mouseenter"||e.type==="mouseleave"){t.x=e.pageX;t.y=e.pageY}return t},i=0,s,o,u,a,f,l=100,c=false;if(!e(this).hasClass("xdsoft_scroller_box")){s=n.children().eq(0);o=n[0].clientHeight;u=s[0].offsetHeight;a=e('<div class="xdsoft_scrollbar"></div>');f=e('<div class="xdsoft_scroller"></div>');a.append(f);n.addClass("xdsoft_scroller_box").append(a);f.on("mousedown.xdsoft_scroller",function(r){if(!o){n.trigger("resize_scroll.xdsoft_scroller",[t])}var s=r.pageY,u=parseInt(f.css("margin-top"),10),c=a[0].offsetHeight;if(document){e(document.body).addClass("xdsoft_noselect")}e([document.body,window]).on("mouseup.xdsoft_scroller",function h(){e([document.body,window]).off("mouseup.xdsoft_scroller",h).off("mousemove.xdsoft_scroller",i).removeClass("xdsoft_noselect")});e(document.body).on("mousemove.xdsoft_scroller",i=function(e){var t=e.pageY-s+u;if(t<0){t=0}if(t+f[0].offsetHeight>c){t=c-f[0].offsetHeight}n.trigger("scroll_element.xdsoft_scroller",[l?t/l:0])})});n.on("scroll_element.xdsoft_scroller",function(e,t){if(!o){n.trigger("resize_scroll.xdsoft_scroller",[t,true])}t=t>1?1:t<0||isNaN(t)?0:t;f.css("margin-top",l*t);setTimeout(function(){s.css("marginTop",-parseInt((s[0].offsetHeight-o)*t,10))},10)}).on("resize_scroll.xdsoft_scroller",function(e,t,r){var i,c;o=n[0].clientHeight;u=s[0].offsetHeight;i=o/u;c=i*a[0].offsetHeight;if(i>1){f.hide()}else{f.show();f.css("height",parseInt(c>10?c:10,10));l=a[0].offsetHeight-f[0].offsetHeight;if(r!==true){n.trigger("scroll_element.xdsoft_scroller",[t||Math.abs(parseInt(s.css("marginTop"),10))/(u-o)])}}});if(n.mousewheel){n.mousewheel(function(e,t,r,i){var a=Math.abs(parseInt(s.css("marginTop"),10));n.trigger("scroll_element.xdsoft_scroller",[(a-t*20)/(u-o)]);e.stopPropagation();return false})}n.on("touchstart",function(e){c=r(e)});n.on("touchmove",function(e){if(c){var t=r(e),i=Math.abs(parseInt(s.css("marginTop"),10));n.trigger("scroll_element.xdsoft_scroller",[(i-(t.y-c.y))/(u-o)]);e.stopPropagation();e.preventDefault();c=r(e)}});n.on("touchend touchcancel",function(e){c=false})}n.trigger("resize_scroll.xdsoft_scroller",[t])})};e.fn.datetimepicker=function(n){var r=48,i=57,s=96,o=105,u=17,a=46,f=13,l=27,c=8,h=37,p=38,d=39,v=40,m=9,g=116,y=65,b=67,w=86,E=90,S=89,x=false,T=e.isPlainObject(n)||!n?e.extend(true,{},t,n):e.extend(true,{},t),N=0,C,k,L,A=function(e){e.on("open.xdsoft focusin.xdsoft mousedown.xdsoft",function t(n){if(e.is(":disabled")||e.is(":hidden")||!e.is(":visible")||e.data("xdsoft_datetimepicker")){return}clearTimeout(N);N=setTimeout(function(){if(!e.data("xdsoft_datetimepicker")){C(e)}e.off("open.xdsoft focusin.xdsoft mousedown.xdsoft",t).trigger("open.xdsoft")},100)})};C=function(t){function J(){var e=false,n;if(T.startDate){e=L.strToDate(T.startDate)}else{e=T.value||(t&&t.val&&t.val()?t.val():"");if(e){e=L.strToDateTime(e)}else if(T.defaultDate){e=L.strToDate(T.defaultDate);if(T.defaultTime){n=L.strtotime(T.defaultTime);e.setHours(n.getHours());e.setMinutes(n.getMinutes())}}}if(e&&L.isValidDate(e)){N.data("changed",true)}else{e=""}return e||0}var N=e("<div "+(T.id?'id="'+T.id+'"':"")+" "+(T.style?'style="'+T.style+'"':"")+' class="xdsoft_datetimepicker xdsoft_'+T.theme+" xdsoft_noselect "+(T.weeks?" xdsoft_showweeks":"")+T.className+'"></div>'),C=e('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),k=e('<div class="xdsoft_datepicker active"></div>'),A=e('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button>'+'<div class="xdsoft_label xdsoft_month"><span></span><i></i></div>'+'<div class="xdsoft_label xdsoft_year"><span></span><i></i></div>'+'<button type="button" class="xdsoft_next"></button></div>'),O=e('<div class="xdsoft_calendar"></div>'),M=e('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),_=M.find(".xdsoft_time_box").eq(0),D=e('<div class="xdsoft_time_variant"></div>'),P=e('<div class="xdsoft_scrollbar"></div>'),H=e('<div class="xdsoft_scroller"></div>'),B=e('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),j=e('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),F=false,I,q,R,U,z,W,X=0,V=0;A.find(".xdsoft_month span").after(B);A.find(".xdsoft_year span").after(j);A.find(".xdsoft_month,.xdsoft_year").on("mousedown.xdsoft",function(t){var n=e(this).find(".xdsoft_select").eq(0),r=0,i=0,s=n.is(":visible"),o,u;A.find(".xdsoft_select").hide();if(L.currentTime){r=L.currentTime[e(this).hasClass("xdsoft_month")?"getMonth":"getFullYear"]()}n[s?"hide":"show"]();for(o=n.find("div.xdsoft_option"),u=0;u<o.length;u+=1){if(o.eq(u).data("value")===r){break}else{i+=o[0].offsetHeight}}n.xdsoftScroller(i/(n.children()[0].offsetHeight-n[0].clientHeight));t.stopPropagation();return false});A.find(".xdsoft_select").xdsoftScroller().on("mousedown.xdsoft",function(e){e.stopPropagation();e.preventDefault()}).on("mousedown.xdsoft",".xdsoft_option",function(t){var n=L.currentTime.getFullYear();if(L&&L.currentTime){L.currentTime[e(this).parent().parent().hasClass("xdsoft_monthselect")?"setMonth":"setFullYear"](e(this).data("value"))}e(this).parent().parent().hide();N.trigger("xchange.xdsoft");if(T.onChangeMonth&&e.isFunction(T.onChangeMonth)){T.onChangeMonth.call(N,L.currentTime,N.data("input"))}if(n!==L.currentTime.getFullYear()&&e.isFunction(T.onChangeYear)){T.onChangeYear.call(N,L.currentTime,N.data("input"))}});N.setOptions=function(n){T=e.extend(true,{},T,n);if(n.allowTimes&&e.isArray(n.allowTimes)&&n.allowTimes.length){T.allowTimes=e.extend(true,[],n.allowTimes)}if(n.weekends&&e.isArray(n.weekends)&&n.weekends.length){T.weekends=e.extend(true,[],n.weekends)}if((T.open||T.opened)&&!T.inline){t.trigger("open.xdsoft")}if(T.inline){F=true;N.addClass("xdsoft_inline");t.after(N).hide()}if(T.inverseButton){T.next="xdsoft_prev";T.prev="xdsoft_next"}if(T.datepicker){k.addClass("active")}else{k.removeClass("active")}if(T.timepicker){M.addClass("active")}else{M.removeClass("active")}if(T.value){if(t&&t.val){t.val(T.value)}L.setCurrentTime(T.value)}if(isNaN(T.dayOfWeekStart)){T.dayOfWeekStart=0}else{T.dayOfWeekStart=parseInt(T.dayOfWeekStart,10)%7}if(!T.timepickerScrollbar){P.hide()}if(T.minDate&&/^-(.*)$/.test(T.minDate)){T.minDate=L.strToDateTime(T.minDate).dateFormat(T.formatDate)}if(T.maxDate&&/^\+(.*)$/.test(T.maxDate)){T.maxDate=L.strToDateTime(T.maxDate).dateFormat(T.formatDate)}A.find(".xdsoft_today_button").css("visibility",!T.todayButton?"hidden":"visible");if(T.mask){var C,O=function(e){try{if(document.selection&&document.selection.createRange){var t=document.selection.createRange();return t.getBookmark().charCodeAt(2)-2}if(e.setSelectionRange){return e.selectionStart}}catch(n){return 0}},_=function(e,t){e=typeof e==="string"||e instanceof String?document.getElementById(e):e;if(!e){return false}if(e.createTextRange){var n=e.createTextRange();n.collapse(true);n.moveEnd("character",t);n.moveStart("character",t);n.select();return true}if(e.setSelectionRange){e.setSelectionRange(t,t);return true}return false},D=function(e,t){var n=e.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g,"\\$1").replace(/_/g,"{digit+}").replace(/([0-9]{1})/g,"{digit$1}").replace(/\{digit([0-9]{1})\}/g,"[0-$1_]{1}").replace(/\{digit[\+]\}/g,"[0-9_]{1}");return(new RegExp(n)).test(t)};t.off("keydown.xdsoft");if(T.mask===true){T.mask=T.format.replace(/Y/g,"9999").replace(/F/g,"9999").replace(/m/g,"19").replace(/d/g,"39").replace(/H/g,"29").replace(/i/g,"59").replace(/s/g,"59")}if(e.type(T.mask)==="string"){if(!D(T.mask,t.val())){t.val(T.mask.replace(/[0-9]/g,"_"))}t.on("keydown.xdsoft",function(n){var N=this.value,C=n.which,k,L;if(C>=r&&C<=i||C>=s&&C<=o||C===c||C===a){k=O(this);L=C!==c&&C!==a?String.fromCharCode(s<=C&&C<=o?C-r:C):"_";if((C===c||C===a)&&k){k-=1;L="_"}while(/[^0-9_]/.test(T.mask.substr(k,1))&&k<T.mask.length&&k>0){k+=C===c||C===a?-1:1}N=N.substr(0,k)+L+N.substr(k+1);if(e.trim(N)===""){N=T.mask.replace(/[0-9]/g,"_")}else{if(k===T.mask.length){n.preventDefault();return false}}k+=C===c||C===a?0:1;while(/[^0-9_]/.test(T.mask.substr(k,1))&&k<T.mask.length&&k>0){k+=C===c||C===a?-1:1}if(D(T.mask,N)){this.value=N;_(this,k)}else if(e.trim(N)===""){this.value=T.mask.replace(/[0-9]/g,"_")}else{t.trigger("error_input.xdsoft")}}else{if([y,b,w,E,S].indexOf(C)!==-1&&x||[l,p,v,h,d,g,u,m,f].indexOf(C)!==-1){return true}}n.preventDefault();return false})}}if(T.validateOnBlur){t.off("blur.xdsoft").on("blur.xdsoft",function(){if(T.allowBlank&&!e.trim(e(this).val()).length){e(this).val(null);N.data("xdsoft_datetime").empty()}else if(!Date.parseDate(e(this).val(),T.format)){e(this).val(L.now().dateFormat(T.format));N.data("xdsoft_datetime").setCurrentTime(e(this).val())}else{N.data("xdsoft_datetime").setCurrentTime(e(this).val())}N.trigger("changedatetime.xdsoft")})}T.dayOfWeekStartPrev=T.dayOfWeekStart===0?6:T.dayOfWeekStart-1;N.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft")};N.data("options",T).on("mousedown.xdsoft",function(e){e.stopPropagation();e.preventDefault();j.hide();B.hide();return false});q=M.find(".xdsoft_time_box");q.append(D);q.xdsoftScroller();N.on("afterOpen.xdsoft",function(){q.xdsoftScroller()});N.append(k).append(M);if(T.withoutCopyright!==true){N.append(C)}k.append(A).append(O);e(T.parentID).append(N);I=function(){var t=this;t.now=function(e){var n=new Date,r,i;if(!e&&T.defaultDate){r=t.strToDate(T.defaultDate);n.setFullYear(r.getFullYear());n.setMonth(r.getMonth());n.setDate(r.getDate())}if(T.yearOffset){n.setFullYear(n.getFullYear()+T.yearOffset)}if(!e&&T.defaultTime){i=t.strtotime(T.defaultTime);n.setHours(i.getHours());n.setMinutes(i.getMinutes())}return n};t.isValidDate=function(e){if(Object.prototype.toString.call(e)!=="[object Date]"){return false}return!isNaN(e.getTime())};t.setCurrentTime=function(e){t.currentTime=typeof e==="string"?t.strToDateTime(e):t.isValidDate(e)?e:t.now();N.trigger("xchange.xdsoft")};t.empty=function(){t.currentTime=null};t.getCurrentTime=function(e){return t.currentTime};t.nextMonth=function(){var n=t.currentTime.getMonth()+1,r;if(n===12){t.currentTime.setFullYear(t.currentTime.getFullYear()+1);n=0}r=t.currentTime.getFullYear();t.currentTime.setDate(Math.min((new Date(t.currentTime.getFullYear(),n+1,0)).getDate(),t.currentTime.getDate()));t.currentTime.setMonth(n);if(T.onChangeMonth&&e.isFunction(T.onChangeMonth)){T.onChangeMonth.call(N,L.currentTime,N.data("input"))}if(r!==t.currentTime.getFullYear()&&e.isFunction(T.onChangeYear)){T.onChangeYear.call(N,L.currentTime,N.data("input"))}N.trigger("xchange.xdsoft");return n};t.prevMonth=function(){var n=t.currentTime.getMonth()-1;if(n===-1){t.currentTime.setFullYear(t.currentTime.getFullYear()-1);n=11}t.currentTime.setDate(Math.min((new Date(t.currentTime.getFullYear(),n+1,0)).getDate(),t.currentTime.getDate()));t.currentTime.setMonth(n);if(T.onChangeMonth&&e.isFunction(T.onChangeMonth)){T.onChangeMonth.call(N,L.currentTime,N.data("input"))}N.trigger("xchange.xdsoft");return n};t.getWeekOfYear=function(e){var t=new Date(e.getFullYear(),0,1);return Math.ceil(((e-t)/864e5+t.getDay()+1)/7)};t.strToDateTime=function(e){var n=[],r,i;if(e&&e instanceof Date&&t.isValidDate(e)){return e}n=/^(\+|\-)(.*)$/.exec(e);if(n){n[2]=Date.parseDate(n[2],T.formatDate)}if(n&&n[2]){r=n[2].getTime()-n[2].getTimezoneOffset()*6e4;i=new Date(L.now().getTime()+parseInt(n[1]+"1",10)*r)}else{i=e?Date.parseDate(e,T.format):t.now()}if(!t.isValidDate(i)){i=t.now()}return i};t.strToDate=function(e){if(e&&e instanceof Date&&t.isValidDate(e)){return e}var n=e?Date.parseDate(e,T.formatDate):t.now(true);if(!t.isValidDate(n)){n=t.now(true)}return n};t.strtotime=function(e){if(e&&e instanceof Date&&t.isValidDate(e)){return e}var n=e?Date.parseDate(e,T.formatTime):t.now(true);if(!t.isValidDate(n)){n=t.now(true)}return n};t.str=function(){return t.currentTime.dateFormat(T.format)};t.currentTime=this.now()};L=new I;A.find(".xdsoft_today_button").on("mousedown.xdsoft",function(){N.data("changed",true);L.setCurrentTime(0);N.trigger("afterOpen.xdsoft")}).on("dblclick.xdsoft",function(){t.val(L.str());N.trigger("close.xdsoft")});A.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft",function(){var t=e(this),n=0,r=false;(function i(e){var s=L.currentTime.getMonth();if(t.hasClass(T.next)){L.nextMonth()}else if(t.hasClass(T.prev)){L.prevMonth()}if(T.monthChangeSpinner){if(!r){n=setTimeout(i,e||100)}}})(500);e([document.body,window]).on("mouseup.xdsoft",function s(){clearTimeout(n);r=true;e([document.body,window]).off("mouseup.xdsoft",s)})});M.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft",function(){var t=e(this),n=0,r=false,i=110;(function s(e){var o=_[0].clientHeight,u=D[0].offsetHeight,a=Math.abs(parseInt(D.css("marginTop"),10));if(t.hasClass(T.next)&&u-o-T.timeHeightInTimePicker>=a){D.css("marginTop","-"+(a+T.timeHeightInTimePicker)+"px")}else if(t.hasClass(T.prev)&&a-T.timeHeightInTimePicker>=0){D.css("marginTop","-"+(a-T.timeHeightInTimePicker)+"px")}_.trigger("scroll_element.xdsoft_scroller",[Math.abs(parseInt(D.css("marginTop"),10)/(u-o))]);i=i>10?10:i-10;if(!r){n=setTimeout(s,e||i)}})(500);e([document.body,window]).on("mouseup.xdsoft",function o(){clearTimeout(n);r=true;e([document.body,window]).off("mouseup.xdsoft",o)})});R=0;N.on("xchange.xdsoft",function(t){clearTimeout(R);R=setTimeout(function(){var t="",r=new Date(L.currentTime.getFullYear(),L.currentTime.getMonth(),1,12,0,0),i=0,s,o=L.now(),u=false,a=false,f,l,c,h,p=[],d,v=true,m="",g="",y;while(r.getDay()!==T.dayOfWeekStart){r.setDate(r.getDate()-1)}t+="<table><thead><tr>";if(T.weeks){t+="<th></th>"}for(s=0;s<7;s+=1){t+="<th>"+T.i18n[T.lang].dayOfWeek[(s+T.dayOfWeekStart)%7]+"</th>"}t+="</tr></thead>";t+="<tbody>";if(T.maxDate!==false){u=L.strToDate(T.maxDate);u=new Date(u.getFullYear(),u.getMonth(),u.getDate(),23,59,59,999)}if(T.minDate!==false){a=L.strToDate(T.minDate);a=new Date(a.getFullYear(),a.getMonth(),a.getDate())}while(i<L.currentTime.countDaysInMonth()||r.getDay()!==T.dayOfWeekStart||L.currentTime.getMonth()===r.getMonth()){p=[];i+=1;f=r.getDate();l=r.getFullYear();c=r.getMonth();h=L.getWeekOfYear(r);p.push("xdsoft_date");if(T.beforeShowDay&&e.isFunction(T.beforeShowDay.call)){d=T.beforeShowDay.call(N,r)}else{d=null}if(u!==false&&r>u||a!==false&&r<a||d&&d[0]===false){p.push("xdsoft_disabled")}if(d&&d[1]!==""){p.push(d[1])}if(L.currentTime.getMonth()!==c){p.push("xdsoft_other_month")}if((T.defaultSelect||N.data("changed"))&&L.currentTime.dateFormat(T.formatDate)===r.dateFormat(T.formatDate)){p.push("xdsoft_current")}if(o.dateFormat(T.formatDate)===r.dateFormat(T.formatDate)){p.push("xdsoft_today")}if(r.getDay()===0||r.getDay()===6||T.weekends.indexOf(r.dateFormat(T.formatDate))===-1){p.push("xdsoft_weekend")}if(T.beforeShowDay&&e.isFunction(T.beforeShowDay)){p.push(T.beforeShowDay(r))}if(v){t+="<tr>";v=false;if(T.weeks){t+="<th>"+h+"</th>"}}t+='<td data-date="'+f+'" data-month="'+c+'" data-year="'+l+'"'+' class="xdsoft_date xdsoft_day_of_week'+r.getDay()+" "+p.join(" ")+'">'+"<div>"+f+"</div>"+"</td>";if(r.getDay()===T.dayOfWeekStartPrev){t+="</tr>";v=true}r.setDate(f+1)}t+="</tbody></table>";O.html(t);A.find(".xdsoft_label span").eq(0).text(T.i18n[T.lang].months[L.currentTime.getMonth()]);A.find(".xdsoft_label span").eq(1).text(L.currentTime.getFullYear());m="";g="";c="";y=function(t,n){var r=L.now();r.setHours(t);t=parseInt(r.getHours(),10);r.setMinutes(n);n=parseInt(r.getMinutes(),10);p=[];if(T.maxTime!==false&&L.strtotime(T.maxTime).getTime()<r.getTime()||T.minTime!==false&&L.strtotime(T.minTime).getTime()>r.getTime()){p.push("xdsoft_disabled")}if((T.initTime||T.defaultSelect||N.data("changed"))&&parseInt(L.currentTime.getHours(),10)===parseInt(t,10)&&(T.step>59||Math[T.roundTime](L.currentTime.getMinutes()/T.step)*T.step===parseInt(n,10))){if(T.defaultSelect||N.data("changed")){p.push("xdsoft_current")}else if(T.initTime){p.push("xdsoft_init_time")}}if(parseInt(o.getHours(),10)===parseInt(t,10)&&parseInt(o.getMinutes(),10)===parseInt(n,10)){p.push("xdsoft_today")}m+='<div class="xdsoft_time '+p.join(" ")+'" data-hour="'+t+'" data-minute="'+n+'">'+r.dateFormat(T.formatTime)+"</div>"};if(!T.allowTimes||!e.isArray(T.allowTimes)||!T.allowTimes.length){for(i=0,s=0;i<(T.hours12?12:24);i+=1){for(s=0;s<60;s+=T.step){g=(i<10?"0":"")+i;c=(s<10?"0":"")+s;y(g,c)}}}else{for(i=0;i<T.allowTimes.length;i+=1){g=L.strtotime(T.allowTimes[i]).getHours();c=L.strtotime(T.allowTimes[i]).getMinutes();y(g,c)}}D.html(m);n="";i=0;for(i=parseInt(T.yearStart,10)+T.yearOffset;i<=parseInt(T.yearEnd,10)+T.yearOffset;i+=1){n+='<div class="xdsoft_option '+(L.currentTime.getFullYear()===i?"xdsoft_current":"")+'" data-value="'+i+'">'+i+"</div>"}j.children().eq(0).html(n);for(i=0,n="";i<=11;i+=1){n+='<div class="xdsoft_option '+(L.currentTime.getMonth()===i?"xdsoft_current":"")+'" data-value="'+i+'">'+T.i18n[T.lang].months[i]+"</div>"}B.children().eq(0).html(n);e(N).trigger("generate.xdsoft")},10);t.stopPropagation()}).on("afterOpen.xdsoft",function(){if(T.timepicker){var e,t,n,r;if(D.find(".xdsoft_current").length){e=".xdsoft_current"}else if(D.find(".xdsoft_init_time").length){e=".xdsoft_init_time"}if(e){t=_[0].clientHeight;n=D[0].offsetHeight;r=D.find(e).index()*T.timeHeightInTimePicker+1;if(n-t<r){r=n-t}_.trigger("scroll_element.xdsoft_scroller",[parseInt(r,10)/(n-t)])}else{_.trigger("scroll_element.xdsoft_scroller",[0])}}});U=0;O.on("click.xdsoft","td",function(n){n.stopPropagation();U+=1;var r=e(this),i=L.currentTime;if(i===undefined||i===null){L.currentTime=L.now();i=L.currentTime}if(r.hasClass("xdsoft_disabled")){return false}i.setDate(1);i.setFullYear(r.data("year"));i.setMonth(r.data("month"));i.setDate(r.data("date"));N.trigger("select.xdsoft",[i]);t.val(L.str());if((U>1||T.closeOnDateSelect===true||T.closeOnDateSelect===0&&!T.timepicker)&&!T.inline){N.trigger("close.xdsoft")}if(T.onSelectDate&&e.isFunction(T.onSelectDate)){T.onSelectDate.call(N,L.currentTime,N.data("input"),n)}N.data("changed",true);N.trigger("xchange.xdsoft");N.trigger("changedatetime.xdsoft");setTimeout(function(){U=0},200)});D.on("click.xdsoft","div",function(t){t.stopPropagation();var n=e(this),r=L.currentTime;if(r===undefined||r===null){L.currentTime=L.now();r=L.currentTime}if(n.hasClass("xdsoft_disabled")){return false}r.setHours(n.data("hour"));r.setMinutes(n.data("minute"));N.trigger("select.xdsoft",[r]);N.data("input").val(L.str());if(!T.inline){N.trigger("close.xdsoft")}if(T.onSelectTime&&e.isFunction(T.onSelectTime)){T.onSelectTime.call(N,L.currentTime,N.data("input"),t)}N.data("changed",true);N.trigger("xchange.xdsoft");N.trigger("changedatetime.xdsoft")});if(N.mousewheel){k.mousewheel(function(e,t,n,r){if(!T.scrollMonth){return true}if(t<0){L.nextMonth()}else{L.prevMonth()}return false});_.unmousewheel().mousewheel(function(e,t,n,r){if(!T.scrollTime){return true}var i=_[0].clientHeight,s=D[0].offsetHeight,o=Math.abs(parseInt(D.css("marginTop"),10)),u=true;if(t<0&&s-i-T.timeHeightInTimePicker>=o){D.css("marginTop","-"+(o+T.timeHeightInTimePicker)+"px");u=false}else if(t>0&&o-T.timeHeightInTimePicker>=0){D.css("marginTop","-"+(o-T.timeHeightInTimePicker)+"px");u=false}_.trigger("scroll_element.xdsoft_scroller",[Math.abs(parseInt(D.css("marginTop"),10)/(s-i))]);e.stopPropagation();return u});t.mousewheel(function(e,n,r,i){if(!T.scrollInput){return true}if(!T.datepicker&&T.timepicker){z=D.find(".xdsoft_current").length?D.find(".xdsoft_current").eq(0).index():0;if(z+n>=0&&z+n<D.children().length){z+=n}if(D.children().eq(z).length){D.children().eq(z).trigger("mousedown")}return false}if(T.datepicker&&!T.timepicker){k.trigger(e,[n,r,i]);if(t.val){t.val(L.str())}N.trigger("changedatetime.xdsoft");return false}})}N.on("changedatetime.xdsoft",function(t){if(T.onChangeDateTime&&e.isFunction(T.onChangeDateTime)){var n=N.data("input");T.onChangeDateTime.call(N,L.currentTime,n,t);delete T.value;n.trigger("change")}}).on("generate.xdsoft",function(){if(T.onGenerate&&e.isFunction(T.onGenerate)){T.onGenerate.call(N,L.currentTime,N.data("input"))}if(F){N.trigger("afterOpen.xdsoft");F=false}}).on("click.xdsoft",function(e){e.stopPropagation()});z=0;W=function(){var t=N.data("input").offset(),n=t.top+N.data("input")[0].offsetHeight-1,r=t.left,i="absolute";if(T.fixed){n-=e(window).scrollTop();r-=e(window).scrollLeft();i="fixed"}else{if(n+N[0].offsetHeight>e(window).height()+e(window).scrollTop()){n=t.top-N[0].offsetHeight+1}if(n<0){n=0}if(r+N[0].offsetWidth>e(window).width()){r=e(window).width()-N[0].offsetWidth}}N.css({left:r,top:n,position:i})};N.on("open.xdsoft",function(t){var n=true;if(T.onShow&&e.isFunction(T.onShow)){n=T.onShow.call(N,L.currentTime,N.data("input"),t)}if(n!==false){N.show();W();e(window).off("resize.xdsoft",W).on("resize.xdsoft",W);if(T.closeOnWithoutClick){e([document.body,window]).on("mousedown.xdsoft",function r(){N.trigger("close.xdsoft");e([document.body,window]).off("mousedown.xdsoft",r)})}}}).on("close.xdsoft",function(t){var n=true;A.find(".xdsoft_month,.xdsoft_year").find(".xdsoft_select").hide();if(T.onClose&&e.isFunction(T.onClose)){n=T.onClose.call(N,L.currentTime,N.data("input"),t)}if(n!==false&&!T.opened&&!T.inline){N.hide()}t.stopPropagation()}).data("input",t);X=0;V=0;N.data("xdsoft_datetime",L);N.setOptions(T);L.setCurrentTime(J());t.data("xdsoft_datetimepicker",N).on("open.xdsoft focusin.xdsoft mousedown.xdsoft",function(e){if(t.is(":disabled")||t.is(":hidden")||!t.is(":visible")||t.data("xdsoft_datetimepicker").is(":visible")&&T.closeOnInputClick){return}clearTimeout(X);X=setTimeout(function(){if(t.is(":disabled")||t.is(":hidden")||!t.is(":visible")){return}F=true;L.setCurrentTime(J());N.trigger("open.xdsoft")},100)}).on("keydown.xdsoft",function(t){var n=this.value,r,i=t.which;if([f].indexOf(i)!==-1){r=e("input:visible,textarea:visible");N.trigger("close.xdsoft");r.eq(r.index(this)+1).focus();return false}if([m].indexOf(i)!==-1){N.trigger("close.xdsoft");return true}})};k=function(t){var n=t.data("xdsoft_datetimepicker");if(n){n.data("xdsoft_datetime",null);n.remove();t.data("xdsoft_datetimepicker",null).off(".xdsoft");e(window).off("resize.xdsoft");e([window,document.body]).off("mousedown.xdsoft");if(t.unmousewheel){t.unmousewheel()}}};e(document).off("keydown.xdsoftctrl keyup.xdsoftctrl").on("keydown.xdsoftctrl",function(e){if(e.keyCode===u){x=true}}).on("keyup.xdsoftctrl",function(e){if(e.keyCode===u){x=false}});return this.each(function(){var t=e(this).data("xdsoft_datetimepicker");if(t){if(e.type(n)==="string"){switch(n){case"show":e(this).select().focus();t.trigger("open.xdsoft");break;case"hide":t.trigger("close.xdsoft");break;case"destroy":k(e(this));break;case"reset":this.value=this.defaultValue;if(!this.value||!t.data("xdsoft_datetime").isValidDate(Date.parseDate(this.value,T.format))){t.data("changed",false)}t.data("xdsoft_datetime").setCurrentTime(this.value);break}}else{t.setOptions(n)}return 0}if(e.type(n)!=="string"){if(!T.lazyInit||T.open||T.inline){C(e(this))}else{A(e(this))}}})};e.fn.datetimepicker.defaults=t})(jQuery);(function(){(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e}else{e(jQuery)}})(function(e){function o(t){var n=t||window.event,s=[].slice.call(arguments,1),o=0,u=0,a=0,f=0,l=0,c;t=e.event.fix(n);t.type="mousewheel";if(n.wheelDelta){o=n.wheelDelta}if(n.detail){o=n.detail*-1}if(n.deltaY){a=n.deltaY*-1;o=a}if(n.deltaX){u=n.deltaX;o=u*-1}if(n.wheelDeltaY!==undefined){a=n.wheelDeltaY}if(n.wheelDeltaX!==undefined){u=n.wheelDeltaX*-1}f=Math.abs(o);if(!r||f<r){r=f}l=Math.max(Math.abs(a),Math.abs(u));if(!i||l<i){i=l}c=o>0?"floor":"ceil";o=Math[c](o/r);u=Math[c](u/i);a=Math[c](a/i);s.unshift(t,o,u,a);return(e.event.dispatch||e.event.handle).apply(this,s)}var t=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"];var n="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"];var r,i;if(e.event.fixHooks){for(var s=t.length;s;){e.event.fixHooks[t[--s]]=e.event.mouseHooks}}e.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var e=n.length;e;){this.addEventListener(n[--e],o,false)}}else{this.onmousewheel=o}},teardown:function(){if(this.removeEventListener){for(var e=n.length;e;){this.removeEventListener(n[--e],o,false)}}else{this.onmousewheel=null}}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});Date.parseFunctions={count:0};Date.parseRegexes=[];Date.formatFunctions={count:0};Date.prototype.dateFormat=function(e){if(e=="unixtime"){return parseInt(this.getTime()/1e3)}if(Date.formatFunctions[e]==null){Date.createNewFormat(e)}var t=Date.formatFunctions[e];return this[t]()};Date.createNewFormat=function(format){var funcName="format"+Date.formatFunctions.count++;Date.formatFunctions[format]=funcName;var code="Date.prototype."+funcName+" = function() {return ";var special=false;var ch="";for(var i=0;i<format.length;++i){ch=format.charAt(i);if(!special&&ch=="\\"){special=true}else{if(special){special=false;code+="'"+String.escape(ch)+"' + "}else{code+=Date.getFormatCode(ch)}}}eval(code.substring(0,code.length-3)+";}")};Date.getFormatCode=function(e){switch(e){case"d":return"String.leftPad(this.getDate(), 2, '0') + ";case"D":return"Date.dayNames[this.getDay()].substring(0, 3) + ";case"j":return"this.getDate() + ";case"l":return"Date.dayNames[this.getDay()] + ";case"S":return"this.getSuffix() + ";case"w":return"this.getDay() + ";case"z":return"this.getDayOfYear() + ";case"W":return"this.getWeekOfYear() + ";case"F":return"Date.monthNames[this.getMonth()] + ";case"m":return"String.leftPad(this.getMonth() + 1, 2, '0') + ";case"M":return"Date.monthNames[this.getMonth()].substring(0, 3) + ";case"n":return"(this.getMonth() + 1) + ";case"t":return"this.getDaysInMonth() + ";case"L":return"(this.isLeapYear() ? 1 : 0) + ";case"Y":return"this.getFullYear() + ";case"y":return"('' + this.getFullYear()).substring(2, 4) + ";case"a":return"(this.getHours() < 12 ? 'am' : 'pm') + ";case"A":return"(this.getHours() < 12 ? 'AM' : 'PM') + ";case"g":return"((this.getHours() %12) ? this.getHours() % 12 : 12) + ";case"G":return"this.getHours() + ";case"h":return"String.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ";case"H":return"String.leftPad(this.getHours(), 2, '0') + ";case"i":return"String.leftPad(this.getMinutes(), 2, '0') + ";case"s":return"String.leftPad(this.getSeconds(), 2, '0') + ";case"O":return"this.getGMTOffset() + ";case"T":return"this.getTimezone() + ";case"Z":return"(this.getTimezoneOffset() * -60) + ";default:return"'"+String.escape(e)+"' + "}};Date.parseDate=function(e,t){if(t=="unixtime"){return new Date(!isNaN(parseInt(e))?parseInt(e)*1e3:0)}if(Date.parseFunctions[t]==null){Date.createParser(t)}var n=Date.parseFunctions[t];return Date[n](e)};Date.createParser=function(format){var funcName="parse"+Date.parseFunctions.count++;var regexNum=Date.parseRegexes.length;var currentGroup=1;Date.parseFunctions[format]=funcName;var code="Date."+funcName+" = function(input) {\nvar y = -1, m = -1, d = -1, h = -1, i = -1, s = -1, z = -1;\nvar d = new Date();\ny = d.getFullYear();\nm = d.getMonth();\nd = d.getDate();\nvar results = input.match(Date.parseRegexes["+regexNum+"]);\nif (results && results.length > 0) {";var regex="";var special=false;var ch="";for(var i=0;i<format.length;++i){ch=format.charAt(i);if(!special&&ch=="\\"){special=true}else{if(special){special=false;regex+=String.escape(ch)}else{obj=Date.formatCodeToRegex(ch,currentGroup);currentGroup+=obj.g;regex+=obj.s;if(obj.g&&obj.c){code+=obj.c}}}}code+="if (y > 0 && z > 0){\nvar doyDate = new Date(y,0);\ndoyDate.setDate(z);\nm = doyDate.getMonth();\nd = doyDate.getDate();\n}";code+="if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0)\n{return new Date(y, m, d, h, i, s);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0)\n{return new Date(y, m, d, h, i);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0)\n{return new Date(y, m, d, h);}\nelse if (y > 0 && m >= 0 && d > 0)\n{return new Date(y, m, d);}\nelse if (y > 0 && m >= 0)\n{return new Date(y, m);}\nelse if (y > 0)\n{return new Date(y);}\n}return null;}";Date.parseRegexes[regexNum]=new RegExp("^"+regex+"$");eval(code)};Date.formatCodeToRegex=function(e,t){switch(e){case"D":return{g:0,c:null,s:"(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)"};case"j":case"d":return{g:1,c:"d = parseInt(results["+t+"], 10);\n",s:"(\\d{1,2})"};case"l":return{g:0,c:null,s:"(?:"+Date.dayNames.join("|")+")"};case"S":return{g:0,c:null,s:"(?:st|nd|rd|th)"};case"w":return{g:0,c:null,s:"\\d"};case"z":return{g:1,c:"z = parseInt(results["+t+"], 10);\n",s:"(\\d{1,3})"};case"W":return{g:0,c:null,s:"(?:\\d{2})"};case"F":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+t+"].substring(0, 3)], 10);\n",s:"("+Date.monthNames.join("|")+")"};case"M":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+t+"]], 10);\n",s:"(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"};case"n":case"m":return{g:1,c:"m = parseInt(results["+t+"], 10) - 1;\n",s:"(\\d{1,2})"};case"t":return{g:0,c:null,s:"\\d{1,2}"};case"L":return{g:0,c:null,s:"(?:1|0)"};case"Y":return{g:1,c:"y = parseInt(results["+t+"], 10);\n",s:"(\\d{4})"};case"y":return{g:1,c:"var ty = parseInt(results["+t+"], 10);\ny = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\n",s:"(\\d{1,2})"};case"a":return{g:1,c:"if (results["+t+"] == 'am') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",s:"(am|pm)"};case"A":return{g:1,c:"if (results["+t+"] == 'AM') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",s:"(AM|PM)"};case"g":case"G":case"h":case"H":return{g:1,c:"h = parseInt(results["+t+"], 10);\n",s:"(\\d{1,2})"};case"i":return{g:1,c:"i = parseInt(results["+t+"], 10);\n",s:"(\\d{2})"};case"s":return{g:1,c:"s = parseInt(results["+t+"], 10);\n",s:"(\\d{2})"};case"O":return{g:0,c:null,s:"[+-]\\d{4}"};case"T":return{g:0,c:null,s:"[A-Z]{3}"};case"Z":return{g:0,c:null,s:"[+-]\\d{1,5}"};default:return{g:0,c:null,s:String.escape(e)}}};Date.prototype.getTimezone=function(){return this.toString().replace(/^.*? ([A-Z]{3}) [0-9]{4}.*$/,"$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/,"$1$2$3")};Date.prototype.getGMTOffset=function(){return(this.getTimezoneOffset()>0?"-":"+")+String.leftPad(Math.floor(Math.abs(this.getTimezoneOffset())/60),2,"0")+String.leftPad(Math.abs(this.getTimezoneOffset())%60,2,"0")};Date.prototype.getDayOfYear=function(){var e=0;Date.daysInMonth[1]=this.isLeapYear()?29:28;for(var t=0;t<this.getMonth();++t){e+=Date.daysInMonth[t]}return e+this.getDate()};Date.prototype.getWeekOfYear=function(){var e=this.getDayOfYear()+(4-this.getDay());var t=new Date(this.getFullYear(),0,1);var n=7-t.getDay()+4;return String.leftPad(Math.ceil((e-n)/7)+1,2,"0")};Date.prototype.isLeapYear=function(){var e=this.getFullYear();return(e&3)==0&&(e%100||e%400==0&&e)};Date.prototype.getFirstDayOfMonth=function(){var e=(this.getDay()-(this.getDate()-1))%7;return e<0?e+7:e};Date.prototype.getLastDayOfMonth=function(){var e=(this.getDay()+(Date.daysInMonth[this.getMonth()]-this.getDate()))%7;return e<0?e+7:e};Date.prototype.getDaysInMonth=function(){Date.daysInMonth[1]=this.isLeapYear()?29:28;return Date.daysInMonth[this.getMonth()]};Date.prototype.getSuffix=function(){switch(this.getDate()){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th"}};String.escape=function(e){return e.replace(/('|\\)/g,"\\$1")};String.leftPad=function(e,t,n){var r=new String(e);if(n==null){n=" "}while(r.length<t){r=n+r}return r};Date.daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];Date.monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];Date.dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];Date.y2kYear=50;Date.monthNumbers={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};Date.patterns={ISO8601LongPattern:"Y-m-d H:i:s",ISO8601ShortPattern:"Y-m-d",ShortDatePattern:"n/j/Y",LongDatePattern:"l, F d, Y",FullDateTimePattern:"l, F d, Y g:i:s A",MonthDayPattern:"F d",ShortTimePattern:"g:i A",LongTimePattern:"g:i:s A",SortableDateTimePattern:"Y-m-d\\TH:i:s",UniversalSortableDateTimePattern:"Y-m-d H:i:sO",YearMonthPattern:"F, Y"}})()