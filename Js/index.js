var toggleBtn = document.getElementById("side-toggler");

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