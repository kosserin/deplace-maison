const cursor = document.querySelector('.cursor');
const mainPage = document.querySelector('.main-page');
const loadingPage = document.querySelector('.loading-page');
const loadingPageImage = document.querySelector('.loading-page img');
const loadingPageCopyright = document.querySelector('.loading-page .copyright');
const burger = document.querySelector('.burger');
/* document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty('--x', (e.clientX+window.scrollX) + 'px');
    document.documentElement.style.setProperty('--y', (e.clientY+window.scrollY) + 'px');
  } */
  /* THIS IS CUSTOM CURSOR MIX-BLEND HOVERING EFFECT */
  document.addEventListener("DOMContentLoaded", function(event) {
    var cursor = document.querySelector(".cursor");
    var links = document.querySelectorAll("a");
    var initCursor = false;
  
    for (var i = 0; i < links.length; i++) {
      var selfLink = links[i];
  
      selfLink.addEventListener("mouseover", function() {
        cursor.classList.add("custom-cursor--link");
      });
      selfLink.addEventListener("mouseout", function() {
        cursor.classList.remove("custom-cursor--link");
      });
    }
  
    window.onmousemove = function(e) {
      var mouseX = e.clientX;
      var mouseY = e.clientY;
  
      if (!initCursor) {
        // cursor.style.opacity = 1;
        TweenLite.to(cursor, 0.3, {
          opacity: 1
        });
        initCursor = true;
      }
  
      TweenLite.to(cursor, 0, {
        top: mouseY + "px",
        left: mouseX + "px"
      });
    };
  
    window.onmouseout = function(e) {
      TweenLite.to(cursor, 0.3, {
        opacity: 0
      });
      initCursor = false;
    };
  });
  /*  */
const init = () =>{
    let counter = 0;
    let size = 160;
    const container = document.querySelector('.counter');
    const values = document.querySelectorAll('.counter p');
    mainPage.style.display = 'none';

    interval = setInterval(() => {
        if(counter === values.length-1){
            loadingPage.style.height = '0px';
            mainPage.style.display = 'block';
        } else{
            counter++;
            container.style.transform = 'translateY('+(-size*counter)+'px';
        }
    }, 500);
}
window.addEventListener('load', init);

/* BURGER CLICK */

burger.addEventListener('click', () =>{
    burger.classList.toggle('toggle');
    document.querySelector('nav').classList.toggle('show-nav');
    document.querySelector('.logo').classList.toggle('white-color');
    document.querySelector('.cart').classList.toggle('white-color');
    document.querySelector('nav h2').classList.toggle('before-expand');
    document.querySelector('html').classList.toggle('html-overflow-hidden');
})

/* INK-MODE FIXED OR NOT BY SCROLL UP OR SCROLL DOWN */

var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   const inkMode = document.querySelector('.ink-mode');
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      // downscroll code
    inkMode.classList.remove('fixed-ink');
   } else {
      // upscroll code
      inkMode.classList.add('fixed-ink');
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);