(function(t){function e(e){for(var r,s,o=e[0],c=e[1],u=e[2],d=0,h=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&h.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/github-stats-dashboard/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("64a9")},"100a":function(t,e,n){},4678:function(t,e,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="4678"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("8c4f"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],class:[{empty:0===t.options.data.length},"repo"]},[n("InputText",{on:{onSearch:t.loadData}})],1),n("h2",{directives:[{name:"show",rawName:"v-show",value:t.options.data.length,expression:"options.data.length"}]},[t._v(t._s(t.repo))]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.options.data.length,expression:"options.data.length"}]},[n("div",{staticClass:"row"},[n("div",{staticClass:"authors"},[n("h2",[t._v("Authors ("+t._s(t.authors.length)+")")]),n("ul",{staticClass:"authors__list"},t._l(t.authors,(function(e){return n("li",{key:e.login},[e.login?n("label",[n("ImageWrapper",{attrs:{src:e.avatar_url,width:60}}),n("p",[t._v("\n                    "+t._s(e.login)+"\n                    "),n("input",{attrs:{type:"checkbox",name:"author"},domProps:{checked:t.filters.includes(e.login),value:e.login}})])],1):t._e()])})),0)]),n("div",{staticClass:"options"},[n("h2",[t._v("Repo activity by")]),t._l(t.by,(function(e){return n("label",{key:e.value,staticClass:"option"},[t._v("\n          "+t._s(e.label)+"\n          "),n("input",{attrs:{type:"radio",name:"by"},domProps:{checked:e.value===t.options.by,value:e.value},on:{change:t.rangeUpdated}})])}))],2)]),n("div",{style:"overflow-x: auto; padding: 10px"},[n("h2",[t._v("Commits ("+t._s(t.options.data.length)+")")]),n("BarChart",t._b({},"BarChart",t.options,!1))],1),n("div",{staticClass:"stats"},[n("div",[n("h2",[t._v("Tech stack (in bytes - "+t._s(t.stackTotal)+")")]),n("BubbleChart",{attrs:{data:t.stackStats,width:t.width/2,height:t.height}})],1),n("div",[n("h2",[t._v("Topics ("+t._s(t.topics.length)+")")]),n("WordCloud",{attrs:{words:t.topics,width:t.width/2,height:t.height}})],1)])])])},s=[],o=(n("ac4d"),n("8a81"),n("1c4c"),n("7f7f"),n("6b54"),n("28a5"),n("6762"),n("2fdb"),n("a481"),n("ac6a"),n("5df3b"),n("2ef0")),c=n.n(o),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("span",{staticClass:"loading"},[t._v("Loading...")]):t._e(),t.loading?t._e():n("img",{attrs:{src:t.blob,width:t.width}})])},l=[],d=(n("c5f6"),{name:"ImageWrapper",props:{src:{type:String,required:!0},width:{type:Number,default:function(){return 60}}},data:function(){return{loading:!0,blob:null}},mounted:function(){var t=this;return fetch(this.src).then((function(t){return t.blob()})).then((function(e){var n=URL.createObjectURL(e);t.blob=n})).finally((function(){return t.loading=!1}))}}),h=d,f=n("2877"),p=Object(f["a"])(h,u,l,!1,null,null,null),b=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"repo",on:{submit:function(e){return e.preventDefault(),t.loadData(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.repo,expression:"repo"}],staticClass:"repo__input",attrs:{type:"text",placeholder:"Github Repo - :owner/:repo eg: marabesi/testable"},domProps:{value:t.repo},on:{input:function(e){e.target.composing||(t.repo=e.target.value)}}}),n("button",{staticClass:"repo__load",on:{click:t.loadData}},[t._v("Load")])])},g=[],j={name:"InputText",data:function(){return{repo:"",searched:""}},methods:{loadData:function(){this.repo&&this.repo.includes("/")&&this.repo!==this.searched&&(this.searched=this.repo,this.$emit("onSearch",this.repo))}}},v=j,y=(n("761a"),Object(f["a"])(v,m,g,!1,null,null,null)),w=y.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"chart"}})},x=[],k=(n("55dd"),n("c1df")),z=n.n(k),Y=n("5698"),D=1,O=2,S=3,C=4,E={name:"BarChart",props:{by:{type:Number,required:!0},data:{type:Array,required:!0},width:{type:Number,required:!0},height:{type:Number,required:!0}},computed:{margin:function(){return{top:10,right:30,bottom:90,left:40}},innerWidth:function(){var t=this.width;return this.nomalizeData.length>200&&(t*=3),t-50-this.margin.left-this.margin.right},innerHeight:function(){return this.height-this.margin.top-this.margin.bottom},nomalizeData:function(){return c.a.sortBy(this.data,(function(t){return Date.parse(t.commit.committer.date)}))},barColor:function(){return Y["d"]}},watch:{by:function(){this.draw()},data:function(){this.draw()}},methods:{draw:function(){var t=this;Y["l"]("#chart").select("*").remove(),this.svg=Y["l"]("#chart").append("svg").attr("width",this.innerWidth+this.margin.left+this.margin.right).attr("height",this.innerHeight+this.margin.top+this.margin.bottom).append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")");var e=this.prepareData(),n=Y["h"]().range([0,this.innerWidth]).domain(Y["keys"](e)).padding(this.xPadding()),r=Y["a"](n).tickPadding(10),a=Y["i"]().domain([0,Y["f"](Y["keys"](c.a.countBy(e,"length")).map((function(t){return parseInt(t)})))]).range([this.innerHeight,0]).nice();this.svg.append("g").attr("transform","translate(0,"+this.innerHeight+")").call(r).selectAll("text").attr("transform","translate(-10,0)rotate(-45)").style("text-anchor","end"),this.svg.append("g").call(Y["b"](a)),this.svg.selectAll("mybar").data(this.nomalizeData).enter().append("rect").attr("width",n.bandwidth()).attr("height",(function(){return t.innerHeight-a(0)})).attr("fill",(function(n){var r=t.parseDate(n.commit.committer.date);return t.barColor(e[r].length/100)})).attr("x",(function(e){var r=t.parseDate(e.commit.committer.date);return n(r)})).attr("y",(function(){return a(0)})).append("title").text((function(n){var r=t.parseDate(n.commit.committer.date);return"".concat(e[r].length," commit(s)")})),this.svg.append("text").attr("transform","rotate(-90)").attr("y",0-this.margin.left).attr("x",0-this.innerHeight/2).attr("dy","1em").style("text-anchor","middle").text("Número de commits"),this.svg.selectAll("rect").transition().duration(800).attr("y",(function(n){var r=t.parseDate(n.commit.committer.date);return a(e[r].length)})).attr("height",(function(n){var r=t.parseDate(n.commit.committer.date);return t.innerHeight-a(e[r].length)})).delay((function(t,e){return 5*e}))},xPadding:function(){return this.nomalizeData.length>200?.1:.5},parseDate:function(t){return this.by===D?z()(t).format("YYYY-MM-DD"):this.by===O?z()(t).format("YYYY-WW"):this.by===S?z()(t).format("YYYY-MM"):z()(t).format("YYYY")},prepareData:function(){var t="YYYY";this.by===D&&(t="YYYY-MM-DD"),this.by===O&&(t="YYYY-WW"),this.by===S&&(t="YYYY-MM");var e=c.a.groupBy(this.data,(function(e){return z()(e.commit.committer.date).format(t)})),n={};return c()(e).keys().sort().each((function(t){n[t]=e[t]})),n}}},N=E,T=Object(f["a"])(N,_,x,!1,null,null,null),W=T.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"bubble"}})},M=[],I={props:{data:{type:Object,required:!0},width:{type:Number,required:!0},height:{type:Number,required:!0}},computed:{margin:function(){return{top:10,right:30,bottom:90,left:40}},innerWidth:function(){return this.width-50-this.margin.left-this.margin.right},innerHeight:function(){return this.height-this.margin.top-this.margin.bottom},color:function(){return Y["j"](Y["k"])},bubble:function(){return Y["g"](this.data).size([this.innerWidth,this.innerHeight]).padding(1.5)}},watch:{data:function(){this.draw()}},methods:{draw:function(){var t=this;Y["l"]("#bubble").select("*").remove();var e=Y["l"]("#bubble").append("svg").attr("width",this.innerWidth).attr("height",this.innerHeight).attr("class","bubble"),n=Y["c"](this.data).sum((function(t){return t.count})),r=e.selectAll(".node").data(this.bubble(n).descendants()).enter().filter((function(t){return!t.children})).append("g").attr("class","node").attr("transform",(function(t){return"translate("+t.x+","+t.y+")"}));r.append("title").text((function(t){return t.data.name+": "+t.data.count})),r.append("circle").attr("r",(function(t){return t.r<20?3*t.r:t.r})).style("fill",(function(e,n){return t.color(n)})),r.append("text").attr("dy",".2em").style("text-anchor","middle").text((function(t){return t.data.name.substring(0,t.r/3)})).attr("font-family","sans-serif").attr("font-size",(function(t){return t.r<20?1.3*t.r:t.r/5})).attr("fill","white"),r.append("text").attr("dy","1.3em").style("text-anchor","middle").text((function(t){return t.data.count})).attr("font-family","Gill Sans","Gill Sans MT").attr("font-size",(function(t){return t.r<20?1.3*t.r:t.r/5})).attr("fill","white"),Y["l"](self.frameElement).style("height",this.innerWidth+"px")}}},P=I,q=Object(f["a"])(P,A,M,!1,null,null,null),H=q.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cloud"}})},U=[],$=(n("6c7b"),n("4a83")),L=n.n($),R={props:{words:{type:Array,required:!0},width:{type:Number,required:!0},height:{type:Number,required:!0}},computed:{fill:function(){return Y["k"]},margin:function(){return{top:10,right:30,bottom:90,left:40}},innerWidth:function(){return this.width-50-this.margin.left-this.margin.right},innerHeight:function(){return this.height-this.margin.top-this.margin.bottom}},watch:{words:function(){this.setUp()}},methods:{setUp:function(){this.layout=L()().size([this.innerWidth,this.innerHeight]).words(this.words.map((function(t){return{text:t.text,size:10+90*Math.random()}}))).padding(5).rotate((function(){return 90*~~(2*Math.random())})).font("Impact").fontSize((function(t){return t.size})).on("end",this.draw),this.layout.start()},draw:function(t){var e=this;Y["l"]("#cloud").select("*").remove(),Y["l"]("#cloud").append("svg").attr("width",this.layout.size()[0]).attr("height",this.layout.size()[1]).append("g").attr("transform","translate("+this.layout.size()[0]/2+","+this.layout.size()[1]/2+")").selectAll("text").data(t).enter().append("text").style("font-size",(function(t){return t.size+"px"})).style("font-family","Impact").attr("text-anchor","middle").attr("fill",(function(t,n){return e.fill[n]})).attr("transform",(function(t){return"translate("+[t.x,t.y]+")rotate("+t.rotate+")"})).text((function(t){return t.text}))}}},G=R,J=Object(f["a"])(G,B,U,!1,null,null,null),V=J.exports;function F(t){if(0==t.length)throw new Error("input must not be of zero length");var e=t.split(","),n={};return c.a.each(e,(function(t){var e=t.split(";");if(2!=e.length)throw new Error("section could not be split on ';'");var r=e[0].replace(/<(.*)>/,"$1").trim(),a=e[1].replace(/rel="(.*)"/,"$1").trim();n[a]=r})),n}function K(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Q(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){o=!0,i=t},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw i}}}}function Q(t,e){if(t){if("string"===typeof t)return X(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(t,e):void 0}}function X(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Z=Object({NODE_ENV:"production",BASE_URL:"/github-stats-dashboard/"}).CLIENT_ID,tt=Object({NODE_ENV:"production",BASE_URL:"/github-stats-dashboard/"}).CLIENT_SECRET,et={name:"app",components:{ImageWrapper:b,InputText:w,BarChart:W,BubbleChart:H,WordCloud:V},data:function(){return{loading:!1,repo:"",by:[{value:D,label:"day"},{value:O,label:"week"},{value:S,label:"month"},{value:C,label:"year"}],options:{data:[],by:S,width:960,height:450},authors:[],stackStats:{},stackTotal:0,topics:[],width:950,height:450,filters:[]}},methods:{loadData:function(t){var e=this;if(this.repo=t,!this.loading){this.loading=!0;var n="https://api.github.com/repos/".concat(t,"/{report}?client_id=").concat(Z,"&client_secret=").concat(tt);Promise.all([this.fetchData(n.replace("{report}","commits")),this.fetchStackStats(n.replace("{report}","languages")),this.fetchTopics(n.replace("{report}","topics"))]).catch((function(t){console.log(t)})).finally((function(){return e.loading=!1}))}},rangeUpdated:function(t){this.options.by=parseInt(t.target.value)},fetchStackStats:function(t){var e=this;return fetch(t).then((function(t){return t.json()})).then((function(t){var n=[],r=0;for(var a in t)n.push({name:a,count:t[a]}),r+=t[a];e.stackStats={children:n},e.stackTotal=r}))},fetchTopics:function(t){var e=this,n=new Headers;return n.append("Accept","application/vnd.github.mercy-preview+json"),fetch(t,{headers:n}).then((function(t){return t.json()})).then((function(t){e.topics=t.names.map((function(t){return{text:t}}))}))},fetchData:function(t){var e=this,n=[];return fetch(t).then((function(r){var a,i=r.headers.values(),s=K(i);try{for(s.s();!(a=s.n()).done;){var o=a.value;if(o.includes("api.github")){var u=F(o);if(u.last)for(var l=u.last.split("="),d=l[l.length-1],h=1;h<d;h++)n.push(fetch("".concat(t,"&page=").concat(h+1)).then((function(t){return t.json()})))}}}catch(f){s.e(f)}finally{s.f()}r.json().then((function(t){Promise.all(n).then((function(n){n.push(t);var r=c.a.flatten(n);e.options.data=r,e.authors=c.a.uniqBy(e.options.data.map((function(t){var n={login:t.author?t.author.login:"",avatar_url:t.author?t.author.avatar_url:""};return e.filters.push(n.login),n})),"login")}))}))}))}}},nt=et,rt=(n("034f"),Object(f["a"])(nt,i,s,!1,null,null,null)),at=rt.exports,it=[],st=new a["a"]({routes:it});r["a"].config.productionTip=!1,r["a"].use(a["a"]),new r["a"]({router:st,render:function(t){return t(at)}}).$mount("#app")},"64a9":function(t,e,n){},"761a":function(t,e,n){"use strict";n("100a")}});
//# sourceMappingURL=app.3bb20972.js.map