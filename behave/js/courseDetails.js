'use strict';

var coursePrice = document.getElementById("pricing");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  // 1095px  550px
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) { 
    coursePrice.style.position = "sticky";

    // coursePrice.style.maxWidth = "1440px";
  } else {
    coursePrice.style.position = "initial";
  }
}


