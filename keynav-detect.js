;(function(){
  var KEY_TAB   = 8;
  var KEY_ENTER = 13;
  var KEY_CTRL  = 17;
  var KEY_ESC   = 27;
  var KEY_SPACE = 32;
  var KEY_LEFT  = 37;
  var KEY_UP    = 38;
  var KEY_RIGHT = 39;
  var KEY_DOWN  = 40;

  function keynavModeOn(evt) {
    var key = window.event ? evt.keyCode : evt.which;
    switch (key) {
      case KEY_TAB:
      case KEY_ENTER:
      case KEY_CTRL:
      case KEY_ESC:
      case KEY_LEFT:
      case KEY_UP:
      case KEY_RIGHT:
      case KEY_DOWN:
        document.body.classList.add('keynav-mode');
    }
  }

  function keynavModeOff() {
    document.body.classList.remove('keynav-mode');
  }
  
  document.addEventListener('keydown', keynavModeOn);
  document.addEventListener('click', keynavModeOff);
})();