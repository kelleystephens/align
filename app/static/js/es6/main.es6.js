(function(){

  'use strict';

  $(document).ready(init);

  function init () {
    $('#pagination-container').on('click', '.flipbox.shown', flip );
  }

  function flip () {
    alert('flipping');
    var clicked = $('.flipbox').hasClass('clicked');
    if (clicked){
      $('.flipped .shown').revertFlip({
        direction:'lr'
      });
    }else{
      $('.flipped').flip({
        direction:'rl',
        color: '#FF8D2C',
        content: $('.back')
      });
      $('.flipbox').toggleClass('clicked');
      //debugger;
    }
  }

})();
