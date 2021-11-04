const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');
  // we are not drawing on the canvas but on the context. It can also be in 3d
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.strokeStyle = '#BADA55';   // color of the brush
  ctx.lineJoin = 'round';   // form of the brush
  ctx.lineCap = 'round';
  ctx.lineWidth = 30;  // size of the line

  let isDrawing = false;
  // when you start from
  let lastX = 0;
  // when you finish from
  let lastY = 0;
  let hue = 0;

  function draw(e) {
    if(!isDrawing) return; // stop the function running when they are not moused down
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath(); // start from
    ctx.moveTo(lastX, lastY); // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
    hue++;
  }


  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
  });
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);