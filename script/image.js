/*variabele aanmaken*/
var images = document.querySelectorAll('.toggle-image');

/*aanroepen van image*/
function toggleImage(event) {
  var clickedImage = event.target;
  var currentSource = clickedImage.src;
  var targetSource = clickedImage.getAttribute('data-alt-src');
  
  clickedImage.src = targetSource;
  clickedImage.setAttribute('data-alt-src', currentSource);
}

/*image wordt veranderd na een klik*/
images.forEach(function(image) {
  image.addEventListener('click', toggleImage);
});
