function predict() {
    let values = getPixelData();
    let predictions = model.predict(values).dataSync();
  
    return predictions;
  }

function getPixelData() {
    smBox.drawImage(inputBox.canvas, 0, 0, smallCanvas.width, smallCanvas.height);
    const imgData = smBox.getImageData(0, 0, smallCanvas.width, smallCanvas.height);
  
    // preserve and normalize values from red channel only
    let values = [];
    for (let i = 0; i < imgData.data.length; i += 4) {
      values.push(imgData.data[i] / 255);
    }
    values = tf.reshape(values, [1, 28, 28, 1]);
    return values;
  }