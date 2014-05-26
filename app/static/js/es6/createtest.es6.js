(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#test').on('click', '.nuke', deleteQ);
    $('#add').click(addQ);
  }

  function addQ(){
    var q = $('#testbody').children(':last').clone();
    $('#testbody').append(q);
    $('.q').last().val('');
    $('.a').last().val('');
    $('.b').last().val('');
    $('.c').last().val('');
    $('.d').last().val('');
  }

  function deleteQ(e){
    if ($('.question').length > 1){
      $(this).parent().remove();
    }
    e.preventDefault();
  }

})();
