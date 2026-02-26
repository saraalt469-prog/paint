let holst = document.querySelector(".canvas");
let sizeK = document.querySelector(".sizeK");
let colorWr = document.querySelector(".color-wr");

let drawing = false;

let Ccolor = "black";

let Bsize = 3;

let eraser = false;

function upD() {
  sizeK.innerHTML = `${Bsize}`;
}
function Isize() {
  if (Bsize < 20) {
    Bsize++;
    upD();
  }
}

function Dsize() {
  if (Bsize > 1) {
    Bsize--;
    upD();
  }
}

function setColor(color) {
  Ccolor = color;
  eraser = false;
}

function setE(Eraser) {
  eraser = Eraser;
}

function createPx(x, y) {
  const pixel = document.createElement("div");

  pixel.style.position = "absolute";
  pixel.style.left = x + "px";
  pixel.style.top = y + "px";
  pixel.style.borderRadius = "50" + "%";
  pixel.style.width = "2px";
  pixel.style.height = "2px";

  pixel.style.backgroundColor = eraser ? "white" : Ccolor;

  holst.appendChild(pixel);
}

function dr(x, y) {
  for (let i = 0; i < Bsize; i++) {
    for (let j = 0; j < Bsize; j++) {
      createPx(x - Math.floor(Bsize / 2) * i, y - Math.floor(Bsize / 2) * j);
    }
  }
}

function zal() {
  holst.style.backgroundColor = eraser ? "white" : Ccolor;
}
holst.addEventListener("mousedown", (e) => {
  drawing = true;
  dr(e.clientX, e.clientY);
});
holst.addEventListener("mousemove", (e) => {
  if (drawing) {
    dr(e.clientX, e.clientY);
  }
});
holst.addEventListener("mouseup", () => {
  drawing = false;
});
holst.addEventListener("mouseleave", () => {
  drawing = false;
});

upD();
