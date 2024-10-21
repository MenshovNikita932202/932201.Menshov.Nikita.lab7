'use strict'; ///строгий режим в js

const container = document.querySelector('.place'); /// input.value чтобы получить значения с input
const input = document.querySelector('.input');

const triangleBtn = document.querySelector('.triangle');
const squareBtn = document.querySelector('.square');
const circleBtn = document.querySelector('.circle');



const drawSquare = `
  <div class="addSquare"></div>
`;

const drawTriangle = `
  <div class="addTriangle"></div>
`;

const drawCircle = `
  <div class="addCircle"></div>
`;

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomSize() {
  return {
    width: generateRandomNumber(50, 200),
    height: generateRandomNumber(40, 150),
    left: generateRandomNumber(50,1400),
    top: generateRandomNumber(100,600),
  }
}

function generateRandomSizeEvenly() {
  const size = generateRandomNumber(50, 200);
  
  return {
    width: size,
    height: size,
    left: size,
    top: size,
  }
}


container.addEventListener('click', e => { ///Удаление если есть shape
  const {target} = e;

  if (!target.classList.contains('shape')) return;

  target.remove();
})



squareBtn.addEventListener('click', (e) => {
  const count = Number(input.value);

  if (!count) return;

  for (let i = 0; i < count; i++) {
    const s = document.createElement('div');

    const {width, height} = generateRandomSizeEvenly();
    const {left,top} = generateRandomSize();

    s.classList.add('addSquare', 'shape');
    s.style.width = `${width}px`;
    s.style.height = `${height}px`; 
    
    s.style.position = 'absolute';
    
    s.style.left = `${left}px`;
    s.style.top = `${top}px`;

  container.appendChild(s);
}
})

triangleBtn.addEventListener('click', (e) => {
  const count = Number(input.value);

  if (!count) return;

  for (let i = 0; i < count; i++) {
    const t = document.createElement('div');
    
    const {width, height,left,top} = generateRandomSize();

    t.classList.add('addTriangle', 'shape');
    t.style.width = `${width}px`;
    t.style.height = `${height}px`;

    t.style.position = 'absolute';

    t.style.left = `${left}px`;
    t.style.top = `${top}px`;

    container.appendChild(t);
  }
})


circleBtn.addEventListener('click', (e) => {
  const count = Number(input.value);

  if (!count) return;

  for (let i = 0; i < count; i++) {
    const crcl = document.createElement('div');

    const {width, height} = generateRandomSizeEvenly();
    const {left,top} = generateRandomSize();

    crcl.classList.add('addCircle', 'shape');
    crcl.style.width = `${width}px`;
    crcl.style.height = `${height}px`;
    
    crcl.style.position = 'absolute';

    crcl.style.left = `${left}px`;
    crcl.style.top = `${top}px`;

    container.appendChild(crcl);
  }
})

