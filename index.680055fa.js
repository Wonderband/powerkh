!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);n("5hkg4"),document.querySelector(".outsourceProjects");var o=document.querySelector(".burger-btn");if(o){var l=document.querySelector(".burger-menu");o.addEventListener("click",(function(e){document.body.classList.toggle("_lock"),o.classList.toggle("_active"),l.classList.toggle("_active")}))}var i=function(e){return e.split("/").pop().split(".")[0]},a=i(location.pathname);if(""===a)document.querySelector(".burger-menu__list").firstElementChild.classList.add("active");else{var c=document.querySelectorAll(".main-navigation a"),u=!0,d=!1,s=void 0;try{for(var f,v=c[Symbol.iterator]();!(u=(f=v.next()).done);u=!0){var p=f.value;i(p.href)===a&&p.parentElement.classList.add("active")}}catch(e){d=!0,s=e}finally{try{u||null==v.return||v.return()}finally{if(d)throw s}}}var y=function(e){return e.split("/").pop().split(".")[0]},m=y(location.pathname),g=document.querySelectorAll(".footer a"),h=!0,b=!1,q=void 0;try{for(var w,L=g[Symbol.iterator]();!(h=(w=L.next()).done);h=!0){var S=w.value;y(S.href)===m&&S.parentElement.classList.add("active")}}catch(e){b=!0,q=e}finally{try{h||null==L.return||L.return()}finally{if(b)throw q}}}();
//# sourceMappingURL=index.680055fa.js.map