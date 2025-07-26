var offer = document.getElementById("offer")
var cross = document.getElementById("crossbtn")

crossbtn.addEventListener("click",function(){ 
    
        offer.remove()
})



var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closebtn = document.getElementById("closebtn")

menuicon.addEventListener("click", function(){
  sidenav.style.left = 0
})
closebtn.addEventListener("click",function(){
  sidenav.style.left = "-50%"
})




  const slider = document.getElementById("slider");
  const leftBtn = document.getElementById("slider-left-activate");
  const rightBtn = document.getElementById("slider-right-activate");

  rightBtn.addEventListener("click", function() {
    slider.scrollLeft += slider.clientWidth;
  });

  leftBtn.addEventListener("click", function() {
    slider.scrollLeft -= slider.clientWidth;
  });


  
  const hearts = document.querySelectorAll('.heart');

  hearts.forEach(heart => {
    heart.addEventListener('click', function () {
      if (heart.textContent === '🤍') {
        heart.textContent = '❤️'; 
      } else {
        heart.textContent = '🤍'; 
      }
    });
  });