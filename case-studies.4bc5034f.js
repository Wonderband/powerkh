const e=document.querySelector(".burger-btn"),t=document.querySelector(".burger-menu"),c=document.querySelector(".backdrop-burger");function o(r){r.preventDefault(),body.classList.add("_lock"),c.classList.add("active-burger"),body.addEventListener("keyup",n),c.addEventListener("click",a),e.classList.add("_active"),t.classList.add("_active"),e.removeEventListener("click",o),e.addEventListener("click",s)}function s(r){r&&r.preventDefault(),body.classList.remove("_lock"),c.classList.remove("active-burger"),body.removeEventListener("keyup",n),c.removeEventListener("click",a),e.classList.remove("_active"),t.classList.remove("_active"),e.removeEventListener("click",s),e.addEventListener("click",o)}function n(e){27==e.keyCode&&s()}function a(e){e.target===e.currentTarget&&s()}body=document.body,e&&e.addEventListener("click",o);const r=e=>e.split("/").pop().split(".")[0];let i=r(location.pathname);if(""===i)document.querySelector(".burger-menu__list").firstElementChild.classList.add("active");else{const e=document.querySelectorAll(".main-navigation a, .burger-menu a");for(let t of e)r(t.href)===i&&t.parentElement.classList.add("active");document.querySelectorAll(".main-navigation__dropdown-item").forEach((e=>{e.classList.contains("active")&&e.closest(".main-navigation__item").classList.add("active")}))}"contacts"===i&&document.querySelector(".main-navigation__item > .contact-us-btn").classList.add("disable-component");const l=e=>e.split("/").pop().split(".")[0],d=l(location.pathname),u=document.querySelectorAll(".footer a");for(let e of u)l(e.href)===d&&e.parentElement.classList.add("active");async function m(e){return fetch("https://events.sendpulse.com/events/id/ecc62b30695e496ddd8b5bc361a4afc5/8268220",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json()))}const v={contactUsButtons:document.querySelectorAll(".js-btn-modal"),backdropQuestion:document.querySelector(".question"),backdropSuccess:document.querySelector(".success"),backdropDuplicate:document.querySelector(".duplicate"),backdropFail:document.querySelector(".fail"),closeBtn:document.querySelector(".contact-modal__close-btn"),contactUsSubmit:document.querySelector(".modal-submit"),form:document.querySelector(".question-form"),body:document.body,inputNameBlock:document.querySelector(".contact-modal__input-wrap--first"),inputContactBlock:document.querySelector(".contact-modal__input-wrap--second"),errorMessage:document.querySelector(".error-message")};function b(e){console.log(e),v.contactUsSubmit.removeAttribute("disabled"),v.errorMessage.classList.value.includes("visually-hidden")||e!==v.backdropQuestion||v.errorMessage.classList.add("visually-hidden"),v.body.classList.add("_lock"),e.classList.add("active-modal"),v.body.addEventListener("keyup",y),e.addEventListener("click",f),console.log("open")}function p(e){v.body.classList.remove("_lock"),v.backdropQuestion.classList.remove("active-modal"),v.body.removeEventListener("keyup",y),v.backdropQuestion.removeEventListener("click",f)}function y(e){27==e.keyCode&&p()}function f(e){e.target===e.currentTarget&&p()}if(v.contactUsButtons.length>0)for(let e=0;e<v.contactUsButtons.length;e++){v.contactUsButtons[e].addEventListener("click",(()=>b(v.backdropQuestion)))}v.closeBtn.addEventListener("click",p),v.form.addEventListener("submit",(async function(e){e.preventDefault();const t=e.currentTarget.elements[0].value,c=e.currentTarget.elements[1].value,o=(a=c,k.test(a)),s=(n=c,L.test(n));var n;var a;if(o||s){v.contactUsSubmit.setAttribute("disabled","disabled");const e={name:t,phone:s?c:"",email:o?c:""},n=await m(e);if(console.log(n.result,n),p(),n.result)return void b(v.backdropSuccess);if(!n.result&&"Duplicate data"===n.message)return void b(v.backdropDuplicate);if(!n.result&&"Duplicate data"!==n.message)return void b(v.backdropFail)}v.errorMessage.classList.remove("visually-hidden"),v.contactUsSubmit.removeAttribute("disabled")}));const L=/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,k=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
//# sourceMappingURL=case-studies.4bc5034f.js.map
