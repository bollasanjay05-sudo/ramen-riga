'use strict';
// Prices and names transcribed from the Ramen Riga Wolt menu on 6 November 2026.
// Dish photographs remain linked to their respective Wolt image source.
const WOLT = 'https://wolt.com/lv/lva/riga/restaurant/ramen-riga';
const base = 'https://imageproxy.wolt.com/menu/menu-images/5c35fe2e752389000cc9143f/';
const sources = {
  chicken:'ccdc5038-58a6-11f0-a483-fee09b12a336_108.jpeg',
  chashu:'ccde8d80-58a6-11f0-a483-fee09b12a336_99.jpeg',
  duck:'cce15038-58a6-11f0-a483-fee09b12a336_107.jpeg',
  tofu:'ccdaf2c4-58a6-11f0-a483-fee09b12a336_106.jpeg',
  beef:'cce29a7e-58a6-11f0-a483-fee09b12a336_103.jpeg',
  dimsum:'cce8095a-58a6-11f0-a483-fee09b12a336_101.jpeg',
  wagyu:'ccd996ea-58a6-11f0-a483-fee09b12a336_109.jpg',
  ribs:'cce4b2a0-58a6-11f0-a483-fee09b12a336_100.jpeg',
  shrimp:'cce6d288-58a6-11f0-a483-fee09b12a336_102.jpg',
  wokChicken:'ccee907c-58a6-11f0-a483-fee09b12a336_98.jpeg',
  wokDuck:'ccefe878-58a6-11f0-a483-fee09b12a336_97.jpeg',
  wokBeef:'ccf118a6-58a6-11f0-a483-fee09b12a336_95.jpeg',
  wokPork:'ccf3e5c2-58a6-11f0-a483-fee09b12a336_93.jpeg',
  wokSeafood:'ccf53dc8-58a6-11f0-a483-fee09b12a336_94.jpeg',
  wokTofu:'ccf6733c-58a6-11f0-a483-fee09b12a336_96.jpeg',
  pokeDuck:'ccf7afcc-58a6-11f0-a483-fee09b12a336_74.png',
  pokeChicken:'ccf8fca6-58a6-11f0-a483-fee09b12a336_77.png',
  pokeShrimp:'ccfb069a-58a6-11f0-a483-fee09b12a336_73.png',
  pokeTofu:'ccfdc984-58a6-11f0-a483-fee09b12a336_75.png',
  pokeTuna:'cd004902-58a6-11f0-a483-fee09b12a336_76.png',
  baoDuck:'ccd5dc1c-58a6-11f0-a483-fee09b12a336_45.jpg',
  baoTofu:'ccd7f0e2-58a6-11f0-a483-fee09b12a336_46.jpg',
  gyozaChicken:'cd119824-58a6-11f0-a483-fee09b12a336_91.jpg',
  gyozaVeg:'cd10250c-58a6-11f0-a483-fee09b12a336_78.jpg',
  takoyaki:'cd02ccf4-58a6-11f0-a483-fee09b12a336_61.jpg',
  vegRoll:'cd06db32-58a6-11f0-a483-fee09b12a336_81.jpg',
  kimchi:'cd0b2aa2-58a6-11f0-a483-fee09b12a336_83.jpg',
  tofuSalad:'cd0e5830-58a6-11f0-a483-fee09b12a336_90.jpg',
  chickenSkewer:'cd144b28-58a6-11f0-a483-fee09b12a336_82.jpg',
  duckSalad:'cd170232-58a6-11f0-a483-fee09b12a336_86.jpg',
  shrimpSalad:'d8c39f0a-58a6-11f0-8e82-1a500428ddcf_85.jpg',
  mochi:'d8c70294-58a6-11f0-8e82-1a500428ddcf_88.jpg',
  oniTuna:'2ad80e90-01ab-11f1-a916-2e0dafaea755_229_20260204_092313073.jpeg',
  oniKimchi:'e6ab3e5e-01aa-11f1-92a3-46ecaa65878f_230_20260204_092032836.jpeg',
  oniChicken:'e6ac7698-01aa-11f1-92a3-46ecaa65878f_231_20260204_092105919.jpeg',
  oniTofu:'9f79162a-07f7-11f1-85bb-4e66589c033b_258_20260212_094530741.jpeg',
  oniBeef:'8532115e-07f7-11f1-824e-5250bd6e569a_259_20260212_094438809.jpeg',
  lemonade:'d8caea58-58a6-11f0-8e82-1a500428ddcf_200.jpeg',
  kombucha:'d8d90804-58a6-11f0-8e82-1a500428ddcf_212'
};
// No fabricated ingredients/descriptions for dishes not described by the source.
const menu = [
  {cat:'ramen',name:'Wagyu ramen',price:'24.60',key:'wagyu',desc:'Wagyu, special noodles, whole boiled egg, spring onion, surimi and nori.',badge:'SPECIAL'},
  {cat:'ramen',name:'Vistas krūtiņa',price:'14.80',key:'chicken',desc:'Chicken breast ramen.',badge:'POPULAR'},
  {cat:'ramen',name:'Chashu',price:'14.95',key:'chashu',desc:'Ramen with tender pork belly.',badge:'FAVORITE'},
  {cat:'ramen',name:'Tokijas pīle',price:'14.80',key:'duck',desc:'Tokyo duck ramen.',badge:'POPULAR'},
  {cat:'ramen',name:'Sēnes un tofu',price:'13.95',key:'tofu',desc:'Mushroom and tofu ramen with vegan broth; gluten-free noodles when available.',badge:'VEGAN BROTH'},
  {cat:'ramen',name:'Liellopa',price:'17.00',key:'beef',desc:'Beef ramen.'},
  {cat:'ramen',name:'Cūkas ribiņas',price:'15.95',key:'ribs',desc:'Pork ribs ramen.'},
  {cat:'ramen',name:'Garneles un mīdijas',price:'16.95',key:'shrimp',desc:'Shrimp and mussel ramen.'},
  {cat:'ramen',name:'Dim Sum Ramen ar jūras veltēm',price:'16.95',key:'dimsum',desc:'Seafood dim sum ramen.'},
  {cat:'wok',name:'Wok ar vistas gaļu',price:'14.50',key:'wokChicken',desc:'Chicken wok noodles.',badge:'POPULAR'},
  {cat:'wok',name:'Wok ar Tokijas pīles gaļu',price:'15.95',key:'wokDuck',desc:'Wok with Tokyo duck.'},
  {cat:'wok',name:'Wok ar liellopa gaļu',price:'14.95',key:'wokBeef',desc:'Wok with pulled beef.'},
  {cat:'wok',name:'Wok ar cūkgaļas pavēderi',price:'15.95',key:'wokPork',desc:'Wok with pork belly.'},
  {cat:'wok',name:'Wok ar garnelēm un mīdijām',price:'16.70',key:'wokSeafood',desc:'Wok with shrimp and mussels.'},
  {cat:'wok',name:'Wok ar sēnēm un tofu sieru',price:'13.90',key:'wokTofu',desc:'Wok with mushroom, tofu and gluten-free noodles.'},
  {cat:'poke',name:'Poke ar Tokijas pīli',price:'16.00',key:'pokeDuck',desc:'Rice, Tokyo duck, edamame, vegetables, wakame and sesame sauce.'},
  {cat:'poke',name:'Poke ar vistas krūtiņu',price:'15.50',key:'pokeChicken',desc:'Chicken breast, rice, edamame, fresh vegetables and sesame dressing.'},
  {cat:'poke',name:'Poke ar garnelēm',price:'16.95',key:'pokeShrimp',desc:'Shrimp, rice, edamame, vegetables and sesame sauce.'},
  {cat:'poke',name:'Poke ar fritētu tofu',price:'14.95',key:'pokeTofu',desc:'Vegetarian fried-tofu poke with rice, vegetables and sesame dressing.',badge:'VEGETARIAN'},
  {cat:'poke',name:'Poke ar tunci',price:'18.00',key:'pokeTuna',desc:'Tuna, rice, edamame, vegetables and sesame sauce.'},
  {cat:'bao',name:'Bao bun ar pīli',price:'5.50',key:'baoDuck',desc:'Soft bao bun with duck.',badge:'BAO'},
  {cat:'bao',name:'BAO bun ar tofu',price:'4.95',key:'baoTofu',desc:'Soft bao bun with tofu.'},
  {cat:'bao',name:'Vistas gjozas',price:'5.50',key:'gyozaChicken',desc:'Japanese-style dumplings filled with chicken.'},
  {cat:'bao',name:'Dārzeņu gjozas',price:'3.95',key:'gyozaVeg',desc:'Japanese-style dumplings filled with vegetables.'},
  {cat:'bao',name:'Takoyaki',price:'6.50',key:'takoyaki',desc:'Japanese octopus-filled savory pancake balls.'},
  {cat:'bao',name:'Dārzeņu rullīši',price:'2.90',key:'vegRoll',desc:'Five vegetable spring rolls with dipping sauce.'},
  {cat:'bao',name:'Kimchi',price:'3.50',key:'kimchi',desc:'A punchy side of kimchi.'},
  {cat:'bao',name:'Tofu salāti',price:'3.50',key:'tofuSalad',desc:'Fresh salad with OG tofu.'},
  {cat:'bao',name:'Grilēta un tvaicēta vista',price:'4.50',key:'chickenSkewer',desc:'Grilled and steamed chicken. Price per skewer.'},
  {cat:'bao',name:'Tokijas pīles salāti',price:'5.60',key:'duckSalad',desc:'Fresh salad with Tokyo duck.'},
  {cat:'bao',name:'Tīģergarneļu salāti',price:'4.90',key:'shrimpSalad',desc:'Fresh salad with tiger prawns.'},
  {cat:'bao',name:'Mochi',price:'5.90',key:'mochi',desc:'Traditional Japanese dessert, two per serving.'},
  {cat:'bao',name:'2 Momo Yakitori iesmiņi',price:'4.90',desc:'Two grilled chicken skewers.',emoji:'🍢'},
  {cat:'bao',name:'2 vegan Tempe Satay iesmiņi',price:'2.50',desc:'Two grilled vegan tempeh satay skewers.',emoji:'🍢'},
  {cat:'onigiri',name:'Onigiri ar tunci',price:'7.98',key:'oniTuna',desc:'Onigiri with tuna.'},
  {cat:'onigiri',name:'Onigiri ar kimči',price:'4.30',key:'oniKimchi',desc:'Onigiri with kimchi.'},
  {cat:'onigiri',name:'Onigiri ar vistu',price:'4.60',key:'oniChicken',desc:'Onigiri with chicken.'},
  {cat:'onigiri',name:'Onigiri ar tofu',price:'4.50',key:'oniTofu',desc:'Onigiri with tofu.'},
  {cat:'onigiri',name:'Onigiri ar liellopu',price:'5.20',key:'oniBeef',desc:'Onigiri with beef.'},
  {cat:'drinks',name:'Ābolu–cidoniju limonāde',price:'4.35',key:'lemonade',desc:'Līgatnes Pavāru māja apple–quince lemonade · 0.33 L.'},
  {cat:'drinks',name:'Skābo ķiršu–aroniju limonāde',price:'4.35',desc:'Sour cherry–aronia lemonade · 0.33 L.',emoji:'🍒'},
  {cat:'drinks',name:'Duna Ābolītis',price:'4.30',desc:'Sparkling natural apple juice.',emoji:'🍏'},
  {cat:'drinks',name:'Duna Citrons un piparmētra',price:'4.30',desc:'Refreshing lemon and locally grown mint.',emoji:'🍋'},
  {cat:'drinks',name:"RUDY'S Kombucha Mango Passion Fruit",price:'4.50',key:'kombucha',desc:'No extra added sugar · 0.33 L.'},
  {cat:'drinks',name:"RUDY'S Kombucha Coconut–Pineapple",price:'4.50',desc:'No extra added sugar · 0.33 L.',emoji:'🍍'},
  {cat:'drinks',name:"RUDY'S Kombucha Mandarin–Yuzu",price:'4.50',desc:'No extra added sugar · 0.33 L.',emoji:'🍊'},
  {cat:'drinks',name:'Mangaļi ūdens',price:'1.75',desc:'Sparkling or still mineral water · 0.33 L.',emoji:'💧'},
  {cat:'drinks',name:'Pepsi Cola',price:'2.35',desc:'0.33 L.',emoji:'🥤'},
  {cat:'drinks',name:'Bauskas kvass',price:'2.95',desc:'0.5 L glass bottle.',emoji:'🥤'}
];
const menuGrid = document.getElementById('menuGrid');
const tabBar = document.getElementById('menuTabs');
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function renderMenu(category='ramen'){
  const results = menu.filter(x=>x.cat===category);
  menuGrid.innerHTML=results.map((item,i)=>{
    const imgSrc=item.key && sources[item.key] ? base+sources[item.key] : null;
    const image=imgSrc?`<img src="${imgSrc}" alt="${escapeHtml(item.name)} at Ramen Riga" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.parentElement.innerHTML='<div class=&quot;dish-image-fallback&quot;>🍜</div>'">`:`<div class="dish-image-fallback">${item.emoji||'🍜'}</div>`;
    return `<article class="dish-card" style="animation-delay:${Math.min(i,8)*.035}s"><div class="dish-photo">${image}${item.badge?`<span class="dish-badge">${escapeHtml(item.badge)}</span>`:''}</div><div class="dish-info"><div class="dish-row"><div class="dish-name">${escapeHtml(item.name)}</div><span class="dish-price">€${item.price}</span></div><p class="dish-desc">${escapeHtml(item.desc)}</p><a class="dish-order" href="${WOLT}" target="_blank" rel="noopener noreferrer" aria-label="Order ${escapeHtml(item.name)} on Wolt">ORDER ON WOLT <span>↗</span></a></div></article>`;
  }).join('');
}
renderMenu();
tabBar.addEventListener('click',e=>{const tab=e.target.closest('button[data-category]');if(!tab)return;for(const b of tabBar.querySelectorAll('button')){const active=b===tab;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))}renderMenu(tab.dataset.category);});
const header=document.getElementById('siteHeader');
const navToggle=document.getElementById('menuToggle');
const mobileNav=document.getElementById('mobileNav');
function closeMenu(){navToggle.classList.remove('open');navToggle.setAttribute('aria-expanded','false');mobileNav.classList.remove('open');mobileNav.inert=true;}
navToggle.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');navToggle.classList.toggle('open',open);navToggle.setAttribute('aria-expanded',String(open));mobileNav.inert=!open;});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
let scrollTicking=false;
function onScroll(){if(scrollTicking)return;scrollTicking=true;requestAnimationFrame(()=>{header.classList.toggle('scrolled',window.scrollY>35);scrollTicking=false})}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
if('IntersectionObserver' in window){const obs=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');obs.unobserve(entry.target)}})},{rootMargin:'0px 0px -50px 0px',threshold:.1});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el))}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}
document.getElementById('year').textContent=String(new Date().getFullYear());
const loader=document.getElementById('pageLoader');
function clearLoader(){loader.classList.add('hidden')}
// Do not hold the entire page hostage to third-party image requests.
if(document.readyState==='complete'){clearLoader()}else{window.addEventListener('load',clearLoader,{once:true});document.addEventListener('DOMContentLoaded',clearLoader,{once:true})}
// Small parallax on the supplied Fuji art. Respects reduced-motion preferences.
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const fuji=document.getElementById('fujiImage');let parallaxQueued=false;
  window.addEventListener('scroll',()=>{if(parallaxQueued)return;parallaxQueued=true;requestAnimationFrame(()=>{const y=window.scrollY;if(y<950)fuji.style.translate=`0 ${Math.min(y*.08,60)}px`;parallaxQueued=false})},{passive:true});
}

// Hero bowl showcase: rotating featured bowls with optional dot controls.
(function(){
  const feature=document.getElementById('heroFeature');
  const showcase=document.getElementById('heroBowlShowcase');
  const nameEl=document.getElementById('heroBowlName');
  const dotWrap=document.getElementById('heroBowlDots');
  if(!feature || !showcase || !nameEl || !dotWrap) return;
  const slides=[...showcase.querySelectorAll('.bowl-slide')];
  const dots=[...dotWrap.querySelectorAll('.bowl-dot')];
  if(!slides.length) return;

  slides.forEach(slide=>{
    const key=slide.dataset.key;
    const img=slide.querySelector('img');
    if(img && key && sources[key]){
      img.src=base + sources[key];
      img.loading=slide.classList.contains('active') ? 'eager' : 'lazy';
      img.referrerPolicy='no-referrer';
      img.onerror=function(){this.onerror=null;this.src='assets/ramen-illustration.svg';};
    }
  });

  let index=slides.findIndex(slide=>slide.classList.contains('active'));
  if(index<0) index=0;
  let timer;
  let reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setActive(nextIndex, userInitiated=false){
    if(nextIndex===index && !userInitiated) return;
    feature.classList.remove('spin-burst');
    void feature.offsetWidth;
    feature.classList.add('spin-burst','swapping');
    slides.forEach((slide,i)=>slide.classList.toggle('active', i===nextIndex));
    dots.forEach((dot,i)=>dot.classList.toggle('active', i===nextIndex));
    const activeSlide=slides[nextIndex];
    nameEl.textContent=activeSlide.dataset.name || 'Featured bowl';
    index=nextIndex;
    window.setTimeout(()=>feature.classList.remove('swapping'), 750);
    window.setTimeout(()=>feature.classList.remove('spin-burst'), 1100);
    if(!reduced) restart();
  }

  function next(){ setActive((index+1)%slides.length); }
  function restart(){ clearInterval(timer); timer=setInterval(next, 3200); }

  dotWrap.addEventListener('click', e=>{
    const btn=e.target.closest('.bowl-dot');
    if(!btn) return;
    const nextIndex=Number(btn.dataset.index || 0);
    setActive(nextIndex, true);
  });

  feature.addEventListener('mouseenter', ()=>clearInterval(timer));
  feature.addEventListener('mouseleave', ()=>{ if(!reduced) restart(); });
  feature.addEventListener('focusin', ()=>clearInterval(timer));
  feature.addEventListener('focusout', ()=>{ if(!reduced) restart(); });

  setActive(index, true);
  if(!reduced) restart();
})();
