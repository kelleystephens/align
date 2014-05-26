(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    toggleLogInOut();
    $('.flipbox').click(flip);
  }
  function toggleLogInOut() {
    var url = window.location.pathname;
    if (url === '/') {
      $('.logout').hide();
    } else if (url === '/login') {
      $('.login').hide();
      $('.logout').hide();
    } else {
      $('.login').hide();
    }
  }
  function flip() {
    var clicked = $('.flipbox').hasClass('clicked');
    if (clicked) {
      $('.flipbox').revertFlip({
        direction: 'lr',
        color: '#8aaeb5'
      });
    } else {
      $('.flipbox').flip({
        direction: 'rl',
        color: '#8aaeb5',
        content: $('.back')
      });
      $('.flipbox').toggleClass('clicked');
    }
  }
})();

//# sourceMappingURL=main.map
