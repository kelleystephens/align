(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('.add-content').click(addCard);
    $('.submit-content').click(submitContent);
  }

  function addCard(e)
  {
    e.preventDefault();
    var card = $('#content > .content-item');
    $('#content').append(card.clone());
  }

  function submitContent(e)
  {
    e.preventDefault();
  }



})();
