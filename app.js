const items = [
 {name:"Telegram",category:"Медиа",desc:"Мессенджер и общение",version:"Добавьте IPA в админке",symbol:"✈"},
 {name:"Утилиты",category:"Утилиты",desc:"Полезные инструменты для iPhone",version:"Скоро",symbol:"✦"},
 {name:"Медиа-плеер",category:"Медиа",desc:"Приложения для музыки и видео",version:"Скоро",symbol:"▶"},
 {name:"Инструменты",category:"Инструменты",desc:"Дополнительные инструменты",version:"Скоро",symbol:"⚙"}
];
let category="Все";
const appsEl=document.querySelector("#apps");
const search=document.querySelector("#search");
function render(){
 const q=search.value.trim().toLowerCase();
 const shown=items.filter(x=>(category==="Все"||x.category===category)&&(`${x.name} ${x.desc}`.toLowerCase().includes(q)));
 document.querySelector("#count").textContent=`${shown.length} ${shown.length===1?"приложение":"приложения"}`;
 appsEl.innerHTML=shown.length?shown.map(x=>`<article class="app"><div class="appicon">${x.symbol}</div><h3>${x.name}</h3><p>${x.desc}</p><div class="meta">${x.version}</div><span class="download disabled">Скоро</span></article>`).join(""):`<div class="empty">Ничего не найдено</div>`;
}
document.querySelectorAll("[data-category]").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll("[data-category]").forEach(b=>b.classList.remove("active"));btn.classList.add("active");category=btn.dataset.category;render()}));
search.addEventListener("input",render);
document.querySelector("#installBtn").addEventListener("click",()=>{
 alert("На iPhone откройте сайт в Safari → нажмите «Поделиться» → «На экран Домой» → «Добавить». Для установки через профиль Web Clip сначала потребуется домен сайта и отдельный .mobileconfig.");
});
if("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("./sw.js").catch(()=>{});
render();
