//Saves uploaded images to local storage

let imageInput = document.getElementById('image');
imageInput.addEventListener('change', loadImageFunc);

function loadImageFunc(event) {

  let image = document.getElementById('loadedImg');
  image.src = URL.createObjectURL(event.target.files[0]);
  console.log('2');
}
// Get a reference to the image element
let savedFile = document.getElementById('loadedImg');

// Take action when the image has loaded
savedFile.addEventListener('load', function () {
  let fileCanvas = document.createElement('canvas'),
    fileContext = fileCanvas.getContext('2d');

  // Make sure canvas is as big as the picture
  fileCanvas.width = savedFile.width;
  fileCanvas.height = savedFile.height;

  // Draw image into canvas element
  fileContext.drawImage(savedFile, 0, 0, savedFile.width, savedFile.height);
  console.log(fileContext);
  // Get canvas contents as a data URL
  let fileDataURL = fileCanvas.toDataURL('image/png');
  imgFile = fileDataURL;
//   console.log(imgFile64.size);
}, false);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
