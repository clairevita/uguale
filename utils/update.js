function updateDisplay(predictions) {
    // Find index of best prediction, which corresponds to the predicted value
    const bestPred = predictions.indexOf(Math.max(...predictions));
    displayBox.innerText = bestPred;
  }

  function erase() {
    inputBox.fillStyle = 'black';
    inputBox.fillRect(0, 0, canvas.width, canvas.height);
    displayBox.innerText = '';
  }