(()=>{"use strict";let e="localhost"===location.hostname||"127.0.0.1"===location.hostname?"http://localhost:3000":"https://orinoco-cameras-shop.herokuapp.com",t=JSON.parse(localStorage.getItem("article"));document.querySelector(".control__panier--total");const n=window.location.search.substring(4),o=`${e}/api/cameras/${n}`,l=document.getElementById("article__display"),i=document.getElementById("ajout");let a={},r={};const s=document.getElementById("ajout__btn");s.addEventListener("click",(async function(e){let o=d.options[d.selectedIndex].text;const l=()=>{t.push(r),localStorage.setItem("article",JSON.stringify(t)),location.reload()};if(0==o)d.style.border="2px dashed red";else{if(t){let e=!0;for(let l=0;l<t.length;l++){const i=t[l];if(i.id===n){e=!1,i.qty+=Number(o),localStorage.setItem("article",JSON.stringify(t)),location.reload();break}}e&&l()}else t=[],l();e.preventDefault(),e.stopPropagation()}}));const c=document.getElementById("order__btn");window.addEventListener("storage",p);const d=document.getElementById("nombre");d.addEventListener("change",(function(){let e,t=d.options[d.selectedIndex].text;const n=a.price*t/100;document.querySelector(".total__prix").innerHTML=`\n  ${n} €\n  `;for(let n in t)e={name:a.name,id:a._id,price:a.price/100,qty:Number(t),img:a.imageUrl};r=e}));let m=fetch(o).then((function(e){return e.json()})).then((function(e){a=e})).catch((function(e){l.innerHTML=' <p class="col text-info">Une erreur est survenue, nous vous prions de bien vouloir réessayer dans un instant.</P>'+e}));async function p(){await async function(){await m,l.innerHTML=`\n  <img class="card-img-top pt-2" src="${a.imageUrl}"/>\n  <h2 class="card-title mt-3">${a.name}</h2>\n  <div class="card-text">\n    <p>${a.description}</p> \n    <p class="h6">Prix: ${a.price/100} € <p>\n    <form>\n      <label for="lentilles" class="col-12"> Choisissez l'option de lentille </label>\n      <select name="lentilles" id="lentilles">\n      </select>\n    </form>\n  </div> \n  `;for(let e in a.lenses){const t=document.getElementById("lentilles"),n=document.createElement("option");n.innerHTML=`\n    <option value=${a.lenses[e]}>${a.lenses[e]}</option>\n    `,t.appendChild(n)}}(),null!=localStorage.getItem("article")&&(c.removeAttribute("disabled"),c.classList.replace("btn-primary","btn-info"))}!function(){try{const e=document.querySelector(".header__cart--popup"),n=t&&t.length>0,o=e.className.includes("hide");if(n&&o){let n=0;for(let e in t)n+=t[e].qty;e.classList.remove("hide"),e.innerHTML=n}}catch{console.error("Erreur sur l'affichage de la pop up")}}(),p(),t&&t.forEach((e=>{if(e.id===n&&e.qty>=20){s.setAttribute("disabled","disabled");let t=document.createElement("div");t.classList.add("col-12","text-center","h3","text-info"),t.innerHTML=`\n        <p> Vous avez atteint le nombre maximum d'appareils ${e.name} dans votre panier </p>\n        <p class="h4"> Merci de valider votre commande, ou de continuer vos achats. </p>\n        `,i.appendChild(t)}}))})();