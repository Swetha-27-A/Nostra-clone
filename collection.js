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

var sarch = document.getElementById("sarch")
var container = document.getElementById("container")
var productList = container.querySelectorAll("div")

sarch.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

    for(count =0; count<productList.length; count=count+1)
    {
       var productname = productList[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productList[count].style.display="none"
        }
        else{
            productList[count].style.display="block"
        }
    }
})


const checkboxes = document.querySelectorAll('input[type="checkbox"]');


const products = document.querySelectorAll('.product');


checkboxes.forEach(cb => {
  cb.addEventListener('change', filterProducts);
});

function filterProducts() {
  
  const selectedValues = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value.toLowerCase());

  
  products.forEach(product => {
    const title = product.querySelector('h1').textContent.toLowerCase();

    
    const matchesAll = selectedValues.every(val => title.includes(val));

    
    if (selectedValues.length === 0 || matchesAll) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}