function n(n){return n&&n.__esModule?n.default:n}function e(n,e,a,t){Object.defineProperty(n,e,{get:a,set:t,enumerable:!0,configurable:!0})}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},l=a.parcelRequired7c6;null==l&&((l=function(n){if(n in t)return t[n].exports;if(n in r){var e=r[n];delete r[n];var a={id:n,exports:{}};return t[n]=a,e.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(n,e){r[n]=e},a.parcelRequired7c6=l),l.register("iB55m",(function(a,t){e(a.exports,"default",(function(){return r}));var r=n(l("amrNH")).template({compiler:[8,">= 4.3.0"],main:function(n,e,a,t,r){var l=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"<div class='container__hero'><h2\n    class='hero-part-four__title'\n  >"+n.escapeExpression(n.lambda(null!=e?l(e,"title"):e,e))+"</h2></div>"},useData:!0})})),l.register("aSQcX",(function(a,t){e(a.exports,"default",(function(){return r}));var r=n(l("amrNH")).template({compiler:[8,">= 4.3.0"],main:function(n,e,a,t,r){var l=n.lambda,i=n.escapeExpression;return"\n\n\n<div class='share__wrapper'>\n  <h3 class='share__title'>Share:</h3>\n  <ul class='share__list'>\n\n    <li class='share__item share__facebook'>\n      <a\n        target='_blank'\n        aria-label='facebook-link'\n        target='_blank'\n        class='share__link'\n        href='https://www.facebook.com/sharer/sharer.php?u="+i(l(e,e))+"'\n      >\n\n      </a>\n    </li>\n    <li class='share__item share__linkedin'>\n      <a\n        target='_blank'\n        aria-label='linkedin-link'\n        target='_blank'\n        class='share__link'\n        href='https://www.linkedin.com/shareArticle?url="+i(l(e,e))+"'\n      >\n\n      </a>\n    </li>\n  </ul>\n</div>"},useData:!0})})),l.register("1N1Mh",(function(a,t){e(a.exports,"default",(function(){return r}));var r=n(l("amrNH")).template({1:function(n,e,a,t,r){var l=n.lambda,i=n.escapeExpression,o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"    <li class='contents__item'>\n      <a\n        aria-label='content list'\n        class='contents__subtitle'\n        href='#"+i(l(null!=e?o(e,"link"):e,e))+"'\n      >"+i(l(null!=e?o(e,"subtitle"):e,e))+"</a>\n\n    </li>\n"},compiler:[8,">= 4.3.0"],main:function(n,e,a,t,r){var l,i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"<h3 class='contents__title'>"+n.escapeExpression(n.lambda(null!=e?i(e,"title"):e,e))+"</h3>\n<ul class='contents__list'>\n"+(null!=(l=i(a,"each").call(null!=e?e:n.nullContext||{},null!=e?i(e,"list"):e,{name:"each",hash:{},fn:n.program(1,r,0),inverse:n.noop,data:r,loc:{start:{line:3,column:2},end:{line:12,column:11}}}))?l:"")+"</ul>"},useData:!0})})),l.register("28VPK",(function(a,t){e(a.exports,"default",(function(){return r}));var r=n(l("amrNH")).template({1:function(n,e,a,t,r){return"  <li class='what-problems__item'>"+n.escapeExpression(n.lambda(e,e))+"</li>\n"},compiler:[8,">= 4.3.0"],main:function(n,e,a,t,r){var l,i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return null!=(l=i(a,"each").call(null!=e?e:n.nullContext||{},null!=e?i(e,"list"):e,{name:"each",hash:{},fn:n.program(1,r,0),inverse:n.noop,data:r,loc:{start:{line:1,column:0},end:{line:3,column:9}}}))?l:""},useData:!0})})),l.register("7JcVF",(function(a,t){e(a.exports,"default",(function(){return r}));var r=n(l("amrNH")).template({compiler:[8,">= 4.3.0"],main:function(n,e,a,t,r){var l,i=n.lambda,o=n.escapeExpression,s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"\n<div class='author__img-wrapper'>\n  <img\n    class='author__img'\n    srcset='https://storage.googleapis.com/poverkh"+o(i(null!=(l=null!=e?s(e,"avatar"):e)?s(l,"md_1x"):l,e))+" 1x, https://storage.googleapis.com/poverkh"+o(i(null!=(l=null!=e?s(e,"avatar"):e)?s(l,"md_2x"):l,e))+" 2x'\n    src='https://storage.googleapis.com/poverkh"+o(i(null!=(l=null!=e?s(e,"avatar"):e)?s(l,"md_1x"):l,e))+'\'\n    loading="lazy"\n    alt='+o(i(null!=e?s(e,"name"):e,e))+"\n  />\n</div>\n<h3 class='author__name'>"+o(i(null!=e?s(e,"name"):e,e))+"</h3>\n<p class='author__profession'>"+o(i(null!=e?s(e,"position"):e,e))+"</p>\n<ul class='author__list'>\n  <li class='author__item author__linkedin'>\n    <a\n      target='_blank'\n      aria-label='linkedin-link'\n      class='author__link'\n      href='https://www.linkedin.com/in/"+o(i(null!=e?s(e,"linkedin"):e,e))+"'\n    ></a>\n  </li>\n  <li class='author__item author__email'>\n    <a\n      target='_blank'\n      aria-label='mail-link'\n      class='author__link'\n      href='mailto:"+o(i(null!=e?s(e,"email"):e,e))+"'\n    ></a>\n  </li>\n</ul>\n<div class='author__service'>\n  <p class='author__service-name'>BIM Automation Services</p>\n\n  <div class='author__service-link-wrap'>\n    <a\n      target='_blank'\n      aria-label='Learn more'\n      class='author__service-link btn'\n      href='./bim-automation.html'\n    >Learn more</a>\n  </div>\n</div>"},useData:!0})})),l.register("fG0Df",(function(a,t){e(a.exports,"default",(function(){return r}));var r=n(l("amrNH")).template({1:function(n,e,a,t,r){var l=n.lambda,i=n.escapeExpression,o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"    <li class='list-link__item'>\n      <a href='"+i(l(null!=e?o(e,"link"):e,e))+"'>"+i(l(null!=e?o(e,"article"):e,e))+"</a>\n    </li>\n"},compiler:[8,">= 4.3.0"],main:function(n,e,a,t,r){var l,i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"<h3 class='other-articles__title'>"+n.escapeExpression(n.lambda(null!=e?i(e,"title"):e,e))+"</h3>\n<ul class='other-articles__list-link list-link'>\n"+(null!=(l=i(a,"each").call(null!=e?e:n.nullContext||{},null!=e?i(e,"list"):e,{name:"each",hash:{},fn:n.program(1,r,0),inverse:n.noop,data:r,loc:{start:{line:6,column:2},end:{line:10,column:11}}}))?l:"")+"</ul>"},useData:!0})})),l.register("cZG3i",(function(a,t){e(a.exports,"default",(function(){return r}));var r=n(l("amrNH")).template({compiler:[8,">= 4.3.0"],main:function(n,e,a,t,r){var l,i=n.lambda,o=n.escapeExpression,s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"\n<div class='author__img-wrapper author-info__img-wrapper'>\n  <img\n    class='author__img' loading=\"lazy\"\n    srcset='https://storage.googleapis.com/poverkh"+o(i(null!=(l=null!=e?s(e,"avatar"):e)?s(l,"md_1x"):l,e))+", https://storage.googleapis.com/poverkh"+o(i(null!=(l=null!=e?s(e,"avatar"):e)?s(l,"md_2x"):l,e))+"'\n    src='https://storage.googleapis.com/poverkh"+o(i(null!=(l=null!=e?s(e,"avatar"):e)?s(l,"md_1x"):l,e))+"'\n    alt="+o(i(null!=e?s(e,"name"):e,e))+"\n  />\n</div>\n<div class='author-info__wrapper'>\n  <h3 class='author__name author-info__name'>"+o(i(null!=e?s(e,"name"):e,e))+"</h3>\n  <p class='author__profession author-info__profession'>"+o(i(null!=e?s(e,"position"):e,e))+"</p>\n  <ul class='author__list author-info__list'>\n    <li class='author__item author__linkedin'><a\n        class='author__link'\n        href='https://www.linkedin.com/in/"+o(i(null!=e?s(e,"linkedin"):e,e))+"'\n        target='_blank'\n        aria-label=\"go to the author's linkedin\"\n      ></a></li>\n    <li class='author__item author__email'><a\n        class='author__link'\n        href='mailto:"+o(i(null!=e?s(e,"email"):e,e))+"'\n        aria-label='send an email to the author of the article'\n      ></a></li>\n  </ul>\n</div>"},useData:!0})})),l.register("4mXp5",(function(a,t){e(a.exports,"default",(function(){return r}));var r=n(l("amrNH")).template({compiler:[8,">= 4.3.0"],main:function(n,e,a,t,r){var l=n.lambda,i=n.escapeExpression,o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"\n<div class='container architect-rend-serv__container'>\n  <div class='architect-rend-serv__wrap'>\n    <h2 class='architect-rend-serv__title'>"+i(l(null!=e?o(e,"title"):e,e))+"</h2>\n    <p class='architect-rend-serv__paragraph'>"+i(l(null!=e?o(e,"description"):e,e))+"</p>\n    <a\n      target='_blank'\n      aria-label='Read more'\n      class='architect-rend-serv__link btn'\n      href='"+i(l(null!=e?o(e,"link"):e,e))+"'\n    >Read more</a>\n  </div>\n</div>"},useData:!0})})),l.register("2YMao",(function(n,a){e(n.exports,"fetchDatabaseAuthor",(function(){return r}));var t=l("iyG4K");async function r(n,e,a,r,l){const i=await fetch("https://poverkh-default-rtdb.firebaseio.com"+n).then((n=>n.json())),o=Object.values(i)[0];(0,t.useTemplate)(e,r,o),(0,t.useTemplate)(a,l,o)}})),l.register("iyG4K",(function(n,a){function t(n,e,a){n.insertAdjacentHTML("beforeend",e(a))}e(n.exports,"useTemplate",(function(){return t}))}));
//# sourceMappingURL=seven-benefits-of-bim.908df97f.js.map
