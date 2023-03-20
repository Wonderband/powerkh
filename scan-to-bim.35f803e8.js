!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var i=r("fX1BI"),n=r("cgwZI"),a=r("dZP4P"),c=r("k9YCl"),l=r("iHZQ8"),s={hero:document.querySelector(".hero__content"),herBIMAndVDC:document.querySelector(".BIM-modeling"),howWeWork:document.querySelector(".howWeWork"),services:document.querySelector(".bim-automation-services"),featuresForProjects:document.querySelector(".outsourceProjects"),slider:document.querySelector(".section-projects__slider-item"),contactUs:document.querySelector(".contact-us"),faq:document.querySelector(".faq"),heroBtn:document.querySelector(".hero__btn"),heroBlock:document.querySelector(".hero__block")};document.querySelector(".case-description__text-block"),document.querySelector(".swiper-wrapper");function u(e,t,o){e.insertAdjacentHTML("beforeend",t(o))}u(s.hero,i.default,{subtitle:"Scan to BIM",text:"Do you want an interactive 3D BIM model? Powerkh can recreate your Point Cloud data as a highly accurate Revit model."}),u(s.herBIMAndVDC,n.default,[{boldText:"",description:"Highly accurate 3D BIM models for in-depth constructability reviews"},{boldText:"",description:"Better team collaboration via a unified cloud visualization platform"},{boldText:"",description:"Improved turnaround time for your BIM project"},{boldText:"",description:"Variety of application possibilities (clash detection, refurbishment, building management)"}]),u(s.howWeWork,a.default,[{subtitle:"The client sends the Point Cloud data.",description:"Powerkh works with data captured by most common laser scanners (Trimble, Reigl, Leica Geosystems, FARO)."},{subtitle:"We create a scope of work.",description:"Our teams will discuss the project’s requirements, specifications and define the Level of Development (LOD)."},{subtitle:"We import your scan to Revit.",description:"We will transfer your Point Cloud files to Revit and ensure correct object positioning to reduce redundant data."},{subtitle:"Our team creates the BIM model.",description:"Powerkh refines raw data into a 3D BIM model with architectural, structural, and MEP systems."},{subtitle:"The client receives a 3D model & 2D drawings.",description:"You’ll get an accurate interactive 3D database and, optionally, shop drawings based on the BIM model."}]),u(s.services,c.default,{title:"Our Scan to BIM & 3D Modeling Services",text:"Our experts can transform raw laser scanning and Point Cloud data into a fully-rendered digital representation of your construction project.",topic:"We offer:",list:["Point Cloud to BIM conversion and data processing","3D BIM modeling with various detail levels (LOD 100 to LOD 400/500)","Accurate representation of architectural, structural, and MEP systems","2D as-built drawings (based on your Point Cloud data)"]}),u(s.contactUs,l.default,{title:"Choose Powerkh for Scan to BIM Services!",description:"Do you want an interactive 3D BIM model? Powerkh can recreate your Point Cloud data as a highly accurate Revit geometry. Contact us to get a free quote!"});var d=document.querySelector(".burger-btn");if(d){var f=document.querySelector(".burger-menu");d.addEventListener("click",(function(e){document.body.classList.toggle("_lock"),d.classList.toggle("_active"),f.classList.toggle("_active")}))}var m=function(e){return e.split("/").pop().split(".")[0]},p=m(location.pathname);if(""===p)document.querySelector(".burger-menu__list").firstElementChild.classList.add("active");else{var y=document.querySelectorAll(".main-navigation a"),h=!0,v=!1,b=void 0;try{for(var g,w=y[Symbol.iterator]();!(h=(g=w.next()).done);h=!0){var S=g.value;m(S.href)===p&&S.parentElement.classList.add("active")}}catch(e){v=!0,b=e}finally{try{h||null==w.return||w.return()}finally{if(v)throw b}}}var q=function(e){return e.split("/").pop().split(".")[0]},D=q(location.pathname),M=document.querySelectorAll(".footer a"),B=!0,I=!1,P=void 0;try{for(var _,k=M[Symbol.iterator]();!(B=(_=k.next()).done);B=!0){var x=_.value;q(x.href)===D&&x.parentElement.classList.add("active")}}catch(e){I=!0,P=e}finally{try{B||null==k.return||k.return()}finally{if(I)throw P}}}();
//# sourceMappingURL=scan-to-bim.35f803e8.js.map