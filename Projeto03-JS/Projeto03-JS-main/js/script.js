const sapo = document.querySelector(".sapo");
const tubo = document.querySelector(".tubo");
const nuvem = document.querySelector(".nuvem");
const fim = document.querySelector(".fim");
const score = document.querySelector("#score");
const scoreFim = document.querySelector("#score2");
let pontos = 0

const pular = () => {
  sapo.classList.add("pular");

  setTimeout(() => {
    sapo.classList.remove("pular"); 
    //ganha pontos a a cada pulo que ele der  
    pontos++
  }, 500);
};

// ganha pontos a cada segundo que ele jogar
const contar = setInterval(() => {
    pontos++;
},1000)

const loop = setInterval(() => {
  const tuboPosicao = tubo.offsetLeft;
  const nuvemPosicao = nuvem.offsetLeft;
  const sapoPosicao = +window.getComputedStyle(sapo).bottom.replace("px", "");
  // console.log(sapoPosicao)

  if (tuboPosicao <= 110 && tuboPosicao > 0 && sapoPosicao < 90) {
    tubo.style.animation = "none";
    tubo.style.left = `${tuboPosicao}px`;

    nuvem.style.animation = "none";
    nuvem.style.left = `${nuvemPosicao}px`;

    sapo.style.animation = "none";
    sapo.style.bottom = `${tuboPosicao}px`;

    sapo.src = "img/morto.png";
    sapo.style.width = "80px";
    sapo.style.marginLeft = "50px";

    clearInterval(loop);
    

    fim.style.display = "block";
    scoreFim.innerHTML = `PONTOS: ${pontos}`;
  }

    score.innerHTML = `PONTOS: ${pontos}`;
}, 10);

document.addEventListener("keydown", pular);
