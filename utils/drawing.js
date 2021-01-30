function drawStroke(clientX, clientY) {
    // get mouse coordinates on canvas
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
  
    // draw
    inputBox.lineTo(x, y);
    inputBox.stroke();
    inputBox.moveTo(x, y);
  }

function erase() {
    inputBox.fillStyle = 'black';
    inputBox.fillRect(0, 0, canvas.width, canvas.height);
    displayBox.innerText = '';
  }