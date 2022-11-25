document.querySelector("#shop").addEventListener("click", function(){
    document.querySelector("body > div.cart").classList.toggle("active");
})

function addproduct (product,prixproduct) {
    document.querySelector(".ajouter-produit").innerHTML += '<p class="p1">Plat</p><p class="p1">100$</p>';
}
let add = document.querySelectorAll(".btn1");
let products = [
    {
        name: 'salad1',
        prix:100,
        inproduct:0
    },
    {
        name: 'salad2',
        prix:100,
        inproduct:0
    },
    {
        name: 'salad3',
        prix:100,
        inproduct:0
    },
    {
        name: 'plat1',
        prix:100,
        inproduct:0
    },
    {
        name: 'plat2',
        prix:100,
        inproduct:0
    },
    {
        name: 'plat3',
        prix:100,
        inproduct:0
    },
    {
        name: 'obento1',
        prix:100,
        inproduct:0
    },
    {
        name: 'obento2',
        prix:100,
        inproduct:0
    },
    {
        name: 'obento3',
        prix:100,
        inproduct:0
    },
]

for (let i = 0; i < add.length; i++) {
  add[i].addEventListener("click", () => {
    cartNumbrs(products[i]);
  });
}
function onloadcart (){
    let productnumber = localStorage.getItem("cartNumbrs");
    if(productnumber){
        document.querySelector('.span1 span').textContent =  productnumber;
    }
}

function cartNumbrs(product) {
    
  let productnumber = localStorage.getItem("cartNumbrs");
  productnumber = parseInt(productnumber)
   console.log(productnumber)
  
  if(productnumber){
    localStorage.setItem("cartNumbrs",productnumber + 1);
    document.querySelector('.span1 span').textContent = productnumber + 1
  }else{
    localStorage.setItem("cartNumbrs", 1);
    document.querySelector('.span1 span').textContent =  1
  }
setItem(product);
}
function setItem (product){
    
let proitem = localStorage.getItem('product');
proitem = JSON.parse(proitem);
console.log("my cartItems", proitem);

    product.inproduct = 1;
    proitem = {
        [product.name]: product
    }
    localStorage.setItem("product",JSON.stringify(proitem))
}
onloadcart();
