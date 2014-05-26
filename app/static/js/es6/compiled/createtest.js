(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#test').on('click', '.nuke', deleteQ);
    $('#add').click(addQ);
  }
  var count = 1;
  function addQ() {
    count++;
    var last = $('#question').last().attr('data-num');
    console.log('Count: ');
    console.log(count);
    console.log('Last: ');
    console.log(last);
    var q = $('#test').children(':last').clone();
    $('#test').append(q);
    $('.q').last().val('');
    $('.a').last().val('');
    $('.b').last().val('');
    $('.c').last().val('');
    $('.d').last().val('');
  }
  function deleteQ(e) {
    if ($('.question').length > 1) {
      $(this).parent().remove();
    }
    e.preventDefault();
  }
})();

//# sourceMappingURL=createtest.map
