(function(e){function t(t){for(var n,c,o=t[0],i=t[1],u=t[2],l=0,h=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&h.push(s[c][0]),s[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(h.length)h.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==s[i]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},s={app:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var d=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function s(e,t){var r=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["d"])(r)}r("a9f7");var a=r("6b0d"),c=r.n(a);const o={},i=c()(o,[["render",s]]);var u=i,d=r("6c02"),l=(r("ac1f"),r("1276"),{id:"boardgame"}),h={class:"board"},b={style:{color:"white",position:"absolute",bottom:"0%",left:"0","font-size":"1.3rem"}},f={key:0},p={key:0,class:"boardcard"},j={class:"board-croupier"},O={class:"container-buttons",style:{"margin-top":"0"}},m={class:"btn"},y={class:"container-cards"},v={class:"board-user"},S={class:"container-cards"},g={key:0,style:{color:"red"}},k={class:"container-buttons"},C={class:"btn"};function w(e,t,r,s,a,c){var o=Object(n["y"])("Card"),i=Object(n["y"])("Footer");return Object(n["r"])(),Object(n["f"])("div",l,[Object(n["g"])("div",h,[Object(n["g"])("div",b,[Object(n["g"])("h2",null,[Object(n["g"])("b",null,"Your money : "+Object(n["A"])(e.money)+"$",1)]),Object(n["g"])("h2",null,[e.roundStarted?(Object(n["r"])(),Object(n["f"])("b",f,"Payment : "+Object(n["A"])(e.payment)+"$",1)):Object(n["e"])("",!0)])]),e.roundStarted?(Object(n["r"])(),Object(n["f"])("div",p,[Object(n["g"])("div",j,[Object(n["g"])("div",O,[Object(n["g"])("button",m,[Object(n["g"])("b",null,Object(n["A"])(e.dealerScore),1)])]),Object(n["g"])("div",y,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(e.dealerCards,(function(e,t){return Object(n["r"])(),Object(n["d"])(o,{key:t,card:e},null,8,["card"])})),128))])]),Object(n["g"])("div",v,[Object(n["g"])("div",S,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(e.userCards,(function(e,t){return Object(n["r"])(),Object(n["d"])(o,{key:t,card:e},null,8,["card"])})),128)),e.isUserBlackjack?(Object(n["r"])(),Object(n["f"])("b",g,"Blackjack !")):Object(n["e"])("",!0)]),Object(n["g"])("div",k,[Object(n["g"])("button",C,[Object(n["g"])("b",null,Object(n["A"])(e.userScore),1)])])])])):Object(n["e"])("",!0)]),Object(n["h"])(i,{userWin:e.userWin,userScore:e.userScore,roundStarted:e.roundStarted,roundFinished:e.roundFinished,doubleAllowed:e.doubleAllowed,userStand:e.userStand,userCards:e.userCards,money:e.money,onBet:e.bet,onHit:e.hitUserCard,onDouble:e.double,onSplit:e.split,onStand:e.stand,onStartGame:e.startGame},null,8,["userWin","userScore","roundStarted","roundFinished","doubleAllowed","userStand","userCards","money","onBet","onHit","onDouble","onSplit","onStand","onStartGame"])])}var A=r("1da1"),x=(r("96cf"),r("d3b7"),{style:{"font-size":"1.5rem"}});function U(e,t,r,s,a,c){return Object(n["r"])(),Object(n["f"])("div",{class:Object(n["n"])(["card",e.isBlack?"card-black":"card-red"])},[Object(n["g"])("div",x,[Object(n["g"])("b",null,Object(n["A"])(e.card.code)+" "+Object(n["A"])(e.card.colorLabel),1)])],2)}var E=r("d4ec"),F=r("bee2"),R=(r("99af"),function(){function e(t,r,n){var s;switch(Object(E["a"])(this,e),this.color=t,this.code=r,this.value=n,this.color){case"COEUR":s="♡";break;case"PIQUE":s="♤";break;case"CARREAU":s="♢";break;case"TREFLE":s="♧";break}this.colorLabel=s}return Object(F["a"])(e,[{key:"imagePath",get:function(){return"@/assets/images/cards/".concat(this.color,"_").concat(this.code)}}]),e}()),B={name:"Card",props:{card:{type:R}},computed:{isBlack:function(){return"PIQUE"==this.card.color||"TREFLE"==this.card.color}}};r("6e66");const P=c()(B,[["render",U],["__scopeId","data-v-d5cd1428"]]);var D=P,$={class:"footer"},G={key:0,class:"container container-flex between"},T={class:"container-flex between",style:{"flex-grow":"1"}},_=["disabled"],W={class:"payment-display container-flex"},I={key:1,class:"container container-flex"},L=Object(n["g"])("span",null,"↻",-1),M=[L];function Q(e,t,r,s,a,c){return Object(n["r"])(),Object(n["f"])("div",$,[!e.roundStarted||e.roundFinished?(Object(n["r"])(),Object(n["f"])("div",G,[Object(n["g"])("div",T,[Object(n["g"])("button",{class:"btn btn-danger btn-sm",onClick:t[0]||(t[0]=function(t){return e.minus()}),disabled:5==e.payment},"-",8,_),Object(n["g"])("button",{class:"btn btn-success btn-sm",onClick:t[1]||(t[1]=function(t){return e.plus()})},"+"),Object(n["g"])("span",W,Object(n["A"])(e.payment)+" $",1)]),Object(n["g"])("button",{class:"btn btn-bet",onClick:t[2]||(t[2]=function(t){return e.bet()})},"Bet")])):(Object(n["r"])(),Object(n["f"])("div",I,[Object(n["g"])("button",{class:"btn btn-danger",onClick:t[3]||(t[3]=function(t){return e.startGame()})},M),!e.userStand&&e.userCards.length>=2&&e.doubleAllowed?(Object(n["r"])(),Object(n["f"])("button",{key:0,class:"btn",style:{"margin-left":"5%"},onClick:t[4]||(t[4]=function(t){return e.double()})}," Double ")):Object(n["e"])("",!0),!e.userStand&&e.userCards.length>=2?(Object(n["r"])(),Object(n["f"])("button",{key:1,class:"btn",onClick:t[5]||(t[5]=function(t){return e.hit()})}," Hit ")):Object(n["e"])("",!0),!e.userStand&&e.userCards.length>=2?(Object(n["r"])(),Object(n["f"])("button",{key:2,class:"btn btn-warning",onClick:t[6]||(t[6]=function(t){return e.stand()}),style:{"margin-left":"5%"}}," Stand ")):Object(n["e"])("",!0)]))])}var H={name:"Footer",props:{userWin:{type:Boolean},userScore:{},roundStarted:{type:Boolean},roundFinished:{type:Boolean},doubleAllowed:{type:Boolean},userStand:{},userCards:{default:[]},money:{}},data:function(){return{payment:5}},watch:{roundFinished:{handler:function(){this.roundFinished&&this.payment>this.money&&(this.payment=this.money)}}},methods:{bet:function(){this.$emit("bet",{payment:this.payment})},hit:function(){this.$emit("hit")},double:function(){this.$emit("double")},slipt:function(){this.$emit("split")},stand:function(){this.$emit("stand")},startGame:function(){this.$emit("startGame")},plus:function(){this.payment+5<=this.money&&(this.payment+=5)},minus:function(){this.payment-5>0&&(this.payment-=5)}}};const J=c()(H,[["render",Q]]);var z=J,N={name:"Index",components:{Card:D,Footer:z},data:function(){return{money:100,payment:5,roundStarted:!1,userStand:!1,dealerStand:!1,deck:[],colors:["COEUR","PIQUE","TREFLE","CARREAU"],cards:[{code:"AS",value:1},{code:"2",value:2},{code:"3",value:3},{code:"4",value:4},{code:"5",value:5},{code:"6",value:6},{code:"7",value:7},{code:"8",value:8},{code:"9",value:9},{code:"10",value:10},{code:"J",value:10},{code:"Q",value:10},{code:"K",value:10}],userCards:[],dealerCards:[]}},computed:{userScore:function(){return 0==this.userCards.length?0:this.userCards.reduce((function(e,t){return e+t.value}),0)},dealerScore:function(){return 0==this.dealerCards.length?0:this.dealerCards.reduce((function(e,t){return e+t.value}),0)},isUserBlackjack:function(){return 0==this.userCards.length?null:2==this.userCards.length&&21==this.userScore},isDealerBlackjack:function(){return 0==this.dealerCards.length?null:2==this.dealerCards.length&&21==this.dealerScore},userWin:function(){if(this.userScore>21)return!1;if(this.userStand&&this.dealerStand){if(this.userScore<this.dealerScore&&this.dealerScore<=21)return!1;if(this.userScore>this.dealerScore)return!0;if(this.userScore<this.dealerScore&&this.dealerScore>21)return!0;if(this.userScore==this.dealerScore)return null}},roundFinished:function(){return!0===this.userWin||!1===this.userWin},doubleAllowed:function(){return 2*this.payment<=this.money}},watch:{isUserBlackjack:{handler:function(){this.isUserBlackjack&&(this.money+=2.5*this.payment,this.stand())}},userScore:{handler:function(){this.userScore>=21&&this.stand()}},roundFinished:{handler:function(){this.roundFinished&&1==this.userWin&&(this.money+=2*this.payment)}}},methods:{startGame:function(){this.deck=[],this.userCards=[],this.dealerCards=[],this.roundStarted=!1,this.dealerStand=!1,this.userStand=!1},bet:function(e){this.payment=e.payment,this.money-=this.payment,this.startGame(),this.startRound()},startRound:function(){var e=this;this.roundStarted=!0,this.generateNewDeck(),this.shuffleDeck(),this.hitUserCard(),setTimeout((function(){e.hitDealerCard()}),500),setTimeout((function(){e.hitUserCard()}),1e3)},generateNewDeck:function(){this.deck=[];for(var e=0;e<this.colors.length;e++)for(var t=0;t<this.cards.length;t++){var r=new R(this.colors[e],this.cards[t].code,this.cards[t].value);this.deck.push(r)}},shuffleDeck:function(){for(var e=this.deck.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),r=[this.deck[t],this.deck[e]];this.deck[e]=r[0],this.deck[t]=r[1]}},hitCard:function(){var e=this.deck.shift();return void 0==e?(alert("Card undefined : deck empty"),null):e},hitUserCard:function(){var e=this.hitCard();"AS"==e.code&&this.userScore+11<=21&&(e.value=11),this.userCards.push(e)},hitDealerCard:function(){var e=this.hitCard();"AS"==e.code&&this.dealerScore+11<=21&&(e.value=11),this.dealerCards.push(e)},double:function(){this.money-=this.payment,this.payment*=2,this.hitUserCard(),this.stand()},stand:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.userStand=!0,!(e.userScore<=21)){t.next=8;break}case 2:if(!(e.dealerScore<17)){t.next=8;break}return e.hitDealerCard(),t.next=6,e.timer(1e3);case 6:t.next=2;break;case 8:e.dealerStand=!0;case 9:case"end":return t.stop()}}),t)})))()},split:function(){},timer:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},created:function(){this.startGame()}};const K=c()(N,[["render",w]]);var Y=K,q=[{path:"/",name:"Index",component:Y}],V=Object(d["a"])({history:Object(d["b"])("/"),routes:q}),X=V,Z=Object(n["c"])(u);Z.config.globalProperties.$cardColors=["COEUR","PIQUE","TREFLE","CARREAU"],Z.use(X).mount("#app")},"5a69":function(e,t,r){},"6e66":function(e,t,r){"use strict";r("d6e2")},a9f7:function(e,t,r){"use strict";r("5a69")},d6e2:function(e,t,r){}});
//# sourceMappingURL=app.ba44401f.js.map