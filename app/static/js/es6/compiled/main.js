(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#flipbox').click(flip);
  }
  function flip() {
    var clicked = $('#flipbox').hasClass('clicked');
    if (clicked) {
      $('#flipped').revertFlip({direction: 'lr'});
    } else {
      $('#flipped').flip({
        direction: 'rl',
        color: '#FF8D2C',
        content: $('.back')
      });
      $('#flipbox').toggleClass('clicked');
    }
  }
})();

//# sourceMappingURL=main.map
