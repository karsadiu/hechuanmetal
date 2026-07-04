
const buttons=document.querySelectorAll('[data-filter]');
const items=document.querySelectorAll('.item');
function filter(cat){
 document.querySelectorAll('.filters button').forEach(b=>b.classList.toggle('active',b.dataset.filter===cat));
 items.forEach(it=>it.style.display=(cat==='all'||it.dataset.cat===cat)?'block':'none');
 document.getElementById('projects')?.scrollIntoView({behavior:'smooth'});
}
buttons.forEach(btn=>btn.addEventListener('click',e=>{e.preventDefault();filter(btn.dataset.filter)}));
const light=document.getElementById('lightbox');const lightImg=light.querySelector('img');
items.forEach(it=>it.addEventListener('click',()=>{lightImg.src=it.querySelector('img').src;light.classList.add('show')}));
light.querySelector('button').onclick=()=>light.classList.remove('show');
light.addEventListener('click',e=>{if(e.target===light)light.classList.remove('show')});
document.getElementById('topBtn').onclick=()=>scrollTo({top:0,behavior:'smooth'});
