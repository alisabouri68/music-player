import ebi from "./artist.js";
const terend = document.querySelector('.terend')
const progres = document.querySelectorAll('.progres>div')
function randomHeight() {
  let x = Math.floor(Math.random() * 16)
  return x + 1
}
function progresHeight() {
  progres.forEach(span => {
    span.style.height = randomHeight() + "px"
  })
}
progresHeight()
function terends() {
  ebi.forEach((item , i) => {
  let div = document.createElement('div')
  div.classList.add('flex', 'justify-around', 'items-center', 'w-full',"gap-3")
  div.innerHTML = `
                                <div>
                                    <span class="text-lg font-extrabold text-black-one opacity-20">
                                        ${i + 1}
                                    </span>
                                </div>
                                <div>
                                    <figure>
                                        <img class="overflow-hidden object-cover rounded-2xl"
                                            src="${item.img}" width="70" height="70" alt="">
                                    </figure>
                                </div>
                                <div class="flex flex-col grow">
                                    <div class=""><span class="text-lg text-black-one font-semibold">${item.song}</span></div>
                                    <div><span class="text-lg text-black-one opacity-20 ">artist</span></div>
                                </div>
                                <div><span class="text-base text-black-one font-extrabold opacity-70">04:01</span></div>
                                <div class="w-10 h-10 bg-red-one rounded-full flex justify-center items-center">
                                    <svg class="w-5 h-5 text-wite-one">
                                        <use href="#play"></use>
                                    </svg>
                                </div>
                                <div>
                                    <ul>
                                        <li>
                                            <span>
                                                <svg class="size-6 text-black-one">
                                                    <use href="#elipsis"></use>
                                                </svg>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
  `
  terend.appendChild(div);
})
}
terends()