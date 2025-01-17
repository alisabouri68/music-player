import xxx from "./artist.js";
import xxxx from "./artists.js";
const terend = document.querySelector(".terend");
const terendChild = document.querySelectorAll(".terend>div");
const fulltime = document.querySelector(".fulltime");
const progres = document.querySelector(".progres");
const progrestime = document.querySelector(".progrestime");
const playerbtn = document.querySelector(".playerbtn");
const trackname = document.querySelector(".trackname");
const singername = document.querySelector(".singername");
const progresChild = document.querySelectorAll(".progres>div");
const audio = document.querySelector("#audio");
const playerImg = document.querySelector(".player-img");
const artistSelect = document.querySelector(".artist-select");
const artistEelectE = document.querySelector(".artist-select-e");
function randomHeight() {
  let x = Math.floor(Math.random() * 16);
  return x + 1;
}
function progresHeight() {
  progresChild.forEach((span) => {
    span.style.height = randomHeight() + "px";
  });
}
progresHeight();
function terends() {
  xxx.forEach((item, i) => {
    let a = document.createElement("div");
    a.classList.add(
      "flex",
      "justify-around",
      "items-center",
      "w-full",
      "gap-3",
      "selected"
    );
    a.dataset.url = item.template;
    a.dataset.artist = item.artist;
    a.dataset.song = item.song;
    a.dataset.img = item.img;
    a.onclick = clickTrackHandler;
    a.innerHTML = `
                                <div>
                                    <span class="text-lg font-extrabold text-black-one opacity-20">
                                        ${i + 1}
                                    </span>
                                </div>
                                <div>
                                    <figure>
                                        <img class="overflow-hidden object-cover rounded-2xl"
                                            src="${
                                              item.img
                                            }" width="70" height="70" alt="">
                                    </figure>
                                </div>
                                <div class="flex flex-col grow">
                                    <div class=""><span class="text-lg text-black-one font-semibold">${
                                      item.song
                                    }</span></div>
                                    <div><span class="text-lg text-black-one opacity-20 ">${
                                      item.artist
                                    }</span></div>
                                </div>
                                <div class="w-10 h-10 bg-red-one rounded-full flex justify-center items-center" >
                                    <svg class="w-5 h-5 text-wite-one">
                                        <use href="#play"></use>
                                    </svg>
                                </div>
                                <div>
                                    <ul class="relative">
                                        <li class="group">
                                            <span>
                                                <svg class="size-6 text-black-one">
                                                    <use href="#elipsis"></use>
                                                </svg>
                                            </span>
                                            <ul class="absolute left-[-100px] w-30 rounded-2xl bg-white opacity-0 group-hover:opacity-100 cursor-pointer" onclick="playlistadd(this)">
                                            <li>
                                                add to play list
                                            </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
  `;
  
    terend.appendChild(a);

  });
}
terends();
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}
function progresLoad() {
  for (let i = 0; i < 30; i++) {
    const bar = document.createElement("div");
    let aaa = Math.floor(Math.random() * 18 + 8);
    bar.classList.add("bar");
    bar.onclick = clickbars;
    bar.dataset.indexbar = i;
    bar.style.height = aaa + "px";

    progres.appendChild(bar);
  }

  audio.addEventListener("timeupdate", () => {
    const bars = document.querySelectorAll(".bar");
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const activeBars = Math.floor((currentTime / duration) * bars.length);

    bars.forEach((bar, index) => {
      if (index < activeBars) {
        bar.classList.add("active");
      } else {
        bar.classList.remove("active");
      }
    });
  });
}

function clickTrackHandler() {
  let x = this.getAttribute("data-url");
  audio.src = x;
  trackname.innerHTML = this.getAttribute("data-song");
  singername.innerHTML = this.getAttribute("data-artist");
  playerImg.src = this.getAttribute("data-img");
  audio.play();
  audio.addEventListener("loadedmetadata", () => {
    const duration = formatTime(audio.duration);
    fulltime.innerHTML = duration;
    progres.innerHTML = null;
    progresLoad();
  });
  audio.addEventListener("timeupdate", () => {
    const currentTime = formatTime(audio.currentTime);
    progrestime.innerHTML = currentTime;
  });
}
progresLoad();

function clickbars() {
  let wewe = this.getAttribute("data-indexbar");
  let duration = audio.duration;
  let newduration = (wewe / 30) * duration;
  audio.currentTime = newduration;
  console.log(wewe);
}
playerbtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playerbtn.children[0].children[0].children[0].href.baseVal = "#play";
  } else {
    audio.pause();
    playerbtn.children[0].children[0].children[0].href.baseVal = "#pause";
  }
});
function artistsadd() {
    xxxx.forEach((z,i)=>{
        let div = document.createElement("div")
        div.classList.add("flex", "flex-col" ,"justify-center", "items-center")
        div.onclick = artistselectchild;
        div.dataset.name = z.artist
        div.innerHTML = `
                                    <div class="w-24 h-24 rounded-full flex overflow-hidden">
                                <figure class="flex flex-col w-24 h-24">
                                    <img class="artist-img-select w-24 h-24 object-cover" src="${z.img}" alt="">
                                </figure>
                            </div>
                            <span class="artist-name-select text-black-one font-semibold text-2xl opacity-60">${z.artist}</span>
        
        `
        artistSelect.appendChild(div)
    })
}
artistsadd()
// function artistselectchild() {
//   artistEelectE.innerHTML = null
//     let as = this.getAttribute("data-name")
//     let x = []
//     let y = []
//     xxx.map((items,i) =>{
//         if(items.artist == as){
//             x=[]
//             x.push(xxx[i])
//   console.log(x)

//             x.forEach((d,i)=>{
//                 let a = document.createElement("div");
//     a.classList.add(
//       "flex",
//       "justify-around",
//       "items-center",
//       "w-full",
//       "gap-3",
//     );
//     a.dataset.url = d.template;
//     a.dataset.artist =d.artist;
//     a.dataset.song = d.song;
//     a.dataset.img = d.img;
//     a.onclick = clickTrackHandler;
//     a.innerHTML = `
//                                 <div>
//                                     <span class="text-lg font-extrabold text-black-one opacity-20">
//                                         ${i + 1}
//                                     </span>
//                                 </div>
//                                 <div>
//                                     <figure>
//                                         <img class="overflow-hidden object-cover rounded-2xl"
//                                             src="${
//                                               d.img
//                                             }" width="70" height="70" alt="">
//                                     </figure>
//                                 </div>
//                                 <div class="flex flex-col grow">
//                                     <div class=""><span class="text-lg text-black-one font-semibold">${
//                                       d.song
//                                     }</span></div>
//                                     <div><span class="text-lg text-black-one opacity-20 ">${
//                                       d.artist
//                                     }</span></div>
//                                 </div>
//                                 <div class="w-10 h-10 bg-red-one rounded-full flex justify-center items-center" >
//                                     <svg class="w-5 h-5 text-wite-one">
//                                         <use href="#play"></use>
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <ul class="relative">
//                                         <li class="group">
//                                             <span>
//                                                 <svg class="size-6 text-black-one">
//                                                     <use href="#elipsis"></use>
//                                                 </svg>
//                                             </span>
//                                             <ul class="absolute left-[-100px] w-30 rounded-2xl bg-white opacity-0 group-hover:opacity-100 cursor-pointer" onclick="playlistadd(this)">
//                                             <li>
//                                                 add to play list
//                                             </li>
//                                             </ul>
//                                         </li>
//                                     </ul>
//                                 </div>
//   `;
//   artistEelectE.appendChild(a)
//             })
//         }

//     })
// }