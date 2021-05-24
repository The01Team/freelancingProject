//Saves uploaded images to local storage

let imageInput = document.getElementById('image');
imageInput.addEventListener('change', loadImageFunc);

function loadImageFunc(event) {

  let image = document.getElementById('loadedImg');
  image.src = URL.createObjectURL(event.target.files[0]);
  console.log('2');
}
// Get a reference to the image element
let savedImg = document.getElementById('loadedImg');

// Take action when the image has loaded
savedImg.addEventListener('load', function () {
  let imgCanvas = document.createElement('canvas'),
    imgContext = imgCanvas.getContext('2d');

  // Make sure canvas is as big as the picture
  imgCanvas.width = savedImg.width;
  imgCanvas.height = savedImg.height;

  // Draw image into canvas element
  imgContext.drawImage(savedImg, 0, 0, savedImg.width, savedImg.height);
  console.log(imgContext);
  // Get canvas contents as a data URL
  let imgAsDataURL = imgCanvas.toDataURL('image/png');
  imgFile = imgAsDataURL;
//   console.log(imgFile64.size);
}, false);
