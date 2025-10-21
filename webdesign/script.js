// 스크롤 등장 애니메이션
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('show');
      observer.unobserve(e.target);
    }
  });
},{threshold:0.14});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// 맨 위로 버튼
const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', ()=>{
  toTop.style.display = (window.scrollY > 500) ? 'block' : 'none';
});
toTop?.addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));

// 강제 원근 데모 토글
document.querySelector('[data-demo-btn]')?.addEventListener('click', (e)=>{
  const wrap = e.currentTarget.parentElement.querySelector('.demo-wrap');
  const hidden = wrap.hasAttribute('hidden');
  if(hidden) wrap.removeAttribute('hidden'); else wrap.setAttribute('hidden','');
});
