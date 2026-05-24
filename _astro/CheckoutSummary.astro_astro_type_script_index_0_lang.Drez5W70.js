import{c as i,t as r,d}from"./cartStore.BTdtbgp3.js";const a=document.getElementById("checkout-items"),c=document.getElementById("checkout-subtotal"),l=document.getElementById("checkout-total"),o=document.getElementById("checkout-savings"),s=document.getElementById("checkout-savings-container"),n=t=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t).replace("$","$ ");i.subscribe(t=>{if(a){if(t.length===0){a.innerHTML='<p class="text-slate-400 font-medium italic">Tu carrito está vacío.</p>';return}a.innerHTML=t.map(e=>`
            <div class="flex gap-4 group">
                <div class="w-16 h-20 bg-slate-100 rounded-xl overflow-hidden shrink-0">
                    <img src="${e.image}" alt="${e.name}" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1 min-w-0">
                    <h4 class="text-xs font-black text-slate-950 uppercase italic truncate tracking-tight">
                        ${e.name}
                    </h4>
                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Qty: ${e.quantity}${e.size?` • Talla: ${e.size}`:""}
                    </p>
                    <p class="text-sm font-black text-slate-950 italic">
                        ${n(e.price*(1-(e.discount||0)/100)*e.quantity)}
                    </p>
                </div>
            </div>
        `).join("")}});r.subscribe(t=>{l&&(l.textContent=n(t)),c&&(c.textContent=n(t))});d.subscribe(t=>{!o||!s||(t>0?(s.classList.remove("hidden"),s.classList.add("flex"),o.textContent=`-${n(t)}`):(s.classList.add("hidden"),s.classList.remove("flex")))});
