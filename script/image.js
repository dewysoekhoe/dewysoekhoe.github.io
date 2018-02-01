var images = document.querySelectorAll('.toggle-image');

function toggleImage(event) {
  var clickedImage = event.target;
	var currentSource = clickedImage.src;
  var targetSource = clickedImage.getAttribute('data-alt-src');
  
  clickedImage.src = targetSource;
  clickedImage.setAttribute('data-alt-src', currentSource);
}

images.forEach(function(image) {
  image.addEventListener('click', toggleImage);
});
