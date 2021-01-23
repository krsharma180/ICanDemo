$(document).ready(function(){

let hamberger=document.querySelector('.hamberger')
let closeIcon=document.querySelector('.times')

hamberger.addEventListener('click',function(){
    $('.mobile-nav').addClass('open')
})

closeIcon.addEventListener('click',function(){
    $('.mobile-nav').removeClass('open')
    
})

$('.navitem').on('click',function(){
    $('.mobile-nav').removeClass('open')

})
    

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document

})
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }