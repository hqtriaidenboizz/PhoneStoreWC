
const ScrollNav = () => {
    var x = document.getElementById('header');
    if (document.documentElement.scrollTop > 80) {
        x.classList.add("scrollNavbar");
    }
    else {
        x.classList.remove("scrollNavbar")
    }
}
var y = document.getElementById('menu-item__icon');
var x = document.getElementById('item__language');
y.addEventListener('click', () => {
    x.classList.toggle("show__language")
}
)

//  runvideo
const videos = document.querySelectorAll("video")
videos.forEach(video => {
  video.addEventListener("mouseover", function () {
    this.play()
  })
  
  video.addEventListener("mouseout", function () {
    this.pause()
  })
  
  video.addEventListener("touchstart", function () {
    this.play()
  })
  
  video.addEventListener("touchend", function () {
    this.pause()
  })
})

// product tab
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$('.content__menu--item')
const contents = $$('.products__cart')
tabs.forEach((tab, index) =>{
  const content = contents[index]
  tab.onclick = function (){
    $('.content__menu--item.active2').classList.remove('active2');
    $('.products__cart.active3').classList.remove('active3');

    this.classList.add('active2');
    content.classList.add('active3')
  }
})


// product detail color tab

const a = document.querySelector.bind(document);
const aa = document.querySelectorAll.bind(document);
const colortabs = aa('.option--color__item')
const contentsdetail = aa('.product__briefing__img')
colortabs.forEach((tab, index) =>{
  const content = contentsdetail[index]
  tab.onclick = function (){
    a('.option--color__item.active4').classList.remove('active4');
    // a('.product__briefing__img.active5').classList.remove('active5');

    this.classList.add('active4');
    // content.classList.add('active5')
  }
})



const b = document.querySelector.bind(document);
const bb= document.querySelectorAll.bind(document);
const detailtabs = bb('.pdc__tab')
const contentsdetails = bb('.prc__detail')
const borders = bb('.pdc__tab--border')
detailtabs.forEach((tab, index) =>{
  const content = contentsdetails[index]
  const  border = borders[index]
  tab.onclick = function (){
    b('.pdc__tab.active6').classList.remove('active6');
    b('.prc__detail.active7').classList.remove('active7');
    b('.pdc__tab--border.active5').classList.remove('active5');
    this.classList.add('active6');
    content.classList.add('active7');
    border.classList.add('active5');
  }
})


//  product quantity

function incrementValue()
{
    var value = parseInt(document.getElementById('number').value);
    value = isNaN(value) ? 0 : value;
    if(value<99){
        value++;
            document.getElementById('number').value = value;
    }
}
function decrementValue()
{
    var value = parseInt(document.getElementById('number').value);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number').value = value;
    }

}

// opent navmobile
function ex() {
  var x = document.getElementById("menu");
  console.log(document.body.clientWidth);
  if(document.body.clientWidth >= 1080){
   x.className = "menu header-main__menu";
   document.getElementById('menu-item__language').style.display="flex";
}
else{
  document.getElementById('menu-item__language').style.display="none";
}
}
window.addEventListener("resize",ex )

const OpentNavMobile = () =>{
  var x = document.getElementById("menu");
      if (x.className === "menu header-main__menu") {
          x.classList.add("navmobile");
          document.getElementById('nav-mobile').classList.add('active9');
          document.getElementById('menu-item__language').style.display="flex";
      }
      else {
          x.classList.remove("navmobile");
          document.getElementById('nav-mobile').classList.remove('active9');
          document.getElementById('menu-item__language').style.display="none";
      }
}




// function Icon Navigtion
var mybutton = document.getElementById("BtnScroll");


function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.addEventListener('scroll', ScrollNav);
window.addEventListener('scroll', scrollFunction);  


// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

const checkQuantity = () =>{
  var x = document.getElementById("number").value;
  if (x > 2){
    document.getElementById('myModal').style.display="flex"
  }
  
}

const closeModal = () =>{
  document.getElementById("myModal").style.display="none";
}