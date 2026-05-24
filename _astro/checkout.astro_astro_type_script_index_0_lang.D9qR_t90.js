import{c as u,t as f,b as p}from"./cartStore.BTdtbgp3.js";const c=document.getElementById("checkout-form"),g=document.getElementById("ticket-modal"),a=document.getElementById("ticket-products"),o=document.getElementById("ticket-total"),s=document.getElementById("ticket-customer"),r=document.getElementById("ticket-date"),i=document.getElementById("ticket-id"),l=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e).replace("$","$ ");c?.addEventListener("submit",e=>{e.preventDefault();const m=new FormData(c).get("name"),n=u.get(),d=f.get();if(n.length===0){alert("Your cart is empty!");return}a&&(a.innerHTML=n.map(t=>`
                <div class="flex justify-between items-center text-sm">
                    <div class="flex flex-col">
                        <span class="font-black text-slate-950 uppercase italic text-xs tracking-tight">${t.name}</span>
                        <span class="text-[10px] font-bold text-slate-400">QTY: ${t.quantity}</span>
                    </div>
                    <span class="font-black italic text-slate-900">${l(t.price*(1-(t.discount||0)/100)*t.quantity)}</span>
                </div>
            `).join("")),o&&(o.textContent=l(d)),s&&(s.textContent=m),r&&(r.textContent=new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})),i&&(i.textContent="TRX-"+Math.random().toString(36).substring(2,11).toUpperCase()),p(),g?.classList.add("open")});
