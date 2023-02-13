let artikel = document.querySelectorAll(".box-article .box-click ");

for (let title of artikel) {
  title.addEventListener('click', (e) => {
    
    const et = e.target;
    
    const active = document.querySelector(".active");

    if (active) {
      active.classList.remove("active");
      
    }
    et.classList.add("active");

    let Content = document.querySelectorAll('.isi-artikel');

    
    for (let cards of Content) {
      if(cards.getAttribute('data-box') === title.getAttribute('data-box')) {
        cards.style.display = "flex";
       
       }else {
        cards.style.display = "none";
        
       }
     }
  });
}

