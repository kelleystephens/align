(function(){
  'use strict';

  $(document).ready(init);

  function init()
  {
    $('#pagination-container > .card:first-child').addClass('shown').show();
    $('#pagination-container > .card:not(:first-child)').hide();
    $('.next').click(nextPage);
  }

  function nextPage()
  {
    $('.card.shown').next('.card').addClass('shown clicked').show();
    $('.card.shown').first('.shown').removeClass('shown clicked').hide();
    // if($('.card'))
    checkContentCount();
  }

  function checkContentCount()
  {
    var index = $('.card.shown').index();
    var length = $('#pagination-container').contents().length;

    if(index === (length - 1))
    {
      $('#pagination-container').append('<p>End of Course Content.</p>');
      $('.next').hide();
    }
  }

})();
