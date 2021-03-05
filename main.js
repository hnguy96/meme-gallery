var imageUrls = [];
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');
var gallery = document.querySelector('main')

function handleAddImage() {
  if(imageUrlInput.value !== ''){
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = ''; //input element emptied out after the URL is stored in the array
  updateGallery();
}

function updateGallery(){
  gallery.innerHTML = "";
  for(let i=0; i<imageUrls.length; i++){
    var imageElement = document.createElement('img');
    imageElement.className = "gallery-image";
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

addImageButton.addEventListener('click', handleAddImage)
updateGallery();
