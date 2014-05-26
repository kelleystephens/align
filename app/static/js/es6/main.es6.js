(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    toggleLogInOut();
    $('.flipbox').click(flip);
  }

  function toggleLogInOut(){
    var url = window.location.pathname;
    if(url === '/'){
      $('.logout').hide();
    }else if(url === '/login'){
      $('.login').hide();
      $('.logout').hide();
    }else{
      $('.login').hide();
    }
  }

  function flip () {
    var clicked = $('.flipbox').hasClass('clicked');
    if (clicked){
      $('.flipped').revertFlip({
        direction:'lr'
      });
    }else{
      $('.flipped').flip({
        direction:'rl',
        color: '#FF8D2C',
        content: $('.back')
      });
      $('.flipbox').toggleClass('clicked');
      debugger;
    }
  }

})();
