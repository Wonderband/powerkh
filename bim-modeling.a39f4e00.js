function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in l)return l[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return l[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r),r.register("4h1ZJ",(function(n,l){var t,a,i,o;t=n.exports,a="default",i=function(){return s},Object.defineProperty(t,a,{get:i,set:o,enumerable:!0,configurable:!0});var s=e(r("amrNH")).template({1:function(e,n,l,t,r){return"    <li><p class='BIM__subtitle'>"+e.escapeExpression(e.lambda(n,n))+"</p></li>\n"},3:function(e,n,l,t,r){var a=e.lambda,i=e.escapeExpression,o=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"      <li class='benefits__item'>\n        <p class='benefits__description'><b>"+i(a(null!=n?o(n,"boldText"):n,n))+"</b>"+i(a(null!=n?o(n,"text"):n,n))+"\n        </p>\n      </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,l,t,r){var a,i=e.lambda,o=e.escapeExpression,s=null!=n?n:e.nullContext||{},u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"\n\n\n<div class='container'>\n  <h2 class='BIM__title'>"+o(i(null!=n?u(n,"title"):n,n))+'</h2>\n  <ul class="BIM__text-list">\n'+(null!=(a=u(l,"each").call(s,null!=n?u(n,"listText"):n,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:15,column:4},end:{line:17,column:14}}}))?a:"")+"  </ul>\n       <p class='BIM__benefits-subtitle'>"+o(i(null!=n?u(n,"smallTitle"):n,n))+"</p>\n  <ul class='BIMServices__list'>\n"+(null!=(a=u(l,"each").call(s,null!=n?u(n,"list"):n,{name:"each",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r,loc:{start:{line:21,column:4},end:{line:26,column:13}}}))?a:"")+"  </ul>\n</div>"},useData:!0})}));
//# sourceMappingURL=bim-modeling.a39f4e00.js.map