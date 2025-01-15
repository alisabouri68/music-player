import router from "./router.js";
const progres =document.querySelectorAll('.progres>div')
 function locationHandler(a) {

 const rout =  router[a];
 const html =  new XMLHttpRequest();
 console.log(html)
 html.open("GET", rout.template , true);
 html.onload = function () {
     let data = html.responseText;
     document.querySelector("#content").innerHTML =  data;
 };
 html.send();
}
 function urlRoutes(e) {
let xxx =  e.target.getAttribute('data-route')
window.location.hash =  xxx

  locationHandler(xxx);

}
document.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.className.includes("link")) {
    return false;
  } else {
    urlRoutes(e);
  }
});



window.onpopstate = locationHandler;
window.addEventListener('hashchange', locationHandler);
function randomHeight() {
  let x = Math.floor(Math.random()*16)
  return x + 1
}
function progresHeight() {
  progres.forEach(span=>{
    span.style.height=randomHeight()+"px"
  })
  
}
progresHeight()