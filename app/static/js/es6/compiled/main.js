function ajax(url, type) {
  'use strict';
  var data = arguments[2] !== (void 0) ? arguments[2] : {};
  var success = arguments[3] !== (void 0) ? arguments[3] : (function(r) {
    return console.log(r);
  });
  var dataType = arguments[4] !== (void 0) ? arguments[4] : 'html';
  $.ajax({
    url: url,
    type: type,
    dataType: dataType,
    data: data,
    success: success
  });
}
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
      $('.flipbox').revertFlip({direction: 'lr'});
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
