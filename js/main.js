const btn = document.getElementById('to-top-btn');

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20 ||
    document.body.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function toTop() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0; /* to Safari */
}

let menu=document.querySelector('#menu');
let menu_bar=document.querySelector('#menu-bar');
menu_bar.addEventListener('click',function(){
menu.classList.toggle('menu-toggle')
})

