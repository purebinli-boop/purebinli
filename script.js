const bins=document.getElementById('bins');
const monthly=document.getElementById('monthly');
const total=document.getElementById('total');
function calc(){
  if(!bins||!monthly||!total) return;
  if(monthly.checked){ total.textContent='$25/mo'; return; }
  const n=Math.max(1, Number(bins.value)||1);
  let price=n===1?20:n===2?30:30+(n-2)*10;
  total.textContent='$'+price;
}
[bins,monthly].forEach(el=>el&&el.addEventListener('input',calc));
calc();
const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
