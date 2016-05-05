/**
 * @author  Abdennour Toumi
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Casting JS Object
 */

var companyName='codelabsys';
if(!window.allMyClasses){

	Object.defineProperty(window,'myClasses',{value:function(){

		var functionNames = [];
		for (var f in this) if (this.hasOwnProperty(f) && typeof this[f] === 'function')
		{
		    functionNames.push(f);
		}
		return functionNames;
	},enumerable : false})
				Object.defineProperty(window,'allMyClasses',{value:function(){

					var functionNames = [];
					functionNames=functionNames.concat(window.myClasses())
					var children=document.getElementsByTagName('IFRAME')
					for(var i=0;i<children.length;i++){
						functionNames=functionNames.concat(children[i].contentWindow.myClasses());

					}
					functionNames=functionNames.concat(window.parent);
					return functionNames;
				},enumerable : false})

			};
var jsdk={
		args:{

		},
		log:function(msg){
			if(jsdk.args['log']){
				if(msg){
					console.log(msg.toString());
				}

				console.log(msg);
			}

		},
		init:function(args){
			jsdk.args=args;
			if(!window.allMyClasses){
				jsdk.objectextends(window);

			}
		},
		objectextends:function(obj){

			Object.defineProperty(obj,'getNameType',{value:function() {
				if(this instanceof jQuery || this instanceof $){

				}else{
					var funcNameRegex = /function (.{1,})\(/;
					   var results = (funcNameRegex).exec((this).constructor.toString());
					   return (results && results.length > 1) ? results[1] : "";
				}

			},enumerable : false});
			Object.defineProperty(obj,'isInstanceOf',{value:function(constrname) {
				if(this.constructor.name===constrname){
					return true;
				}

			    return false;
			},enumerable : false})
			Object.defineProperty(obj,'myClasses',{value:function(){
				var functionNames = [];
				for (var f in this) if (this.hasOwnProperty(f) && typeof this[f] === 'function')
				{
				    functionNames.push(f);
				}
				return functionNames;
			},enumerable : false})
			Object.defineProperty(obj,'allMyClasses',{value:function(){

				var functionNames = [];
				functionNames=functionNames.concat(window.myClasses())
				var children=document.getElementsByTagName('IFRAME')
				for(var i=0;i<children.length;i++){
					functionNames=functionNames.concat(children[i].contentWindow.myClasses());

				}
				functionNames=functionNames.concat(window.parent);
				return functionNames;
			},enumerable : false})
			Object.defineProperty(obj,'getType',{value:function(){
				var allcls=window.allMyClasses();
				for(var i=0;i<allcls.length;i++ ){
					if(this.isInstanceOf(allcls[i])){
						return allcls[i];
					}
				}
				return 'Object';
			},enumerable : true})
			Object.defineProperty(obj,'as',{value:function(className){
				var typeBefore=this.getType();
				if(typeBefore===className){
					console.warn('');

				}else{
					if(className==='Object'){
						return this;
					}else {

				        var toReturn;
				        if(className){
				        	if(typeof className ==='function'){
				        		className=className.name;
				        	}
				        	toReturn=className.toInstance();
				        }
						//it'is arrayList
				        if(this.aList instanceof Array || className==='ArrayList'){
				        	toReturn=new ArrayList();
				        	if(!this.aList){
				        		if(this instanceof Array){
				        			this.aList=this;
				        		}else{
				        			this.aList=toReturn.aList;
				        		}

				        	}

							if(this.aList.length>0){
								for (property in this.aList) {
									if(typeof property !=='function'){
										toReturn.Add(this['aList'][property]);
									}


								}
							}

						} else if(className==='Emti7en'){
							var output = '';
							for (property in toReturn) {
								if(this.hasOwnProperty(property)){
								    if(property=='temerin'){
								    	jsdk.log(this[property]);
								    	jsdk.log(toReturn[property]);
								    	toReturn.temerin=ArrayList.parse(this.temerin,'Temrin');
								    	jsdk.log(toReturn.temerin);
								    	for(var ij=0;ij<toReturn.temerin.Count();ij++){
								    		for(ptm in toReturn.temerin.GetAt(ij)){
								    			if(ptm==='esila'){
								    				toReturn.temerin.GetAt(ij).esila=ArrayList.parse(this.temerin.aList[ij].esila,'Souel');
								    			    for(var ijj=0;ijj<toReturn.temerin.GetAt(ij).esila.Count();ijj++){
								    			    	for(psl in toReturn.temerin.GetAt(ij).esila.GetAt(ijj)){
								    			    		if(psl==='e7timelet'){
								    			    			toReturn.temerin.GetAt(ij).esila.GetAt(ijj).e7timelet=ArrayList.parse(this.temerin.aList[ij].esila.aList[ijj].e7timelet,'E7timel');

								    			    		}else{
									    			    		toReturn.temerin.GetAt(ij).esila.GetAt(ijj)[psl]=this.temerin.aList[ij].esila.aList[ijj][psl]

								    			    		}
								    			    	}
								    			    }
								    			}else{
									    			toReturn.temerin.GetAt(ij)[ptm]=this.temerin.aList[ij][ptm];

								    			}
								    		}
								    	}
								    }else{
										toReturn[property]=this[property];

								    }
								}

							}
						}else{
							var output = '';
							for (property in toReturn) {
								if(this.hasOwnProperty(property)){
									toReturn[property]=this[property];
								}

							}
						}






						return toReturn;
				    }
				}


			},enumerable : false})

		}
};
var companyAPIName=companyName+'API';
window[companyAPIName]={}
function inherits(base, extension)
		{
			for (var property in base)
			{
				try
				{
					extension[property] = base[property];
				}
				catch(warning)
				{
				}
			}
		};
/**
 * Number extends
 */

		Number.prototype.isEven=function(){
		     return this % 2==0;
		};

		Number.prototype.isOdd=function(){
		     return !this.isEven();
		};
		/**
		 * var genArr=(1)['..'](10)  //[1,2,3,4,5,6,7,8,9,10]
		 * http://jsfiddle.net/abdennour/mcpnvsmm/
		 */
		Number.prototype['..']=function(to,step){
		     var arr = [],from=this;
		     while(from <= to){
		        arr.push(from++);
		     }
		     return arr;
		};
		Number.prototype.toRoman= function(){
		    var n= Math.floor(this),val,s= '',limit= 3999,i= 0;
		    v= [1000,900,500,400,100,90,50,40,10,9,5,4,1],
		    r= ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
		    if(n< 1 || n> limit) return '';
		    while(i<13){
		        val= v[i];
		        while(n>= val){
		            n-= val;
		            s+= r[i];
		        }
		        if(n== 0) return s;
		        ++i;
		    }
		    return '';
		}


		Number.fromRoman= function(s){
		    s= String(s).toUpperCase();
		    if(s.length> 15 ||  /[^MDCLXVI]/.test(s)) return NaN;
		    var L= s.length,sum= 0,i= 0,next,val,
		    R={
		        M:1000,D:500,C:100,L:50,X:10,V:5,I:1
		    };
		    while(i< L){
		        val= s.charAt(i++);
		        if(!R[val]) return NaN;
		        val= R[val];
		        next= R[(s.charAt(i) || 'N')] || 0;
		        if(next> val) val*= -1;
		        sum+= val;
		    }
		    if(sum.toRoman()== s) return sum;
		    return NaN;
		}
		 /*
     * Date Format 1.2.3
     * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
     * MIT license
     *
     * Includes enhancements by Scott Trenda <scott.trenda.net>
     * and Kris Kowal <cixar.com/~kris.kowal/>
     *
     * Accepts a date, a mask, or a date and a mask.
     * Returns a formatted version of the given date.
     * The date defaults to the current date/time.
     * The mask defaults to dateFormat.masks.default.
     */

    var dateFormat = function () {
        var    token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
            timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
            timezoneClip = /[^-+\dA-Z]/g,
            pad = function (val, len) {
                val = String(val);
                len = len || 2;
                while (val.length < len) val = "0" + val;
                return val;
            };

        // Regexes and supporting functions are cached through closure
        return function (date, mask, utc) {
            var dF = dateFormat;

            // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
            if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
                mask = date;
                date = undefined;
            }

            // Passing date through Date applies Date.parse, if necessary
            date = date ? new Date(date) : new Date;
            if (isNaN(date)) throw SyntaxError("invalid date");

            mask = String(dF.masks[mask] || mask || dF.masks["default"]);

            // Allow setting the utc argument via the mask
            if (mask.slice(0, 4) == "UTC:") {
                mask = mask.slice(4);
                utc = true;
            }

            var    _ = utc ? "getUTC" : "get",
                d = date[_ + "Date"](),
                D = date[_ + "Day"](),
                m = date[_ + "Month"](),
                y = date[_ + "FullYear"](),
                H = date[_ + "Hours"](),
                M = date[_ + "Minutes"](),
                s = date[_ + "Seconds"](),
                L = date[_ + "Milliseconds"](),
                o = utc ? 0 : date.getTimezoneOffset(),
                flags = {
                    d:    d,
                    dd:   pad(d),
                    ddd:  dF.i18n.dayNames[D],
                    dddd: dF.i18n.dayNames[D + 7],
                    m:    m + 1,
                    mm:   pad(m + 1),
                    mmm:  dF.i18n.monthNames[m],
                    mmmm: dF.i18n.monthNames[m + 12],
                    yy:   String(y).slice(2),
                    yyyy: y,
                    h:    H % 12 || 12,
                    hh:   pad(H % 12 || 12),
                    H:    H,
                    HH:   pad(H),
                    M:    M,
                    MM:   pad(M),
                    s:    s,
                    ss:   pad(s),
                    l:    pad(L, 3),
                    L:    pad(L > 99 ? Math.round(L / 10) : L),
                    t:    H < 12 ? "a"  : "p",
                    tt:   H < 12 ? "am" : "pm",
                    T:    H < 12 ? "A"  : "P",
                    TT:   H < 12 ? "AM" : "PM",
                    Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                    o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                    S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
                };

            return mask.replace(token, function ($0) {
                return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
            });
        };
    }();

    // Some common format strings
    dateFormat.masks = {
        "default":      "ddd mmm dd yyyy HH:MM:ss",
        shortDate:      "m/d/yy",
        mediumDate:     "mmm d, yyyy",
        longDate:       "mmmm d, yyyy",
        fullDate:       "dddd, mmmm d, yyyy",
        shortTime:      "h:MM TT",
        mediumTime:     "h:MM:ss TT",
        longTime:       "h:MM:ss TT Z",
        isoDate:        "yyyy-mm-dd",
        isoTime:        "HH:MM:ss",
        isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
        isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
    };

    // Internationalization strings
    dateFormat.i18n = {
        dayNames: [
            "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        monthNames: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ]
    };

    // For convenience...
    Date.gmod=function(n,m){
    	return ((n%m)+m)%m;
    	}

    Date.kuwaiticalendar=function(adjust){
    	var today = new Date();
    	if(adjust) {
    	    adjustmili = 1000*60*60*24*adjust;
    	    todaymili = today.getTime()+adjustmili;
    	    today = new Date(todaymili);
    	}
    	day = today.getDate();
    	month = today.getMonth();
    	year = today.getFullYear();
    	m = month+1;
    	y = year;
    	if(m<3) {
    	    y -= 1;
    	    m += 12;
    	}

    	a = Math.floor(y/100.);
    	b = 2-a+Math.floor(a/4.);
    	if(y<1583) b = 0;
    	if(y==1582) {
    	    if(m>10)  b = -10;
    	    if(m==10) {
    	        b = 0;
    	        if(day>4) b = -10;
    	    }
    	}

    	jd = Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+day+b-1524;

    	b = 0;
    	if(jd>2299160){
    	    a = Math.floor((jd-1867216.25)/36524.25);
    	    b = 1+a-Math.floor(a/4.);
    	}
    	bb = jd+b+1524;
    	cc = Math.floor((bb-122.1)/365.25);
    	dd = Math.floor(365.25*cc);
    	ee = Math.floor((bb-dd)/30.6001);
    	day =(bb-dd)-Math.floor(30.6001*ee);
    	month = ee-1;
    	if(ee>13) {
    	    cc += 1;
    	    month = ee-13;
    	}
    	year = cc-4716;


    	wd = Date.gmod(jd+1,7)+1;

    	iyear = 10631./30.;
    	epochastro = 1948084;
    	epochcivil = 1948085;

    	shift1 = 8.01/60.;

    	z = jd-epochastro;
    	cyc = Math.floor(z/10631.);
    	z = z-10631*cyc;
    	j = Math.floor((z-shift1)/iyear);
    	iy = 30*cyc+j;
    	z = z-Math.floor(j*iyear+shift1);
    	im = Math.floor((z+28.5001)/29.5);
    	if(im==13) im = 12;
    	id = z-Math.floor(29.5001*im-29);

    	var myRes = new Array(8);

    	myRes[0] = day; //calculated day (CE)
    	myRes[1] = month-1; //calculated month (CE)
    	myRes[2] = year; //calculated year (CE)
    	myRes[3] = jd-1; //julian day number
    	myRes[4] = wd-1; //weekday number
    	myRes[5] = id; //islamic date
    	myRes[6] = im-1; //islamic month
    	myRes[7] = iy; //islamic year

    	return myRes;
    	}
    	Date.writeIslamicDate=function(adjustment) {
    	var wdNames = new Array("Ahad","Ithnin","Thulatha","Arbaa","Khams","Jumuah","Sabt");
    	var iMonthNames = new Array("Muharram","Safar","Rabi'ul Awwal","Rabi'ul Akhir",
    	"Jumadal Ula","Jumadal Akhira","Rajab","Sha'ban",
    	"Ramadan","Shawwal","Dhul Qa'ada","Dhul Hijja");
    	var iDate = Date.kuwaiticalendar(adjustment);
    	var outputIslamicDate = wdNames[iDate[4]] + ", "
    	+ iDate[5] + " " + iMonthNames[iDate[6]] + " " + iDate[7] + " AH";
    	return outputIslamicDate;
    	}
    Date.prototype.format = function (mask, utc) {
        return dateFormat(this, mask, utc);
    };

    Date.prototype.next=function(arr,target){

		var indx=-1;
		if(!target){
			arr.push(this)
		}else{
			var obj={};obj[target]=this;
			arr.push(obj)
		}

    	arr=arr.sort(function(a, b) {
    		if(!target){
    			 return a - b;
    		}else{
    			return a[target] - b[target]
    		}

    	});
    	if(!target){
    		indx=arr.indexOf(this)
    	}else{
    		indx=arr.map(function(e){return e.target}).indexOf(this)
    	}

    	if(indx+1==arr.length){
    		return arr[0]
    	}else{
    		return arr[indx+1]
    	}
    	};
		/**
		 * get duration between two dates (this & from ) in format
		 */
		Date.prototype.toHHMMSS=function(from){
			return (((this.getTime()-from.getTime())/1000)+"").toHHMMSS()
//			return (((from.getTime()-this.getTime())/1000)+"").toHHMMSS()
		};
		Date.prototype.clone=function(){
			return new Date(this.getTime());
		};
		/**
		 * new Date().range({times:12,period:7,format:'dd/mm/yyyy'})
		 *
		 * --> [new Date()-7*12,new Date()-7*11,....,new Date()-7,new Date()]
		 *
		 * @param options={times:Length of Range,period: between each two elements ,format:Date formatting,asc: True if this is the beginning ,unit:DAYS or MIN or MONTH or YEAR..}
		 */


		Date.prototype.range=function(options){
			var that=this;
			return (1)['..'](options.times).map(function(e,i){
				return that.addDays(-i*options.period).format(options.format)
			}).reverse();
		};
		Date.prototype.addHours = function(h) {
			   return new Date(this.getTime() + (h*60*60*1000));

		};
		Date.prototype.addDays = function(d) {
			return new Date(this.getTime()+(1000*60*60*24)*d);
		};

		Date.prototype.addWeeks = function(w) {
			return this.addDays(w*7);
		};
		Date.prototype.addMonths = function(m) {
			   this.setMonth( this.getMonth( ) + m )
			   return this;
		};
		Date.prototype.addYears = function(y) {
			this.setFullYear( this.getFullYear() + y )
			return this;
		};

		Date.prototype.daysNext=function(nb){
			if(!nb){nb=0};
			return  new Date(this.getTime() + (24 * 60 * 60 * 1000*nb));
		};
		Date.prototype.daysAgo=function(nb){
			if(!nb){nb=0};
			return  Date.daysNext(-1 *nb);
		};
		Date.prototype.tomorrow=function(){
			return  this.daysNext(1);
		};
		Date.prototype.yesterday=function(){
			return this.daysAgo(1);
		};
		Date.tomorrow=function(){
			return  Date.daysNext(1);
		};
		Date.yesterday=function(){
			return Date.daysAgo(1);
		};
		Date.daysNext=function(nb){
			if(!nb){nb=0};
			return  new Date(new Date().getTime() + (24 * 60 * 60 * 1000*nb));
		};
		Date.daysAgo=function(nb){
			if(!nb){nb=0};
			return  Date.daysNext(-1 *nb);
		};

		/*Hijri

		var DateGregorian=Date;
        var DateHejri={};
        DateHejri.common=[]
		function Date(){

		   return this;

		}
		for (var i=0;i<DateHejri.common.length;i++){
			Date.prototype[DateHejri.common[i]]=function(){
				return this[DateHejri.common[i].toLowerCase()]
			}
		}*/



/**
 * Example:

my = {};
my.namespaced = {};
(my.namespaced.MyClass = function() {
  console.log("constructed");
}).prototype = {
  do: function() {
    console.log("doing");
  }
};

var MyClass = stringToFunction("my.namespaced.MyClass");
var instance = new MyClass();
instance.do();
 */


		/**
		 * =======================================String Extends
		 */

		/** this=fileName or file path*/
               String.prototype.capitalize=function(all){
    			if(all){
       				return this.split(' ').map(function(e){return e.capitalize();}).join(' ');
    			}else{
         			return this.charAt(0).toUpperCase() + this.slice(1);
    			}
                }
		String.prototype.fileExtension=function(OS){
			 return this.substr((~-this.lastIndexOf(".") >>> 0) + 2);
		};
		/**
		 * Required jq
		 */
		String.prototype.urlReady=function(fnsuccess,fnfail,moo7awalet){
			if(!moo7awalet && moo7awalet !=0){moo7awalet=10}
		    var exist=false;
		    var that=this;
		    $.ajax({
		    url:this,
		    type:'HEAD',
		    success:
		        function(){
		            if(typeof fnsuccess ==='function'){
		                  fnsuccess.call(that);
		              exist=true;
		             }

		        },
		    error:
		        function(){

		    	    if(moo7awalet>0){
		    	    	setTimeout(function(){that.urlReady(fnsuccess,fnfail,--moo7awalet)},150)
		    	    }else{
		    	    	if(typeof fnfail ==='function'){
			                  fnfail.call(that);
			             }
		    	    }

		        }
		   });
		   return exist;

		};
		/**
		 * Used as following:
		 *"http://myexample.com/ff?a=1&b=3&y=kiki".urlParams() ==> {a:1,b:3,y:'kiki'}
		 *"http://myexample.com/ff?a=1&b=3&y=kiki".urlParams('y') ==> 'kiki'
		 *"http://myexample.com/ff?a=1&b=3&y=kiki".urlParams('a',99) ==> http://myexample.com/ff?a=99&b=3&y=kiki

		 */

		String.prototype.urlParams=function(param,val){
			var urlParams;
			var newUrl='';
			 var a=$('<a />').attr('href',this)[0];
			 var match,
		        pl     = /\+/g,  // Regex for replacing addition symbol with a space
		        search = /([^&=]+)=?([^&]*)/g,
		        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
		        query  =a.search.substring(1);

		    urlParams = {};
		    while (match = search.exec(query))
		       urlParams[decode(match[1])] = decode(match[2]);


		    if(!param && !val){
		    	return urlParams
		    }else if(param && !val){
		        return 	urlParams[param]
		    }else{
		    	urlParams[param]=val;
		    	var arr=[];
		    	for(var p in urlParams){
		    		arr.push(encodeURIComponent(p)+'='+encodeURIComponent(urlParams[p]))
		    	}
		    	if(arr.length>0){newUrl='?'+arr.join('&');}

		    	return a.origin+a.pathname+newUrl;
		    }


		};
		 String.prototype.urlPrasing=function(){

		       var a=$('<a />').attr('href',this)[0];
		        var org=a.protocol+'//'+a.hostname;if(a.port.length>0){org=org+':'+a.port};
		        var params=this.urlParams();

		       return {host: a.host,hostname: a.hostname, pathname: a.pathname, port: a.port, protocol: a.protocol, search: a.search, hash: a.hash, origin: org,params:params};

		    };
		    String.prototype.urlParsing= String.prototype.urlPrasing;

		String.prototype.toHHMMSS = function () {
		    var sec_num = parseInt(this, 10); // don't forget the second parm
		    var hours   = Math.floor(sec_num / 3600);
		    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
		    var seconds = sec_num - (hours * 3600) - (minutes * 60);
		    if (hours   < 10) {hours   = "0"+hours;}
		    if (minutes < 10) {minutes = "0"+minutes;}
		    if (seconds < 10) {seconds = "0"+seconds;}
		    var time    = hours+':'+minutes+':'+seconds;
		    return time;
		}



String.prototype.toFunction=function(){
	 var arr = this.split(".");

	  var fn = (window || this);
	  for (var i = 0, len = arr.length; i < len; i++) {
	    fn = fn[arr[i]];
	  }

	  if (typeof fn !== "function") {
	    throw new Error("function not found");
	  }

	  return  fn;

};
String.equalIfNull=function(e,v){
	if(e){
		return e;
	}else{
		return v;
	}
};

String.prototype.linkify=function () {
    //URLs starting with http://, https://, or ftp://
    var replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    var replacedText = this.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    //URLs starting with www. (without // before it, or it'd re-link the ones done above)
    var replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    var replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

    //Change email addresses to mailto:: links
    var replacePattern3 = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;
    var replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    return replacedText
};

String.prototype.passwordColor=function(){
	var mp={Secure:'#008000',Strong:'#006000',good:'#e3cb00',weak:'#Fe3d1a'};
	return mp[this.passwordSecurity()];
};
String.prototype.passwordSecurity=function(){

	   var score = this.passwordScore();
	   if (score >= 90)
		    return "Secure"
	    if (score > 80)
	        return "Strong";
	    if (score > 60)
	        return "good";
	    if (score >= 30)
	        return "weak";

	    return "";
}
String.prototype.passwordScore=function(){
	 var score = 0;
	    if (!this)
	        return score;

	    // award every unique letter until 5 repetitions
	    var letters = new Object();
	    for (var i=0; i<this.length; i++) {
	        letters[this[i]] = (letters[this[i]] || 0) + 1;
	        score += 5.0 / letters[this[i]];
	    }

	    // bonus points for mixing it up
	    var variations = {
	        digits: /\d/.test(this),
	        lower: /[a-z]/.test(this),
	        upper: /[A-Z]/.test(this),
	        nonWords: /\W/.test(this),
	    }

	    variationCount = 0;
	    for (var check in variations) {
	        variationCount += (variations[check] == true) ? 1 : 0;
	    }
	    score += (variationCount - 1) * 10;

	    return parseInt(score);

};

String.prototype.toDate=function(delimitDate,delimitTime){
	var mapmth={"1":"01",'01':"01","jan":"01"};
	var mapdy={}
	if(!delimitDate){
		delimitDate='/';
	}
	if(!delimitTime){
		delimitTime=':';
	};

	var parts = this.reduceWhiteSpace().match(new RegExp( "(\\d{4})" + delimitDate + "(\\d{2})" + delimitDate + "(\\d{2}) (\\d{2})"+delimitTime+"(\\d{2})"+delimitTime+"(\\d{2})" ));

	if(!parts){
		var mth,day,h,m,s,tmp;
		if(this.noSpace().length === 8+2*delimitDate.length){
			//this = this.noSpace()+' 00:00:00';
		}
	   parts = this.reduceWhiteSpace().match(new RegExp( "(\\d{2})" + delimitDate + "(\\d{2})" + delimitDate + "(\\d{4}) (\\d{2})"+delimitTime+"(\\d{2})"+delimitTime+"(\\d{2})" ));
	   if(parts){
		   s=parts[6];m=parts[5];h=parts[4];day=parts[2];mth=parts[1];
		  s=String.equalIfNull(s,'00');h=String.equalIfNull(h,'00');m=String.equalIfNull(m,'00');
		  (s)?s=s:s='00';
		  if(isFinite(mth)){
			  if(parseInt((mth),10)>12){
				   if(isFinite(day)){
					   if(parseInt((day),10)>12){
						   mth="12"
					   }else{
						   tmp=mth;
						   mth=day;
						   day=tmp;
					   }
				   }else{
					   //When day : Ethnein,monday...
				   }

			   }
		  }else{

			  //when moth under format: Jan,June,mars,march...
		  }


		   return new Date(mth+"/"+day+'/'+parts[3]+' '+h+':'+m+':'+s);
	   }else{
		   return new Date();
	   }

	}else{
		 return new Date( Date.UTC(
			      parseInt( parts[1] )
			    , parseInt( parts[2], 10 ) - 1
			    , parseInt( parts[3], 10 )
			    , parseInt( parts[4], 10 )
			    , parseInt( parts[5], 10 )
			    , parseInt( parts[6], 10 )
			    , 0
			  ));

	}
}

String.prototype.toInstance=function(){
	var fnClass=this.toFunction();
	if(fnClass){
		return new fnClass();
	}else{
		return new Object();
	}

}
/**
 * Demo :http://jsfiddle.net/abdennour/wzmS6/
 */

String.prototype.strRight=function(seperator)    {
    //stringValue
    var pos=this.lastIndexOf(seperator);
    var result=this.substring(pos+seperator.length,this.length)
    return result;
};
/**
 * DEMO: http://jsfiddle.net/abdennour/wzmS6/
 */
String.prototype.strLeft=function(seperator)    {
    //stringValue
    var pos=this.indexOf(seperator);
    var result=this.substring(0,pos)
    return result;
};
/**
 * DEMO:http://jsfiddle.net/abdennour/wzmS6/
 */
String.prototype.strCenter=function(seperatorRight,seperatorLeft)    {

    return this.strRight(seperatorRight).strLeft(seperatorLeft);

};

String.prototype.noSpace = function() {
    return this.replace(/\s+/g, '');
};

String.prototype.noParenthesesInner=function(parenthesesAlso){

	return this.replace(/ *\([^)]*\) */g, "");
}
String.prototype.replaceAll = function(str1, str2, ignore)
{
	return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
};
String.prototype.reduceWhiteSpace = function() {
    return this.replace(/\s+/g, ' ').replace(/^ /,'').replace(/ $/,'');
};

String.prototype.belongTo=function(bigString){

	return bigString.indexOf(this) !==-1;
};
String.prototype.toInt=function(){
	var df=parseInt(this.replace(/\D/g, ''),10);
	if(df === NaN){
		df=this.toASCII();
	}
	return df;
};
String.prototype.toASCII=function(i){
	if(i){
		return this.charCodeAt(i)
	}
	return this.split('').map(function(c){return c.charCodeAt(0)})
};
/**
 * override indexOf
 *  http://stackoverflow.com/a/26827953/747579
 *
[2,4,5].indexOf(4) ;//OUTPUT 1

 [{slm:2},{slm:4},{slm:5}].indexOf(4,'slm');//OUTPUT 1
 //OR
 [{slm:2},{slm:4},{slm:5}].indexOf(4,function(e,i){
   return e.slm;
});//OUTPUT 1

[{slm:{salat:2}},{slm:{salat:4}},{slm:{salat:5}}].indexOf(4,function(e,i){
   return e.slm.salat;
});//OUTPUT 1
 */
Array.prototype.indexOfOld=Array.prototype.indexOf

Array.prototype.indexOf=function(e,fn){
  if(!fn){return this.indexOfOld(e)}
  else{
   if(typeof fn ==='string'){var att=fn;fn=function(e){return e[att];}}
    return this.map(fn).indexOfOld(e);
  }
};
Array.prototype.clone=function(){
	var arr=[];
	this.forEach(function(e){arr.push(e)});
	return arr;
};

Array.prototype.ASCII=function(){
	var s=''
	eval('s=String.fromCharCode('+this.join(',')+')');
	return s;
};
String.prototype.toFloat=function(){
	return parseFloat(this);
};

String.prototype.jsonMapToObj=function(){
	var json=JSON.parse(this);
	var obj={};
	json=json.substr(1,json.length-2);
	return json.split(':').map(function(e,i){
		if(i%2===1){
		 return e.split(', ');
		}else{
			return e;
		}

	}).flatten().forEach(function(e,i){
		if(i%2===0){
			 // obj[e.substr(1,e.length-2)]=
			}else{

			}
	});
//	return obj;

}
String.prototype.toFloatx=function(){
	if(','.belongTo(this)){
		var t=this.replaceAll(',', '.').split('.');
		var tt=t;
		var ta=t.shift();
		for(var i=0;i<t.length;i++){t[i]=t[i].replace(/\D/g, '')};
		var news=ta.replace(/\D/g, '')+'.'+t.join('');
	return parseFloat(news,10);

	}else{
		return parseFloat(this,10);

	}

};

String.prototype.removeFirst=function(){
	return this.substr(1);
};
String.prototype.endsWith=function(suffix){
	return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
/**
 * 1 kiteb and 2 korrassa ==>3
 *  23 rrr 34 mm =>23+34=57
 */
String.prototype.sumInts=function(){
	var innts=this.match(/([0-9]+)/g),tmp=0;
	for(var i=0;i<innts.length;i++){
		tmp=tmp+parseInt(innts[i]);

	}
	return tmp;
}
String.prototype.finishWith=function(str){
	return this.endsWith(str);
};
String.prototype.isUrl=function() {
    return this.length < 2083 &&  new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i').test(this);
};
String.prototype.removeLast=function(ifLastEqualTo){
	if(!ifLastEqualTo){
		return this.substring(0, this.length - 1);
	}
	else{


			if(this.lastIndexOf(ifLastEqualTo)+ifLastEqualTo.length==this.length){
				return this.substring(0, this.length - 1);
			}else{
				return this.toString();
			}



	}
};

String.prototype.startsWith=function(str){
	return this.indexOf(str)===0;
};
String.prototype.separateStringNumber=function(){
	return this.match(/\D+|\d+/g)
}

String.prototype.numbers=function(){
	return this.separateStringNumber().filter(function(e){
		return isFinite(e);
	});
};

String.prototype.stripTags=function(){

	return this.replace(/(<([^>]+)>)/ig,'');
};

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
};

Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
};
/**
 * div
 */
String.prototype.removeByTagName=function(nme){
	if(!nme){
		nme='div'
	}
	if(nme instanceof Array){
		var tmpnme;
		for(var i=0;i<nme.length;i++){
			tmpnme=nme[i];

			this.replace(/<div\b[^<]*(?:(?!<\/div>)<[^<]*)*<\/div>/gi, "")
		}

	}
	nme=nme.toLowerCase();

	return this.replace(/<div\b[^<]*(?:(?!<\/div>)<[^<]*)*<\/div>/gi, "")
};

String.prototype.contains=function(sub){
	return this.indexOf(sub)!==-1
};
String.prototype.capitalize=function(all){
    if(all){
       return this.split(' ').map(function(e){return e.capitalize();}).join(' ');
    }else{
         return this.charAt(0).toUpperCase() + this.slice(1);
    }
}
/**
 * Extension of Array Class
 */
Array.prototype.flatten = function(t) {
    if (t) {
        if (this.length > 0) {

            var head = this[0];
            if(head instanceof Array){head=head.flatten(true)}else{head=[head]}
            var tail = this.slice(1);

            return head.concat(tail.flatten(true));
        } else {
            return [].concat(this);
        }
    } else {
      return  [].concat.apply([], this);
    }

};
Array.prototype.empty=function(){
	return this.length ===0
};
Array.prototype.isFinite=function(){
	return this.map(function(e){return isFinite(e)}).inject(true,function(a,b){return a && b;})
};
Array.prototype.first=function(){
	if(this.empty()){
		return null;
	}
	return this[0];
};

Array.prototype.last=function(){
	if(this.empty()){
		return null;
	}
	return this[this.length-1]
};
Array.prototype.noSpace=function(){
	return this.map(function(e){return e.noSpace();});
};
Array.prototype.parseInt=function(){
	return this.map(function(e){return parseInt(e)});
};
/**
 * @param first argument  => the index to start  pagination .
 * */
 Array.prototype.offset=function(os){
           return this.filter(function(e,i){return i> os-1 });
 };
/**
 * @param first argument exist => size of pagination
 * */
Array.prototype.max = function() {
	if(arguments.length){ var tmp=arguments[0];return this.filter(function(e,i){return i < tmp;}); }
	  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
	  return Math.min.apply(null, this);
};
Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};
Array.prototype.random=function(){
    if(this.length>=2){
       return Math.floor(Math.random()*(this[1]-this[0]+1)+this[0]);
     }

};
Array.prototype.unique = function() {
    var arr = [];
    for(var p in this.frequencies()) {
        if(p !=='all') {
            arr.push(p);
        }
    }
    return arr;
};
Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

Array.prototype.isEmpty=function(){
	return this.length===0
};
Array.prototype.isntEmpty=function(){
	return !this.isEmpty();
};
Array.prototype.average=function(){
	var sum=0;
	var j=0;
	for(var i=0;i<this.length;i++){
		if(isFinite(this[i])){
		  sum=sum+parseFloat(this[i]);
		  j++;
		}
	}
	if(j===0){
		return 0;
	}else{
		return sum/j;
	}

};
Array.prototype.pushunique=function(v){
	if(this.indexOf(v)==-1){
		return this.push(v);
	}else{
		return this.length;
	}
};
/**
 * ['a','b','c'].subarray(1,-1)
 *  >['b','c']
 *  ['a','b','c','d'].subarray(0,-3)
 *  >['a','b']
 */
Array.prototype.subarray=function(start,end){
	 if(!end){
         end=-1;
      }
	return this.slice(start, this.length+1-(end*-1));
}
/**
* ["aa","bb"]
>  '''<ul>
           <li>aa</li>
            <li>bb</li>
    </ul>'''
*/

Array.prototype.toHtmlUL=function(classUl,classLi,fn){
	var that=this;
	if(!fn){
		var
		fn=function(elArr,classlli,index){return '<li'+classlli+'>'+elArr+'</li>';};
	}
	var html="<ul";
	var tmp=[]
	if(!classUl){
		classUl="";
	}else{
		classUl=' class ="'+classUl+'" ';
	}
	if(!classLi){
		classLi="";
	}else{
		classLi=' class ="'+classLi+'" ';
	}
	html=html+classUl+'>';
	for(var i=0;i<this.length;i++){
		tmp.push(fn(this[i],classLi,i));
	}
	return html+tmp.join('\n')+'</ul>';
};
Array.prototype.tojQueryUL=function(attrsUL,fn){
	if(jQuery){
		var that=this;
		if(!fn){
			var
			fn=function(jqli,e,index){return $(jqli).html(e);};
		}
		var $ul=$('<ul />');
		if(jQuery.fn.attrs){
			$ul.attrs(attrsUL);
		}
		for(var i=0;i<this.length;i++){
			$ul.append(fn('<li />',this[i],i));
		}

		return $ul;
	}

};
/**
 * Counting occurences of Javascript array elements
 * EXAMPLE 1:
 * var freqs = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].frequencies();
    alert(freqs[2]); //=> 5
    EXAMPLE2:
    var freqs = '1,1,2,one,one,2,2,22,three,four,five,three,three,five'
             .split(',')
             .frequencies();
alert(freqs.three); //=> 3
 */
Array.prototype.frequencies = function() {
    var l = this.length, result = {all:[]};
    while (l--){
       result[this[l]] = result[this[l]] ? ++result[this[l]] : 1;
    }
    // all pairs (label, frequencies) to an array of arrays(2)
    for (var l in result){
       if (result.hasOwnProperty(l) && l !== 'all'){
          result.all.push([ l,result[l] ]);
       }
    }
    return result;
};
Array.prototype.clean=function(){
	var newArray = [];
    for(var index = 0; index < this.length; index++) {
        if(this[index]) {
            newArray.push(this[index]);
        }
    }
    return newArray;
};
Array.prototype.pluck=function(prop){
    return this.map(function(x) {
       return x[prop];
   })
};

/**
 * Array and GUI HTML.
 */
Array.prototype.prefixed=function(pref){
	  var tmp=[]
	  for(var i=0;i<this.length;i++){
	      tmp.push(pref+this[i]);
	   }
	   return tmp;
	 };
/**
 * Static methods of Array Class
 */
Array.asObject=function(obj){
	var newarr=[];
	var tmp;
	var objson=JSON.stringify(obj).removeFirst().removeLast().split(',');
	for(var i=0;i<objson.length;i++){
		tmp=objson[i].split(':');
		newarr[tmp[0].removeFirst().removeLast()]=tmp[1];
	}
	return newarr;
};
Array.prototype.inject=function(init,fnback){

	  var s=init,i=0;
     while(i<this.length){
  	   s=fnback.call(null,s,this[i]);
  	   i++;
     }
     return s;
};
Array.prototype.insert = function(index) {
    index = Math.min(index, this.length);
    arguments.length > 1
            && this.splice.apply(this, [index, 0].concat([].pop.call(arguments)))
            && this.insert.apply(this, arguments);
    return this;
};
/**
* i.e ; ["a","b"].toJsonWith(['1','2'])
*   ==> {a:1,b:2}
*/
Array.prototype.toJsonWith=function(arrayValues){
	console.log('{'+this.mapWithIndex(function(e,i){return '"'+e+'":"'+arrayValues[i]+'"';}	).join(',').replaceAll('"','\"')+'}')
  return JSON.parse('{'+this.mapWithIndex(function(e,i){return '"'+e+'":"'+arrayValues[i]+'"';}	).join(',').replaceAll('"','\"')+'}');
};
Array.prototype.mapWithIndex=function(fn){
	var toR=[];
	if(typeof fn==='function'){
		for(var i=0;i<this.length;i++){
			toR.push(fn.apply(null,[this[i],i]));
		}
		return toR;
	}else{
		return this;
	}


};

/**
 * Math API
 * */

 Math.tanDeg=function(deg) {
  	var rad = deg * Math.PI/180;
	 return Math.tan(rad);
};

HTMLCanvasElement.prototype.relMouseCoords = function (event) {
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;

    do {
        totalOffsetX += currentElement.offsetLeft;
        totalOffsetY += currentElement.offsetTop;
    }
    while (currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    // Fix for variable canvas width
    canvasX = Math.round( canvasX * (this.width / this.offsetWidth) );
    canvasY = Math.round( canvasY * (this.height / this.offsetHeight) );

    return {x:canvasX, y:canvasY}
}

/**
 * DocumentJsdk Extends Document
 */
Document.prototype.height=function() {
    var D = this;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
};



/**
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function ArrayList()
{
    this.aList = []; //initialize with an empty array
}

ArrayList.prototype.Count = function()
{
    return this.aList.length;
}
/**
 * It can have a second argument as callback : fn(currentArrayList,currentElementAdded)
 */
ArrayList.prototype.Add = function(object)
{
	var added=this.aList.push(object);
	if(typeof(arguments[1])==='function' ){
	       arguments[1](this,object);
       }
    return added; //Object are placed at the end of the array
}

ArrayList.prototype.GetAt = function(index) //Index must be a number
{
    if (index > -1 && index < this.aList.length)
        return this.aList[index];
    else
        return undefined; //Out of bound array, return undefined
}
ArrayList.prototype.GetLast=function ()
{
    return this.GetAt(this.aList[this.aList.length-1]);

}
ArrayList.prototype.Clear = function()
{
    this.aList = [];
}

ArrayList.prototype.RemoveAt = function(index) // index must be a number
{
    var m_count = this.aList.length;

    if (m_count > 0 && index > -1 && index < this.aList.length)
    {
        switch (index)
        {
            case 0:
                this.aList.shift();
                break;
            case m_count - 1:
                this.aList.pop();
                break;
            default:
                var head = this.aList.slice(0, index);
                var tail = this.aList.slice(index + 1);
                this.aList = head.concat(tail);
                break;
        }
    }
}

ArrayList.prototype.Insert = function(object, index)
{
    var m_count = this.aList.length;
    var m_returnValue = -1;

    if (index > -1 && index <= m_count)
    {
        switch (index)
        {
            case 0:
                this.aList.unshift(object);
                m_returnValue = 0;
                break;
            case m_count:
                this.aList.push(object);
                m_returnValue = m_count;
                break;
            default:
                var head = this.aList.slice(0, index - 1);
                var tail = this.aList.slice(index);
                this.aList = this.aList.concat(tail.unshift(object));
                m_returnValue = index;
                break;
        }
    }

    return m_returnValue;
}

ArrayList.prototype.IndexOf = function(object, startIndex)
{
    var m_count = this.aList.length;
    var m_returnValue = -1;

    if (startIndex > -1 && startIndex < m_count)
    {
        var i = startIndex;

        while (i < m_count)
        {
            if (this.aList[i] == object)
            {
                m_returnValue = i;
                break;
            }

            i++;
        }
    }

    return m_returnValue;
}


ArrayList.prototype.LastIndexOf = function(object, startIndex)
{
    var m_count = this.aList.length;
    var m_returnValue = -1;

    if (startIndex > -1 && startIndex < m_count)
    {
        var i = m_count - 1;

        while (i >= startIndex)
        {
            if (this.aList[i] == object)
            {
                m_returnValue = i;
                break;
            }

            i--;
        }
    }

    return m_returnValue;
}

ArrayList.prototype.Replace=function(obj,index){
	this.Insert(obj,index);this.RemoveAt(index+1)
};
ArrayList.prototype.merge=function(){
	var tmp=this;
	for(var i=0;i<arguments.length;i++){
		if(arguments[i] instanceof ArrayList){
			for(var j=0;j<arguments[i].Count();j++){
				tmp.Add(arguments[i].GetAt(j));
			}

		}


	}
	return tmp;
};
ArrayList.parse=function(o,typeObject){
	var toReturn;
	if(typeof window[typeObject] !='function' ){
		typeObject="Object";
	}
	//it'is arrayList
	toReturn=new ArrayList();
    if(o.aList instanceof Array ){


		if(o.aList.length>0){
			for (property in o.aList) {
				var inst=typeObject.toInstance();
				inherits(o['aList'][property],inst);
				toReturn.Add(inst);

			}
		}

	}
    if(o instanceof Array){
    	toReturn.aList=o;
    }
    return toReturn;

};

Object.map=function(obj,fn){
	var oo={}
	Object.keys(obj).map(function(k, i) {
	    	oo[k] = fn.call(obj,obj[k]);
		});
     return oo;
};

/**
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function Observer()
{
    this.Update = function()
    {
        return;
    }
}


function Subject()
{
    this.observers = new ArrayList();
}

Subject.prototype.Notify = function(context)
{
    var m_count = this.observers.Count();

    for (var i = 0; i < m_count; i++)
        this.observers.GetAt(i).Update(context);
}

Subject.prototype.AddObserver = function(observer)
{
    if (!observer.Update)
        throw 'Wrong parameter';

    this.observers.Add(observer);
}

Subject.prototype.RemoveObserver = function(observer)
{
    if (!observer.Update)
        throw 'Wrong parameter';

    this.observers.RemoveAt(this.observers.IndexOf(observer, 0));
}


/**
 * @author Ã˜Â¹Ã˜Â¨Ã˜Â¯ Ã˜Â§Ã™â€žÃ™â€ Ã™Ë†Ã˜Â± Ã˜Â§Ã™â€žÃ˜ÂªÃ™Ë†Ã™â€¦Ã™Å  Abdennour
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function Filex(id,fileHtmllement,userid,indexfile){
    if(arguments.length===3){
        indexfile=0;
    }
    this.id=id;
    this.realname=fileHtmllement.files[indexfile].name;
    this.name=naming(fileHtmllement.files[indexfile].name);
    this.dateadded=new Date();
    //$('input:file').get(0).files[0].lastModifiedDate
    this.lastmodify=fileHtmllement.files[indexfile].lastModifiedDate;
    this.size=fileHtmllement.files[indexfile].size;
    this.mimetype=fileHtmllement.files[indexfile].size;
    this.ownerid=userid;
    this.tags=new ArrayList();
    return this;

}


Filex.prototype.getTagAt=function(index){
    return this.tags.GetAt(index);
}


 Filex.prototype.addTag =function(tag){
       this.tags.Add(tag);
         return this;
}
 Filex.prototype.removeTag =function(index){
       this.tags.RemoveAt(index);
         return this;
}
Filex.prototype.hasTag=function(tagnn){
    var test=false;
    _.each(_.pluck(this.tags.aList,'tagname'),function(e){
         if(e===tagnn){
              test=true;
        }})
    return test;
}
function Tagx(id,tagname,tagdate){
     this.id=id;
    this.tagname=tagname;
    this.tagdate=tagdate;
    return this;
}

function FilexMock(id,name,userid){

    this.id=id;
    this.realname="real"+name;
    this.name="virtual"+name;
    this.dateadded=new Date();
    //$('input:file').get(0).files[0].lastModifiedDate
    this.lastmodify=new Date()
    this.size=1500+userid
    this.mimetype="image/jpeg"
    this.ownerid=userid;
    this.tags=new ArrayList();
    return this;

}
 FilexMock.prototype.addTag =function(tag){
       this.tags.Add(tag);
         return this;
}
 FilexMock.prototype.removeTag =function(index){
       this.tags.RemoveAt(index);
         return this;
}

FilexMock.prototype.hasTag=function(tagnn){
    var test=false;
    _.each(_.pluck(this.tags.aList,'tagname'),function(e){
         if(e===tagnn){
              test=true;
        }})
    return test;
}
function UserRepository(id){

    this.id=id;
    this.filexs=new ArrayList();
    return this;
}

UserRepository.prototype.addFilex=function (flx){

    this.filexs.Add(flx);
    return this;

}

UserRepository.prototype.getFolders=function(){
    var tagsUser=[];
    for(var i=0;i<this.filexs.Count();i++){
        tagsUser=_.union(tagsUser,_.toArray(this.filexs.GetAt(i).tags))
    }
      tagsUser=_.uniq(_.flatten(tagsUser));

    return tagsUser;
    /*
      _.map([1, 2, 3], function(num){ return num * 3; });
     _.contains([1, 2, 3], 3);
    _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
//=> [[1, 5, 7], [1, 2, 3]]
_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
//=> [1, 2, 3, 101, 10]
_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
//=> [1, 2]
    */
}

UserRepository.prototype.getFoldersProperty=function (propf){
    return _.pluck(this.getFolders(),propf)
}
UserRepository.prototype.getFilexSameTag=function(tagname){
    var zz=_.toArray(this.filexs)
    //_.each(_.pluck(_.flatten(zz),'tags'),function(elem){console.log(elem+" "+_.contains(_.pluck(_.flatten(_.toArray(elem)),'tagname'),'2.physique'))})
    //_.each(_.toArray(zz),function(qq){_.each(_.pluck(_.flatten(qq),'tags'),function(elem){_.each(_.pluck(elem.aList,'tagname'),function(sube){console.log(sube)});  })});
    var proxy=[];
    for(var i=0;i<zz[0].length;i++){
        if(zz[0][i].hasTag(tagname)){
            proxy.push(zz[0][i])
        }
    }
    return proxy;

}







function naming(realname){

    return new Date().getTime()+realname;
}
//Media library


function PanelMediaLibTemplate(paneltype,containerclass){
    this.paneltype=paneltype;
    //medialibrary uploaded |
    //medialibrary uploadedfolder
    this.containerclass=containerclass;
    return this;
}


UserRepository.fullTest=function (){
    var REPO=getStaticRepository();
    console.log('Get All folder') ;
   var all=REPO.getFolders();
   _.each(all,function(elem){console.log(elem)});

   console.log('GetFolderName');
   var allname=REPO.getFoldersProperty('tagname');
   _.each(allname,function(elem){console.log(elem)})

   console.log('Get FolderDate')
   var alldate=REPO.getFoldersProperty('tagdate');
   _.each(alldate,function(elem){console.log(elem)})
    return REPO;
}

getStaticRepository=function(){

    var f1=new FilexMock(1,"1.equationdiffrentielle.png",2),f2=new FilexMock(2,"2.math.png",2),f3=new FilexMock(3,"3.grafcet.png",2),f4=new FilexMock(4,"4.png",2)
    var t1math=new Tagx(11,"1.math",new Date()),t2phy=new Tagx(22,"2.physique",new Date());

    f1.addTag(t1math);f2.addTag(t1math);f3.addTag(t1math);f4.addTag(t1math);f4.addTag(t2phy);
   var REPO=new UserRepository(2);REPO.addFilex(f1).addFilex(f2).addFilex(f3).addFilex(f4);
   return REPO;
}









/**
*  JsDK MediaLibrary
*  @param owner can be 'estifeda','proxym-it,....'
*  it is useful for jQuizFactory Plugin to test if it can integrate this editor
**/

function MediaLibrary(owner,commonUri){
	this.owner=owner.toLocaleLowerCase();
	(commonUri)?(this.commonUri=commonUri):(this.commonUri='/');
	return this;
}
/**
 * JsDK Editor Course
 * @param  owner can be 'tinyMCE,ckeditor,....' alll WYSIWYM editor . it is useful for jQuizFactory Plugin to test if it can integrate this editor
 * @param jQtag  it is jquery object to specifiy where it is your editor in DOM tree . Example : $('textarea.tinymce')
 */

function CourseEditor(owner,jQtag){
	(owner)?(this.owner=owner.toLocaleLowerCase()):(this.owner='tinymce');
	this.jQtag=jQtag
	return this

}
/**
 *@see Use methodsJQuizFactory.navigatorsayswho()
 *
 */
function Browser(name,version){
	this.name=name;
	this.version=version;
	return this;
};


window[companyAPIName].enableLog=true;
window[companyAPIName].log=function(obj){
	if(window[companyAPIName].enableLog){
		console.log(obj);

	}

};
_00_={};
spl={};
(function(doc,win){
	_00_=function(a,b,c){
		this.platform=a;
		this.baseURL=b;
		this.__=c;
		return this;

	}
	_00_.prototype.bind=function(){
		//for(spl)
	};
	_00_.prototype.grails=function(){
		//for(spl)
	};
	_00_.prototype.bindtab=function(tabshead,ii,clActive){
		var that=this;

		if(!ii){ii=0};
		if(!clActive){clActive='active'};
		var bodies=tabshead.toArray().map(function(e){return $(e).attr('spl-tab').split('|')[0]}).join(',');
		tabshead.each(function(i,e){
			var valtab=$(e).attr('spl-tab'),piped=valtab.contains('|');
			if(!piped){
				if(i===ii){$(valtab).show();$(e).addClass(clActive);}
				else{$(valtab).hide();$(e).removeClass(clActive);}
			}

			$(e).click(function(evt){
				var val=$(this).attr('spl-tab');
				if(val.contains('|')){
					_00_.cmdpiped.call($(val.split('|')[0]),val,bodies);
				}else{
					$(val).show();
					$(bodies).hide();
				}


				tabshead.removeClass(clActive);
				$(this).addClass(clActive);

			});
		});
	};
	_00_.prototype.autobindtab=function(){
		var tabsHead=$('[spl-tab]');
		tabsHead=tabsHead.grpdbyparents();

		var that=this;
	     for(p in tabsHead){
	         that.bindtab($('[spl-tab]',$(tabsHead[p])))
	     };



	};
	/**
	 * if called on tabHead click, this= body of tab &  ctx=bodies
	 *
	 */
	_00_.cmdpiped=function(cmd,ctx){
		var jqfn=['show','scrollTo'];
	    var parts=cmd.split("|");
	    if(parts[1].contains('show')){$(this).show();$(ctx).hide()}
	    else if(parts[1].contains('scroll')){
	    	$('html, body').animate({
	    	    scrollTop:$(this).offset().top
	    	}, 2000);
	    	//$('body').scrollTo($(this));
	    	}
	    else{eval(parts[1]);}
	};
       /**
       *  spl-listen attr
       */
       _00_.prototype.bindlisteners=function(update){
              if(!update){update=300;}

                 var thspl=this;
                thspl.update= update;

               $('[spl-listen]').each(function(e){
                     var $th=$(this);
                    thspl.$th=$th;
                    thspl.bindlistener();

                });
        };
        _00_.prototype.bindlistener=function(){
                  var $th=this.$th;

                  var mp=['TEXTAREA','INPUT']
                  var $fn='html';
                    if(mp.contains($th[0].tagName)){
                         $fn='val';
                    }
                    var initVal=$th[$fn]();
                    setInterval(function(){
                            var vl=eval($th.attr('spl-listen')),strategy=$th.attr('spl-mode');
                               if(strategy){
                                     if(strategy === 'prepend'){
                                          vl=vl+initVal;
                                     }else if(strategy === 'append'){
                                         vl=initVal+vl;
                                     }else{
                                         vl=eval(strategy+'.call(vl)')
                                     }
                               }
                            $th[$fn](vl);
                        },this.update);

        };
        _00_.prototype.openWindow=function(url){

        	 var win = window.open(url, '_blank');
        	  win.focus();
        };
        _00_.prototype.runPassword=function(){
        	this.securityPassword();
        	this.confirmPassword();
        }
        /**
         *  @required spl-pwd2
         *  @optional  spl-console
         *
         *
         *  */

        _00_.prototype.confirmPassword=function(){
        	var fn=function(i,e){
        		// var sister=$(e).attr('.spl-pwd2');
        		// sister=$(sister);
        		var consle=$(e).attr('spl-console');
        		if(!consle)
        		{
        			$('<span class="spl pwdconsole" style="color:red;"></span>').insertAfter($(e));
        			$(e).attr('spl-console',$(e).next('.pwdconsole').fullselector())

        		}

        	};
        	$('[spl-pwd2]').each(fn);
        	$('[spl-pwd2]').keyup(function(vt){
        		var $th=$(this)
        	     if($th.val() !== $($th.attr('spl-pwd2')).val().substr(0,$th.val().length) || $th.val().length> $($th.attr('spl-pwd2')).val().length ){
        	    	$($th.attr('spl-console')).html('The passwords do not match.');
        	     }else{
        	    	 $($th.attr('spl-console')).html('');
        	     }
        	});

        }
        /**
         *  @required spl-password
         *  @optional  spl-selector
         *  @optional  spl-template
         *   @optional  spl-selector (spl-console)
         *   @optional  spl-color is color
         *   @optional spl-data is remote {decision, color}
         */
        _00_.prototype.securityPassword=function(){

        	$('[spl-password=enable],[spl-pwd=enable]').each(function(i,e){

        		if(!$(e).attr('spl-console')){
        			$('<span class="splpwdsecurity" />').insertAfter($(e));
        			$(e).attr('spl-console',$(e).next(".splpwdsecurity").fullselector())

        		}



        	});
        	$('[spl-password=enable],[spl-password=audit]').on('keyup',function(vt){
        			var $th=$(this);


        		     var tmpl=$th.attr('spl-template');
        		     if(tmpl){
        		    	 $.get(tmpl,{},function(d){
        		    		//TODO

        		    	 });
        		     } else{
        		    	 var diplayer=$($th.attr('spl-console'));


        		    	 var dt=$th.attr('spl-data');
        		    	 var dtt={}

        		    	 if(dt){
        		    		 $.post(dt,{pwd:$th.val()},function(d){
        		    			 dtt=d;
        		    		 });
        		    	 }else{

        		    		 dtt.decision=$th.val().passwordSecurity();
        		    		 dtt.color=$th.val().passwordColor();
        		    	 }

        		    	 diplayer.html(dtt.decision).css('color',dtt.color);

        		     }
        		});



        };
        _00_.prettyTime=function(opts){
        	_00_.now=new Date();
        	_00_.TMP2=(_00_.now-this)/1000;
        	if(_00_.TMP2<60){
        		return 'Just now'
        	}else{
        		if(_00_.TMP2<3600){
        			return parseInt((_00_.TMP2/60))+' min'
        		}else{
        			if(_00_.TMP2<3600*24){
            			return parseInt((_00_.TMP2/3600))+' hrs'

        			}else{
        				_00_.TMPFORMAT='dd mmm';
        				if(_00_.now.getFullYear() !== this.getFullYear()){
        					_00_.TMPFORMAT='dd mmm, yyyy';

        				}
        				return this.format(_00_.TMPFORMAT)+' at '+this.format('hh:MM');

        			}
        		}
        	}
        };
        /**
         * <em spl-realtime="2015/01/31 04:28" spl-type="date"></em>
         *
         * <em spl-realtime="2015/01/31 04:28" spl-type="date" spl-cache="31">28 min</em>
         */
        _00_.prototype.realTime=function(jq,opts){
        	var that=this,defopts={formatter:_00_.prettyTime,lang:'en',calendar:'salibi'};
        	if(!opts){opts={}}
        	opts=$.extend({},defopts,opts);
        	if(jq){
        		 if(!isFinite(jq.attr('spl-cache'))){
          		   _00_.TMP=setInterval(function(){
              		  // jq.html(that.prettyTime());
              		   jq.html(opts.formatter.call(new Date(Date.parse(jq.attr('spl-realtime'))),opts))
              	   },1000);
          		   jq.attr('spl-cache',_00_.TMP);
          	   }
        	}else{
        		 _00_.todorealTime=function(){
        			$('[spl-realtime][spl-type=date]:not([spl-cache])').each(function(i,e){
               	      that.realTime($(e),opts);
               	    });
        		};
        		 _00_.todorealTime();
        		setInterval( _00_.todorealTime,2000);
        	};


        };
        /**
         * @required spl-radio
         * @optional spl-on ,spl-off
         */
        _00_.prototype.radiogroup=function(){

        	$(document).delegate('[spl-radio]','click',function(){
        		var broth=$('[spl-radio='+$(this).attr('spl-radio')+']'),off=$(this).attr('spl-off'),fn=$(this).attr('spl-fn');
        		broth.removeClass($(this).attr('spl-on') || 'active');
        		$(this).addClass($(this).attr('spl-on'));
        		if(off){

        			broth.addClass(off);
        			$(this).removeClass(off);

        		}
        		if(fn){
        			eval(fn);
        		}
        	});
        	//0500201030
        	if($('[spl-radio][href]').length>0 && location.hash.length>0){
        		$('[spl-radio][href='+location.hash+']').trigger('click');
        	}
        };
        _00_.htmlToImage=function(jqobj,fnback){
        	html2canvas(jqobj, {
                onrendered: function(canvas) {
                    theCanvas = canvas;
                   // document.body.appendChild(canvas);
                     if(typeof fnback==='function'){
                    	 fnback.call(canvas);
                     }
                    // Convert and download as image
                  //  Canvas2Image.saveAsPNG(canvas);
                    //$("#img-out").append(canvas);
                    // Clean up
                    //document.body.removeChild(canvas);
                }
            });
        };


        /**@dependencies ghdesk/js/../canvas2image.js https://github.com/hongru/canvas2image
         *@dependencies ghdesk/js/../html2canvas.js  https://github.com/niklasvh/html2canvas/releases/download/0.4.1/html2canvas.js
         *@dependencies ghdesk/js/../base64.js https://github.com/dankogai/js-base64
         *
         */
        _00_.prototype.htmlToImage=function(type){
        	$(document).delegate('[spl-'+type+']','click',function(){
        		if(type==='download'){
        			_00_.htmlToImage($($(this).attr('spl-download')),function(){
        				Canvas2Image.saveAsPNG(this);
        			});
        		}
        	});
        };
        /**
         *
         * @param ui
         * @param options ={width,height,extension,back} , back#this = img HTMLElememt, back#arg1 =url_img
         * @returns {String}
         */
        _00_.prototype.toImage=function(ui,options){
        	var def={extension:'png',onfinish:function(){}},that=this;
        	ui=$(ui);
        	if(!options){options={onfinish:function(){}}}
        	def.width=ui.width();
        	def.height=ui.height();
        	options=$.extend({},def,options);

        	if(ui[0].tagName ==='CANVAS'){
        		this.img=Canvas2Image.convertToImage(ui, options.width, options.height, options.extension);

        		options.onfinish.call(that.img,that.getAttribute('src'));
        	}else{
        		_00_.htmlToImage(ui,function(){
            		that.img=Canvas2Image.convertToImage(this, options.width, options.height, options.extension);
            		options.onfinish.call(that.img,that.getAttribute('src'));
        		});
        	}

        	return that.img;
        };
        /**
         * @required spl-valid-remote
         * @optional spl-params
         * @optional spl-onkeyup
         * @optional spl-onleave
         * @optional spl-baseURL , required if instance.baseURL is undefined
         *
         *  server should return [valid:true] or [valid:false]
         */
        _00_.prototype.validRemote=function(){
        	var that=this;
        	$(document).delegate('[spl-valid-remote]','keyup',function(){
        		var uri=$(this).attr('spl-valid-remote'),fnback=$(this).attr('spl-onkeyup'),bURL= $(this).attr('spl-baseURL') || that.baseURL
        		var name=$(this).attr('spl-params') || 'name';
        		var obj={};
        		obj[name]=$(this).val();
        		$.get(bURL+uri,obj,function(d){
        			if(fnback){
        				fnback.toFunction().call(this,d);
        			}
        		});



        	});
        	$(document).delegate('[spl-valid-remote]','blur',function(){
        		var fnback=$(this).attr('spl-onleave');

        		if(fnback){
    				fnback.toFunction().call(this);
    			}
        	});
        };


})(document,window);
spl=new _00_();
spl.getInstance=function(a,b,c){
	return new _00_(a,b,c);
};
setTimeout(function(){
	spl.autobindtab();
    spl.bindlisteners();
    spl.runPassword();
    spl.radiogroup();
    spl.validRemote();
    spl.realTime();
    spl.htmlToImage('download');
},1000);

spl.apiInstance=function(){return {};};
/**
 * @author Abdennour TOUMI To change this template, choose
 * Tools | Templates and open the template in the editor. @
 */
var grailscache = [];
var mthpathid={
		indexChildsametag:function(jqparent,jqchild){
			var j=-1;
			jqparent.children(jqchild.get(0).tagName.toLocaleLowerCase()).each(function(i,e){
				if($(e).id()===jqchild.id()){
					 j=i;
				}

			});
			return j;
		}

};
var methodsJQuizRTE={
		updatetitle:function(title,delimitor){
			var subtitle=title.split(delimitor);
			var ctn=$(this);
			var jt=0
			if(ctn.length===subtitle.length){
				ctn.each(function(i,e){$(e).html(subtitle[jt]);jt++})
			}

		},
      updatetitleinner:function(selector,title,delimitor){
	var subtitle=title.split(delimitor);
	var ctn=$(selector);
	var jt=0
	if(ctn.length===subtitle.length){
		ctn.each(function(i,e){$(e).html(subtitle[jt])})
	}
},
		init:function(options){
		    // var stgwinhtml='<div id="windowstage"><div id="lesson"> <iframe
			// src="" height="98%" width="99%"> </iframe></div><div
			// id="cmd"><div style="float:left"><input value="Check Answer"
			// id="check" type="button"></div><div style="float:right"><input
			// id="previous" value="&lt;&lt;" type="button"><inputid="next"
			// value="&gt;&gt;" type="button"></div></div></div>'
			// $(stgwinhtml).proxyDP('start','ever');
		    var ctn=$(this);
			var defau = {
					titleselector:'.dshisj',
					nextbtn : '#next',
					prevbtn : '#previous',
					checkbtn:'#check',
					socs : [],
					titles:[],
					fncorrect : function(){
						var tst=true;
						ctn.find('iframe').contents().find('.ad1200').each(function(i,e){if($(e).find('[name=__]').length==0){tst=tst &&(!$(e).next('tr').find(':checkbox').is(":checked"))}else{tst=tst && $(e).next('tr').find(':checkbox').is(":checked")}  })
						return tst;
					}
				};

			var extd = $.extend({}, defau, options);
			$.fn.jQuizRTEOptions=extd;
			ctn.find(extd['prevbtn']).hide();
			if(extd['scos'].length===1){
				ctn.find(extd['nextbtn']).hide();
			}
			ctn.delegate(extd['nextbtn'],'click',function(){
				if($.fn.jQuizRTEIncrument < extd['scos'].length ){
					ctn.find('iframe').attr('src',extd['scos'][$.fn.jQuizRTEIncrument]);
					methodsJQuizRTE.updatetitleinner(extd['titleselector'],extd['titles'][$.fn.jQuizRTEIncrument-1],'##')
					$.fn.jQuizRTEIncrument++;
					if($.fn.jQuizRTEIncrument===extd['scos'].length){
						$(this).hide();
					}
					if($.fn.jQuizRTEIncrument>0){
						ctn.find(extd['prevbtn']).show();
					}
				}


			})
			ctn.delegate(extd['prevbtn'],'click',function(){
				if($.fn.jQuizRTEIncrument > 0 ){
					ctn.find('iframe').attr('src',extd['scos'][$.fn.jQuizRTEIncrument]);
					methodsJQuizRTE.updatetitleinner(extd['titleselector'],extd['titles'][$.fn.jQuizRTEIncrument-1],'##');
					$.fn.jQuizRTEIncrument--;
					if($.fn.jQuizRTEIncrument===1){
						$(this).hide();
					}
					if($.fn.jQuizRTEIncrument<extd['scos'].length){
						ctn.find(extd['nextbtn']).show();
					}
				}


			})
			ctn.delegate(extd['checkbtn'],'click',function(){
				var tst=extd['fncorrect']();
				if(tst){
					tstmsg('suc','Good Answer')
				}else{
					tstmsg('err','Bad answer')
				}

			})
		}


}
var methodsJQuizFactory = {
     eachval:function(jqinput,delimiter){
    	 var acc=[];
    	 jqinput.each(function(i,e){
    		 acc=acc.push($(e).val());
    	 })
    	 return acc.join(delimiter);
     },
     deleteContentAsset:function(options,idasset){
    	 $.post(options['urldeletecontentasset'],{idasset:idasset,idq:options['belongsto']},function(d){
    		 if(d.success){}
    		 else{
    			 console.error(d.message)
    		 }
    	 })
     },
     saveContentAsset:function(options,idasset){
    	 $.post(options['urlsavecontentasset'],{idasset:idasset,idq:options['belongsto']},function(d){
    		 if(d.success){}
    		 else{
    			 console.error(d.message)
    		 }
    	 })
     },
	savegrails:function(qtype,options,nbitem){

		nbitem=parseInt(nbitem);
		var jqind=$('[name=indication]',$.fn.jQuizFactoryContainer).eq(nbitem-1);
		var jqqtyitem=$('input[name=qtyitem]',$.fn.jQuizFactoryContainer).eq(nbitem-1);
		var mirg=$('input[name=mirg]',$.fn.jQuizFactoryContainer).eq(nbitem-1).val();
		var mxrg=$('input[name=mxrg]',$.fn.jQuizFactoryContainer).eq(nbitem-1).val();
		var iditem=$('input[name=idqitem]',$.fn.jQuizFactoryContainer).eq(nbitem-1).val();
		if(iditem===''){
			iditem=0;
		}
		var cnt='';
		var iscorrect=$('[name=isCorrect]',$.fn.jQuizFactoryContainer).eq(nbitem-1).is(':checked');
			var idasset=null;
		if(jqqtyitem.val().split('_')[1]==='txt'){
			cnt= $('tr.ad'+nbitem+' [name=description]').val();
		}else{
			idasset= parseInt($('tr.ad'+nbitem+' input[name=itema]').val());
			methodsJQuizFactory.saveContentAsset(options,idasset);
		}
	    var params={idqi:iditem,idq:options['belongsto'],ordre:nbitem,qtyitem:jqqtyitem.val(),isit:iscorrect,content:cnt,indication:jqind.val(),idasset:idasset,mirg:parseInt(mirg),mxrg:parseInt(mxrg)};
	    $.post(options['urlsave'], params, function(data) {
	    	if(data.success){
	    		$('tr.ad'+nbitem+' input[name=idqitem]').val(data.newidqitem);
	    	}else{
	    		tstmsg('err','Question item does not persisted '+data.message);

	    	}

	    })

		// if(arguments.length===)
	},
	deletegrails:function(idqitem,jqthis,questiontype, template,options){
		if(idqitem !==''){
			$.post(options['urldelete'], {id:idqitem}, function(data) {
				if(data.success){
					methodsJQuizFactory.deleteOption(questiontype, template,
							jqthis);
					if(data.idasset){
						methodsJQuizFactory.deleteContentAsset(options,data.idasset);
					}
				}else{
					tstmsg('err','err .Refresh page again')
				}

		    })
		}else{
			methodsJQuizFactory.deleteOption(questiontype, template,
					jqthis);
		}



	},
	requiredsavelast : function(qtype, addBtn) {

		var maps = {
			matching : '',
			mcq : 'tr[class^=ad]:last>td:eq(2)',
			scq : ''
		};
		var maptxt = {
			matching : '',
			mcq : 'textarea',
			scq : ''
		}
		if ($(maps[qtype]).length == 0) {
			return {succ:true};
		} else {
			var asset= $(
					'img[src*=imageup],img[src*=audioup],img[src*=videoup]',
					$(maps[qtype]))
			var assetnb =asset.length;
			var txtval = $(maptxt[qtype], $(maps[qtype]))

			if (assetnb == 0) {

				if (txtval.length > 0) {
					if (txtval.val().length === 0) {
						// $(maps[qtype]).balloon({contents:'Add Image from
						// Media Library'})
						return {
							succ : false,
							msg : 'Add Text',
							jq : maps[qtype]
						};
					}
				} else {
					return {
						succ : true,
						msg : ''
					};

				}

			} else {

				// $(maps[qtype]).balloon({contents:'Add Image from Media
				// Library'})
				return {
					succ : false,
					msg : 'Add ' + asset[0].src.strCenter('/img/', 'up.')
							+ ' from Media Library',
					jq : maps[qtype]
				};
			}
			return {
				succ : true,
				msg : ''
			};
		}

	},
	spyinitML : function() {

	},
	initGRAILS:function(questiontype, template,options){
		var defau = {
				mode : 'create',
				urlsave : '/qitem/ajaxsave',
				urldelete : '/qitem/ajaxdelete',
				belongsto : 0,
				urlsavecontentasset:'/contentasset/ajaxsave',
				urldeletecontentasset:'ca/ajdelete'
			};
			var extd = $.extend({}, defau, options);
			return  methodsJQuizFactory['initGRAILS'+options['mode']](questiontype, template,options);
	},
	initGRAILScreate : function(questiontype, template,options) {
		$.fn.jQuizFactoryContainer.html('');
		var root = baseURL + 'libs/jtmpl';
		// Construction of Table
		// Construction of TFooter
		// Construction of Statement
		jQuery.get(root + '/tmplinit' + questiontype + 'template' + template
				+ '.gsp',
				function(data) {

					var subInc = 1;
					jQuery.template('compiledInit', data);
					jQuery.tmpl('compiledInit').appendTo(
							jQuery.fn.jQuizFactoryContainer);
					while (subInc < methodsJQuizFactory
							.countTemplate(questiontype) + 1) {
						methodsJQuizFactory.recompile(questiontype, subInc)
						subInc++;
					}

				});

		if (template === "all") {
			$('#subcontenttypecontainer').css('overflow', 'hidden')
			jQuery.fn.jQuizFactoryContainer.delegate('#btnaddmatching',
					'click', function() {
						// methodsJQuizFactory.addOption(questiontype,
						// template);
						var statelast = methodsJQuizFactory
								.requiredsavelast(questiontype);
						if (statelast['succ']) {
							$('table.tabqmatching tfoot>tr:eq(0)>td',
									$.fn.jQuizFactoryContainer).show(100)
							$(this).hide();
						} else {
							$(statelast['jq']).balloon({
								contents : statelast['msg'],css:{'background-color':'#c8081d','color':'white'}
							})
							setTimeout(function(){
								$(statelast['jq']).balloon({
									contents : ""
								})
							},10000)
							// alert('add Content to Last item or delete it ');

						}
					})
			jQuery.fn.jQuizFactoryContainer.delegate('div[id^=frame]', 'click',
					function() {
						// methodsJQuizFactory.addOption(questiontype,
						// template);
						methodsJQuizFactory.addOption(questiontype, $(this)
								.attr('id').replace(/^\D+/g, ''));

						$(this).parents('td').hide(500);
						$('#btnaddmatching').show(500);

						if($.fn.jQuizFactoryIncrument>1){
						 methodsJQuizFactory.savegrails(questiontype,options,$.fn.jQuizFactoryIncrument-1);

						}

					})
		} else {
			jQuery.fn.jQuizFactoryContainer.delegate('#btnaddmatching',
					'click', function() {
						methodsJQuizFactory.addOption(questiontype, template);
					})
		}

		jQuery.fn.jQuizFactoryContainer.delegate('img[src*=delete]', 'click',
				function() {

			   var idcurrent=$(this).parents('tr').find('input[name=idqitem]').val();
			   methodsJQuizFactory.deletegrails(idcurrent, $(this),questiontype, template,options);


				})
		jQuery.fn.jQuizFactoryContainer.delegate(
				'img[src*=imageup],img[src*=videoup],img[src*=audioup]',
				'click', function(e) {
					// $(this).next().trigger('click')
					// var currentUserId=parseInt(jQuery('[name*=user]').val())
					/**
					 * strCenter is an extension to String JS
					 *
					 * @see estifeda/js/JsDK/JsDK.js
					 */
					var expectedAssetType = e.target.src.strCenter('/img/',
							'up.')

					console.log(expectedAssetType)
					var $in = $(this).parents('td');
					var hiddenInput = $(this).prev('input')
					showMediaLibrary(function(asset) {
						var assetType = asset['contentType'].strLeft('/')
						console.log(asset)
						/**
						 * strLeft is an extension to String JS
						 *
						 * @see estifeda/js/JsDK/JsDK.js
						 */
						if (expectedAssetType === assetType) {
							if ("audio,video".indexOf(assetType) !== -1) {
								/*
								 * var msgCompatible=
								 * methodsJQuizFactory.compatible(methodsJQuizFactory.navigatorsayswho(),methodsJQuizFactory[asset['contentType'].strLeft('/')+'TagBrowser'](asset["contentType"].strRight("/")));
								 *
								 * if(msgCompatible!==0){ alert(msgCompatible); }
								 */
								hiddenInput.val(asset['id']);
								methodsJQuizFactory.addAsset($in, baseURL.substring(0, baseURL.length - 1)
										+ asset['uri'], asset['contentType']);
							} else {
								hiddenInput.val(asset['id']);
								methodsJQuizFactory.addAsset($in, baseURL.substring(0, baseURL.length - 1)
										+ asset['uri'], asset['contentType']);
							}

						} else {
							alert('You should Select ' + expectedAssetType
									+ ' file')
						}

					})
				})

	},
	initGRAILS:function(questiontype, template,options){
	// {:urlsvcaqz,urldeletecontentasset:urldltqz,nbqitems:qst.q.qitems.length,}
		var defau={};
		if(options['mode']==='create'){
				defau = {
						mode : 'create',
						urlsave : '/qitem/ajaxsave',
						urldelete : '/qitem/ajaxdelete',
						belongsto : 0,
						urlsavecontentasset:'/contentasset/ajaxsave',
						urldeletecontentasset:'ca/ajdelete'
					};
		}else{
			defau = {
					mode : 'edit',
					urlsave : '/qitem/ajaxsave',
					urldelete : '/qitem/ajaxdelete',
					belongsto : 0,
					urlsavecontentasset:'/contentasset/ajaxsave',
					urldeletecontentasset:'ca/ajdelete',
					nbqitems:0

				};

		}
		console.log(options)
			var extd = $.extend({}, defau, options);
		console.log(extd)
			return  methodsJQuizFactory['initGRAILS'+extd['mode']](questiontype, template,extd);
	},
	initGRAILSedit : function(questiontype, template,options) {
		console.log('options ')
		console.log(options)
		$.fn.jQuizFactoryIncrument=options['nbqitems']+1;
		var root = baseURL + 'libs/estifeda/jtmpl';
		// Construction of Table
		// Construction of TFooter
		// Construction of Statement

	       var subInc = 1;

		while (subInc < methodsJQuizFactory
							.countTemplate(questiontype) + 1) {
						methodsJQuizFactory.recompile(questiontype, subInc)
						subInc++;
		}



		if (template === "all") {
			$('#subcontenttypecontainer').css('overflow', 'hidden')
			jQuery.fn.jQuizFactoryContainer.delegate('#btnaddmatching',
					'click', function() {
						// methodsJQuizFactory.addOption(questiontype,
						// template);
						var statelast = methodsJQuizFactory
								.requiredsavelast(questiontype);
						if (statelast['succ']) {
							$('table.tabqmatching tfoot>tr:eq(0)>td',
									$.fn.jQuizFactoryContainer).show(100)
							         $(this).hide();
						} else {
							$(statelast['jq']).balloon({
								contents : statelast['msg'],css:{'background-color':'#c8081d','color':'white'}
							})
							setTimeout(function(){
								$(statelast['jq']).balloon({
									contents : ""
								})
							},10000)

						}
					})
			jQuery.fn.jQuizFactoryContainer.delegate('div[id^=frame]', 'click',
					function() {
						// methodsJQuizFactory.addOption(questiontype,
						// template);
						methodsJQuizFactory.addOption(questiontype, $(this)
								.attr('id').replace(/^\D+/g, ''));

						$(this).parents('td').hide(500);
						$('#btnaddmatching').show(500);

						if($.fn.jQuizFactoryIncrument>1){
						 methodsJQuizFactory.savegrails(questiontype,options,$.fn.jQuizFactoryIncrument-1);

						}

					})
		} else {
			jQuery.fn.jQuizFactoryContainer.delegate('#btnaddmatching',
					'click', function() {
						methodsJQuizFactory.addOption(questiontype, template);
					})
		}

		jQuery.fn.jQuizFactoryContainer.delegate('img[src*=delete]', 'click',
				function() {

			   var idcurrent=$(this).parents('tr').find('input[name=idqitem]').val();
			   methodsJQuizFactory.deletegrails(idcurrent, $(this),questiontype, template,options);


				})
		jQuery.fn.jQuizFactoryContainer.delegate(
				'img[src*=imageup],img[src*=videoup],img[src*=audioup]',
				'click', function(e) {
					// $(this).next().trigger('click')
					// var currentUserId=parseInt(jQuery('[name*=user]').val())
					/**
					 * strCenter is an extension to String JS
					 *
					 * @see estifeda/js/JsDK/JsDK.js
					 */
					var expectedAssetType = e.target.src.strCenter('/img/',
							'up.')

					console.log(expectedAssetType)
					var $in = $(this).parents('td');
					var hiddenInput = $(this).prev('input')
					showMediaLibrary(function(asset) {
						var assetType = asset['contentType'].strLeft('/')
						console.log(asset)
						/**
						 * strLeft is an extension to String JS
						 *
						 * @see estifeda/js/JsDK/JsDK.js
						 */
						if (expectedAssetType === assetType) {
							if ("audio,video".indexOf(assetType) !== -1) {
								/*
								 * var msgCompatible=
								 * methodsJQuizFactory.compatible(methodsJQuizFactory.navigatorsayswho(),methodsJQuizFactory[asset['contentType'].strLeft('/')+'TagBrowser'](asset["contentType"].strRight("/")));
								 *
								 * if(msgCompatible!==0){ alert(msgCompatible); }
								 */
								hiddenInput.val(asset['id']);
								methodsJQuizFactory.addAsset($in, baseURL.substring(0, baseURL.length - 1)
										+ asset['uri'], asset['contentType']);
							} else {
								hiddenInput.val(asset['id']);
								methodsJQuizFactory.addAsset($in, baseURL.substring(0, baseURL.length - 1)
										+ asset['uri'], asset['contentType']);
							}

						} else {
							alert('You should Select ' + expectedAssetType
									+ ' file')
						}

					})
				})

	},
	init : function(questiontype, template) {

		var root = baseURL + 'libs/estifeda/jtmpl';
		// Construction of Table
		// Construction of TFooter
		// Construction of Statement
		jQuery.get(root + '/tmplinit' + questiontype + 'template' + template
				+ '.gsp',
				function(data) {

					var subInc = 1;
					jQuery.template('compiledInit', data);
					jQuery.tmpl('compiledInit').appendTo(
							jQuery.fn.jQuizFactoryContainer);
					while (subInc < methodsJQuizFactory
							.countTemplate(questiontype) + 1) {
						methodsJQuizFactory.recompile(questiontype, subInc)
						subInc++;
					}

				})

		if (template === "all") {
			$('#subcontenttypecontainer').css('overflow', 'hidden')
			jQuery.fn.jQuizFactoryContainer.delegate('#btnaddmatching',
					'click', function() {
						// methodsJQuizFactory.addOption(questiontype,
						// template);
						$('table.tabqmatching tfoot>tr:eq(0)>td',
								$.fn.jQuizFactoryContainer).show(100)
						$(this).hide();
					})
			jQuery.fn.jQuizFactoryContainer.delegate('div[id^=frame]', 'click',
					function() {
						// methodsJQuizFactory.addOption(questiontype,
						// template);
						methodsJQuizFactory.addOption(questiontype, $(this)
								.attr('id').replace(/^\D+/g, ''));

						$(this).parents('td').hide(500);
						$('#btnaddmatching').show(500);
					})
		} else {
			jQuery.fn.jQuizFactoryContainer.delegate('#btnaddmatching',
					'click', function() {
						methodsJQuizFactory.addOption(questiontype, template);
					})
		}

		jQuery.fn.jQuizFactoryContainer.delegate('img[src*=delete]', 'click',
				function() {
					methodsJQuizFactory.deleteOption(questiontype, template,
							$(this));
				})
		jQuery.fn.jQuizFactoryContainer.delegate(
				'img[src*=imageup],img[src*=videoup]', 'click', function() {
					$(this).next().trigger('click')
				})

		jQuery.fn.jQuizFactoryContainer.delegate('input[type=file]', 'change',
				function(e) {
					var staticUpload = baseURL + "libs/estifeda/img/tmp/"
					var $in = $(this);
					console.log("val file input= "
							+ $in.val().replace(/C:\\fakepath\\/i, ''))
					console.log('type : ' + $in.get(0).files[0].type)
					methodsJQuizFactory.addAsset($in.parents('td'),
							staticUpload
									+ $in.val().replace(/C:\\fakepath\\/i, ''),
							$in.get(0).files[0].type)

					// var imm = $('<img>').attr('src', staticUpload +
					// $in.val().replace(/C:\\fakepath\\/i, ''))

					// $in.parents('td').html(imm);

				});

	},
	/**
	 * When JQuizFactory is integrated with MediaLibrary, Use the following
	 * method
	 */
	initML : function(questiontype, template) {

		var root = baseURL + 'libs/estifeda/jtmpl';
		// Construction of Table
		// Construction of TFooter
		// Construction of Statement
		jQuery.get(root + '/tmplinit' + questiontype + 'template' + template
				+ '.gsp',
				function(data) {

					var subInc = 1;
					jQuery.template('compiledInit', data);
					jQuery.tmpl('compiledInit').appendTo(
							jQuery.fn.jQuizFactoryContainer);
					while (subInc < methodsJQuizFactory
							.countTemplate(questiontype) + 1) {
						methodsJQuizFactory.recompile(questiontype, subInc)
						subInc++;
					}

				});

		if (template === "all") {
			$('#subcontenttypecontainer').css('overflow', 'hidden')
			jQuery.fn.jQuizFactoryContainer.delegate('#btnaddmatching',
					'click', function() {
						// methodsJQuizFactory.addOption(questiontype,
						// template);
						$('table.tabqmatching tfoot>tr:eq(0)>td',
								$.fn.jQuizFactoryContainer).show(100)
						$(this).hide();
					})
			jQuery.fn.jQuizFactoryContainer.delegate('div[id^=frame]', 'click',
					function() {
						// methodsJQuizFactory.addOption(questiontype,
						// template);
						methodsJQuizFactory.addOption(questiontype, $(this)
								.attr('id').replace(/^\D+/g, ''));

						$(this).parents('td').hide(500);
						$('#btnaddmatching').show(500);
					})
		} else {
			jQuery.fn.jQuizFactoryContainer.delegate('#btnaddmatching',
					'click', function() {
						methodsJQuizFactory.addOption(questiontype, template);
					})
		}

		jQuery.fn.jQuizFactoryContainer.delegate('img[src*=delete]', 'click',
				function() {
					methodsJQuizFactory.deleteOption(questiontype, template,
							$(this));
				})
		jQuery.fn.jQuizFactoryContainer.delegate(
				'img[src*=imageup],img[src*=videoup],img[src*=audioup]',
				'click', function(e) {
					// $(this).next().trigger('click')
					// var currentUserId=parseInt(jQuery('[name*=user]').val())
					/**
					 * strCenter is an extension to String JS
					 *
					 * @see estifeda/js/JsDK/JsDK.js
					 */
					var expectedAssetType = e.target.src.strCenter('/img/',
							'up.')

					console.log(expectedAssetType)
					var $in = $(this).parents('td');
					var hiddenInput = $(this).prev('input')
					showMediaLibrary(function(asset) {
						var assetType = asset['contentType'].strLeft('/')
						console.log(asset)
						/**
						 * strLeft is an extension to String JS
						 *
						 * @see estifeda/js/JsDK/JsDK.js
						 */
						if (expectedAssetType === assetType) {
							if ("audio,video".indexOf(assetType) !== -1) {
								/*
								 * var msgCompatible=
								 * methodsJQuizFactory.compatible(methodsJQuizFactory.navigatorsayswho(),methodsJQuizFactory[asset['contentType'].strLeft('/')+'TagBrowser'](asset["contentType"].strRight("/")));
								 *
								 * if(msgCompatible!==0){ alert(msgCompatible); }
								 */
								hiddenInput.val(asset['id']);
								methodsJQuizFactory.addAsset($in, baseURL.substring(0, baseURL.length - 1)
										+ asset['uri'], asset['contentType']);
							} else {
								hiddenInput.val(asset['id']);
								methodsJQuizFactory.addAsset($in, baseURL.substring(0, baseURL.length - 1)
										+ asset['uri'], asset['contentType']);
							}

						} else {
							alert('You should Select ' + expectedAssetType
									+ ' file')
						}

					})
				})

	},
	recompile : function(questiontype, template) {
		var root = baseURL + 'libs/estifeda/jtmpl';
		delete jQuery.template['compiledItem' + questiontype + template];
		jQuery.get(
				root + '/tmplitem' + questiontype + 'template' + template
						+ '.gsp',
				function(data) {

					jQuery.template('compiledItem' + questiontype + template,
							data);
				}).always(function(e) {
			if (template === 11 || template == '11') {
				methodsJQuizFactory.spyinitML()
			}
		});
	},
	headerOption : function(questiontype, template) {
		// Construction of Thead
	},
	addOption : function(questiontype, template) {
		// methodsJQuizFactory.recompile(questiontype, template);
		setTimeout(function() {
			console.log(questiontype)
			var cssQT = methodsJQuizFactory.parseCssClass(questiontype);
			var selectororderLastAdded={mcq:'tr[class^=ad]:last input[name=ordre]',scq:'',matching:'',sequence:''}
			console.log(cssQT)
			jQuery.tmpl('compiledItem' + questiontype + template, {
				idmatchingtem : jQuery.fn.jQuizFactoryIncrument
			}).appendTo('table.tabq' + cssQT + ' tbody',
					$.fn.jQuizFactoryContainer);
			$(selectororderLastAdded[questiontype],$.fn.jQuizFactoryContainer).val(jQuery.fn.jQuizFactoryIncrument);
			jQuery.fn.jQuizFactoryIncrument++;
		}, 100)

	},
	deleteOption : function(questiontype, template, jQimg) {
		var jQitems = $('.tabqmatching>tbody>tr[class*=ad]',
				$.fn.jQuizFactoryContainer)
		console.log("jQitems.length=" + jQitems.length)

			var trAB = $(jQimg).parents('tr');
			var tr2 = trAB.next('tr');
			var tr3 = tr2.next('tr');

			if (tr3.attr('id') === undefined) {
				tr3.remove();
			}
			if (tr2.attr('id') === undefined) {
				tr2.remove();
			}
			trAB.remove();
			methodsJQuizFactory.update();


	},
	help : function(questiontype, template) {
		// TOAST SHOW template of question as Picture
		// OR Dialog
		$().toastmessage({
			sticky : true
		})
		var TOASText = "ddfdf";
		var root = 'libs/estifeda/jtmpl';
		$.get(root + '/help' + questiontype + '.html', function(data) {
			TOASText = $(data).html();
			$().toastmessage('showNoticeToast', TOASText);
		});

	},
	update : function() {
		var jQitems = $('.tabqmatching>tbody>tr[class^=ad]',
				$.fn.jQuizFactoryContainer)
		$.fn.jQuizFactoryIncrument = (jQitems.length) + 1;
		jQitems.each(function(index, elem) {
			$(elem).attr("class", "ad" + (index + 1));
		});
		$('input[name=ordre]',$.fn.jQuizFactoryContainer).each(function(index, elem) {
			$(elem).val(index + 1);
		});
	},
	UrlExists : function(url) {
		var http = new XMLHttpRequest();
		http.open('HEAD', url, false);
		http.send();
		return http.status != 404;
	},
	addImage : function(jqq, src, type) {
		console.log("src" + jqq.html())
		var imm = $('<img>').attr('src', src).css("width","250px").css("height","250px")

		jqq.find('img').remove()
		jqq.find('input[type=file]').remove();
		jqq.append(imm);
	},
	/**
	 * HOWTO USE
	 * $.fn.jQuizFactoryContainer.jquizfactory("addImg",7,1,"/Estifeda1/libs/estifeda/img/tmp/fulla.jpg")
	 *
	 * @param itemindex=
	 *            number of item 1,2,..
	 * @param srcTrgt
	 *            equal=1 if source item, 2 if target item
	 * @param src
	 *            path of picture
	 */
	addIMG : function(itemindex, srcTrgt, src) {
		srcTrgt = methodsJQuizFactory.parseST(srcTrgt);

		var jqq = $('#ad' + itemindex + ' >td:eq(' + srcTrgt + ')')
		var imm = $('<img>').attr('src', src).css("width","250px").css("height","250px")
		jqq.find('img').remove()
		jqq.find('input[type=file]').remove();
		jqq.append(imm);
	},
	addVideo : function(jqq, src, type) {

		var vdd = $('<video width="250" height="250" controls><source src="movie.mp4" type="video/mp4">Your browser does not support the video tag.</video>')
		vdd.find('source').attr('src', src).attr('type', type);
		jqq.find('img').remove()
		jqq.find('input[type=file]').remove();
		jqq.append(vdd);

	},
	addVDD : function(itemindex, srcTrgt, src, type) {
		srcTrgt = methodsJQuizFactory.parseST(srcTrgt);
		var jqq = $('#ad' + itemindex + ' >td:eq(' + srcTrgt + ')');
		jqq.find('video').remove()
		var vdd = $('<video width="250" height="250" controls><source src="movie.mp4" type="video/mp4">Your browser does not support the video tag.</video>')
		vdd.find('source').attr('src', src).attr('type', 'video/' + type);
		jqq.find('img').remove()
		jqq.find('input[type=file]').remove();
		jqq.append(add);

	},
	addAudio : function(jqq, src, type) {
		var add = $('<audio controls><source src="horse.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>')

		add.find('source').attr('src', src).attr('type', type)
		jqq.find('img').remove()
		jqq.find('input[type=file]').remove();
		jqq.append(add);
	},
	/**
	 * parsing srcTrgt
	 *
	 * @see addVdd and addImg
	 */
	parseST : function(srcTrgt) {
		var terminologyS = ",1,s,src,source,start,started,depart"
		var terminologyT = ",2,a,t,arrival,arrived,trg,target,tgt,ar,arr,arriv,arrivee,arrive"
		if (terminologyS.indexOf(',' + srcTrgt.toLowerCase() + ',') !== -1) {
			return 0;
		} else if (terminologyT.indexOf(',' + srcTrgt.toLowerCase() + ',') !== -1) {
			return 2;
		} else {
			return '2';
		}
	},
	parseCssClass : function(questionType) {
		var cssClass = {
			matching : 'matching',
			mcq : 'matching',
			scq : 'matching'
		}
		return cssClass[questionType];
	},
	addTXT : function(itemindex, srcTrgt, txt) {
		srcTrgt = methodsJQuizFactory.parseST(srcTrgt);

		var jqq = $('#ad' + itemindex + ' >td:eq(' + srcTrgt + ') input').val(
				txt);
	},
	addAsset : function(jqq, src, type) {

		var extt = type.substring(type.lastIndexOf('/') + 1).toLowerCase();
		var formatt = extt.indexOf('-')
		if (formatt !== -1) {
			extt = extt.substring(formatt + 1);
		}
		console.log(extt)
		if ($.fn.jQuizFactoryImageExtension.indexOf(extt) !== -1) {
			methodsJQuizFactory.addImage(jqq, src, type)
		} else if ($.fn.jQuizFactoryVideoExtension.indexOf(extt) !== -1) {
			methodsJQuizFactory.addVideo(jqq, src, type)
		} else if ($.fn.jQuizFactoryAudioExtension.indexOf(extt) !== -1) {
			methodsJQuizFactory.addAudio(jqq, src, type)
		} else {
			alert('File Format has not supported')
		}
	},
	typeItem : function(parentTDJQ) {
		if (parentTDJQ.find('video').length !== 0) {
			return "vdd";
		} else if (parentTDJQ.find('img').length !== 0) {
			return "img";
		} else if (parentTDJQ.find('audio').length !== 0) {
			return "aud";
		} else {
			return "txt";

		}
	},
	/**
	 * for matching qtype
	 */
	typeItemsA : function() {
		var accum = "";
		$('table.tabqmatching>tbody>tr>td:nth-of-type(1)').each(function() {
			accum = accum + methodsJQuizFactory.typeItem($(this))
		})
		return accum;
	},
	typeItemsB : function() {
		var accum = "";
		$('table.tabqmatching>tbody>tr>td:nth-of-type(3)').each(function() {
			accum = accum + methodsJQuizFactory.typeItem($(this))
		})
		return accum;
	},
	/**
	 * for mcq & squ qtypes
	 */
	typeItems : function() {
		var accum = "";
		$('table.tabqmatching>tbody>tr>td:nth-of-type(3)').each(function() {
			accum = accum + methodsJQuizFactory.typeItem($(this))
		})
		return accum;
	},
	typeItemsQC : function() {
		var accum = "";
		$('table.tabqmatching>tbody>tr>td:nth-of-type(3):eq(0)').each(
				function() {
					accum = accum + methodsJQuizFactory.typeItem($(this))
				})
		return accum;
	},
	setAllTypes : function() {
		if ($.fn.jQuizFactoryCurrentQType === 'matching') {
			$('input[name=idalltypes]', $.fn.jQuizFactoryContainer).val(
					methodsJQuizFactory.typeItemsA() + ","
							+ methodsJQuizFactory.typeItemsB())

		} else if ($.fn.jQuizFactoryCurrentQType === 'mcq') {
			$('input[name=idalltypes]', $.fn.jQuizFactoryContainer).val(
					methodsJQuizFactory.typeItems())

		}
	},
	isblankitem : function(trparentjq) {
		var nbvdd = trparentjq.find('img[src*=videoup]');
		var nbimg = trparentjq.find('img[src*=imageup]');
		var nbtxt = trparentjq.find('input.qmatchingitem');
		if (nbvdd.length === 2) {
			return true;
		} else if (nbimg.length === 2) {
			return true;
		} else if (nbvdd.length + nbimg.length === 2) {
			return true;
		} else if (nbvdd.length == 1 || nbimg.length == 1) {
			if (nbtxt.length == 1) {
				if (nbtxt.val() === "") {
					return true;
				}
			}

		} else if (nbtxt.length === 2) {
			if (nbtxt.eq(0).val() === "" && nbtxt.eq(1).val() === "") {
				return true;
			}
		} else {
			return false;
		}

	},
	/**
	 * For fill in Blanks Question.
	 *
	 * @param blkText
	 *            the text to be missed
	 * @param blkType
	 *            can be empty ,or 'extra',
	 */
	addBlank : function(blkText, blkType) {
		var namespan;
		(blkType === 'extra') ? (namespan = 'piege') : (namespan = 'qblank')
		$.fn.jQuizFactoryContainer.append('<span class="qblank" name="'
				+ namespan + '">' + blkText + '</span>')
	},
	countTemplate : function(qtype) {
		var maps = {
			matching : 11,
			mcq : 4,
			scq : 4
		};
		return maps[qtype]
	},
	clearblankitem : function() {
		$('table.tabqmatching>tbody>tr', $.fn.jQuizFactoryContainer).each(
				function() {
					if (methodsJQuizFactory.isblankitem($(this))) {
						$(this).find('td>img[src*=delete]').trigger('click');
					}
				})

	},
	navigatorsayswho : function() {
		var N = navigator.appName, ua = navigator.userAgent, tem;
		var M = ua
				.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
		if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null)
			M[2] = tem[1];
		M = M ? [ M[1], M[2] ] : [ N, navigator.appVersion, '-?' ];

		return M;
	},
	/**
	 * To undesrtand this algo , Please:
	 *
	 * @see http://www.w3schools.com/html/html5_audio.asp
	 */
	audioTagBrowser : function(extension) {
		var sppBrowser = [];

		sppBrowser['ie'] = 9;
		sppBrowser['chrome'] = 6;
		sppBrowser['firefox'] = 3.6;
		sppBrowser['safari'] = 5;
		sppBrowser['opera'] = 10;
		if (extension === 'mp3') {
			delete sppBrowser['firefox'];
			delete sppBrowser['opera']

		} else if (extension === 'wav') {
			delete sppBrowser['ie']
		} else if (extension === 'ogg') {
			delete sppBrowser['safari']
		}
		return sppBrowser;
	},
	videoTagBrowser : function(extension) {
		var sppBrowser = [];
		sppBrowser['ie'] = 9;
		sppBrowser['chrome'] = 6;
		sppBrowser['firefox'] = 3.6;
		sppBrowser['safari'] = 5;
		sppBrowser['opera'] = 10.6;
		if (extension === 'mp4') {
			delete sppBrowser['firefox'];
			delete sppBrowser['opera']

		} else if (extension === 'webm' || extension === 'ogg') {
			delete sppBrowser['ie'];
			delete sppBrowser['safari'];
		}
		return sppBrowser;
	},
	/**
	 * compatible(methodsJQuizFactory.navigatorsayswho(),vedioTagBrowser('mp4'))
	 *
	 * @param yourBrowser=methodsJQuizFactory.navigatorsayswho()
	 * @param supportedBrowsers
	 * @returns message ; if 0 , your browser a compatible
	 */
	compatible : function(yourBrowser, supportedBrowsers) {
		if (supportedBrowsers[yourBrowser[0].toLocaleLowerCase()] === undefined) {
			return "Switch browser to : "
					+ methodsJQuizFactory.keys(supportedBrowsers).join(', ');
		} else {
			if (supportedBrowsers[yourBrowser[0].toLocaleLowerCase()] > parseInt(yourBrowser[1])) {
				return "You shoud have at least version : "
						+ supportedBrowsers[yourBrowser[0].toLocaleLowerCase()];
			} else {
				return 0;
			}

		}
	},
	keys : function(myArray) {
		var keyss = [];
		for ( var key in myArray) {
			keyss.push(key)
		}
		return keyss;
	}

};
(function($) {
	var methodsproxypattern = {
		getCssInner : function() {
			var cssIn = {
				'display' : 'inline-block',
				'height' : '500px',
				'background-color' : 'white',
				'border' : '1px dashed #ccc',
				'width' : '50%',
				'margin' : 'auto',
				'margin-top' : '5%',
				'overflow-y' : 'auto'
			};
			return cssIn;
		},
		start : function(tmout, duplicate) {
			$('body').addClass("loading");
			if ($.proxyJQ.length > 0) {
				if (duplicate !== undefined) {
					setTimeout(function() {
						(duplicate == false) ? $.proxyJQ.css(
								methodsproxypattern.getCssInner())
								.removeClass().appendTo($('div.proxydpm'))
								: $.proxyJQ.css(
										methodsproxypattern.getCssInner())
										.clone().removeClass().appendTo(
												$('div.proxydpm'));

					}, 10)

				}

			}
			if (tmout !== 0) {
				setTimeout(function() {
					methodsproxypattern.end(0);
				}, tmout)
			}

		},
		end : function(tmout) {
			setTimeout(function() {
				$('body').removeClass("loading");
			}, tmout)

		},
		init : function() {

			if ($('body> :last-child').get(0).tagName === 'DIV'
					&& $('body> :last-child').get(0).className === 'proxydpm') {
				$('body> :last-child').remove();
			}

			$('body').append('<div class="proxydpm"></div>');

		}

	}
	var methodspgp = {
		theorem : function() {

			return this.css('background-color', 'orange')
		},
		note : function() {
			return this.css('background-color', 'yellow')
		},
		definition : function() {
			return this.css('background-color', 'green')
		},
		unpgp : function() {
			return this.css('background-color', 'white')
		},
		summaryHTML:function(args){
			var defau = {
					title : 'Summary',
					target : 'body',
					type : 'all',
					sort : false
				};
				var extd = $.extend({}, defau, args);
				console.log('extd (type):' + extd['type'])
				var jqtarget = $.fn.pgpCtn.eq(0);
				if (jqtarget.length === 0) {
					console.error('target' + jqtarget.selector+ ' is missing');
				}

				if (jqtarget.get(0).tagName === 'IFRAME') {
					jqtarget = jqtarget.contents();
				}
				var htmlpgp = '';
				if (jqtarget.find('.pygyp').length === 0) {
					htmlpgp = '<br><br><br><h1 style="color:gray">Use PGP Palette to have :'
							+ extd['title'] + '</h1>';
					htmlpgp = htmlpgp
							+ '<br><img  style="height:auto;width:auto" src="'+imgpgpNotFoundurl+'" />'
				} else {
					var types = extd['type'].split(',');
					var pgpsclass = [];
					if (types[0] === 'all') {
						pgpsclass.push('.pygyp');
					} else {
						for ( var i in types) {
							pgpsclass.push('.pygyp .pgp.pgp'
									+ methodspgp.pgpcssclass(types[i]
											.toLocaleLowerCase()));
							console.log('.pygyp .pgp.pgp'
									+ methodspgp.pgpcssclass(types[i]
											.toLocaleLowerCase()))
						}
					}

					// args={title:'Summary',target:'#idtiny',type:'all',sort:false}
					if (extd['sort'] === false) {
						if (types[0] === 'all') {
							htmlpgp = jqtarget
									.find(pgpsclass.join(','))
									.htmleach('<div class=".pygyp" />');
						} else {
							for ( var i in pgpsclass) {

								htmlpgp = htmlpgp
										+ ((i === 0) ? '<br><br><br>'
												: '<br>')
										+ jqtarget
												.find(pgpsclass[i])
												.parents('.pygyp')
												.htmleach(
														'<div class=".pygyp" />');
							}
						}

					} else {
						if (types[0] === 'all') {
							pgpsclass = [];
							types = [];
							var newClass;
							jqtarget
									.find('.pygyp')
									.each(
											function(i, e) {
												newClass = '.pygyp .'
														+ $(e)
																.find(
																		'div:eq(0)')
																.attr(
																		'class')
																.split(
																		' ')
																.join(
																		'.');
												if ($.inArray(newClass,
														pgpsclass) === -1) {
													pgpsclass
															.push(newClass);
													types
															.push(newClass
																	.substring(newClass
																			.indexOf('.pgp') + 8));
												}

											})

						}

						var subtitle = '<span style="text-align: center;display:block;float: center;font-size: 1.5em;font-weight: bold;color: rgba(0,0,0,0.8)">';
						for ( var i in pgpsclass) {

							htmlpgp = htmlpgp
									+ ((i === 0) ? '<br><br><br>'
											: '<br>')
									+ subtitle
									+ methodspgp.pgptitle(types[i])
									+ '(s)</span><br>'
									+ jqtarget
											.find(pgpsclass[i])
											.parents('.pygyp')
											.htmleach(
													'<div class=".pygyp"/>');
						}
					}
				}
				return htmlpgp;
		},
		summary : function(args) {
			$('').proxyDP('start', 'ever');

			setTimeout(
					function() {
						// $('<div>'+$('iframe').contents().find('.pygyp').htmleach()+'</div>').proxyDP('start','ever',true)
						var defau = {
							title : 'Summary',
							target : 'body',
							type : 'all',
							sort : false
						};
						var extd = $.extend({}, defau, args);
						console.log('extd (type):' + extd['type'])
						var jqtarget = $.fn.pgpCtn.eq(0);
						if (jqtarget.length === 0) {
							console.error('target' + jqtarget.selector
									+ ' is missing');
						}

						if (jqtarget.get(0).tagName === 'IFRAME') {
							jqtarget = jqtarget.contents();
						}
						var htmlpgp = '';
						if (jqtarget.find('.pygyp').length === 0) {
							htmlpgp = '<br><br><br><h1 style="color:gray">Use PGP Palette to have :'
									+ extd['title'] + '</h1>';
							htmlpgp = htmlpgp
									+ '<br><img  style="height:auto;width:auto" src="'+imgpgpNotFoundurl+'" />'
						} else {
							var types = extd['type'].split(',');
							var pgpsclass = [];
							if (types[0] === 'all') {
								pgpsclass.push('.pygyp');
							} else {
								for ( var i in types) {
									pgpsclass.push('.pygyp .pgp.pgp'
											+ methodspgp.pgpcssclass(types[i]
													.toLocaleLowerCase()));
									console.log('.pygyp .pgp.pgp'
											+ methodspgp.pgpcssclass(types[i]
													.toLocaleLowerCase()))
								}
							}

							// args={title:'Summary',target:'#idtiny',type:'all',sort:false}
							if (extd['sort'] === false) {
								if (types[0] === 'all') {
									htmlpgp = jqtarget
											.find(pgpsclass.join(','))
											.htmleach('<div class=".pygyp" />');
								} else {
									for ( var i in pgpsclass) {

										htmlpgp = htmlpgp
												+ ((i === 0) ? '<br><br><br>'
														: '<br>')
												+ jqtarget
														.find(pgpsclass[i])
														.parents('.pygyp')
														.htmleach(
																'<div class=".pygyp" />');
									}
								}

							} else {
								if (types[0] === 'all') {
									pgpsclass = [];
									types = [];
									var newClass;
									jqtarget
											.find('.pygyp')
											.each(
													function(i, e) {
														newClass = '.pygyp .'
																+ $(e)
																		.find(
																				'div:eq(0)')
																		.attr(
																				'class')
																		.split(
																				' ')
																		.join(
																				'.');
														if ($.inArray(newClass,
																pgpsclass) === -1) {
															pgpsclass
																	.push(newClass);
															types
																	.push(newClass
																			.substring(newClass
																					.indexOf('.pgp') + 8));
														}

													})

								}

								var subtitle = '<span style="text-align: center;display:block;float: center;font-size: 1.5em;font-weight: bold;color: rgba(0,0,0,0.8)">';
								for ( var i in pgpsclass) {

									htmlpgp = htmlpgp
											+ ((i === 0) ? '<br><br><br>'
													: '<br>')
											+ subtitle
											+ methodspgp.pgptitle(types[i])
											+ '(s)</span><br>'
											+ jqtarget
													.find(pgpsclass[i])
													.parents('.pygyp')
													.htmleach(
															'<div class=".pygyp"/>');
								}
							}
						}
						$('').proxyDP('end', 0);
						setTimeout(function() {
							$('<div>' + htmlpgp + '</div>').proxyDP('start',
									'ever', true);
							methodspgp.titlesummary(extd['title']);
						}, 10)
					}, 2000)
		},
		pgptitle : function(title) {
			var t
			var maps = [];
			maps['pgpsourcecode'] = 'Source Code';
			maps['srcc'] = 'C (Source Code)';
			maps['srccpp'] = 'C++ (Source Code)';
			maps['srcjava'] = 'Java';
			(maps[title] === undefined) ? (t = title) : (t = maps[title]);
			return t;
		},
		titlesummary : function(title) {
			var close='<span style="float:right"><input value="close" type="button" class="roundborder" onclick="proxyend()" /></span>';
			$('.proxydpm:last')
					.prepend(
							'<div style="display: inline-block; background-color: white; border: 1px dashed rgb(204, 204, 204); height:100px;position:fixed;width:50%"><h2 style="font-size: 3em;color: gray;">'
									+ title + '</h2>'+close+'</div>');
		},
		pgpcssclass : function(title) {
			var t
			var maps = [];
			maps['sourcecode'] = 'pgpsourcecode';
			maps['scc'] = 'srcc';

			(maps[title] === undefined) ? (t = title) : (t = maps[title]);
			return t;
		}

	}

	var methodtrak = {}
	var inputsEffect = {
		watermarkTitleSection : 'Put Title For Section',
		getWaterMarkText : function() {
			return inputsEffect.watermarkTitleSection;
		},
		setWaterMarkText : function(wm) {
			watermarkTitleSection = wm;
		},
		flashingTiny : function() {

		}

	}
	 $.fn.pgp = function(method) {

        method = $.fn.pgp.getStandard(method);
        if (methodspgp[method]) {
            $.fn.pgpCtn=$(this);
            return methodspgp[method].apply(this, Array.prototype.slice.call(arguments, 1))
        }
// execute default method if method is not a method
        else if (typeof method === 'object' || !method) {
            return methodspgp.unpgp.apply(this, arguments);
        }
    }
    $.fn.pgpCtn=$('body');
	$.fn.pgptiny = function(method, edd) {
		console.log(edd.selection.getContent())
		edd.selection.setContent('<br><div class="pygyp"><div class="pgp pgp' + method + '"><div>'+methodspgp.pgptitle(method)+'<br><br></div><p>' + edd.selection.getContent() + '</p></div></div><br>')

	}
	$.fn.pgptinyx = function(method, edd) {
		var cnt=edd.selection.getContent();
		var titles={"def":"definition","erreur":"Erreur","th":"ThÃƒÂ©oreme ","note":"note","lemme":"lemme","attention":"Attention"}
		var title=(titles[method])?titles[method]:method;
		edd.selection.setContent('<div class="PGP PGP-'+method+'"><h3>'+title+'  </h3><p>'+cnt+'</p></div>')

	}

	$.fn.pgp.i18n = {
		theoremi18n : 'theorem|Ã™â€ Ã˜Â¸Ã˜Â±Ã™Å Ã˜Â©|Ã™â€šÃ˜Â§Ã˜Â¹Ã˜Â¯Ã˜Â©|Ã¥Â®Å¡Ã§Ââ€ |theory|Ã¥Â®Å¡Ã§Ââ€ ||||||||||',
		notei18n : 'note|Ã™â€¦Ã™â€žÃ˜Â§ Ã˜Â­Ã˜Â¸Ã˜Â©',
		definitioni18n : 'definition|Ã˜ÂªÃ˜Â¹Ã˜Â±Ã™Å Ã™Â',
		unpgpi18n : 'unpgp|Ã˜Â¥Ã™â€žÃ˜ÂºÃ˜Â§Ã˜Â¡',
		summaryi18n:'summary|Ã™â€¦Ã™â€žÃ˜Â®Ã˜Âµ',
		summaryHTMLi18n:'summaryHTML|Ã™â€¦Ã™â€žÃ˜Â®Ã˜Âµ Ã˜Â¢Ã˜Â´ Ã˜ÂªÃ™Å  Ã˜Â¢Ã™â€¦ Ã˜Â¢Ã™â€ž'
	}
	$.fn.pgp.getStandard = function(labeli18n) {
		var labelStandard = "unpgp";
		for ( var key in $.fn.pgp.i18n) {

			if ($.fn.pgp.i18n[key].indexOf(labeli18n) !== -1) {
				return _($.fn.pgp.i18n[key]).strLeft("|");
			}
		}
		return labelStandard;
	}
	$.fn.pgp.wrapPGP = function(selectedTxt) {
		// selectedTxt=edd.selection.getContent()
		var jj;
		if (selectedTxt.indexOf('<'))
			_(selectedTxt)

		return jj
	}
	// Remove all HTML Tags
	$.fn.pgp.unwrapAll = function(selectedToUnwrap) {
		var regex = /(<([^>]+)>)/ig;
		var result = selectedToUnwrap.replace(regex, " ");
		return result;
	}
	$.fn.addAccordion = function(accTitle, accData) {
		$(this).append(
				'<h3><a href="#">' + accTitle + '</a></h3><div><p>' + accData
						+ '</p></div>').accordion('destroy').accordion();
	}
	$.fn.addAccordionOnClick = function(selectOnClicked, accTitle, accData) {
		$(selectOnClicked).bind('click', function() {
			$(this).addAccordion(accTitle, accData);
		})
	}
	$.fn.addAccordionAndTinyMCEOnClick = function(selectOnClicked, accTitle,
			pathTinyMCE) {
		$(selectOnClicked).bind(
				'click',
				function() {
					$.fn.addAccordion(accTitle, ($(this).loadChangeAllId(
							pathTinyMCE, '', '')))
				})
	}
	$.fn.loadChangeAllId = function(urlpath, prefix, suffix) {
		var xx;
		$(this).load(
				urlpath,
				function(data) {
					xx = data;
					$(this).find('*[id]').andSelf().attr(
							'id',
							function(index, previous) {
								var newnew = previous
										+ Math.floor((Math.random() * 100) + 1)
												.toString();
								while (newnew === previous) {
									newnew = previous
											+ Math.floor(
													(Math.random() * 100) + 1)
													.toString();
								}
								return prefix + newnew + suffix;
							});

				})

		return xx;
	};
    $.fn.vals=function(){
    	var vals=[];
    	$(this).each(function(i,e){
    		vals.push($(e).val());
    	});
    	if(vals.length<=1){
    		if(vals.length==0){
    		    return undefined;
    		}else{
    			return vals[0];
    		}
    	}else{
    		return vals;
    	}

    };
	$.fn.loadChangeTAreaId = function(urlpath, prefix, suffix) {
		var newid;
		$(this).load(
				urlpath,
				function(data) {
					$(this).find('textarea[id]').andSelf().attr('id',
							function(index, previous) {
								newid = prefix + previous + suffix;
								return newid;
							});
				})
		return newid;
	}
	$.fn.doesExist = function() {
		return $(this).length > 0;
	};
	/**
	 * @param text
	 *            text of filter
	 * @param action
	 *            jquery function .As: 'hide','remove','show' . The next version
	 *            will include Ench ALLAH . the following type of action
	 *            'hide(4000)..'
	 * @param casesensitive
	 *            to consider majuscule =>true , else =>false
	 * @param exactText
	 *            if all text is the innerHTML of tag , put true.
	 * @return array of jquery object that contains text
	 */
	$.fn.searchengine = function(text, action, casesensitive, exactText) {

		var arrayJq = []

		var all = $(this);
		all.each(function() {

			var html = $(this).html();
			var vll = $(this).val();
			var ttx = $(this).text();
			if (casesensitive === false) {
				html = html.toLocaleLowerCase();
				vll = vll.toLocaleLowerCase();
				ttx = ttx.toLocaleLowerCase();
				text = text.toLocaleLowerCase();
			}
			var test;
			if (exactText = true) {
				test = (html === text) || (vll === text) || (ttx === text)
			} else {
				test = (html.indexOf(text) !== -1)
						|| (vll.indexOf(text) !== -1)
						|| (ttx.indexOf(text) !== -1)
			}
			if (test === true) {
				arrayJq.push($(this));
				if (action.length !== 0) {
					$(this)[action]();
				}

			}
		})
		return arrayJq;

	};
	var methdSorContent={
			ctyy:function(e,args){
				return args.target(e).parent();
			},updateNiheya:function($th,arryB3dTertib,args){
				/*methdSorContent.realSelected($th).each(function(i,e){
					 args['update']($(e),arryB3dTertib[i].scld,arryB3dTertib[i].wcumul);
				});*/
				var e={};
				var eprv={};
			    for(var i=0;i<arryB3dTertib.length;i++){
			    	e.ui=arryB3dTertib[i].e;
			    	e.scale=arryB3dTertib[i].scld;
			    	e.weightcumul=arryB3dTertib[i].wcumul;
			    	e.weight=arryB3dTertib[i].w;
			    	if(i==0){
			    		args['update'](e);
			    	}else{
			    		eprv.ui=arryB3dTertib[i-1].e;
				    	eprv.scale=arryB3dTertib[i-1].scld;
				    	eprv.weightcumul=arryB3dTertib[i-1].wcumul;
				    	eprv.weight=arryB3dTertib[i-1].w;
			    		args['update'](e,eprv);
			    	}

			    }

			},
			targetFn:function($this){
				return methdSorContent.realSelected($this);
			},
			init:function(args,$th){

				if(args.helperxp && !args.helper){
					args.helper=args.helperxp.get;

				}

				var defau={
						strategy:'',
						asc:true,
						helper:function($child){
							return $child.html();
						},
						helperxp:{get:function($child){
							$child.html()
						},set:function(){
							//($child,html)
							//$child.html(html)
						}

						},
						target:function($child,index){
							return $child;
						},format:function(html){
							return html.toLowerCase().replace(/(<([^>]+)>)/ig, "");
						},weight:function(formatted,index){
							if(isFinite(formatted)){
								return parseInt(formatted);
							}else if(formatted!=="" || typeof formatted ==='string'){
								return formatted.charCodeAt(0);
							}else{
								return index;
							}
						},update:function(tge,scale,wgt){
							if(1===2){
								console.log($(tge),scale,wgt);
							}

						}
				}
				/**
				 * target : 'this','parent',
				 */


				return $.extend({}, defau, args);;
			},sortHtmlArray:function(arry,$th,args,indexJedid,wgt,scl){
				if(!wgt){
					wgt='w';
				}
				if(!scl){
					scl='scld';
				}
				var wght=[];
				if(!indexJedid){
					indexJedid='tertib'
				}

				arry= arry.sort(function(a, b){
			    	 var nameA=args.format(a.html), nameB=args.format(b.html)
			    	// wght.push(args['weight'](nameB)-args['weight'](nameA))
			    	// console.log(args['weight'](nameB)-args['weight'](nameA));
			    	 if (nameA < nameB) //sort string ascending
			    	  return -1
			    	 if (nameA > nameB)
			    	  return 1
			    	 return 0 //default return value (no sorting)
			    	});
				      arry[0][wgt]=0;
				      arry[0][wgt+'cumul']=0;
				      var cumlw=0;
	                   for(var i=0;i<arry.length;i++){
						arry[i][indexJedid]=i;
						if(i>0){
							arry[i][wgt]=args['weight'](args['format'](arry[i].html),i)-args['weight'](args['format'](arry[i-1].html),i)
						   arry[i][wgt+'cumul']=cumlw+arry[i][wgt];
							cumlw=cumlw+arry[i][wgt+'cumul'];
						}



					     }
	                   arry[0][scl]=0;
	                   arry[arry.length-1][scl]=1;
	                   var wmx=arry[arry.length-1][wgt+'cumul'];
	                   for(var i=0;i<arry.length;i++){

							if(wmx!==0){
								arry[i][scl]=arry[i][wgt+'cumul']/wmx;
							}
                        }


				return arry;
			},
			startegyswcht:function(stg){
				var switchwer='';
				if('|PER_PARENT|BY_PARENT|x|'.indexOf('|'+stg+'|')!==-1){
					switchwer='x';
				}
				return switchwer;
			},
			update:function(arryHTML,$this,args){
				var switchwer=methdSorContent.startegyswcht(args['strategy']);
				return methdSorContent['setHTML'+switchwer](arryHTML,$this,args);
			}
			,setHTML:function(arryHTML,jqparent,args){
				//console.log(arryHTML);
				methdSorContent.realSelected(jqparent).each(function(i,e){
					args['target']($(e),i).html(arryHTML[i].thtml);
					arryHTML[i].newjq=args['target']($(e),i).get(0);
					args['helperxp']['set']($(e),arryHTML[i].html);
			     });
				return arryHTML;
			},setHTMLx:function(arryHTML,$this,args){
				/*PER_PARENT*/
				var mx=$this.grpdbyparents();
				var subarr=[];
				var j=0;
				for(var p=0;p<Object.keys(mx).length;p++){
					subarr=arryHTML.filter(function (el) {return el.ctx===mx[p]});
					subarr=methdSorContent.sortHtmlArray(subarr, $this, args, 'xtertib','xw','xsc');
					for(var k=0;k<methdSorContent.adedKeysInt(mx[p])+1;k++){
						args['target']($(mx[p][k]),subarr[parseInt(k)].tertib).html(subarr[parseInt(k)].thtml);
						args['helperxp']['set']($(mx[p][k]),subarr[parseInt(k)].html)
						arryHTML[j].newjq=args['target']($(mx[p][k]),subarr[parseInt(k)].tertib).get(0);
						j++;
					}
				}
				return arryHTML;
			},getHtml:function(jqparent,args){
				var tmp=[];
				methdSorContent.realSelected(jqparent).each(function(i,e){
			    	 tmp.push({e:$(e),html:args.helper($(e)),thtml:args['target']($(e),i).html(),ctx:args['target']($(e),i).parent().get(0)});
			     });
				//console.log(tmp);
				return tmp;
			},realSelected:function(jq){
				if(jq.length<=1){
					return jq.children();
				}else{
					return jq;
				}
			},adedKeysInt:function(obj){
				 var kn=0;
                 while(obj[kn+'']){
                     kn++;
                 }
                 return kn-1;
			}
	};
	$.fn.sortContent=function(args){
		var tmp;
		args=methdSorContent.init(args,$(this));
	     tmp=methdSorContent.sortHtmlArray(methdSorContent.getHtml($(this),args),$(this),args);
	     if(!args['asc']){
	    	 tmp.reverse();
	     }

	     tmp=methdSorContent.update(tmp, $(this),args);

	     methdSorContent.updateNiheya($(this),tmp, args);

	};

	$.fn.retrieveContentColonne=function(){
		var cnt=[]
		if($(this).get(0).tagName==='TH'){
			var pr=$(this).parents('table');
			$('td:nth-child('+($(this).index()+1)+')',$('tbody',pr)).each(function(i,e){
				cnt.push($(e).html())
			});

		}
		return cnt;
	};

	/**
	 * @return matrix m[0]=>1st parent ;m[0][1] 2nd child in 1st prarent
	 */
	$.fn.grpdbyparents=function(){
		var tmp={};
		var all=$(this);
		var inc=0;
		var allp=$(this).parent();
		 for(var i=0;i<allp.length;i++){
		       tmp[''+i]=allp.eq(i).get(0) ;

		    }

		     for(var i=0;i<allp.length;i++){
		    	 inc=0;
		       for(var j=0;j<all.length;j++){

		          if(all.eq(j).parent().eq(0).get(0)===tmp[''+i]){
		                tmp[i+''][inc+'']=all.eq(j).get(0);
		                inc++;
		          }

		       }

		    }

		return tmp;
		};
		/**
		 * adapter max or min  height among two jq objects
		 */
		   $.fn.adaptHeightTo=function(jq){
		          var hs=$(this).height(),ht=$(jq).height();
		          var test=hs>ht;
		          if(arguments[1]==='min'){
		        	  test=hs<ht;
		          }
		         if(test){
		                $(jq).height(hs)
		         }else  if(hs<ht){
		             $(this).height(ht);
		         }

		     };
    var mthOnPart={
    		houDoud:function(th,houDoudString,e){
    			houDoudString=houDoudString.replace(/\s+/g, ' ').replace(/^ /,'').replace(/ $/,'');
    			var wTH=th.offsetWidth,hTH=th.offsetHeight,ts1=true,ts2=true,wOrH=th.offsetWidth,xOrY='',partSup=1,max=2;
    		    var xe=e.offsetX,ye=e.offsetY;
    		      if(!xe){
    		    	  xe=e.clientX - $(e.target).offset().left;
    		      }
    		      if(!ye){
    		    	  ye= e.clientY - $(e.target).offset().top;
    		      }
    		    var test=true,thr=(xe >= wTH/2),thl=(xe < wTH/2),tht=(ye >=hTH/2 ),thb=(ye < hTH/2 );
    		    var map={'half right':thr,'half left':thl,'half bottom':tht,'half top':thb,'1/2 H':thr,'2/2 H':thl,'1/2 V':tht,'2/2 V':thb}
    		    if(map[houDoudString]===undefined){

    		    	ts1=houDoudString.toLowerCase().indexOf('h', this.length - 'h'.length) !== -1 ;
    		    	ts2=houDoudString.toLowerCase().indexOf('v', this.length - 'v'.length) !== -1 ;
    		    	if(houDoudString.indexOf('/')>=1 && (ts1 || ts2)){

    		    		if(ts1){
    		    			wOrH=hTH;
    		    			xOrY=ye;
    		    		}
    		    		if(ts2){
    		    			wOrH=wTH;
    		    			xOrY=xe;
    		    		}

    		    		partSup=parseInt(houDoudString.split('/')[0]);
    		    		max=parseInt(houDoudString.split('/')[1]);
    		    	//	console.log((partSup-1)*wOrH/max);
    		    		//console.log(partSup*wOrH/max);
    		    		//console.log('  ==   ==  =');
    		    		test= (xOrY >= (((partSup-1)*wOrH)/max) ) && (xOrY <= ((partSup*wOrH)/max) );
    		    	}

    		    } else{

    		    	test=map[houDoudString];

    		    }

    		    return {test:test,ui:{scalex:xe/wTH,scaley:1-ye/hTH}};

    		},houDoudet:function(th,houDoudString,e){
    			var tesElkol=false;

    			var ands=houDoudString.split('&'),orts=houDoudString.split('|');
    			if(ands.length>=2){
    				tesElkol=true;
    				for(var j=0;j<ands.length;j++){
    					tesElkol=tesElkol && mthOnPart.houDoud(th, ands[j], e).test;

    				}

    			}else if(orts.length>=2){
    				for(var j=0;j<orts.length;j++){
    					tesElkol=tesElkol && mthOnPart.houDoud(th, orts[j], e).test;
    				}

    			}else{
    				tesElkol=mthOnPart.houDoud(th, houDoudString, e).test;
    			}
    			return {test:tesElkol,ui:mthOnPart.houDoud(th, houDoudString, e).ui};

    		}

    };
	$.fn.toHtml=function(){
	   $(this).each(function(i,e){
		   if($(e).html().contains('&lt') && $(e).html().contains('&gt')){
			   $(e).html($(e).text())
		   }

	   })
		return $(this);
	}
	/**
	 * Event on part of element :
	 * extension of $().on();
	 * @param eventType: 'click',mouseover,...
	 * @param part : 'half right,half left,half top,half bottom,1/2 H,2/2 V,2/3 H'
	 */
	$.fn.onPart=function(eventType,fn,part){
		var $that=this;
		var houDoud={test:true}
		$($that).on(eventType,function(e){
			if(part && part!=='all' && part!=='' ){
				 houDoud=mthOnPart.houDoudet(this,part,e);
			}

		       if(houDoud.test){
		    	   fn.call(this,e,houDoud.ui);

		       }
		});


	};
	/**
	 * $().onPart('click',{'half right':fn1,'4/5 V':fn2})
	 */
	$.fn.onParts=function(eventType,mapPartFn){
		for(var p in mapPartFn){
			$(this).onPart(eventType,mapPartFn[p],p);
		}
			/*if(typeof mapPartFn[p] ==='function'){

		        }else if(typeof mapPartFn[p] ==='object'){
				   for(var k in mapPartFn[p]){
					   $(this).onPart(eventType,mapPartFn[p][k],p+' & '+k);
			     	}
			     }

		    }*/

	};
	$.fn.eachinarray=function(fn,prop){
		var that=this;
		if(typeof fn=='undefined'){
			fn='html';
		}
		if(typeof fn=='string'){
			var tmpfn=fn;

			if(arguments.length>=2){
				fn=function(){return $(this)[tmpfn](prop)}
			}else{

				fn=function(){return $(this)[tmpfn]()}
			}
		}
		return $(that).toArray().map(function(e){return fn.call(e)});

	}
	$.fn.watermark = function() {
		// init, set watermark text and class
		var waterMarkText = "Put your Text here";
		var $this = this;
		var jQinput = $($this);
		if (arguments.length > 0) {
			waterMarkText = arguments[0];
		}

		jQinput.val(waterMarkText).addClass('watermark');

		jQinput.bind({
			blur : function() {
				if (jQinput.val().length === 0) {
					jQinput.val(waterMarkText).addClass('watermark');
				}
			},
			keypress : function() {
				if (jQinput.val() === waterMarkText || jQinput.val() === '') {

					jQinput.val('').removeClass('watermark');
				}
			},
			contextmenu : function() {
				jQinput.val('').removeClass('watermark')

			},
			copy : function() {
				if (jQinput.val() === waterMarkText) {
					return;
				}
			}
		});

	}
	$.fn.blankit = function(edd) {
		var selectedText = edd.selection.getContent();
		selectedText = _(selectedText).stripTags()
		var replacedWith = selectedText.replace(/./g, "..");

		// edd.selection.select(ed.dom.select('span#caret_pos_holder')[0]);
		// //select the span

		edd.selection.setContent('<span id="Blank' + $.fn.increment
				+ '" class="qblank" >' + replacedWith + '</span>');
		// $(tinymce.get('tinyelement1').getDoc()).find('span[id="Blank'+this.increment+'"]').alternText(selectedText,replacedWith,1000);
		$().toastmessage('showNoticeToast', selectedText);
		// var
		// jQElement=$(tinymce.get('tinyelement1').getDoc()).find('span[id="Blank'
		// + this.increment + '"]')
		// $.getScript('libs/estifeda/js/jtdress.miniscript.fillblanks.js')

		// this.blanksObservers['Blank' + this.increment]=selectedText;
		$.fn.blanksObservers['Blank' + $.fn.increment] = selectedText;
		$.fn.increment++;
	}
	$.fn.blankitOut = function(edd) {
		var allText = $(ed.getContent()).text();
		var blankSelected = edd.selection.getContent();
		var indexOf = _(allText).indexOf(blankSelected);
		$(this).append(
				'<span id="Blank' + this.increment + ' data-kiwi="' + indexOf
						+ '" class="qblank" >' + edd.selection.getContent()
						+ '</span>')
		this.increment++;
		return blankSelected;
	}
	$.fn.blankextra = function(selectorBtnAdd, minLengthTxt, maxExtraBlank) {
		var ctn = $(this);
		if (ctn.get(0).tagName !== "TABLE") {
			console.log('Blank Extra JQuery Plugin required table container')

		} else {
			ctn.delegate('span[name=piege]', 'click', function(e) {
				// if (e.clientX > $(this).offset().left - 10 && e.clientX <
				// $(this).offset().left + 10 &&
				// e.clientY > $(this).offset().top - 20 && e.clientY <
				// $(this).offset().top + 20)
				var r = confirm("Did you want to Delete " + $(this).val());
				if (r === true) {
					$(this).parents('tr').remove();
				}

			})
			$(document)
					.delegate(
							selectorBtnAdd,
							'click',
							function() {
								var inputAdd = ctn.find('input[type=text]');
								if (!inputAdd.doesExist())
									inputAdd = ctn.parent('div').find(
											'input[type=text]')
								if (!inputAdd.doesExist())
									console
											.log("input setter of extra-blanks is missing")
								else {
									if (inputAdd.eq(0).val().length < minLengthTxt) {
										alert('Extra word is  empty or very short ')
									} else {
										if (ctn.find('span[name=piege]').length >= maxExtraBlank) {
											alert("You question is very hard, you cannot add more than "
													+ maxExtraBlank)
										} else {
											var tbdy = ctn.find('tbody');
											if (tbdy.length === 0) {
												$('<tbody></tbody').appendTo(
														ctn);
												tbdy = ctn.find('tbody')
											}
											var mwjoud = $('span[name=piege]')
													.searchengine(
															inputAdd.val(), '',
															false);
											if (mwjoud.length > 0
													&& mwjoud.length < 3) {
												var r = confirm("Extra-blank ("
														+ inputAdd.val()
														+ ")is duplicated. Do you want to add it again");
												if (r === true) {

													$(
															'<tr><td><span name="piege" class="qblank">'
																	+ inputAdd
																			.val()
																	+ '</span></td></tr>')
															.appendTo(tbdy)
												}
											} else if (mwjoud.length >= 3) {
												alert("Extra Blank is so duplicated ,Choose another :)")
											} else {
												$(
														'<tr><td><span name="piege" class="qblank">'
																+ inputAdd
																		.val()
																+ '</span></td></tr>')
														.appendTo(tbdy)
											}

										}

									}

								}

							})

		}

	}
	$.fn.playBlanks = function(i) {
		var jQTinyMCE = $('iframe:eq(1)').contents();
		var blkObservers = $.fn.blanksObservers;
		if (i % 2 === 0)
			for ( var key in blkObservers) {
				jQTinyMCE.find('span[id=' + key + ']').text(blkObservers[key]);

			}
		else {
			for ( var key in blkObservers) {

				jQTinyMCE.find('span[id=' + key + ']').text(
						blkObservers[key].replace(/./g, ".."))

			}

		}

	}
	$.fn.onCancelBlank = function() {
		var jQTinyMCE = 'iframe:eq(1)';

		$(jQTinyMCE).contents().find("body").delegate('span[id*=Blank]','click',function(e) {
					if (e.clientX > $(this).offset().left - 10
							&& e.clientX < $(this).offset().left + 10
							&& e.clientY > $(this).offset().top - 20
							&& e.clientY < $(this).offset().top + 20) {
						alert("Cancel Blank");
						$(this).text($.fn.blanksObservers[$(this).attr('id')])
						delete $.fn.blanksObservers[$(this).attr('id')]

						$(this).contents().unwrap('<span class="qblank" />');
						// $.fn.increment--;
					}
				})

	}

	$.fn.blanksObservers = new Array();
	$.fn.increment = 1;

	var mthdFixation={
			initfooter:function(args){
				var defau={
						'display' : 'inline',
						'position' : 'fixed'
					}
				return $.extend({}, defau, args);

			},initheader:function(parent,args){
				if(!parent){
					parent=$(document);
				}
				else if(typeof parent === 'string'){
					parent=$(parent);
				}

				var defau={
						'top': '0',
						'position' : 'fixed'
					}
				args.a=$.extend({}, defau, args);
				args.p=parent;
				return args;


			},cache:{
				prevStyleHeader:undefined
			}

	}
	$.fn.footerFix = function(args) {
		args=mthdFixation.initfooter(args);
		var jQ = $(this);
		jQ.css(args)

		$(window).resize(function(e) {
			var windHeight = $(window).height();
			var footerHeight = jQ.height();
			var offset = parseInt(windHeight) - parseInt(footerHeight);
			jQ.css('top', offset);
		});
		var windHeight = $(window).height();
		var footerHeight = jQ.height();
		var offset = parseInt(windHeight) - parseInt(footerHeight);
		jQ.css('top', offset);
		return jQ;

	};
	$.fn.headerFix = function(args,whenScroll,parent) {
		if(!whenScroll){
			whenScroll=0;
		}

		args=mthdFixation.initheader(parent, args).a;
		if(!mthdFixation.cache.prevStyleHeader){
			mthdFixation.cache.prevStyleHeader=$(this).css('position');
		}

		var jQ = $(this);


		$(window).scroll(function () {

            var height = $('body').height();
            var scrollTop = $(window).scrollTop();

              if(scrollTop>whenScroll){
            	  jQ.css(args);
            }
              else{
            	  jQ.css({top:whenScroll,'position':mthdFixation.cache.prevStyleHeader});
               }
        });


	};
	moveCaretToStart = function(el) {
		if (typeof el.selectionStart == "number") {
			el.selectionStart = el.selectionEnd = 0;
		} else if (typeof el.createTextRange != "undefined") {
			el.focus();
			var range = el.createTextRange();
			range.collapse(true);
			range.select();
		}
	}
	$.fn.moveCursorToStart = function() {
		var el = this;
		moveCaretToStart(el);

	}
	$.fn.moveCursorToEnd = function() {
		jQinput = $(this);
		var tmpStr = jQinput.val();
		jQinput.val('');
		jQinput.val(tmpStr);
	}
	$.fn.alternText = function(textOne, textTow, time) {
		setInterval(function() {
			setTimeout(function() {
				$(this).text(textOne)
			}, time);
			setTimeout(function() {
				$(this).text(textTow)
			}, time);
		}, time * 2)

	};

	/**
	 * Get identificator of HTml element or Jquery object
	 *  it seems such as xpath of HTML element
	 */


	$.fn.id=function(){
		var arr=[];
		if($(this).length>0){
			arr.push($(this).get(0).tagName.toLocaleLowerCase());
			$(this).parents().each(function(i,e){
				var ind=$(e).index();
				ind='['+ind+']';
				arr.push($(e).get(0).tagName.toLocaleLowerCase()+ind)});
			   arr.reverse();
		}

			return arr.join('//');

	};
	$.fn.path=$.fn.id;
	/**
	 * Full jquery selector of element
	 * @depend of $.id() jquery plugi
	 */
	$.fn.fullselector=function(){
		var arr=[];
		if($(this).get(0)){
			arr.push($(this).get(0).tagName.toLocaleLowerCase());
		}

		$(this).parents().each(function(i,e){
			//var ind=mthpathid.indexChildsametag($(e).parent(),$(e))
			var ind=$(e).index();
			ind=':eq('+ind+')';
			if($(e).get(0).tagName.toLocaleLowerCase()=='html'){
				arr.push($(e).get(0).tagName.toLocaleLowerCase()+ind)
			}else{
				arr.push(ind)
			}
			});arr.reverse();
			return arr.join('>');

	};
	 $.fn.attrs = function(attrs) {
	        var t = $(this);
	        if (attrs) {
	            // Set attributes
	            t.each(function(i, e) {
	                var j = $(e);
	                for (var attr in attrs) {
	                    j.attr(attr, attrs[attr]);
	                };
	            });
	            return t;
	        } else {
	            // Get attributes
	            var a = {},
	                r = t.get(0);
	            if (r) {
	                r = r.attributes;
	                for (var i in r) {
	                    var p = r[i];
	                    if (typeof p.nodeValue !== 'undefined') a[p.nodeName] = p.nodeValue;
	                }
	            }
	            return a;
	        }
	    };
	    var mthattrs$=['id','value','href','width','height','name','ping','download','min','poster','rel','src','link','rows','style','class','type']
	    for(var i$$=0;i$$<mthattrs$.length;i$$++ ){
	     window.setTimeout('$.fn.attr$'+mthattrs$[i$$]+'=function(val){if(val){return $(this).attr("'+mthattrs$[i$$]+'",val)}else{return $(this).attr("'+mthattrs$[i$$]+'")}};');
	    }

	/**
	 * Get position of cursor in textarea
	 */
	$.fn.pos = function() {
		function getCaret(el) {
			if (el.selectionStart) {
				return el.selectionStart;
			} else if (document.selection) {
				el.focus();

				var r = document.selection.createRange();
				if (r == null) {
					return 0;
				}

				var re = el.createTextRange(), rc = re.duplicate();
				re.moveToBookmark(r.getBookmark());
				rc.setEndPoint('EndToStart', re);

				return rc.text.length;
			}
			return 0;
		}
	}

	// JQuiz Factory
/**
 * @param action
 *            can be
 *            initGRAILS,init,initML,recompile,headerOption,addOption,deleteOption,help,update,UrlExists,addImage,addIMG,addVideo,addVDD,addAudio,parseST,parseCssClass,addTXT,addAsset,typeItem,typeItemsA,typeItemsB,typeItems,typeItemsQC,setAllTypes,isblankitem,addBlank,countTemplate,clearblankitem,navigatorsayswho,audioTagBrowser,videoTagBrowser,compatible,keys
 * @param questiontype
 *            can be :matching,mcq(QCM),scq(QCU),sequence
 * @param template
 *            can be 1,2,3... or all
 * @param options
 *            if(action=initGRAILS)=>
 *            option={mode:'edit',urlsave:'controller/action',urldelete:'controller/action',belongsto:2}
 *            mode=>'edit or create' urlsave => for ajax saving , urldelete=>for
 *            ajax deleting, belongsto=> id of question parent of qitems
 */
	$.fn.jquizfactory = function(action, questiontype, template,options) {

		if (!arguments[1]) {
			questiontype = "mcq"
		}
		if (!arguments[2]) {
			template = 1
		}
		($.fn.jQuizFactoryAllowedQtypes.indexOf(',' + questiontype + ',') !== -1) ? ($.fn.jQuizFactoryCurrentQType = questiontype)
				: ('')
		$.fn.jQuizFactoryContainer = $(this);
		return methodsJQuizFactory[action].apply(this, Array.prototype.slice
				.call(arguments, 1))
	}
	$.fn.jquizfactoryPartners = 'estifeda,proxym-it'
	var methodsproxypattern = {
		getCssInner : function() {
			var cssIn = {
				'display' : 'inline-block',
				'height' : '500px',
				'background-color' : 'white',
				'border' : '1px dashed #ccc',
				'width' : '50%',
				'margin' : 'auto',
				'margin-top' : '5%',
				'overflow-y' : 'auto',
				'z-index':'9999'
			};
			return cssIn;
		},
		statx:function(tmout,args){
			$('body>div.proxydpm').append($(this));
			$('body').addClass("loading");
		},
		start : function(tmout, duplicate,cssObject) {
			var cssFinal=$.extend(methodsproxypattern.getCssInner(), cssObject);
			cssFinal['z-index']='9999';
			$('body').addClass("loading");
			if ($.proxyJQ.length > 0) {
				if (duplicate !== undefined) {
					setTimeout(function() {
						(duplicate == false) ? $.proxyJQ.css(cssFinal)
								.removeClass().appendTo($('div.proxydpm'))
								: $.proxyJQ.css(cssFinal).clone().removeClass().appendTo(
												$('div.proxydpm'));

					}, 10)

				}

			}
			if (tmout !== 0) {
				setTimeout(function() {
					methodsproxypattern.end(0);
				}, tmout)
			}
            return $.proxyJQ;
		},
		/**
		 * cleanHTML ==> .html('')
		 */
		end : function(tmout,cleanHTML) {
		var toR=$('body>div.proxydpm>*');
			setTimeout(function() {
				$('body').removeClass("loading");
			}, tmout)
			  return toR;
		},
		init : function() {

			if ($('body> :last-child').get(0).tagName === 'DIV'
					&& $('body> :last-child').get(0).className === 'proxydpm') {
				$('body> :last-child').remove();
			}

			$('body').append('<div class="proxydpm" style="z-index:9999"></div>');
			  return $.proxyJQ;
		},endx : function(tmout,cleanHTML) {
			var toR=$('body>div.proxydpm>*');
			setTimeout(function() {

                 $('body>div.proxydpm').remove();
				$('body').removeClass("loading");
				if(cleanHTML){
					$.proxyJQCopy.html('');
				}

				if($.proxyJQIndexPrev===0){
					$.proxyJQCopy.prependTo($.proxyJQPrevParent);
				}else{
					$.proxyJQCopy.insertAfter($.proxyJQPrevParent.find('>*').eq($.proxyJQIndexPrev-1));
				}


			}, tmout)
			  return toR;
		}

	}

	/**
	 * Proxy Design pattern jquery plugin
	 *
	 * @author Abdennour
	 * @param action :
	 *            start or end
	 * @param tmout
	 *            :timout=> if(action==start) => timout to end and can be ever
	 *            if(action==end) => proxy DP will finish after tmout
	 *            $('div.newcontent').proxyDP('start','ever',true,cssObject)
	 *            $('div.newcontent').proxyDP('start','ever',true)
	 *            cssObject={'width':'900px','margin':'0 auto'};
	 *            $('').proxyDP('end',0);
	 */

	$.fn.proxyDP = function(action, tmout, duplicate,cssObject) {
		if ($(this).length > 0) {

			if(action!=='endx'){

				$.proxyJQ = $(this);
				$.proxyJQCopy=$(this).clone();
				$.proxyJQPrevParent=$(this).parent();
				$.proxtPrevStyle=$(this).attr('style');
				$.proxyJQIndexPrev= $(this).index();
			}

		}
		if (tmout === 'ever') {
			tmout = 0;

		}
		if (arguments.length == 0) {
			action = 'start'

		}

		methodsproxypattern.init();

		return methodsproxypattern[action].apply(this, Array.prototype.slice
				.call(arguments, 1))
	}
	$.proxyJQCopy=$('')
	$.proxyJQ = $('qsd')
   $.proxyJQPrevParent=$.proxyJQ.parent();
	$.proxyJQIndexPrev=0;
	$.proxtPrevStyle=''
	/**Preview as Firefox
	 *
	 */
	$.fn.preview=function(){

	}

	var mthuploadfile={withlog:false,
			log:function(e){
				if(mthuploadfile.withlog){
					console.log(e);
				}
			},
			init:function(args){
				var defl={
						progress:function(e){
						   mthuploadfile.log(e);
						},url:baseURL+'asset/upload'
				}
				return $.extend(deflt,args);
			}
	};
	$.fn.uploadfile=function(args){
		args=mthuploadfile.init(args);
		var fd = new FormData($(this)[0]);
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("start", uploadStart, false);
        xhr.upload.addEventListener("progress", uploadProgress, false);
        xhr.upload.addEventListener("load", uploadComplete, false);
        xhr.upload.addEventListener("error", uploadFailed, false);
        xhr.upload.addEventListener("abort", uploadCanceled, false);
        var uploadassetURL = args.url;
        req.onprogress=args.progress;
        xhr.open("POST", uploadassetURL);
        xhr.send(fd);
	}
	$.fn.nextWhile=function(selector){
		 var tmp=$(this).next(selector);
         var chld=undefined;
         while(tmp.length>0){
            if(chld ===undefined){
               chld=tmp;
            }else{
              chld=chld.add(tmp)
            }
              tmp=tmp.next(selector);
         }
         chld=(chld instanceof jQuery)?chld:$();
         return chld;
	};
	$.fn.scrollTo = function( target, options, callback ){
		  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
		  var settings = $.extend({
		    scrollTarget  : target,
		    offsetTop     : 50,
		    duration      : 500,
		    easing        : 'swing'
		  }, options);
		  return this.each(function(){
		    var scrollPane = $(this);
		    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
		    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
		    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
		      if (typeof callback == 'function') { callback.call(this); }
		    });
		  });
		};
		$.scrollDown=function(anim){
			if(!$.isScrollDown()){
				if(!anim){anim=0}
				$('html, body').animate({
					scrollTop:$(document).height()
				}, anim);
			}

		};
		$.isScrollDown=function(){
			return (parseInt($(window).scrollTop() + $(window).height()) == parseInt(document.height()))
		}
	$.fn.htmleach = function(wrap) {
		var all = '';
		if (arguments.length === 0) {
			wrap = '';
		}
		$(this).each(function(i, e) {
			if (arguments.length === 0) {
				all = all + $(e).html();
			} else {
				all = all + $(e).wrapAll(wrap).parent().html();
			}

		});
		return all;
	}

	$.fn.SyntaxHighlightercach = [];
	$.fn.SyntaxHighlighteri = 575757575;
	$.fn.SyntaxHighlighterj = $.fn.SyntaxHighlighteri;
	$.fn.SyntaxHighrefresh = function(timeoutorNbreLetter) {

		// arguments[0]={timeout:100,aftereach:5,keyCode:13}
		if ($.fn.SyntaxHighlighteri === $.fn.SyntaxHighlighterj) {
			$.fn.SyntaxHighlighteri = timeoutorNbreLetter;

		}
		if (i === 0) {
			$.fn.SyntaxHighlighteri = timeoutorNbreLetter;
			if ($.fn.SyntaxHighlightercach[$(this).selector] === undefined) {
				$.fn.SyntaxHighlightercach[$(this).selector] = $(this).attr(
						'class');
			}
			$(this).removeClass().removeAttr('style').addClass(
					$.fn.SyntaxHighlightercach[$(this).selector])
			$.SyntaxHighlighter.init({});
		} else {
			$.fn.SyntaxHighlighteri = $.fn.SyntaxHighlighteri - 1;

		}

	}

	$.fn.jQuizFactoryContainer = $('body')
	$.fn.jQuizFactoryImageExtension = "jpg,JPG,png,gif,jpeg"
	$.fn.jQuizFactoryVideoExtension = "wmv,mp4,avi"
	$.fn.jQuizFactoryAudioExtension = "mp3,wav,mpeg,ogg"
	$.fn.jQuizFactoryIncrument = 1;
	$.fn.jQuizFactoryCurrentQType = "";
	$.fn.jQuizFactoryAllowedQtypes = ",matching,qcm,mcq,scq,qcu,sequence"
	/**
	 * Cache & Compile SyntaxHighlight
	 */
	$.fn.snpmyjq
	$.fn.snpctns = [];
	$.fn.snpbefore;
	$.fn.snpafter;
	var methodssnipcach = {
		addone : function(jqthis, srccd, args) {
			var keygen = methodssnipcach.keyfy(jqthis, srccd, args)
			$.fn.snpbefore = jqthis
			if ($.fn.snpctns[keygen]) {
			} else {

				var mk = methodssnipcach.append(jqthis)
				mk.snippet(srccd, args);
				$.fn.snpctns[keygen] = $('body>:last-child').html();
				$('body>:last-child').remove();

			}
			jqthis.replaceWith($.fn.snpctns[keygen])
		},
		addonesess : function(jqthis, srccd, args) {
			var keygen = methodssnipcach.keyfy(jqthis, srccd, args)
			$.fn.snpbefore = jqthis
			if (sessionStorage.getItem(keygen)) {
			} else {

				var mk = methodssnipcach.append(jqthis)
				mk.snippet(srccd, args);
				sessionStorage.setItem(keygen, $('body>:last-child').html());

				$('body>:last-child').remove();

			}
			jqthis.replaceWith(sessionStorage.getItem(keygen))
		},
		local : function(srccd, args) {

			if ($.fn.snpmyjq.length == 1) {
				methodssnipcach.addone($.fn.snpmyjq, srccd, args);
			} else {

				$.fn.snpmyjq.each(function(i, e) {
					methodssnipcach.addone($(e), srccd, args);
				})
			}
		},
		session : function(srccd, args) {

			if ($.fn.snpmyjq.length == 1) {
				methodssnipcach.addonesess($.fn.snpmyjq, srccd, args);
			} else {
				$.fn.snpmyjq.each(function(i, e) {
					methodssnipcach.addonesess($(e), srccd, args);
				})
			}
		},
		append : function(jq) {
			var mk = jq.clone();
			mk.css('display', 'none');
			mk.appendTo($('body'));
			return mk;
		},
		unappend : function() {

		},
		keyfy : function(jq, src, args) {
			return jq.text() + JSON.stringify(args) + src;
		},
		getItems : function(srccd, args) {
			var keygen = srccd + JSON.stringify(args);
			return methodssnipcach.getvalues($.fn.snpctns, keygen);
		},
		getvalues : function(arr, keyctn) {
			var values = [];

			for ( var key in arr) {
				if (key.indexOf(keyctn) !== -1) {
					values.push(arr[key]);
				}
			}

			return values;
		}

	}
	/**
	 * @depend jquery.snippet.min.js / jquery.snippet.min.css
	 *         $('pre').snippetcache('addToCache','','java',{style:'ide-eclipse',box:"all"})
	 */
	$.fn.snippetcache = function(method, srccd, args) {
		if ($(this).length !== 0) {
			$.fn.snpmyjq = $(this);
			return methodssnipcach[method].apply(this, Array.prototype.slice
					.call(arguments, 1))
		}

	};


	/**
	 * Check answer : right answer ,wrong answer :
	 */
	var tickAnswerMeth={
			aliment:function(a,b){
				if(!a){
					a=b;

				}
				if(!b){
					b=a;
				}
				return a;
			},
			init:function(args){
				var defau = {
						isRight:true,
						rightImg : baseURL+'images/newcontent/tick.png',
						wrongImg : baseURL+'images/newcontent/untick.png',
						position:'right top',
						zIndex:'16',
						'z-index':'16',
						timeout:false
					}
				    args.zIndex=tickAnswerMeth.aliment(args['z-index'], args.zIndex);
					return $.extend({}, defau, args);
			},
			tick:function($th,args){
				$th.find('.tickuntickanswer').remove();
				var srcImg=args.wrongImg;
				if(args.isRight){
					srcImg=args.rightImg;
				 }

				$('<span class="tickuntickanswer" style="position:absolute;right:-5px;top:-5px;z-index:'+args.zIndex+';"><img src="'+srcImg+'"></span>').appendTo($th);
				var toREturn=$th.find('.tickuntickanswer');
				if($.position){
					toREturn.position({my: "center",at: args.position,of: $th});
				}
				if(args.timeout){
					setTimeout(function(){
						toREturn.remove();
					},args.timeout);
				}
				$.ticksAnswer.push(toREturn);
				return toREturn;

			},
			remove:function(){
				for(var i=0;i<$.ticksAnswer.length;i++){
                    $.ticksAnswer[i].remove()
				}
			}
	};
	$.ticksAnswer=[] ;
	 $.fn.tickAnswer=function(args){
		  if(args==='removeAll'){
			  tickAnswerMeth.remove();
		  }else{
			  args=tickAnswerMeth.init(args);
				 $(this).css('position','relative');
				 return tickAnswerMeth.tick($(this), args);
		  }

	 }

	/**
	 *
	 */



	$.fn.radioCheckCache=[];
	$.fn.radiocheck = function(classon, classoff, radio) {
		if (arguments.length === 1) {
			classon = classon + 'on';
			classoff = classon + 'off';
		}
		var alljq = $(this);
		if($.fn.radioCheckCache.indexOf(alljq.fullselector())!==-1){

		}else{
			$.fn.radioCheckCache.push(alljq.fullselector());
			$(document).delegate(alljq.selector, 'click', function() {
				if (radio === true) {
					if(classoff===''){
						$(alljq.selector).removeAttr('class');
					}else{
						$(alljq.selector).removeClass(classon).addClass(classoff);
					}

				}
				if(classoff===''){
					if ($(this).attr('class') === undefined) {
						$(this).addClass(classon);
					} else {
						$(this).removeAttr('class');
					}
				}else{
					if ($(this).attr('class') === classoff) {
						$(this).removeClass(classoff).addClass(classon)
					} else {
						$(this).removeClass(classon).addClass(classoff)
					}

				}


			});
		}


	}
	/**
	 * Used by $.fn.radiocheckx
	 */
	var mthdrdcheck = {
			args:{},
			log:function(obj){
				if(mthdrdcheck.args.log){
					console.log(obj)
				}
			},
			init : function(args) {
				var backn=function(index,e,es){mthdrdcheck.log(index);mthdrdcheck.log(e);mthdrdcheck.log(es);};
				var backf=function(index,e,es){mthdrdcheck.log(index);mthdrdcheck.log(e);mthdrdcheck.log(es);};
				if(args.classcommon){
					args.classon=args.classcommon+'on'
					args.classoff=args.classcommon+'off'
				}
				var defau = {
					classcommon : 'class',
					classon : 'classon',
					classoff : 'classoff',
					radio : true,
					backon : backn,
					backoff : backf,
					log:false,
					timeout:0
				}
				mthdrdcheck.args=$.extend({},defau, args);
				mthdrdcheck.log(mthdrdcheck.args);
				return mthdrdcheck.args;
			}
	}
	/**
	 * args={classon:'aaaon',classoff:'aaaoff',radio:false,backon:function(){},backoff:function(){},log:false}
	 * or
	 * args={classcommon:'aaa',radio:false,backon:function(){},backoff:function(){}}
	 */

	$.fn.radiocheckx = function(args) {
		args = mthdrdcheck['init'](args);
		var alljq = $(this);
			$.fn.radioCheckCache.push(alljq.fullselector());
			$(document).delegate(alljq.selector, 'click', function() {
				var that=$(this);
				setTimeout(function(){
					var selected=that;
					var index=selected.index();
					if (args['radio'] === true) {
						if(args['classoff']===''){
							$(alljq.selector).removeAttr('class');
						}else{
							$(alljq.selector).removeClass(args['classon']).addClass(args['classoff']);
						}

					}
					if(args['classoff']===''){
						if (selected.attr('class') === undefined) {
							selected.addClass(args['classon']);
							args['backon'](index,selected,alljq);
						} else {
							selected.removeAttr('class');
							args['backoff'](index,selected,alljq);
						}
					}else{
						if (selected.attr('class') === args['classoff']) {
							selected.removeClass(args['classoff']).addClass(args['classon']);
							args['backon'](index,selected,alljq);
						} else {
							selected.removeClass(args['classon']).addClass(args['classoff']);
							args['backoff'](index,selected,alljq);
						}

					}

				},args['timeout']);



			});

	};
	$.fn.toDataArray=function(){
		return $(this).data();
	};

	$.fn.formToObj=function(){
		var obj={};
		$('select,input[name],textarea[name]',$(this)).each(function(i,e){
			obj[$(e).attr('name')]=$(e).val();
		})
		return obj;
	}
	var mthdgrails = {
		init : function(args) {
			var defau = {
				url : 'controller/action',
				fnback : mthdgrails.initfnback,
				params : {},
				on : 'click',
				fnbefore : mthdgrails.initfnbefore,
				fnafter : mthdgrails.initfnafter,
				ctx : 'body'
			}
			return $.extend({}, defau, args);
		},
		decryptparams : function(jqthis, context, keyb) {
			var pp = JSON.parse(grailscache[keyb])
			var out;

			for ( var key in pp) {
				out = pp[key].indexOf('__outctx');
				if (out !== -1) {
					pp[key] = pp[key].substring(0, out);
					if (pp[key].indexOf('::') == -1) {
						pp[key] = $(pp[key]).val();
					} else {
						if (pp[key].split('::')[1].toLocaleLowerCase() === 'length') {
							pp[key] = $(pp[key].split('::')[0])[pp[key]
									.split('::')[1]]

						} else {
							pp[key] = $(pp[key].split('::')[0])[pp[key]
									.split('::')[1]]()

						}
					}

				} else {
					if (pp[key].indexOf('::') == -1) {
						pp[key] = jqthis.parents(context).find(pp[key]).val();
					} else {
						if (pp[key].split('::')[1].toLocaleLowerCase() === 'length') {
							pp[key] = jqthis.parents(context).find(
									pp[key].split('::')[0])[pp[key].split('::')[1]]

						} else {
							pp[key] = jqthis.parents(context).find(
									pp[key].split('::')[0])[pp[key].split('::')[1]]
									()

						}
					}
				}

			}
			console.log('after')
			console.log(pp['idexe'])
			return pp;
		},
		initfnback : function() {
			console.log('pass function call back to grails plugin')

		},
		initfnbefore : function() {
			$('').proxyDP('start', 'ever')
			return true;
		},
		initfnafter : function() {
			$('').proxyDP('end', 0);
			return true;
		},
		cleanparams : function(params) {
			for ( var key in params) {

			}

		},
		getcache : function(url, selector) {
			return $.fn.grailscache[url + selector]

		},
		setcache : function(url, selector, params) {
			$.fn.grailscache[url + selector] = params;
		}

	}
	/**Map name of INPUT to its value => {name1:val1,name2:val2}
	 * @see $.eachinarray
	 */
	$.fn.toJson=function(){
		var fn=function(e){if($(e).attr('type')==='checkbox'){return $(e).prop('checked')}else{return $(e).val()}}
		if($(this)[0].tagName=='INPUT'){
			return $(this).eachinarray('attr','name').toJsonWith($(this).toArray().map(fn));
		}
		return {};
	};

	$.fn.grails = function(args) {
		args = mthdgrails['init'](args);
		if (grailscache[args['url']] === undefined) {
			grailscache[args['url']] = JSON.stringify(args['params']);
		}
		$(document).delegate(
				$(this).selector,
				args['on'],
				function(e) {
					e.preventDefault();
					console.log('params idexe' + args['params']['idexe'])
					var pp = mthdgrails.decryptparams($(this), args['ctx'],
							args['url'])
					console.log(pp)
					var thi = $(this);
					if (args['fnbefore'](thi, args) === false) {

					}else{
						$.post(args['url'], pp, function(data) {
							  $.fn.grailsCurrentObject=data.object
								args['fnback'](data, thi, args);


						}).always(function() {
							args['fnafter'](thi,args);

						});

					}


				})

	};
        $.fn.readyx=function(fn,attempts,lg){
                                var $th=this;
				var selector=$($th).selector;
				if(typeof attempts === "undefined"){
                                    attempts=10;
                                }
				if ( $(selector).length > 0 || attempts===0 )
				{
                                     if(typeof fn ==="function"){
                                         fn.call($th);
                                     }

				}
				else
				{
                                    var att=attempts--;
                                    if(lg){
                                          console.log("Not Found:"+att)
                                     }

				    window.setTimeout(function(){$(selector).readyx(fn,att,lg)},100);

				}


        };
	$.fn.grailsCurrentObject=null;
	var mpreview={
			init:function(){


			}

	}
	$.fn.slidepreview=function(){
		$.fn.slidePreviewContainer=$(this);

	};

	$.fn.centredTo=function(jqTarget){
		var tmp={};
		if(! jqTarget instanceof jQuery){
			jqTarget=$(jqTarget);
		}
		tmp.left=jqTarget.offset().left+jqTarget.width()/2-$(this).width()/2
		tmp.top=jqTarget.offset().top+jqTarget.height()/2-$(this).height()/2
		$(this).offset(tmp);
		return $(this);
	};

	/**
	 * @param arguments :click, mouseenter
	 */
	$.fn.resizeiframe=function(){
		$(this).load(function() {
		    $(this).height( $(this).contents().find("body").height() );
		});

		var $th=$(this);
	   $th.attr('frameborder',"0").attr('width',"100%").attr('marginheight','0').attr('marginwidth','0').attr('scrolling','no');

		var events=[];
		//events.push('load');
		if(arguments.length>0){
			for(var i=0;i<arguments.length;i++){
				events.push(arguments[i]);
			}
		};
		var evv=events.join(' ');
		$(document).delegate($th,evv,function(){
			$(this).height( $(this).contents().find("body").height() );
		});

	};
	$.fn.slidePreviewContainer;
	$.fn.myraty = function(scre) {
		if (arguments.length === 0) {
			scre = 0;
		}

		if($('[name=hint]').length===0){
			$('<input type="hidden" name="hint" />').insertAfter($(this));
		}
		$(this).raty(
				{
					cancel : true,
					number : 5,
					score : scre,
					cancelOff : baseURL
							+ 'libs/jquery/ratyBEST/img/cancel-off-big.png',
					cancelOn : baseURL
							+ 'libs/jquery/ratyBEST/img/cancel-on-big.png',
					half : false,
					size : 48,
					starHalf : baseURL
							+ 'libs/jquery/ratyBEST/img/star-half-big.png',
					starOff : baseURL
							+ 'libs/jquery/ratyBEST/img/star-off-big.png',
					starOn : baseURL
							+ 'libs/jquery/ratyBEST/img/star-on-big.png',
					target : '[name=hint]',
					targetType : 'number',
					targetKeep : true

				});

	}
	$.fn.jQuizRTEIncrument=0;
	$.fn.jQuizRTEOptions={}
	$.fn.jquizrte=function(action,options){
		return methodsJQuizRTE[action].apply(this, Array.prototype.slice
				.call(arguments, 1))

	}
	$.fn.tinystatement = function() {
		$(this)
				.tinymce(
						{
							// Location of TinyMCE script
							script_url : baseURL + 'libs/tiny/js/tiny_mce.js',
							// General options
							mode : 'exact',
							theme : "advanced",
							skin : "cirkuit",
							// highcontrast,o2k7,thebigreason
							plugins : "autoresize,autolink,lists,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,advlist",
							// Theme options
							width : '100%',
							height : '100%',
							// autoresize_min_height: 300,
							// theme_advanced_resizing : true,

							noneditable_leave_contenteditable : true,
							theme_advanced_buttons1: "bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,fontselect,fontsizeselect",
// theme_advanced_buttons2:
// "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",
		                    theme_advanced_buttons2: "mlib,|,cut,copy,paste,pastetext,pasteword,|,search,replace,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,|,preview,|,forecolor,backcolor",

							theme_advanced_toolbar_location : "top",
							theme_advanced_toolbar_align : "left",
							theme_advanced_statusbar_location : "bottom",
							theme_advanced_buttons2_add_after : "tablecontrols",
							// theme_advanced_resizing: true,
							// Example content CSS (should be your site CSS)
							content_css : baseURL
									+ "css/css.jTdrees-tinymce-2.3.css",
							// Drop lists for link/image/media/template dialogs
							template_external_list_url : "lists/template_list.js",
							external_link_list_url : "lists/link_list.js",
							external_image_list_url : "lists/image_list.js",
							media_external_list_url : "lists/media_list.js",

							init_instance_callback : function(inst) {

							},
							// Replace values for the template plugin
							template_replace_values : {
								username : "Abdennour TOUMI",
								staffid : "991234"
							},
							setup : function(ed) {
								// Add a custom button
								ed
										.addButton(
												'addblanks',
												{
													title : 'Add Blanks',
													image : baseURL
															+ 'libs/estifeda/img/blankTiny.png',
													onclick : function() {
														console
																.log(ed.selection
																		.getEnd())
														console
																.log(ed.selection
																		.getStart())
														$('').blankit(ed);
														for ( var key in ed.selection) {

															// console.log(key)

														}

														ed.focus();
														// alert(ed.getNode().nodeName)
														// alert($(ed.getContent()).text());
														// $('').blankitOut(ed);
														// $('').pgptiny('theorem',ed)

													}
												});
							}

						});

	}
	$.fn.tinymatching = function() {
		$(this)
				.tinymce(
						{
							// Location of TinyMCE script
							script_url : baseURL + 'libs/tiny/js/tiny_mce.js',
							// General options
							mode : 'exact',
							theme : "advanced",
							skin : "cirkuit",
							// highcontrast,o2k7,thebigreason
							plugins : "autoresize,autolink,lists,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,advlist",
							// Theme options
							width : '100%',
							height : '100%',
							// autoresize_min_height: 300,
							// theme_advanced_resizing : true,

							noneditable_leave_contenteditable : true,
							theme_advanced_buttons1 : "addblanks,undo,redo,|,save,|,bold,cut,copy,paste,|,fontsizeselect",
							theme_advanced_toolbar_location : "top",
							theme_advanced_toolbar_align : "left",
							theme_advanced_statusbar_location : "bottom",
							theme_advanced_buttons2_add_after : "tablecontrols",
							// theme_advanced_resizing: true,
							// Example content CSS (should be your site CSS)
							content_css : baseURL
									+ "css/css.jTdrees-tinymce-2.3.css",
							// Drop lists for link/image/media/template dialogs
							template_external_list_url : "lists/template_list.js",
							external_link_list_url : "lists/link_list.js",
							external_image_list_url : "lists/image_list.js",
							media_external_list_url : "lists/media_list.js",

							init_instance_callback : function(inst) {

							},
							// Replace values for the template plugin
							template_replace_values : {
								username : "Abdennour TOUMI",
								staffid : "991234"
							},
							setup : function(ed) {
								// Add a custom button
								ed
										.addButton(
												'addblanks',
												{
													title : 'Add Blanks',
													image : baseURL
															+ 'libs/estifeda/img/blankTiny.png',
													onclick : function() {
														console
																.log(ed.selection
																		.getEnd())
														console
																.log(ed.selection
																		.getStart())
														$('').blankit(ed);
														for ( var key in ed.selection) {

															// console.log(key)

														}

														ed.focus();
														// alert(ed.getNode().nodeName)
														// alert($(ed.getContent()).text());
														// $('').blankitOut(ed);
														// $('').pgptiny('theorem',ed)

													}
												});
							}

						});

	};
	/**
	 * jqFunction : append,insertAfter
	 */
	$.fn.addPdf=function(src,jqFunction){
		var tagpdf='<embed width="100%" height="100%" name="plugin" src="'+src+'" type="application/pdf">';
		if($(this).length===0){
			$('embed').attr('src',src);
		}else{
			if(jqFunction==='append'){
				$(this).append(tagpdf)
			}else if(jqFunction==='insertAfter'){
				$(tagpdf).insertAfter($(this))
			}
		   else if(jqFunction==='replaceWith'){
			$(this).replaceWith($(tagpdf));
		   }
			else{
				$(this).html(tagpdf);
			}
		}


	}
	$.fn.screenshot=function(appendTo,w,h){
		var target = appendTo;
		   html2canvas(target, {
		     onrendered: function(canvas) {
		     var data = canvas.toDataURL();
		     alert(data);
		     $(this).append("<img src="+data+" />");
		   }
		 });
	    /*
		 * html2canvas(appendTo, { onrendered: function(canvas) { var data =
		 * canvas.toDataURL(); $(this).appendTo('<img
		 * style="width:60px;height:60px" src="'+data+'">'); }, width: w,
		 * height: h });
		 */

	};
	$.fn.myTree=function(currentNode,currentHiddenId){

		$(this).dynatree({
			onActivate: function(node) {
	            // A DynaTreeNode object is passed to the activation handler
	            // Note: we also get this event, if persistence is on, and the page is reloaded.
				$('#viewerchaptertitle').html(node.data.title);
				currentNode=node;
				if(node.data.title.indexOf('<input') !==-1){
					currentHiddenId=$($(node.data.title.reduceWhiteSpace())[1]).val();
				}
	            //alert("You activated " + node.data.title);
	        }
		});

	};
	$.fn.triggerOption=function(fn){
		   if(typeof(fn)!='function'){
			   var f=function(){console.error('is not function')}
			   fn=f;
		   }
		   if($(this).length>0){
			   var pr=$(this).parent();
				if($(this).get(0).tagName.toLowerCase()==='option'){

					$(this).attr("selected", "selected");

					pr.children('option').each(function() {
			            if ($(this).is(':selected'))
			            { $(this).trigger('change');  }
			        });
				}else if($(this).get(0).tagName.toLowerCase()==='select'){
					var all=$(this);
					all.each(function(i,e){
						$(e).children('option').each(function(j,f) {
				            if ($(f).is(':selected'))
				            { $(f).trigger('change');  }
				        });
					});

				}
		   }

		fn($(this));


	};
	$.zIndexs=function(){
		var zindexs=[0];$('*').each(function(i,e){if(isFinite($(e).css('z-index'))){zindexs.push(parseInt($(e).css('z-index')))}})
	     return zindexs.sort(function(a,b){return a-b});
	};
	$.zIndexMax=function(){
		return $.zIndexs().max();
	};
	$.zIndexMin=function(){
		return $.zIndexs().min();
	};
	$.fn.isSelected=function(){
		var all=$(this);

		var tests=[];

		var slc;
		all.each(function(i,e){
			if($(e).get(0).tagName.toLowerCase()==='select'){
				slc=$(e).find(':selected');
				tests.push(slc.text()!=="" && slc.val()!=="");
			}

		});

		if(tests.indexOf(false)!==-1){
			return false;
		}

		return true;


	};
	/**
	 * classBTertib=table
	 */
	$.fn.toggleClasses = function(classBTertib) {
		var current = $(this).attr('class')
		var position = classBTertib.indexOf(current)
		if (position !== -1) {
			if (position + 1 === classBTertib.length) {
				$(this).attr('class', classBTertib[0]);
			} else {
				$(this).attr('class', classBTertib[position + 1]);
			}

		} else {
			$(this).attr('class', classBTertib[0]);

		}
	};
	/**
	 * example : /js/punity/punity.js
	 */
	$.fn.toggleGeneral=function(attr,values,fn){
	      if(!fn){
	        fn='attr';
	      }
	          var current=$(this)[fn](attr),idx=values.indexOf(current);
	          if(idx==-1){
	           $(this)[fn](attr,values[0])
	          }else{
	              if(idx=values.length-1){
	              $(this)[fn](attr,values[0])
	              }else{
	                    $(this)[fn](attr,values[idx+1]);
	              }
	          }

	   };
	   /**
	    * $('table#yourTable').column(2);
	    */
	     $.fn.column =function(index){
	    	var that=$(this),tgName=that[0].tagName;
	    	if(tgName=='TR'){
	    		that=that.parents('table:first');
	    		tgName=that[0].tagName;
	    	}
	    	if(tgName=='TABLE'){
	    		return $('td:nth-child('+(index)+')',that);
	    	}

	     };

	     $.fn.switchColumns=function(idx1,idx2){
	         var cl1=$(this).column(idx1),cl2=$(this).column(idx2);
	         cl1.each(function(i,e){
	              var cache=$(e).clone(),cache2=cl2.eq(i).clone();
	              cl2.eq(i).replaceWith(cache);
	              $(e).replaceWith(cache2)
	         })

	    };

	   $.fn.mouselongpress=function(fn,timer){
		   var that=this;
		   if(!timer){timer=1000;}
		   var pressTimer='';
		   $(that).mouseup(function(){
				  clearTimeout(pressTimer)

				  return false;
				}).mousedown(function(e){
				  pressTimer = window.setTimeout(function() {fn.call(that,e)},timer)
				  return false;
				});
		   return $(that);
	   };

	    $.fn.longclick=$.fn.mouselongpress;

	    /**
	     * -- DATALIST plugin http://jsfiddle.net/abdennour/t3bxpfcy/
	     */
	    $.fn.changeDL=function(fnback){
	        var $t=this;
	            $('input[list='+$($t).attr('id')+']').bind('input',function(e){
	             var val=$(this).val();
	             fnback.call($('option[value="'+val+'"]',$($t))[0],e)

	        })

	   };
	    //-------------------------------------------
	   $.fn.countUp=function(to,timer,from){
		   var $th=$(this); var mth='html';
		   if(!from){from=0;}
		   if(!timer){timer=50;}
		   if($th[0].tagName==='INPUT'){
			   mth='val'
		   }
		   $th[mth](from);
		   var i=from;
		   var iii=setInterval(function(){
			   if(i<=to){
				   $th[mth](i);
				   i++;
			   }else{
				   clearInterval(iii);
			   }
		   },timer);




	   };

	$.fn.appendToWithIndex=function(to,index){
		if(! to instanceof jQuery){
			to=$(to);
		};
		if(index===0){
			$(this).prependTo(to)
		}else{
			if(to.children().eq(index-1)){
				$(this).insertAfter(to.children().eq(index-1));
			}else{
				$(this).appendTo(to);
			}

		}
		return $(this);
	};


   $.fn.isChecked=function(atLeast){
	   var tests=[]
	   if($(this).length===0){
		   return false;
	   }else{
		   if($(this).get(0).tagName==='INPUT'){
			   var all=$(this);
			   all.each(function(i,e){
				   tests.push($(e).is(':checked'));
			   });
			   if(atLeast==undefined || atLeast===-1){
				   return !tests.contains(false)
			   }else{
				   return tests.frequencies()[true]>= atLeast
			   }

		   }else{
			   return false;
		   }
	   }

   };
   var mthchecked={
		   chkback:function(e,i){
			   return $(e);
		   },
		   extend:function(fn){
			   var nrut=mthchecked.chkback
			   if(typeof fn ==='function'){
				   if(fn.length>=1){
					   nrut=fn
				   }
			   }
			   return nrut;
		   }
   };
   /**
    * pluck with callback : exemple
    * function(i,e){return $(e).val();
    *
    * $(':checkbox').pluck(function(e,i){if($(e).is(:checked)){return $(e).val()}});
    *
    */
   $.fn.pluck=function(fnback){
	   var tmp=[];
	   fnback=mthchecked.extend(fnback)
	   $(this).each(function(i,e){

		   tmp.push(fnback(e,i));
	   });
	   return tmp;
   };
   $.fn.checked=function(fn){
	   var tmp=[];
	   fn=mthchecked.extend(fn);
	   $(this).each(function(i,e){
			   if($(e).is(':checked')){
				   tmp.push(fn(e,i));
			   }

	   });
	   return tmp;
   }
   $.fn.trim=function(helper){
	   if(!helper){
		  var mp={'INPUT':'val',TEXTAREA:'val',OPTION:'html',P:'html',DIV:'html'}
		  if(mp[this.tagName]){helper=mp[this.tagName]}
		  else{helper='html'}
	   }
	   if(helper=='val'){return $(this)[helper]($(this)[helper]().trim());}
	   else{return $(this)[helper]($(this)[helper]().replaceAll('&nbsp;',' ').trim());}

   };
   $.fn.toggleCheck=function(){
	   var all=$(this);
	   all.each(function(i,e){
		   if(e.tagName==='INPUT'){
			   $(e).prop('checked', !($(e).is(':checked')));
		   }
	   });


   };
   var mthflshclss={
		   logscache:[],
		   cache:[""],
		   caching:function(jq){
			   mthflshclss.cache.push(jq.fullselector());
		   },
		   uncaching:function(jq){
			   mthflshclss.cache.remove(jq.fullselector());
		   },
		   args:{},
		   log:function(obj){
			   if(mthflshclss.logscache[mthflshclss.args['$this'].fullselector()]){
				   console.log(obj);
			   }
		   },
		   init:function(options,$this){
			   mthflshclss.caching($this);
			   var defau = {
						classes:['',''],
						timeout:5000,
						timer:1000,
			            onfinish:function($this,timeout){},
			            log:false,
			            $this:$this
					};

			     mthflshclss.args=$.extend({}, defau, options);
			     mthflshclss.addlog();
				return mthflshclss.args;
		   },exist:function(jq){
			   return (mthflshclss.cache.indexOf(jq.fullselector())) !== -1;

		   },addlog:function(){
			   mthflshclss.logscache[mthflshclss.args['$this'].fullselector()]=mthflshclss.args['log'];
			   mthflshclss.log(mthflshclss.logscache);
		   }
   };

   $.fn.flashingClass=function(args){
	   var fshClassInc=0;

	   var $th=$(this),that=this;
	   if(!mthflshclss.exist($th)){
           args=mthflshclss.init(args,$th);

		   var refreshIntervalId=setInterval(function(){
			   // toggle the class every five second
			   if(fshClassInc===args['classes'].length){
				   fshClassInc=0;
			   }
			   mthflshclss.log('interval#inc='+fshClassInc);
			   $th.removeClass().addClass(args['classes'][fshClassInc++]);
			   mthflshclss.log('interval#class='+$th.attr('class'));
			   setTimeout(function(){
				   if(fshClassInc===args['classes'].length){
					   fshClassInc=0;
				   }
				   mthflshclss.log('time#inc='+fshClassInc);
				   $th.removeClass().addClass(args['classes'][fshClassInc++]);
				   mthflshclss.log('tim#class='+$th.attr('class'));
			   },args['timer']/2);

			},args['timer']);

			   if(args['timeout']!==-1){

				   setTimeout(function(){clearInterval(refreshIntervalId);mthflshclss.uncaching($th);
				   args['onfinish'].call(that,args['timeout'])},args['timeout']);
			   }
	   }



   };
   $.fn.jqtiny=function(){

	     if($(this).get(0).tagName==='TEXTAREA'){

	            return $(this).prev().find('iframe').contents();


	       };
	};

	$.fn.htmltiny=function(html){

	       if($(this).get(0).tagName==='TEXTAREA'){
	            if(html){
	            	$(this).jqtiny().find('body').html(html);
	            	return $(this);
	            }else{
	            	return $(this).jqtiny().find('body').html();
	            }



	       }  ;


	};
	/**
	 * @param arraySettings=['Times New Roman','12pt']
	 *  fontsize , fontfamily  {attr:,val:}
	 *  [{attr:'fontsize',val:'12pt'},{attr:'fontfamily',val:'Times New Roman'}]
	 */
	$.tinySetting=function(arraySettings){
		if(!arraySettings){
			arraySettings=[{attr:'fontsize',val:'12pt'},{attr:'fontfamily',val:'Times New Roman'}];
		}
		var idx;
		$('button[id*=open]').each(function(i,e){

			idx=arraySettings.pluck('attr').indexOf($('span',$(e)).html().noSpace().toLowerCase());
			if(idx!==-1){
				console.log(idx)
				console.log($(e));
			     $(e).trigger('click');
			     $('span[class=mce-text][id^=mce]').each(function(j,f){
					   if(arraySettings.pluck('attr').indexOf($(f).html().noSpace().toLowerCase())!==-1){

					              $(f).parent().trigger('click');

					   }


					});
			}

		});

	};
	$.fn.tinyauthoring = function() {
		$(this)
				.tinymce(
						{
							// Location of TinyMCE script
							script_url : baseURL + 'libs/tiny/js/tiny_mce.js',
							// General options
							mode : 'exact',
							theme : "advanced",
							skin : "cirkuit",
							// highcontrast,o2k7,thebigreason
							plugins : "autoresize,autolink,lists,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,advlist",
							// Theme options
							width : '100%',
							height : '100%',
							// autoresize_min_height: 300,
							// theme_advanced_resizing : true,

							// noneditable_leave_contenteditable : true,
							theme_advanced_buttons1: "bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,fontselect,fontsizeselect",
// theme_advanced_buttons2:
// "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",
		                    theme_advanced_buttons2: "mlib,|,cut,copy,paste,pastetext,pasteword,|,search,replace,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,|,preview,|,forecolor,backcolor",
		                    // theme_advanced_buttons3:
							// "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,iespell,media,advhr,|,print,|,ltr,rtl,|,fullscreen",
		                    // theme_advanced_buttons4:
							// "insertlayer,moveforward,movebackward,absolute,|,styleprops,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,pagebreak",
		                    // theme_advanced_buttons5:
							// "pgptheorem,pgpnote,pgpdefinition",

		                    theme_advanced_buttons3: "pgpdef,pgpatt,pgpnote,pgperror,|,|,pgpth,pgpproof,pgpcorollary,pgpaxiom,pgpparadox,pgplem,|,|,pgpsrccd,|,|,|,pgpobserv,,pgpexperience,pgphypoth",
							theme_advanced_toolbar_location : "top",
							theme_advanced_toolbar_align : "left",
							theme_advanced_statusbar_location : "bottom",
							theme_advanced_buttons2_add_after : "tablecontrols",
							// theme_advanced_resizing: true,
							// Example content CSS (should be your site CSS)
							content_css : baseURL
									+ "css/css.jTdrees-tinymce-2.3.css",
							// Drop lists for link/image/media/template dialogs
							template_external_list_url : "lists/template_list.js",
							external_link_list_url : "lists/link_list.js",
							external_image_list_url : "lists/image_list.js",
							media_external_list_url : "lists/media_list.js",

							init_instance_callback : function(inst) {

							},
							// Replace values for the template plugin
							template_replace_values : {
								username : "Abdennour TOUMI",
								staffid : "991234"
							},
							setup : function(ed) {

								 ed.addButton('mlib', {
				                     title: 'Media Library',
				                     image:  icomlurl,
				                     onclick: function() {
				                         // Add you own code to execute
											// something on click
				                         ed.focus();
				                         // $(ed.selection.getContent()).pgp('theorem')
				                         // ed.selection.setContent('Hello
											// world!');
				                         // ed.selection.setContent('<div
											// class=\"pgp\">'+
											// ed.selection.getContent() +
											// '</div>')
				                         // ed.undoManager.add();
				                         showMediaLibrary(function(){


				                         })



				                     }
				                 });
				                 // Add a custom button
				                 ed.addButton('pgpth', {
				                     title: 'pgp theorem',
				                     image:  baseURL+'libs/estifeda/img/ico_pgptheorem.png',
				                     onclick: function() {
				                         // Add you own code to execute
											// something on click
				                         ed.focus();
				                         // $(ed.selection.getContent()).pgp('theorem')
				                         // ed.selection.setContent('Hello
											// world!');
				                         // ed.selection.setContent('<div
											// class=\"pgp\">'+
											// ed.selection.getContent() +
											// '</div>')
				                         // ed.undoManager.add();

				                         $('').pgptiny('theorem', ed);


				                     }
				                 });
				                 ed.addButton('pgpnote', {
				                     title: 'pgp note',
				                     image:  baseURL+'libs/estifeda/img/ico_pgpnote.png',
				                     onclick: function() {

				                         ed.focus();


				                         $('').pgptiny('note', ed);


				                     }
				                 });
				                 ed.addButton('pgpdef', {
				                     title: 'pgp definition',
				                     image:  baseURL+'libs/estifeda/img/ico_pgpdefinition.png',
				                     onclick: function() {
				                         // Add you own code to execute
											// something on click
				                         ed.focus();
				                         // $(ed.selection.getContent()).pgp('theorem')
				                         // ed.selection.setContent('Hello
											// world!');
				                         // ed.selection.setContent('<div
											// class=\"pgp\">'+
											// ed.selection.getContent() +
											// '</div>')

				                         $('').pgptiny('definition', ed);


				                     }
				                 });
				                 ed.addButton('pgpatt', {
				                     title: 'pgp Attention',
				                     image:  baseURL+'libs/estifeda/img/ico_pgpattention.png',
				                     onclick: function() {
				                         // Add you own code to execute
											// something on click
				                         ed.focus();
				                         // $(ed.selection.getContent()).pgp('theorem')
				                         // ed.selection.setContent('Hello
											// world!');
				                         // ed.selection.setContent('<div
											// class=\"pgp\">'+
											// ed.selection.getContent() +
											// '</div>')

				                         $('').pgptiny('attention', ed);


				                     }
				                 });
				                 ed.addButton('pgpsrccd', {
				                     title: 'pgp Source Code',
				                     image:  baseURL+'libs/estifeda/img/ico_pgpsource_code.png',
				                     onclick: function() {
				                         // Add you own code to execute
											// something on click
				                         ed.focus();
				                         // $(ed.selection.getContent()).pgp('theorem')
				                         // ed.selection.setContent('Hello
											// world!');
				                         // ed.selection.setContent('<div
											// class=\"pgp\">'+
											// ed.selection.getContent() +
											// '</div>')

				                         $('').pgptiny('pgpsource_code', ed);


				                     }
				                 });
				                 ed.addButton('pgperror', {
				                     title: 'pgp Error to avoid',
				                     image:  baseURL+'libs/estifeda/img/ico_pgperror.png',
				                     onclick: function() {
				                         // Add you own code to execute
											// something on click
				                         ed.focus();
				                         // $(ed.selection.getContent()).pgp('theorem')
				                         // ed.selection.setContent('Hello
											// world!');
				                         // ed.selection.setContent('<div
											// class=\"pgp\">'+
											// ed.selection.getContent() +
											// '</div>')

				                         $('').pgptiny('error', ed);


				                     }
				                 });
				                 ed.addButton('pgpproof', {
				                     title: 'pgp Proof',
				                     image:  baseURL+'libs/estifeda/img/ico_pgpproof.png',
				                     onclick: function() {
				                         // Add you own code to execute
											// something on click
				                         ed.focus();
				                         // $(ed.selection.getContent()).pgp('theorem')
				                         // ed.selection.setContent('Hello
											// world!');
				                         // ed.selection.setContent('<div
											// class=\"pgp\">'+
											// ed.selection.getContent() +
											// '</div>')

				                         $('').pgptiny('proof', ed);


				                     }
				                 });
				                 ed.addButton('pgplem', {
				                     title: 'pgp Lemma:a minor result whose sole purpose is to help in proving a theorem',
				                     image:  baseURL+'libs/estifeda/img/ico_pgplemma.png',
				                     onclick: function() {
				                         // Add you own code to execute
											// something on click
				                         ed.focus();
				                         // $(ed.selection.getContent()).pgp('theorem')
				                         // ed.selection.setContent('Hello
											// world!');
				                         // ed.selection.setContent('<div
											// class=\"pgp\">'+
											// ed.selection.getContent() +
											// '</div>')

				                         $('').pgptiny('lemma', ed);


				                     }
				                 });
				                 ed.addButton('pgpcorollary', {
				                     title: 'pgp Corollary:a result in which the (usually short) proof relies heavily on a given theorem (we often say that Ã¢â‚¬Å“this is a corollary of Theorem AÃ¢â‚¬Â).',
				                     image:  baseURL+'libs/estifeda/img/ico_pgpcorollary.png',
				                     onclick: function() {
				                         // Add you own code to execute
											// something on click
				                         ed.focus();
				                         // $(ed.selection.getContent()).pgp('theorem')
				                         // ed.selection.setContent('Hello
											// world!');
				                         // ed.selection.setContent('<div
											// class=\"pgp\">'+
											// ed.selection.getContent() +
											// '</div>')

				                         $('').pgptiny('corollary', ed);


				                     }
				                 });
				                 ed.addButton('pgpaxiom', {
				                     title: 'pgp Axiom/Postulate Ã¢â‚¬â€ a statement that is assumed to be true without proof. These are the basic building blocks from which all theorems are proved',
				                     image:  baseURL+'libs/estifeda/img/ico_pgpaxiom.png',
				                     onclick: function() {
				                         // Add you own code to execute
											// something on click
				                         ed.focus();
				                         // $(ed.selection.getContent()).pgp('theorem')
				                         // ed.selection.setContent('Hello
											// world!');
				                         // ed.selection.setContent('<div
											// class=\"pgp\">'+
											// ed.selection.getContent() +
											// '</div>')

				                         $('').pgptiny('axiom', ed);


				                     }
				                 });
				                 ed.addButton('pgpparadox', {
				                     title: 'pgp PARADOX Ã¢â‚¬â€ a statement that can be shown, using a given set of axioms and definitions, to be both true and false. Paradoxes are often used to show the inconsistencies in a flawed theory',
				                     image:  baseURL+'libs/estifeda/img/ico_pgpparadox.gif',
				                     onclick: function() {
				                         // Add you own code to execute
											// something on click
				                         ed.focus();
				                         // $(ed.selection.getContent()).pgp('theorem')
				                         // ed.selection.setContent('Hello
											// world!');
				                         // ed.selection.setContent('<div
											// class=\"pgp\">'+
											// ed.selection.getContent() +
											// '</div>')

				                         $('').pgptiny('paradox', ed);


				                     }
				                 });
				                 ed.addButton('pgpobserv', {
				                     title: 'pgp observe',
				                     image:  baseURL+'libs/estifeda/img/ico_pgpobserv.jpg',
				                     onclick: function() {
				                         // Add you own code to execute
											// something on click
				                         ed.focus();
				                         // $(ed.selection.getContent()).pgp('theorem')
				                         // ed.selection.setContent('Hello
											// world!');
				                         // ed.selection.setContent('<div
											// class=\"pgp\">'+
											// ed.selection.getContent() +
											// '</div>')

				                         $('').pgptiny('observ', ed);


				                     }
				                 });
				                   ed.addButton('pgpexperience', {
				                     title: 'pgp experience',
				                     image:  baseURL+'libs/estifeda/img/ico_pgpexperience.png',
				                     onclick: function() {
				                         // Add you own code to execute
											// something on click
				                         ed.focus();
				                         // $(ed.selection.getContent()).pgp('theorem')
				                         // ed.selection.setContent('Hello
											// world!');
				                         // ed.selection.setContent('<div
											// class=\"pgp\">'+
											// ed.selection.getContent() +
											// '</div>')

				                         $('').pgptiny('experience', ed);


				                     }
				                 });
				                   ed.addButton('pgphypoth', {
				                     title: 'pgp hypothesis',
				                     image:  baseURL+'libs/estifeda/img/ico_pgphypothesis.png',
				                     onclick: function() {
				                         // Add you own code to execute
											// something on click
				                         ed.focus();
				                         // $(ed.selection.getContent()).pgp('theorem')
				                         // ed.selection.setContent('Hello
											// world!');
				                         // ed.selection.setContent('<div
											// class=\"pgp\">'+
											// ed.selection.getContent() +
											// '</div>')

				                         $('').pgptiny('hypothesis', ed);


				                     }
				                 });
				                 // pgpsrccdc,pgpsrccdcpp,pgpsrccdjava,pgpsrccdobjc,pgpsrccdhtml,pgpsrccdphp,pgpsrccdcs,pgpsrccdpy
				              ed.addButton('pgpsrccdc', {
				              title: 'pgp C Source Code',
				              image: baseURL+'libs/estifeda/img/ico_pgpsource_code_c.png',
				              onclick: function() {
				                  // Add you own code to execute something on
									// click
				                  ed.focus();
				                  // $(ed.selection.getContent()).pgp('theorem')
				                  // ed.selection.setContent('Hello world!');
				                  // ed.selection.setContent('<div
									// class=\"pgp\">'+
									// ed.selection.getContent() + '</div>')

				                 // $('').pgptiny('srcc', ed);
				                  newSRCjq=_(newSRCjq).stripTags()
				                  var newSRCjq='<div class="pgp"><pre id="s1" class="highlight">'+ ed.selection.getContent() + '</pre></div>';
				                  // newSRCjq=$(newSRCjq).snippet("java",{style:'kwrite',box:"1"});
				                  ed.selection.setContent(newSRCjq);
				                  // $('iframe').contents().find('#s1').snippet("java",{style:'kwrite',box:"1"});
				                 /** ****************************** */
				                 // $('iframe').contents().find('#s1').SyntaxHighrefresh(0);
				                 // $(newSRCjq).SyntaxHighrefresh(0);
				                  // $.SyntaxHighlighter.init({})
				                  // console.log(newSRCjq)
				                  $('iframe').contents().find('#s1').snippetcache('local','java',{style:'ide-eclipse',box:"all"})
				              }
				          });
				                  ed.addButton('pgpsrccdcpp', {
				                     title: 'pgp C++ Source Code',
				                     image:  baseURL+'libs/estifeda/img/ico_pgpsource_code_cpp.png',
				                     onclick: function() {
				                         // Add you own code to execute
											// something on click
				                         ed.focus();
				                         // $(ed.selection.getContent()).pgp('theorem')
				                         // ed.selection.setContent('Hello
											// world!');
				                         // ed.selection.setContent('<div
											// class=\"pgp\">'+
											// ed.selection.getContent() +
											// '</div>')

				                         $('').pgptiny('srccpp', ed);


				                     }
				                 });
				                 ed.addButton('pgpsrccdjava', {
				                     title: 'pgp Java Source Code',
				                     image:  baseURL+'libs/estifeda/img/ico_pgpsource_code_java.png',
				                     onclick: function() {
				                         // Add you own code to execute
											// something on click
				                         ed.focus();
				                         // $(ed.selection.getContent()).pgp('theorem')
				                         // ed.selection.setContent('Hello
											// world!');
				                         // ed.selection.setContent('<div
											// class=\"pgp\">'+
											// ed.selection.getContent() +
											// '</div>')

				                         $('').pgptiny('srccpp', ed);


				                     }
				                 });
				                 ed.addButton('pgpsrccdobjc', {
				                     title: 'pgp objective-C Source Code',
				                     image:  baseURL+'libs/estifeda/img/ico_pgpsource_code_objective-c2.png',
				                     onclick: function() {
				                         // Add you own code to execute
											// something on click
				                         ed.focus();
				                         // $(ed.selection.getContent()).pgp('theorem')
				                         // ed.selection.setContent('Hello
											// world!');
				                         // ed.selection.setContent('<div
											// class=\"pgp\">'+
											// ed.selection.getContent() +
											// '</div>')

				                         $('').pgptiny('srcobjc', ed);


				                     }
				                 });
				                  ed.addButton('pgpsrccdpy', {
				                     title: 'pgp Python Source Code',
				                     image:  baseURL+'libs/estifeda/img/ico_pgpsource_code_py.jpg',
				                     onclick: function() {
				                         // Add you own code to execute
											// something on click
				                         ed.focus();
				                         // $(ed.selection.getContent()).pgp('theorem')
				                         // ed.selection.setContent('Hello
											// world!');
				                         // ed.selection.setContent('<div
											// class=\"pgp\">'+
											// ed.selection.getContent() +
											// '</div>')

				                         $('').pgptiny('srcpy', ed);


				                     }
				                 });
				                  ed.addButton('pgpsrccdcs', {
				                     title: 'pgp C# Source Code',
				                     image:  baseURL+'libs/estifeda/img/ico_pgpsource_code_cs.png',
				                     onclick: function() {
				                         // Add you own code to execute
											// something on click
				                         ed.focus();
				                         // $(ed.selection.getContent()).pgp('theorem')
				                         // ed.selection.setContent('Hello
											// world!');
				                         // ed.selection.setContent('<div
											// class=\"pgp\">'+
											// ed.selection.getContent() +
											// '</div>')

				                         $('').pgptiny('srccs', ed);


				                     }
				                 });
				                  ed.addButton('pgpsrccdphp', {
				                     title: 'pgp PHP Source Code',
				                     image:  baseURL+'libs/estifeda/img/ico_pgpsource_code_php2.png',
				                     onclick: function() {
				                         // Add you own code to execute
											// something on click
				                         ed.focus();
				                         // $(ed.selection.getContent()).pgp('theorem')
				                         // ed.selection.setContent('Hello
											// world!');
				                         // ed.selection.setContent('<div
											// class=\"pgp\">'+
											// ed.selection.getContent() +
											// '</div>')

				                         $('').pgptiny('srcphp', ed);


				                     }
				                 });
				                  ed.addButton('pgpsrccdhtml', {
				                     title: 'pgp HTML Source Code',
				                     image:  baseURL+'libs/estifeda/img/ico_pgpsource_code_html5.png',
				                     onclick: function() {
				                         // Add you own code to execute
											// something on click
				                         ed.focus();
				                         // $(ed.selection.getContent()).pgp('theorem')
				                         // ed.selection.setContent('Hello
											// world!');
				                         // ed.selection.setContent('<div
											// class=\"pgp\">'+
											// ed.selection.getContent() +
											// '</div>')

				                         $('').pgptiny('srchtml', ed);


				                     }
				                 });
							}

						});

	}

})(jQuery);
