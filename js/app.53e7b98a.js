(function(e){function t(t){for(var n,a,i=t[0],o=t[1],u=t[2],l=0,h=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);d&&d(t);while(h.length)h.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,i=1;i<r.length;i++){var o=r[i];0!==s[o]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},s={app:0},c=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=o;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"3ad3":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function s(e,t){var r=Object(n["z"])("router-view");return Object(n["s"])(),Object(n["d"])(r)}r("a9f7"),r("7d1a");var c=r("6b0d"),a=r.n(c);const i={},o=a()(i,[["render",s]]);var u=o,d=r("6c02"),l=(r("ac1f"),r("1276"),{id:"boardgame"}),h={class:"board"},b={key:0,class:"boardcard"},f={class:"board-croupier"},j={class:"score-display"},p={class:"container-cards"},O={class:"board-user"},v={class:"container-cards"},m={key:0},y={key:1,class:"title-bet"},S=Object(n["g"])("div",null,"▼ Place your bets ▼",-1),g=[S],k={class:"balance-display container-flex between"},C={key:0};function w(e,t,r,s,c,a){var i=Object(n["z"])("Card"),o=Object(n["z"])("Footer");return Object(n["s"])(),Object(n["f"])("div",l,[Object(n["g"])("div",h,[e.roundStarted?(Object(n["s"])(),Object(n["f"])("div",b,[Object(n["g"])("div",f,[Object(n["g"])("div",j,Object(n["B"])(e.dealerScore),1),Object(n["g"])("div",p,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(e.dealerCards,(function(e,t){return Object(n["s"])(),Object(n["d"])(i,{key:t,card:e},null,8,["card"])})),128))])]),Object(n["g"])("div",O,[Object(n["g"])("div",v,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(e.userCards,(function(e,t){return Object(n["s"])(),Object(n["d"])(i,{key:t,card:e},null,8,["card"])})),128))]),Object(n["g"])("div",{class:Object(n["o"])(["score-display",e.isUserBlackjack?"bg-multi-color":void 0!==e.userWin?!1===e.userWin?"bg-danger":!0===e.userWin?"bg-success":"bg-action":""])},[e.lowerUserScore==e.userScore||e.isUserBlackjack||e.userStand?Object(n["e"])("",!0):(Object(n["s"])(),Object(n["f"])("span",m,Object(n["B"])(e.lowerUserScore)+" / ",1)),Object(n["h"])(Object(n["B"])(e.userScore),1)],2)])])):Object(n["e"])("",!0),e.roundFinished||!e.roundStarted?(Object(n["s"])(),Object(n["f"])("div",y,g)):Object(n["e"])("",!0),Object(n["g"])("div",k,[Object(n["g"])("div",null,[Object(n["g"])("b",null,"Balance "+Object(n["B"])(e.money)+"$",1)]),e.roundStarted?(Object(n["s"])(),Object(n["f"])("div",C,[Object(n["g"])("b",null,"Bet "+Object(n["B"])(e.payment)+"$",1)])):Object(n["e"])("",!0)])]),Object(n["i"])(o,{userWin:e.userWin,userScore:e.userScore,roundStarted:e.roundStarted,roundFinished:e.roundFinished,doubleAllowed:e.doubleAllowed,userStand:e.userStand,userCards:e.userCards,money:e.money,splitAllowed:e.splitAllowed,onBet:e.bet,onHit:e.hitUserCard,onDouble:e.double,onSplit:e.split,onStand:e.stand,onResetGame:e.resetGame},null,8,["userWin","userScore","roundStarted","roundFinished","doubleAllowed","userStand","userCards","money","splitAllowed","onBet","onHit","onDouble","onSplit","onStand","onResetGame"])])}var B=r("1da1"),x=(r("96cf"),r("d3b7"),{class:"card-value card-value-left"}),U={class:"card-value card-value-right"},A={class:"card-center"};function R(e,t,r,s,c,a){return Object(n["s"])(),Object(n["f"])("div",{class:Object(n["o"])(["card",{"card-black":e.isBlack,"card-red":!e.isBlack,rotate:e.card.double}])},[Object(n["g"])("div",x,[Object(n["g"])("div",null,Object(n["B"])(e.card.code),1),Object(n["g"])("div",null,Object(n["B"])(e.card.colorLabel),1)]),Object(n["g"])("div",U,[Object(n["g"])("div",null,Object(n["B"])(e.card.colorLabel),1),Object(n["g"])("div",null,Object(n["B"])(e.card.code),1)]),Object(n["g"])("div",A,[Object(n["g"])("div",null,Object(n["B"])(e.card.code),1)])],2)}var F=r("d4ec"),E=r("bee2"),D=(r("99af"),function(){function e(t,r,n){var s;switch(Object(F["a"])(this,e),this.color=t,this.code=r,this.value=n,this.double=!1,this.color){case"COEUR":s="♡";break;case"PIQUE":s="♤";break;case"CARREAU":s="♢";break;case"TREFLE":s="♧";break}this.colorLabel=s}return Object(E["a"])(e,[{key:"imagePath",get:function(){return"@/assets/images/cards/".concat(this.color,"_").concat(this.code)}}]),e}()),P={name:"Card",props:{card:{type:D}},computed:{isBlack:function(){return"PIQUE"==this.card.color||"TREFLE"==this.card.color}}};r("afb3");const W=a()(P,[["render",R],["__scopeId","data-v-9b5e79ee"]]);var G=W,$={class:"footer"},T={key:0,class:"container container-flex"},_={key:1,class:"container container-flex between"},I={class:"container-flex between",style:{"flex-grow":"1"}},L=["disabled"],M={class:"payment-display container-flex"},Q={key:2,class:"container container-flex between"},z={class:"container-flex"};function H(e,t,r,s,c,a){return Object(n["s"])(),Object(n["f"])("div",$,[e.roundFinished&&0==e.money?(Object(n["s"])(),Object(n["f"])("div",T,[Object(n["g"])("button",{class:"btn",onClick:t[0]||(t[0]=function(t){return e.resetGame()})},"Retry")])):!e.roundStarted||e.roundFinished?(Object(n["s"])(),Object(n["f"])("div",_,[Object(n["g"])("div",I,[Object(n["g"])("button",{class:"btn btn-danger btn-sm text-xl",onClick:t[1]||(t[1]=function(t){return e.minus()}),disabled:5==e.payment}," - ",8,L),Object(n["g"])("button",{class:"btn btn-success btn-sm text-xl",onClick:t[2]||(t[2]=function(t){return e.plus()})},"+"),Object(n["g"])("span",M,Object(n["B"])(e.payment)+" $",1)]),Object(n["g"])("button",{class:"btn btn-bet",onClick:t[3]||(t[3]=function(t){return e.bet()})},"Bet")])):!e.userStand&&e.userCards.length>=2?(Object(n["s"])(),Object(n["f"])("div",Q,[Object(n["g"])("div",z,[e.splitAllowed?(Object(n["s"])(),Object(n["f"])("button",{key:0,class:"btn",onClick:t[4]||(t[4]=function(t){return e.split()})},"Split")):Object(n["e"])("",!0),e.doubleAllowed?(Object(n["s"])(),Object(n["f"])("button",{key:1,class:"btn",onClick:t[5]||(t[5]=function(t){return e.double()})}," Double ")):Object(n["e"])("",!0),Object(n["g"])("button",{class:"btn btn-hit",onClick:t[6]||(t[6]=function(t){return e.hit()})},"Hit")]),Object(n["g"])("button",{class:"btn btn-warning",onClick:t[7]||(t[7]=function(t){return e.stand()}),style:{"margin-left":"5%"}}," Stand ")])):Object(n["e"])("",!0)])}var J={name:"Footer",props:{userWin:{type:Boolean},userScore:{},roundStarted:{type:Boolean},roundFinished:{type:Boolean},doubleAllowed:{type:Boolean},splitAllowed:{type:Boolean},userStand:{},userCards:{default:[]},money:{}},data:function(){return{payment:5}},watch:{roundFinished:{handler:function(){this.roundFinished&&this.payment>this.money&&(this.payment=this.money)}}},methods:{bet:function(){this.$emit("bet",{payment:this.payment})},hit:function(){this.$emit("hit")},double:function(){this.$emit("double")},split:function(){this.$emit("split")},stand:function(){this.$emit("stand")},resetGame:function(){this.$emit("resetGame")},plus:function(){this.payment+5<=this.money&&(this.payment+=5)},minus:function(){this.payment-5>0&&(this.payment-=5)}}};const N=a()(J,[["render",H]]);var K=N,q={name:"Index",components:{Card:G,Footer:K},data:function(){return{money:100,payment:5,roundStarted:!1,userStand:!1,dealerStand:!1,deck:[],numberDecks:6,colors:["COEUR","PIQUE","TREFLE","CARREAU"],cards:[{code:"AS",value:1},{code:"2",value:2},{code:"3",value:3},{code:"4",value:4},{code:"5",value:5},{code:"6",value:6},{code:"7",value:7},{code:"8",value:8},{code:"9",value:9},{code:"10",value:10},{code:"J",value:10},{code:"Q",value:10},{code:"K",value:10}],userCards:[],dealerCards:[]}},computed:{userScore:function(){if(0==this.userCards.length)return 0;var e=this.userCards.reduce((function(e,t){return e+t.value}),0);return e>21?this.lowerUserScore:e},lowerUserScore:function(){var e=this;return 0==this.userCards.length?0:this.userCards.reduce((function(t,r){return t+("AS"==r.code&&e.userCards.length>1?1:r.value)}),0)},dealerScore:function(){if(0==this.dealerCards.length)return 0;var e=this.dealerCards.reduce((function(e,t){return e+t.value}),0);return e>21?this.lowerDealerScore:e},lowerDealerScore:function(){return 0==this.dealerCards.length?0:this.dealerCards.reduce((function(e,t){return e+("AS"==t.code?1:t.value)}),0)},isUserBlackjack:function(){return 0==this.userCards.length?null:2==this.userCards.length&&21==this.userScore},isDealerBlackjack:function(){return 0==this.dealerCards.length?null:2==this.dealerCards.length&&21==this.dealerScore},userWin:function(){if(this.userScore>21)return!1;if(this.userStand&&this.dealerStand){if(this.userScore<this.dealerScore&&this.dealerScore<=21)return!1;if(this.userScore>this.dealerScore)return!0;if(this.userScore<this.dealerScore&&this.dealerScore>21)return!0;if(this.userScore==this.dealerScore)return null}},roundFinished:function(){return void 0!==this.userWin},doubleAllowed:function(){return this.payment<=this.money},splitAllowed:function(){return 2==this.userCards.length&&this.userCards[0].code==this.userCards[1].code}},watch:{userScore:{handler:function(){this.userScore>=21&&this.stand()}},roundFinished:{handler:function(){this.roundFinished&&(!0===this.userWin?(this.money+=2*this.payment,this.isUserBlackjack&&(this.money+=.5*this.payment)):null!==this.userWin||this.isUserBlackjack||(this.money+=this.payment))}}},methods:{startGame:function(){this.deck=[],this.userCards=[],this.dealerCards=[],this.roundStarted=!1,this.dealerStand=!1,this.userStand=!1},resetGame:function(){this.money=100,this.payment=5},bet:function(e){this.payment=e.payment,this.money-=this.payment,this.startGame(),this.startRound()},startRound:function(){var e=this;this.roundStarted=!0,this.generateNewDeck(),this.shuffleDeck(),this.hitUserCard(),setTimeout((function(){e.hitDealerCard()}),700),setTimeout((function(){e.hitUserCard()}),1400)},generateNewDeck:function(){this.deck=[];for(var e=0;e<this.numberDecks;e++)for(var t=0;t<this.colors.length;t++)for(var r=0;r<this.cards.length;r++){var n=new D(this.colors[t],this.cards[r].code,this.cards[r].value);this.deck.push(n)}},shuffleDeck:function(){for(var e=this.deck.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),r=[this.deck[t],this.deck[e]];this.deck[e]=r[0],this.deck[t]=r[1]}},hitCard:function(){var e=this.deck.shift();return void 0==e?(alert("Card undefined : deck empty"),null):e},hitUserCard:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.hitCard();"AS"==t.code&&this.userScore+11<=21&&(t.value=11),e&&(t.double=!0),this.userCards.push(t)},hitDealerCard:function(){var e=this.hitCard();"AS"==e.code&&this.dealerScore+11<=21&&(e.value=11),this.dealerCards.push(e)},double:function(){this.money-=this.payment,this.payment*=2,this.hitUserCard(!0),this.stand()},stand:function(){var e=this;return Object(B["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.userStand=!0,!(e.userScore<=21)){t.next=9;break}case 2:if(!(e.dealerScore<17)){t.next=9;break}if(!(e.dealerScore<17)){t.next=6;break}return t.next=6,e.timer(1e3);case 6:e.hitDealerCard(),t.next=2;break;case 9:e.dealerStand=!0;case 10:case"end":return t.stop()}}),t)})))()},split:function(){},timer:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},created:function(){this.startGame()}};const V=a()(q,[["render",w]]);var X=V,Y=[{path:"/",name:"Index",component:X}],Z=Object(d["a"])({history:Object(d["b"])("/"),routes:Y}),ee=Z,te=Object(n["c"])(u);te.config.globalProperties.$cardColors=["COEUR","PIQUE","TREFLE","CARREAU"],te.use(ee).mount("#app")},"5a69":function(e,t,r){},"7d1a":function(e,t,r){"use strict";r("ef86")},a9f7:function(e,t,r){"use strict";r("5a69")},afb3:function(e,t,r){"use strict";r("3ad3")},ef86:function(e,t,r){}});
//# sourceMappingURL=app.53e7b98a.js.map