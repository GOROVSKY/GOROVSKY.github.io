(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20c01d90"],{"000b":function(e,t,n){e.exports=n.p+"img/chambre.1aeaa4f0.jpg"},6771:function(e,t,n){e.exports=n.p+"media/piano.129efd0b.mp3"},b295:function(e,t,n){},b58d:function(e,t,n){"use strict";n("b295")},d773:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o=Object(r["D"])("data-v-4e4f14fe");Object(r["r"])("data-v-4e4f14fe");var i={id:"mainChambre"},c={class:"titreIndice"},u={class:"container-stop"},a={class:"container-bg"};Object(r["p"])();var s=o((function(e,t,n,o,s,d){var l=Object(r["u"])("BlocInvisible");return Object(r["o"])(),Object(r["d"])("div",i,[Object(r["f"])("h2",c,"Indices trouvés : "+Object(r["w"])(e.nbIndiceTrouve)+" / 7",1),Object(r["f"])("div",u,[e.displayEndButton?(Object(r["o"])(),Object(r["d"])("button",{key:0,onClick:t[1]||(t[1]=function(t){return e.goToFirstView()}),class:"btn-stop"}," Terminer la partie ")):Object(r["e"])("",!0)]),Object(r["f"])("div",a,[Object(r["f"])("img",{src:e.urlImage,id:"imgChambre",onClick:t[2]||(t[2]=function(){return e.clickImg.apply(e,arguments)})},null,8,["src"]),Object(r["f"])(l,{hauteur:6.36,largeur:3.51,left:28.17,top:54,idBloc:"partition",message:"Je suis la partition","onPremiere-ouverture-event":t[3]||(t[3]=function(t){return e.incrementIndice()})}),Object(r["f"])(l,{hauteur:2.66,largeur:11.61,left:22.37,top:79.4,idBloc:"fauteuil",message:"Je suis le fauteuil","onPremiere-ouverture-event":t[4]||(t[4]=function(t){return e.incrementIndice()})}),Object(r["f"])(l,{hauteur:16.7,largeur:13.06,left:12.82,top:.18,idBloc:"coinGauche",message:"Je suis le coin gauche","onPremiere-ouverture-event":t[5]||(t[5]=function(t){return e.incrementIndice()})}),Object(r["f"])(l,{hauteur:5.33,largeur:2.06,left:45.1,top:53.82,idBloc:"poignee",message:"Je suis la poignee","onPremiere-ouverture-event":t[6]||(t[6]=function(t){return e.incrementIndice()})}),Object(r["f"])(l,{hauteur:20.6,largeur:11.12,left:56.23,top:31.26,idBloc:"porte",message:"Je suis la porte cassée","onPremiere-ouverture-event":t[7]||(t[7]=function(t){return e.incrementIndice()})}),Object(r["f"])(l,{hauteur:23.62,largeur:6.17,left:78.72,top:54.53,idBloc:"poupee",message:"Je suis la poupee","onPremiere-ouverture-event":t[8]||(t[8]=function(t){return e.incrementIndice()})}),Object(r["f"])(l,{hauteur:21.15,largeur:4.98,left:68.78,top:57.71,idBloc:"guitare",message:"Je suis la guitare","onPremiere-ouverture-event":t[9]||(t[9]=function(t){return e.incrementIndice()})})])])})),d=(n("99af"),n("b680"),n("842b")),l=n("ea99"),f={name:"ChambreIndex",components:{BlocInvisible:l["a"],Password:d["a"]},data:function(){return{urlImage:n("000b"),song:new Audio(n("6771")),showDame:!1,nbIndiceTrouve:0,displayEndButton:!1,coords:[]}},created:function(){this.song.play()},methods:{incrementIndice:function(){this.nbIndiceTrouve+=1,7==this.nbIndiceTrouve&&(this.displayEndButton=!0)},goToFirstView:function(){var e=this,t=document.getElementById("mainChambre");setTimeout((function(){t.classList.add("zoomIn")}),2e3),setTimeout((function(){return e.$router.push("/?end=oui")}),12e3),this.decreaseSong()},decreaseSong:function(){var e=this,t=setInterval((function(){e.song.volume-.1<0?clearInterval(t):e.song.volume-=.1}),1e3)},clickImg:function(e){var t=e.layerX,n=e.layerY,r=e.target.height,o=e.target.width;if(this.coords.push({left:t,top:n}),2==this.coords.length){var i=100*(this.coords[1].top-this.coords[0].top)/r,c=100*(this.coords[1].left-this.coords[0].left)/o,u=100*this.coords[0].left/o,a=100*this.coords[0].top/r;console.log("hauteur: ".concat(i.toFixed(2),"\nlargeur: ").concat(c.toFixed(2),"\nleft: ").concat(u.toFixed(2),"\ntop: ").concat(a.toFixed(2))),this.coords=[]}}}};n("b58d");f.render=s,f.__scopeId="data-v-4e4f14fe";t["default"]=f}}]);
//# sourceMappingURL=chunk-20c01d90.6269c882.js.map