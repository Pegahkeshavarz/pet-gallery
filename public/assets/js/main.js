$(function(){
  //get the data from json file
$.getJSON('../assets/data/dogs.json', function(data) {
  renderImageGallery(data);
  handleClicking(data);
});

//this function will render all the data we have in a grid system
window.renderImageGallery = function(data){
  for(let i=0;i<data.dogs.length;i++){
    var currentDog = data.dogs[i];


      if(i % 4 === 0){
        var newRow = document.createElement('div');
        newRow.classList.add('row');
        document.querySelector('.container').appendChild(newRow);
      }
        //column
        var newCol = document.createElement('div');

        newCol.classList.add('col-xs-12','col-sm-6', 'col-md-3', 'col-lg-3', 'end');

        //image
        var newImg = document.createElement('img');
        newImg.classList.add('img-thumbnail-manual');
        newImg.setAttribute('src', currentDog.image);
        newImg.setAttribute('alt', currentDog.source);

        //href
        var newA = document.createElement('a');
        newA.classList.add('clickme');

        newA.appendChild(newImg);

        newCol.appendChild(newA);
        newRow.appendChild(newCol);
  };
}

//this function will assign a click handler to all the photos we have
//also it will open a modal per clicking
window.handleClicking = function(data){
  var allImages = document.querySelectorAll('.clickme');

  for(let j =0;j<allImages.length;j++){
    allImages[j].addEventListener('click', function(e){
      //modal parent
      var newModal = document.createElement('div');
      newModal.classList.add('modal');

      //modal content
      var modalContent = document.createElement('div');
      modalContent.classList.add('modal-content');

      //close btn
      var close = document.createElement('span');
      close.classList.add('close');

      close.onclick = function() {
          newModal.style.display = "none";
      }

      close.innerHTML = '&times;';

      //modal image
      var modalImage = document.createElement('img');
      modalImage.setAttribute('src', data.dogs[j].image);
      modalImage.setAttribute('alt', data.dogs[j].source);
      modalImage.classList.add('modal-image');

      //appending
      modalContent.appendChild(close);
      modalContent.appendChild(modalImage);

      newModal.appendChild(modalContent);

      document.querySelector('body').appendChild(newModal);
    }, false);

  }
}


});
