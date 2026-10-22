const items=[
{name:"Telegram++",category:"Соцсети",desc:"Мессенджер и общение",version:"Ссылка появится позже",symbol:"➤",kind:"telegram-icon"},
{name:"YouTube++",category:"Медиа",desc:"Видео и развлечения",version:"Ссылка появится позже",symbol:"▶",kind:"youtube-icon"},
{name:"Spotify++",category:"Медиа",desc:"Музыка и подкасты",version:"Ссылка появится позже",symbol:"≋",kind:"spotify-icon"},
{name:"VK++",category:"Соцсети",desc:"Социальная сеть",version:"Ссылка появится позже",symbol:"ᴠκ",kind:"vk-icon"},
{name:"Instagram++",category:"Соцсети",desc:"Фото и короткие видео",version:"Ссылка появится позже",symbol:"◎",kind:"insta-icon"},
{name:"TikTok++",category:"Соцсети",desc:"Короткие видео",version:"Ссылка появится позже",symbol:"♪",kind:"tiktok-icon"},
{name:"WhatsApp++",category:"Соцсети",desc:"Сообщения и звонки",version:"Ссылка появится позже",symbol:"◉",kind:"whatsapp-icon"},
{name:"Netflix++",category:"Медиа",desc:"Фильмы и сериалы",version:"Ссылка появится позже",symbol:"N",kind:"netflix-icon"},
{name:"СберБанк++",category:"Банки",desc:"Банковские услуги",version:"Ссылка появится позже",symbol:"✓",kind:"sber-icon"},
{name:"Т-Банк++",category:"Банки",desc:"Банк и платежи",version:"Ссылка появится позже",symbol:"T",kind:"tbank-icon"},
{name:"Альфа-Банк++",category:"Банки",desc:"Банковские услуги",version:"Ссылка появится позже",symbol:"А",kind:"alfa-icon"},
{name:"ВТБ++",category:"Банки",desc:"Банк и платежи",version:"Ссылка появится позже",symbol:"≋",kind:"vtb-icon"},
{name:"Ozon++",category:"Магазины",desc:"Покупки и доставка",version:"Ссылка появится позже",symbol:"oz",kind:"ozon-icon"},
{name:"Wildberries++",category:"Магазины",desc:"Покупки и заказы",version:"Ссылка появится позже",symbol:"WB",kind:"wb-icon"},
{name:"Яндекс++",category:"Утилиты",desc:"Поиск и сервисы",version:"Ссылка появится позже",symbol:"Я",kind:"yandex-icon"},
{name:"ChatGPT++",category:"Утилиты",desc:"ИИ-помощник",version:"Ссылка появится позже",symbol:"✳",kind:"gpt-icon"},
{name:"CapCut++",category:"Утилиты",desc:"Редактор видео",version:"Ссылка появится позже",symbol:"✂",kind:"gpt-icon"},
{name:"Duolingo++",category:"Игры",desc:"Изучение языков",version:"Ссылка появится позже",symbol:"D",kind:"sber-icon"}
];
let category="Все";const appsEl=document.querySelector("#apps");const search=document.querySelector("#search");const heroSearch=document.querySelector("#heroSearch");
function render(){const q=(search.value||heroSearch.value).trim().toLowerCase();if(search.value!==q&&document.activeElement===search)heroSearch.value=search.value;if(search.value!==heroSearch.value){if(document.activeElement===heroSearch)search.value=heroSearch.value;else if(!search.value)heroSearch.value=""}const shown=items.filter(x=>(category==="Все"||x.category===category)&&(`${x.name} ${x.desc} ${x.category}`.toLowerCase().includes(q)));document.querySelector("#count").textContent=`${shown.length} ${shown.length===1?"приложение":shown.length>1&&shown.length<5?"приложения":"приложений"}`;appsEl.innerHTML=shown.length?shown.map(x=>`<article class="app"><div class="appicon ${x.kind}" aria-hidden="true">${x.symbol}</div><div class="app-info"><h3>${x.name}</h3><p>${x.desc}</p><div class="meta">${x.category} · ${x.version}</div></div><span class="download disabled" aria-label="Ссылка скоро появится">↓</span></article>`).join(""):`<div class="empty">Ничего не найдено</div>`}
document.querySelectorAll("[data-category]").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll("[data-category]").forEach(b=>b.classList.remove("active"));btn.classList.add("active");category=btn.dataset.category;render()}));
search.addEventListener("input",()=>{heroSearch.value=search.value;render()});heroSearch.addEventListener("input",()=>{search.value=heroSearch.value;render()});
const dialog=document.querySelector("#installDialog");document.querySelector("#installBtn")?.addEventListener("click",()=>dialog.showModal());document.querySelector("#closeDialog")?.addEventListener("click",()=>dialog.close());
if("serviceWorker" in navigator&&location.protocol.startsWith("http"))navigator.serviceWorker.register("./sw.js").catch(()=>{});render();
