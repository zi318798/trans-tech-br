(window.webpackJsonp=window.webpackJsonp||[]).push([[8,6,7],{341:function(e,t,r){var content=r(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("39ea8b0c",content,!0,{sourceMap:!1})},342:function(e,t,r){"use strict";r(341)},343:function(e,t,r){var n=r(22)(!1);n.push([e.i,".banner-text-pink[data-v-b5135f3c]{color:#d884c6!important;margin:10px;padding:5px}.bannerBlack-title[data-v-b5135f3c]{font-size:22px;line-height:30px;margin:20px 5px;color:#f5f5f5}.banner-black-subtitle[data-v-b5135f3c]{font-size:18px;color:#f5f5f5}.bannerBlack[data-v-b5135f3c]{background:inherit;padding:20px 10px;min-height:600px;display:flex;align-items:center}h2[data-v-b5135f3c]{margin:20px 10px}.small-button-text[data-v-b5135f3c]{font-size:14px}",""]),e.exports=n},344:function(e,t,r){var content=r(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("89419d60",content,!0,{sourceMap:!1})},348:function(e,t,r){"use strict";r.r(t);var n={name:"CardEmpresa",props:["empresa"]},o=r(45),c=r(49),l=r.n(c),d=r(230),m=r(347),v=r(340),f=r(333),h=r(339),x=r(231),_=r(335),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"card-shadow"},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:e.empresa.img}},[r("v-card-title",[e._v(e._s(e.empresa.name)+" ")])],1),e._v(" "),r("v-card-subtitle",{staticClass:"pb-0"},[e._v("\n          "+e._s(e.empresa.subtitle)+"\n        ")]),e._v(" "),r("v-card-text",{staticClass:"text--primary"},[r("div",[e._v(e._s(e.empresa.resume))])]),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"error",text:"",href:e.empresa.pagina}},[e._v("\n            Detalhes\n          ")]),e._v(" "),r("v-btn",{attrs:{color:"error",text:"",href:e.empresa.vagas}},[e._v(" Vagas ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBtn:d.a,VCard:m.a,VCardActions:v.a,VCardSubtitle:v.b,VCardText:v.c,VCardTitle:v.d,VCol:f.a,VContainer:h.a,VImg:x.a,VRow:_.a})},349:function(e,t,r){"use strict";r.r(t);var n={name:"BannerEmpresas",data:function(){return{}},methods:{}},o=(r(342),r(45)),c=r(49),l=r.n(c),d=r(230),m=r(333),v=r(335),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bannerBlack"},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12",md:"9",xs:"3"}},[r("div",[r("h2",{staticClass:"bannerBlack-title font-weight-light"},[e._v("\n          Nós pedimos a comunidade tech no Twitter, indicações de empresas\n          que:\n        ")]),e._v(" "),r("p",{staticClass:"banner-text-pink"},[e._v("\n          * Praticam verdadeiramente a cultura de diversidade e igualdade\n          entre os funcionarios.\n        ")]),e._v(" "),r("p",{staticClass:"banner-text-pink"},[e._v("\n          * Oferecem um ambiente seguro e evolutivo para pessoas não-brancas\n          e/ou LGBTQIA+ , e outras minorias diversas.\n        ")]),e._v(" "),r("h2",{staticClass:"banner-black-subtitle font-weight-light"},[e._v("\n          Abaixo, você pode conferir a lista de empresas indicadas:\n        ")]),e._v(" "),r("div",{staticClass:"mt-16 pt-2 ml-3"},[r("v-btn",{staticClass:"btn-arrow",attrs:{nuxt:"",large:"",to:"/",depressed:"",color:"error",elevation:"0"}},[r("span",{},[e._v("Recomende empresas aqui ")]),e._v(" "),r("i",{staticClass:"mdi mdi-arrow-right"})])],1)])])],1)],1)}),[],!1,null,"b5135f3c",null);t.default=component.exports;l()(component,{VBtn:d.a,VCol:m.a,VRow:v.a})},354:function(e,t,r){"use strict";r(344)},355:function(e,t,r){var n=r(22)(!1);n.push([e.i,'.body-page[data-v-4f73590e]{padding:3rem;font-family:"DM Sans",sans-serif;color:#95e9ef;background:#1f1f1f}#cards-section[data-v-4f73590e]{display:grid;grid-gap:.2rem;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));min-height:calc(100vh - 2rem)}',""]),e.exports=n},361:function(e,t,r){"use strict";r.r(t);var n=r(348),o=r(349),c={head:function(){return{title:"Transparecer Tech Brasil",meta:[{hid:"description",name:"Trans Tech Brasil",content:"Trans Tech Brasil"}]}},name:"companies",components:{CardEmpresa:n.default,BannerEmpresas:o.default},data:function(){return{empresas:[{id:1,name:"Um nome",subtitle:"alguma descricao ",vagaJunior:!0,resume:"um resumo para aparecer no card",img:"https://cdn.vuetifyjs.com/images/cards/docks.jpg",pagina:"https://google.com",vagas:"https://google.com"},{id:2,name:"Um nome2",subtitle:"alguma descricao2 ",vagaJunior:!0,resume:"um resumo para aparecer no card",img:"https://cdn.vuetifyjs.com/images/cards/docks.jpg",pagina:"https://google.com",vagas:"https://google.com"},{id:3,name:"Um nome3",subtitle:"alguma descricao3  ",vagaJunior:!0,resume:"um resumo para aparecer no card",img:"https://cdn.vuetifyjs.com/images/cards/docks.jpg",pagina:"https://google.com",vagas:"https://google.com"},{id:4,name:"Um nome4",subtitle:"alguma descricao4  ",vagaJunior:!0,resume:"um resumo para aparecer no card",img:"https://cdn.vuetifyjs.com/images/cards/docks.jpg",pagina:"https://google.com",vagas:"https://google.com"}],error:!1}}},l=(r(354),r(45)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"body-page"},[r("BannerEmpresas"),e._v(" "),r("div",{attrs:{id:"cards-section"}},[e._l(e.empresas,(function(e){return r("div",{key:e.id},[r("CardEmpresa",{attrs:{empresa:e}})],1)}))],2)],1)}),[],!1,null,"4f73590e",null);t.default=component.exports}}]);