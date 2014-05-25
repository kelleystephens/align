(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    toggleLogInOut();
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
})();
