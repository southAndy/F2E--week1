(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d241c1c4"],{"06e7":function(t,i,n){},"09d9":function(t,i,n){},"20cb":function(t,i,n){},2330:function(t,i,n){},"2a7d":function(t,i,n){"use strict";var e=n("7a23"),a=n("2bb7"),c=n.n(a),o=function(t){return Object(e["w"])("data-v-a6425118"),t=t(),Object(e["u"])(),t},r={class:"serach_container"},s=o((function(){return Object(e["g"])("option",{value:""},"請選擇縣市",-1)})),u=["value"],l=o((function(){return Object(e["g"])("div",{class:"serach_icon"},[Object(e["g"])("img",{src:c.a,alt:"放大鏡"})],-1)})),d=o((function(){return Object(e["g"])("span",null,"搜 尋",-1)})),y=[l,d];function g(t,i,n,a,c,o){var l=this;return Object(e["t"])(),Object(e["f"])("div",r,[Object(e["g"])("select",{onChange:i[0]||(i[0]=function(){return o.selectCity&&o.selectCity.apply(o,arguments)})},[s,(Object(e["t"])(!0),Object(e["f"])(e["a"],null,Object(e["z"])(o.getCity,(function(t){return Object(e["t"])(),Object(e["f"])("option",{value:t,key:t},Object(e["C"])(t),9,u)})),128))],32),Object(e["H"])(Object(e["g"])("input",{"onUpdate:modelValue":i[1]||(i[1]=function(t){return c.inputKeyWords=t}),class:"serach_input",type:"text",name:"",id:"",placeholder:"請輸入活動關鍵字："},null,512),[[e["E"],c.inputKeyWords]]),Object(e["g"])("button",{class:"serach",onClick:i[2]||(i[2]=function(t){return o.pushSelectedDatas({city:l.getCurrentCity,keyword:l.inputKeyWords})})},y)])}n("7db0"),n("d3b7");var p=n("fd21"),f={props:["cityData"],name:"Button",data:function(){return{apiData:this.cityData,selecedCity:"請選擇縣市",inputKeyWords:"",selectedDate:""}},computed:{citiesList:function(){return p},getCurrentCity:function(){var t=this;if("請選擇縣市"!==this.selecedCity)//! 輸入值跟資料表進行比對，回傳對應值
return this.citiesList.find((function(i){return i.cityName===t.selecedCity})).cityLink},getCity:function(){return this.$store.getters.filterRepeatCity}},methods:{selectCity:function(t){this.selecedCity=t.target.value},selectDate:function(t){this.selectedDate=t.target.value},pushSelectedDatas:function(t){var i=t.city,n=t.keyword;console.log(i,n),this.$emit("getSelected",{city:i,keyword:n})}}},m=(n("e467"),n("6b0d")),b=n.n(m);const h=b()(f,[["render",g],["__scopeId","data-v-a6425118"]]);i["a"]=h},"2fbc":function(t,i,n){"use strict";var e=n("7a23");function a(t,i,n,a,c,o){return Object(e["t"])(),Object(e["f"])("div",null,"首頁 / 活動節慶")}var c={name:"Breadcrumb"},o=(n("e04d"),n("6b0d")),r=n.n(o);const s=r()(c,[["render",a],["__scopeId","data-v-c00ed382"]]);i["a"]=s},"4e56":function(t,i,n){"use strict";n("b0c0");var e=n("7a23"),a={class:"topic_name"},c=["src"];function o(t,i,n,o,r,s){return Object(e["t"])(),Object(e["f"])("div",null,[Object(e["g"])("p",a,Object(e["C"])(n.festivalList.name),1),Object(e["g"])("div",null,[Object(e["g"])("img",{class:"topic_image",src:n.festivalList.image,alt:"cool"},null,8,c)])])}var r={name:"Topic",props:["festivalList"],data:function(){return{}}},s=(n("8828"),n("6b0d")),u=n.n(s);const l=u()(r,[["render",o],["__scopeId","data-v-6079525b"]]);i["a"]=l},"7db0":function(t,i,n){"use strict";var e=n("23e7"),a=n("b727").find,c=n("44d2"),o="find",r=!0;o in[]&&Array(1)[o]((function(){r=!1})),e({target:"Array",proto:!0,forced:r},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),c(o)},8828:function(t,i,n){"use strict";n("09d9")},b0c0:function(t,i,n){var e=n("83ab"),a=n("5e77").EXISTS,c=n("e330"),o=n("9bf2").f,r=Function.prototype,s=c(r.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=c(u.exec),d="name";e&&!a&&o(r,d,{configurable:!0,get:function(){try{return l(u,s(this))[1]}catch(t){return""}}})},b9ce:function(t,i,n){"use strict";n.r(i);n("b0c0");var e=n("7a23"),a=function(t){return Object(e["w"])("data-v-762e0f60"),t=t(),Object(e["u"])(),t},c={class:"activities"},o={class:"serach"},r={class:"topic_container"},s=a((function(){return Object(e["g"])("h3",{class:"serach_theme"},"熱門主題",-1)}));function u(t,i,n,a,u,l){var d=Object(e["A"])("Breadcrumb"),y=Object(e["A"])("Button"),g=Object(e["A"])("Topic");return Object(e["t"])(),Object(e["f"])("div",c,[Object(e["j"])(d),Object(e["j"])(y,{cityData:u.apiData,onGetSelected:l.sendSelectedDatas},null,8,["cityData","onGetSelected"]),Object(e["g"])("div",o,[Object(e["g"])("div",r,[s,(Object(e["t"])(!0),Object(e["f"])(e["a"],null,Object(e["z"])(l.getActivitiyNames,(function(t){return Object(e["t"])(),Object(e["d"])(g,{key:t,festivalList:t,class:"topic",onClick:function(i){return l.getDataByClass(t.name)}},null,8,["festivalList","onClick"])})),128))])])])}var l=n("1da1"),d=(n("99af"),n("96cf"),n("4e56")),y=n("2a7d"),g=n("2fbc"),p=n("5a93"),f={name:"Activities",components:{Topic:d["a"],Button:y["a"],Breadcrumb:g["a"]},data:function(){return{apiDataByClass:null,apiData:[],selectedData:null}},computed:{getActivitiyNames:function(){return this.$store.state.activitiesDatas.activitiesData},getRouter:function(){return this.$router.query}},methods:{getDataByClass:function(t){var i=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(t),n.next=3,i.$store.dispatch("festivalDatas/sendData",t);case 3:i.apiDataByClass=n.sent,console.log(55,"類別",i.apiDataByClass),i.changeRouter(i.apiDataByClass);case 6:case"end":return n.stop()}}),n)})))()},changeRouter:function(t){console.log("觸發跳轉前"),console.log(this.$route.name),this.$router.push({name:"Result",query:{type:t[1].Class1,path:this.$route.name}})},sendSelectedDatas:function(t){var i=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var e,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(t),e=i.$router.currentRoute.value.name,console.log("當前路由為".concat(e," 此次搜尋的城市是 ").concat(t.city,"，關鍵字為：").concat(t.keyword)),n.next=5,p["a"].activities.getFilteredDatas(t.city,t.keyword).then((function(t){return t.data}));case 5:a=n.sent,console.log(a),i.$router.push({name:"Result",query:{city:t.city,keyword:t.keyword,path:i.$route.name}});case 8:case"end":return n.stop()}}),n)})))()}},created:function(){console.log("hi")}},m=(n("e745"),n("6b0d")),b=n.n(m);const h=b()(f,[["render",u],["__scopeId","data-v-762e0f60"]]);i["default"]=h},e04d:function(t,i,n){"use strict";n("06e7")},e467:function(t,i,n){"use strict";n("2330")},e745:function(t,i,n){"use strict";n("20cb")},fd21:function(t){t.exports=JSON.parse('[{"cityName":"臺北市","district":"北部","cityLink":"Taipei","id":"TP","position":{"lat":"25.032969","lon":"121.565414"},"image":"Taipei.png","intro":"為我國首都，經濟建設開發進步，交通運輸完備，常有大型國際會議及活動展覽，吸引許多外國人在此就學、考察、經商及停留，成為族群融合的多元社會。"},{"cityName":"新北市","district":"北部","cityLink":"NewTaipei","id":"NTC","position":{"lat":"25.011710","lon":"121.465880"},"image":"NewTaipei.png","intro":"擁有山林、海洋、溪谷、水岸、溫泉的自然美景，以及農莊、茶園的田園風光，還有百年來先民在臺北盆地開墾的軌跡，也是全國市民及新住民人口最多的城市。"},{"cityName":"桃園市","district":"北部","cityLink":"Taoyuan","id":"TY","position":{"lat":"24.993628","lon":"121.300980"},"image":"Taoyuan.png","intro":"擁有多元的文化，北橫豐富的山水景觀，以及桃園國際機場，成就此市為觀光城市。"},{"cityName":"臺中市","district":"中部","cityLink":"Taichung","id":"TC","position":{"lat":"24.147736","lon":"120.673645"},"image":"Taichung.png","intro":"地處臺灣西半部的樞紐位置，氣候宜人，擁有豐富人文資源、歷史文化、自然景觀、獨特產業、遊樂設施。並具備多元的美食、購物、休閒活動及旅遊服務，還有精彩的文化展演活動。"},{"cityName":"臺南市","district":"南部","cityLink":"Tainan","id":"TN","position":{"lat":"22.99083","lon":"120.21333"},"image":"Tainan.png","intro":"是臺灣最早開發、最具歷史的百年古都，處處可見古蹟、人文薈萃，近年更結合文青風潮，吸引許多店家在此生根，成為最具文藝氣息的古城。"},{"cityName":"高雄市","district":"南部","cityLink":"Kaohsiung","id":"KH","position":{"lat":"22.61626","lon":"120.31333"},"image":"Kaohsiung.png","intro":"是「山、海、河港、人文、古蹟」的城市，持續推廣觀光、文化與科技等綠色產業，因受海洋氣候調節，全年陽光普照、氣候宜人，並有豐富的歷史人文、山海資源。"},{"cityName":"基隆市","district":"北部","cityLink":"Keelung","id":"KL","position":{"lat":"25.12825","lon":"121.7419"},"image":"Keelung.png","intro":"基隆市位於臺灣北端，基隆港港灣深入市區、水面寬闊，為北臺灣門戶。"},{"cityName":"新竹市","district":"北部","cityLink":"Hsinchu","id":"HCC","position":{"lat":"24.83833","lon":"121.00778"},"image":"Hsinchu.png","intro":"新竹縣市是典型的客家地區，隨著上世紀經濟起飛，新竹縣與新竹市的發展，從農業轉型導入高科技園區，帶動國家科技發展，也形成多元融合的文化及產業特色。"},{"cityName":"新竹縣","district":"北部","cityLink":"HsinchuCounty","id":"HC","position":{"lat":"24.80361","lon":"120.96861"},"image":"HsinchuCounty.png","intro":"新竹縣市是典型的客家地區，隨著上世紀經濟起飛，新竹縣與新竹市的發展，從農業轉型導入高科技園區，帶動國家科技發展，也形成多元融合的文化及產業特色。"},{"cityName":"苗栗縣","district":"中部","cityLink":"MiaoliCounty","id":"ML","position":{"lat":"24.56427","lon":"120.82367"},"image":"MiaoliCounty.png","intro":"苗栗縣以農業產業為主，也是臺灣西部十分適合旅遊及渡假的旅遊勝地。"},{"cityName":"彰化縣","district":"中部","cityLink":"ChanghuaCounty","id":"CH","position":{"lat":"24.07327","lon":"120.56276"},"image":"ChanghuaCounty.png","intro":"彰化縣幅員完整，地勢平坦開闊，土地肥沃、物產豐饒，為臺灣開拓較早之地區。"},{"cityName":"南投縣","district":"中部","cityLink":"NantouCounty","id":"NT","position":{"lat":"23.91566","lon":"120.66387"},"image":"NantouCounty.png","intro":"南投縣位居臺灣本島中央，境內有多座三千公尺以上的高山，也有最美湖泊「日月潭」點綴其中，交織山水奇景。"},{"cityName":"雲林縣","district":"中部","cityLink":"YunlinCounty","id":"YU","position":{"lat":"23.75585","lon":"120.3897"},"image":"YunlinCounty.png","intro":"農業立縣的雲林縣，則有著自然純樸的農村風光與得天獨厚的農產物品。"},{"cityName":"嘉義縣","district":"南部","cityLink":"ChiayiCounty","id":"CY","position":{"lat":"23.4800","lon":"120.4497"},"image":"ChiayiCounty.png","intro":"嘉義縣是臺灣唯一擁有三大國家風景區的縣市，包含山丘、平原、海景等不同的景致。"},{"cityName":"嘉義市","district":"南部","cityLink":"Chiayi","id":"CYC","position":{"lat":"23.4800","lon":"120.4497"},"image":"Chiayi.png","intro":"嘉義市人文薈萃，是歷史淵源的城市，臺灣最珍貴的「交趾陶」工藝發源於此，是充滿熱情與藝術的文化藝術之都。"},{"cityName":"屏東縣","district":"南部","cityLink":"PingtungCounty","id":"PT","position":{"lat":"22.6761","lon":"120.4942"},"image":"PingtungCounty.png","intro":"屏東地處臺灣最南端，輪廓狹長、四季如春，有「臺灣南洋」之稱，境內有聞名海內外的墾丁國家公園、大鵬灣國家風景區及「海上觀光樂園」小琉球等景點。"},{"cityName":"宜蘭縣","district":"北部","cityLink":"YilanCounty","id":"YL","position":{"lat":"22.67135","lon":"120.48814"},"image":"YilanCounty.png","intro":"宜蘭縣三面背山、一面向海，孕育出獨特的世外桃源，特色是油綠的田園遍布及溫泉民宿等著稱。"},{"cityName":"花蓮縣","district":"東部","cityLink":"HualienCounty","id":"HL","position":{"lat":"23.97694","lon":"121.60444"},"image":"HualienCounty.png","intro":"東臨浩瀚太平洋，西倚中央山脈，擁有臨山面海的優越地理位置，並孕育出豐富的生態資源，加上純樸善良的在地居民和悠久的農業文化，被譽為臺灣的「後花園」。"},{"cityName":"臺東縣","district":"東部","cityLink":"TaitungCounty","id":"TT","position":{"lat":"22.7583","lon":"121.1444"},"image":"TaitungCounty.png","intro":"東臨浩瀚太平洋，西倚中央山脈，擁有臨山面海的優越地理位置，並孕育出豐富的生態資源，加上純樸善良的在地居民和悠久的農業文化，被譽為臺灣的「後花園」。"},{"cityName":"金門縣","district":"離島","cityLink":"KinmenCounty","id":"KM","position":{"lat":"24.4516507","lon":"118.3132275"},"image":"KinmenCounty.png","intro":"金門由於地理環境位置的關係，早期先民在此放置風獅爺，來鎮風防煞，形成金門隨處可見風獅爺的有趣景象，再加上軍管時期高度管制的緣故，保存了閩式的古厝聚落、巴洛克式的洋樓。無論是歷史建築、風獅爺、戰史紀念館、坑道、在地美食等，這些都在金門留下珍貴的歷史痕跡，讓後人能夠感受其特有的魅力。"},{"cityName":"澎湖縣","district":"離島","cityLink":"PenghuCounty","id":"PH","position":{"lat":"23.5758133","lon":"119.4852269"},"image":"PenghuCounty.png","intro":"澎湖，臺灣海峽最閃耀的明珠，九十座島嶼上累積著歷史人文的智慧結晶，壯麗的海洋景色，讓澎湖處處充滿了大自然的禮讚，澎湖群島遍布玄武岩地質景觀，大自然鬼斧神工的多樣雕琢，令地質學者觀後為之驚嘆，讚譽為「上帝的石雕公園」。"},{"cityName":"連江縣","district":"離島","cityLink":"LienchiangCounty","id":"LC","position":{"lat":"26.194261","lon":"120.0108"},"image":"LienchiangCounty.png","intro":"馬祖列島以「媽祖」而得名，由南竿、北竿、莒光及東引等數十座島嶼所構成，為目前臺澎金馬地區最北端之領土，位於臺灣海峽西北西方，面臨閩江口、連江口及羅源灣，與大陸僅呎水之隔，在反共復國的年代，這裡更曾擔綱保衛臺澎的前哨，標語、坑道、阿兵哥，形塑了極特殊的戰地風貌。"}]')}}]);
//# sourceMappingURL=chunk-d241c1c4.a1222cb4.js.map