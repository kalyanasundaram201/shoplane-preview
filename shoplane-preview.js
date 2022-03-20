var href=location.href
var selectedproductid=href.charAt(href.length-1)

$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product",function(response){
     
var  productData=response[selectedproductid]

var maindiv=document.getElementById("maindiv")
var leftside=document.createElement("div")
leftside.id="leftside"
var bigimage=document.createElement("img")
bigimage.id="bigimage"
bigimage.src=productData.photos[0]
var rightside=document.createElement("div")
rightside.id="rightside"
var productname=document.createElement("h1")
productname.id="productname"
productname.innerText=productData.name
var brand=document.createElement("h4")
brand.id="brand"
brand.innerText=productData.brand
var price=document.createElement("h3")
price.id="price"
var pricespan=document.createElement("span")
pricespan.id="pricespan"
pricespan.innerText=productData.price
price.innerText="Price: Rs"+" "
price.append(pricespan)
var description=document.createElement("div")
description.id="description"
var descriptionhead=document.createElement("h3")
descriptionhead.id="descriptionhead"
descriptionhead.innerText="Descripion"
var descriptionpara=document.createElement("p")
descriptionpara.id="descriptionpara"
descriptionpara.innerText=productData.description
var preview=document.createElement("div")
preview.id="preview"
var previewhead=document.createElement("h3")
previewhead.id="previewhead"
previewhead.innerText="Product Preview"
var previewimagediv=document.createElement("div")
previewimagediv.id="previewimagediv";

for(var i=0;i<5;i++)
{
  var previewimage=document.createElement("img")
  previewimage.className="previewimage"
  previewimage.id="prev"+[i]
  previewimage.src=productData.photos[i]
  previewimagediv.append(previewimage)

}
maindiv.append(leftside,rightside)
leftside.append(bigimage)
rightside.append(productname,brand,price,description,preview)
description.append(descriptionhead,descriptionpara)
preview.append(previewhead,previewimagediv)
prev0.style.border= "3px solid #009688"

prev0.addEventListener("click", function(){
    prev0.style.border= "3px solid #009688"
    prev1.style.border="none"
    prev2.style.border="none"
    prev3.style.border="none"
    prev4.style.border="none"
    
  bigimage.src=this.src
  })
prev1.addEventListener("click",function(){
  prev1.style.border= "3px solid #009688"
  prev0.style.border="none"
    prev2.style.border="none"
    prev3.style.border="none"
    prev4.style.border="none"
  bigimage.src=this.src
})
prev2.addEventListener("click",function(){
  prev2.style.border= "3px solid #009688"
  prev0.style.border="none"
    prev1.style.border="none"
    prev3.style.border="none"
    prev4.style.border="none"
  bigimage.src=this.src
})
prev3.addEventListener("click",function(){
  prev3.style.border= "3px solid #009688"
  prev1.style.border="none"
    prev2.style.border="none"
    prev0.style.border="none"
    prev4.style.border="none"
  bigimage.src=this.src
})
prev4.addEventListener("click",function(){
  prev4.style.border= "3px solid #009688"
  prev1.style.border="none"
    prev2.style.border="none"
    prev3.style.border="none"
    prev0.style.border="none"
  bigimage.src=this.src
})
  
  })
  var cartclick=document.getElementById("cartwraper")
cartclick.addEventListener("click",function(){
  location.assign("https://kalyanasundaram201.github.io/shoplane-cart/")
})


var totlcnt=JSON.parse(localStorage.getItem("totalcount"))
var count=totlcnt
document.getElementById("cartlist").innerText=totlcnt
function addtocart()
{
  document.getElementById("cartlist").innerText=++totlcnt
  
 

  if(localStorage.getItem("cartproductdetails")==null){
  
        var productname=selectedproductid
      
      var cartproductdetails=[]
      cartproductdetails.push(productname)
      localStorage.setItem("cartproductdetails",JSON.stringify(cartproductdetails))
    }
    else{
      var  productadd=JSON.parse(localStorage.getItem("cartproductdetails"))
      productadd.push(selectedproductid)
      localStorage.setItem("cartproductdetails",JSON.stringify(productadd))
    }
  }
  

    