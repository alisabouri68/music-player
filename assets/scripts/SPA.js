// import router from "./router.js";
const router = {
  "#/index.html":{
    template:"index.html",
    title:"Home"
  },
  "#/":{
    template:"index.html",
     title:"Home"
  },
  "#/geners":{
     template:"assets/pages/geners.html",
     title:"Geners"
  },
  "#/albums":{
     template:"assets/pages/albums.html",
     title:"Albums"
    },
  "#/artist":{
    template:"assets/pages/artist.html",
     title:"Artist"
  },
  "#/Favourites":{
     template:"assets/pages/fav.html",
     title:"Favourites"
  },
  "#/Popular":{
    template:"assets/pages/popular.html",
    title:"Popular"
  },
  "#/playlist":{
    template:"assets/pages/myplaylist.html",
    title:"My Playlist"
  },
  "#/404":{
     template:"assets/pages/notthefound.html",
     title:"404"
  }
}
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