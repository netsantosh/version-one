const menuToggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".main-nav");
if(menuToggle){
  menuToggle.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded",open);
  });
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded","false");
  }));
}

const dateInput=document.getElementById("deliveryDate");
if(dateInput){
  const d=new Date();
  d.setDate(d.getDate()+1);
  dateInput.min=d.toISOString().slice(0,10);
}

const form=document.getElementById("orderForm");
if(form){
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name=document.getElementById("name").value.trim();
    const phone=document.getElementById("phone").value.trim();
    const area=document.getElementById("area").value;
    const qty=document.getElementById("qty").value;
    const date=document.getElementById("deliveryDate").value;
    const message=document.getElementById("message").value.trim();

    const text=`Hi Vanvay, I want to place an order.

Name: ${name}
Phone: ${phone}
Area: ${area}
Quantity: ${qty}
Required delivery date: ${date}
Message: ${message || "None"}

Please confirm availability and any applicable delivery charge.`;

    window.open("https://wa.me/91994949494?text="+encodeURIComponent(text),"_blank","noopener");
  });
}
document.getElementById("year").textContent=new Date().getFullYear();
