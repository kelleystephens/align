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
    $('.card.shown').next('.card').addClass('shown').show();
    $('.card.shown').first('.shown').removeClass('shown').hide();
    checkContentCount();
  }

  function checkContentCount()
  {
    var index = $('.card.shown').index();
    var length = $('#pagination-container').contents().length;

    if(index === (length - 1))
    {
      $('#pagination-container').append(`<h6 class='end'>End of Course Content.</h6>`);
      $('.next').hide();
    }
  }

})();
