var toggleBtn = document.getElementById("side-toggler");
var scrollBtn = document.getElementById("scrollTop");

function openNav() {
    document.getElementById("mySidenav").style.width = "210px";
    toggleBtn.style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    toggleBtn.style.display = "block";
  }

  function show() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      scrollBtn.style.display ="block";
    } else {
      scrollBtn.style.display ="none";
    }
  };

 window.onscroll = function () {
    show();
 }


  scrollBtn.onclick = function scroll(params) {
      window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
      });
  };