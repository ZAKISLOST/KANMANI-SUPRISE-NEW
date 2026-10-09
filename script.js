const petals = document.getElementById("petals");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");

function makePetal(){
  const p=document.createElement("div");
  p.className="petal";
  p.textContent=Math.random()>.45 ? "🌸" : "🌺";
  p.style.left=(Math.random()*100)+"vw";
  p.style.fontSize=(12+Math.random()*18)+"px";
  p.style.animationDuration=(6+Math.random()*7)+"s";
  p.style.setProperty("--x",(Math.random()*240-120)+"px");
  petals.appendChild(p);
  setTimeout(()=>p.remove(),15000);
}
setInterval(makePetal,850);

document.getElementById("beginBtn").addEventListener("click",()=>{
  document.querySelector(".story").scrollIntoView({behavior:"smooth"});
});

document.querySelectorAll(".flower-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    modalText.textContent=btn.dataset.message;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden","false");
    for(let i=0;i<12;i++) setTimeout(makePetal,i*80);
  });
});

function closeModal(){
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden","true");
}
document.getElementById("closeModal").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal) closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape") closeModal()});

// Gentle tilt on desktop photo card
const card=document.querySelector(".tilt");
if(card && matchMedia("(pointer:fine)").matches){
  card.addEventListener("mousemove",e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(900px) rotateX(${y*-4}deg) rotateY(${x*5}deg)`;
  });
  card.addEventListener("mouseleave",()=>card.style.transform="");
}
