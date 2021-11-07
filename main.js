const tnl1 = document.getElementById("tnl1");
const tnl2 = document.getElementById("tnl2");
const tnl3 = document.getElementById("tnl3");
const tnl4 = document.getElementById("tnl4");
const img1 = document.getElementById("img1");
const body = document.getElementById("body");
const amountbtn = document.getElementById("amountbtn");
const btn1 = document.getElementById("btn1");
const avatar = document.getElementById("avatar");
const detail = document.getElementById("detail");
const close = document.getElementById("close");
let imageIndex = 0;
let position = 0;
const IMAGE_WIDTH = 500;
const album = document.querySelector(".album");
const btnPrevious = document.querySelector(".prebtn");
const btnNext = document.querySelector(".nextbtn");
const images = document.querySelector(".images");
const btns = document.getElementById("btns");

//이미지 버튼
img1.addEventListener("click", function(){
    album.style.display="inline";
    body.style.backgroundColor="rgba(80, 80, 80, 1)";
    img1.style.opacity="0.2";
    tnl1.style.opacity="0.2";
    tnl2.style.opacity="0.2";
    close.style.display="inline";
    close.style.opacity="1";
    tnl3.style.opacity="0.2";
    tnl4.style.opacity="0.2";
    detail.style.opacity="0.2";
    amountbtn.style.opacity="0.2";
    btn1.style.opacity="0.2";
    avatar.style.opacity="0.2";
    main1.style.display="inline";
    btns.style.display="inline";    
})

close.addEventListener("click", function(){
    album.style.display="none";
    body.style.backgroundColor="rgba(255,255,255,0.5)";
    btns.style.display="none";
    close.style.display="none";
    img1.style.opacity="1";
    tnl1.style.opacity="1";
    tnl2.style.opacity="1";
    tnl3.style.opacity="1";
    tnl4.style.opacity="1";
    detail.style.opacity="1";
    amountbtn.style.opacity="1";
    btn1.style.opacity="1";
    avatar.style.opacity="1";
})

function previous(){
    if(imageIndex > 0){
      btnNext.removeAttribute("disabled")
      position += IMAGE_WIDTH;
      images.style.transform = `translateX(${position}px)`;
      imageIndex = imageIndex - 1;
    }
     if(imageIndex == 0){
       btnPrevious.setAttribute('disabled', 'true')
    }
  }
  function next(){
    if(imageIndex < 3){
      btnPrevious.removeAttribute("disabled")
      position -= IMAGE_WIDTH;
      images.style.transform = `translateX(${position}px)`;
      imageIndex = imageIndex + 1;
    }
     if(imageIndex == 3){
       btnNext.setAttribute('disabled', 'true')
     }
  }
   
  function init(){
    //btnPrevious.setAttribute('disabled', 'true')
    btnPrevious.addEventListener("click", previous)
    btnNext.addEventListener("click", next)
  }
   
  init();
// 이미지 클릭 시 확대

tnl1.addEventListener("click", function(){
    tnl1.style.border="3px solid orange";
    tnl1.style.opacity="40%";
    tnl2.style.border="none";
    tnl2.style.opacity="100%";
    tnl3.style.border="none";
    tnl3.style.opacity="100%";
    tnl4.style.border="none";
    tnl4.style.opacity="100%";
    img1.src="images/image-product-1.jpg";
})
tnl2.addEventListener("click", function(){
    tnl2.style.border="3px solid orange";
    tnl2.style.opacity="40%";
    tnl1.style.border="none";
    tnl1.style.opacity="100%";
    tnl3.style.border="none";
    tnl3.style.opacity="100%";
    tnl4.style.border="none";
    tnl4.style.opacity="100%";
    img1.src="images/image-product-2.jpg";
})
tnl3.addEventListener("click", function(){
    tnl3.style.border="3px solid orange";
    tnl3.style.opacity="40%";
    tnl1.style.border="none";
    tnl1.style.opacity="100%";
    tnl2.style.border="none";
    tnl2.style.opacity="100%";
    tnl4.style.border="none";
    tnl4.style.opacity="100%";
    img1.src="images/image-product-3.jpg";
})
tnl4.addEventListener("click", function(){
    tnl4.style.border="3px solid orange";
    tnl4.style.opacity="40%";
    tnl1.style.border="none";
    tnl1.style.opacity="100%";
    tnl3.style.border="none";
    tnl3.style.opacity="100%";
    tnl2.style.border="none";
    tnl2.style.opacity="100%"
    img1.src="images/image-product-4.jpg";
})

if (matchMedia("screen and (max-width: 1084px").matches){
  img1.addEventListener("click", function(){
    album.style.display="inline";
    body.style.backgroundColor="rgba(80, 80, 80, 1)";
    img1.style.opacity="0.2";
    tnl1.style.opacity="0.2";
    tnl2.style.opacity="0.2";
    close.style.display="inline";
    close.style.opacity="1";
    tnl3.style.opacity="0.2";
    tnl4.style.opacity="0.2";
    detail.style.opacity="0.2";
    amountbtn.style.opacity="0.2";
    btn1.style.opacity="0.2";
    avatar.style.opacity="0.2";
    main1.style.display="inline";
    btns.style.display="inline";    
})

function previous(){
  if(imageIndex > 0){
    btnNext.removeAttribute("disabled")
    position += IMAGE_WIDTH;
    images.style.transform = `translateX(${position}px)`;
    imageIndex = imageIndex - 1;
  }
   if(imageIndex == 0){
     btnPrevious.setAttribute('disabled', 'true')
  }
}
function next(){
  if(imageIndex < 3){
    btnPrevious.removeAttribute("disabled")
    position -= IMAGE_WIDTH;
    images.style.transform = `translateX(${position}px)`;
    imageIndex = imageIndex + 1;
  }
   if(imageIndex == 3){
     btnNext.setAttribute('disabled', 'true')
   }
}
 
function init(){
  //btnPrevious.setAttribute('disabled', 'true')
  btnPrevious.addEventListener("click", previous)
  btnNext.addEventListener("click", next)
}
 
init();

}