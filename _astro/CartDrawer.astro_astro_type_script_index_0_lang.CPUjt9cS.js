import{i as p,c as x,r as f,u as g,t as b,d as w,e as c,h as k}from"./cartStore.rTu5Njuk.js";import{t as L}from"./index.Cqpej7dV.js";import"./index.CGNgjO85.js";const o=document.getElementById("cart-overlay"),y=document.getElementById("cart-drawer"),E=document.getElementById("close-cart"),l=document.getElementById("cart-items-list"),d=document.getElementById("empty-cart-state"),u=document.getElementById("cart-footer"),r=document.getElementById("cart-count-badge"),h=document.getElementById("total-price-value"),v=document.getElementById("total-savings-container"),m=document.getElementById("total-savings-value"),B=document.getElementById("clear-cart-btn"),$=document.getElementById("checkout-btn"),I=document.getElementById("go-to-catalog");function i(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e).replace("$","$ ")}p.subscribe(e=>{e?(o?.classList.remove("opacity-0","pointer-events-none"),o?.classList.add("opacity-100"),y?.classList.remove("translate-x-full")):(o?.classList.add("opacity-0","pointer-events-none"),o?.classList.remove("opacity-100"),y?.classList.add("translate-x-full"))});x.subscribe(e=>{!l||!d||!u||!r||(e.length===0?(d.classList.remove("hidden"),l.innerHTML="",u.classList.add("hidden"),r.classList.add("hidden")):(d.classList.add("hidden"),u.classList.remove("hidden"),r.classList.remove("hidden"),r.textContent=String(e.reduce((t,s)=>t+s.quantity,0)),l.innerHTML=e.map(t=>`
                <div class="flex gap-6 group" data-id="${t.id}">
                    <div class="w-24 h-32 bg-slate-100 rounded-2xl overflow-hidden relative shrink-0 border border-slate-100">
                        <img src="${t.image}" alt="${t.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    <div class="flex-1 flex flex-col justify-between py-1">
                        <div class="space-y-1">
                            <div class="flex items-start justify-between">
                                <h4 class="text-sm font-black text-slate-950 uppercase italic tracking-tight pr-4">
                                    ${t.name}
                                </h4>
                                <button class="remove-item text-slate-300 hover:text-red-500 transition-colors cursor-pointer" data-id="${t.id}">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                                </button>
                            </div>
                            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${t.category||"Premium"}</p>
                        </div>

                        <div class="flex items-center justify-between mt-4">
                            <div class="flex items-center bg-slate-50 rounded-xl p-0.5 border border-slate-100">
                                <button class="decrease-qty w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white transition-all text-slate-400 hover:text-slate-950 disabled:opacity-30 cursor-pointer" data-id="${t.id}">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                                </button>
                                <span class="w-8 text-center text-xs font-black italic">${t.quantity}</span>
                                <button class="increase-qty w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white transition-all text-slate-400 hover:text-slate-950 disabled:opacity-30 cursor-pointer" data-id="${t.id}" ${t.stock!==void 0&&t.quantity>=t.stock?"disabled":""}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                                </button>
                            </div>
                            <div class="text-right">
                                ${t.discount?`<p class="text-[10px] font-bold text-slate-400 line-through decoration-red-500/50 mb-0.5">${i(t.price*t.quantity)}</p>`:""}
                                <p class="text-base font-black text-slate-950 italic">
                                    ${i(t.price*(1-(t.discount||0)/100)*t.quantity)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            `).join(""),document.querySelectorAll(".remove-item").forEach(t=>{t.addEventListener("click",()=>f(t.getAttribute("data-id")||""))}),document.querySelectorAll(".decrease-qty").forEach(t=>{t.addEventListener("click",()=>{const s=t.getAttribute("data-id")||"",a=e.find(n=>n.id===s);a&&g(s,a.quantity-1)})}),document.querySelectorAll(".increase-qty").forEach(t=>{t.addEventListener("click",()=>{const s=t.getAttribute("data-id")||"",a=e.find(n=>n.id===s);if(a){const n=g(s,a.quantity+1);n.success||L.error(n.message)}})})))});b.subscribe(e=>{h&&(h.textContent=i(e))});w.subscribe(e=>{!v||!m||(e>0?(v.classList.remove("hidden"),m.textContent=`- ${i(e)}`):v.classList.add("hidden"))});E?.addEventListener("click",c);o?.addEventListener("click",c);B?.addEventListener("click",k);I?.addEventListener("click",c);$?.addEventListener("click",()=>{c(),window.location.href="/checkout"});
