const bins=document.getElementById('bins');
const monthly=document.getElementById('monthly');
const total=document.getElementById('total');
function calc(){
  const n=Math.max(1,parseInt(bins.value||1));
  if(monthly.checked){total.textContent='$25/month';return;}
  let price=n===1?20:n===2?30:30+(n-2)*10;
  total.textContent='$'+price;
}
bins.addEventListener('input',calc);monthly.addEventListener('change',calc);calc();
