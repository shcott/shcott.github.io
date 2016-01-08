function onScroll()
{
  var offset = window.pageYOffset ?
               window.pageYOffset : document.documentElement.scrollTop;
  
  var topHeight = window.innerHeight;
  document.getElementById("nav").className = (offset > topHeight ? "fixed" : "");
}

if(window.addEventListener)
{
  window.addEventListener("scroll", onScroll, false);
}
else
{
  window.attachEvent("onscroll", onScroll);
}