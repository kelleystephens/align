(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('.add-content').click(addCard);
    $('form#content').on('click', '.delete', deleteCard);
  }
  function deleteCard(e) {
    if ($('form#content > .content-item').length > 1) {
      $(this).parent().remove();
    }
    e.preventDefault();
  }
  function addCard() {
    var card = $('#content > .content-item:last-child');
    $('#content').append(card.clone());
  }
})();

//# sourceMappingURL=createcontent.map
