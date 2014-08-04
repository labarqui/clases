$('#fullscreen-button').on('click', function() {

  var doc = document.documentElement;

  // Trigger fullscreen
  if (elementPrototype.requestFullScreen) {
    doc.requestFullScreen();
  } else if (elementPrototype.webkitRequestFullScreen) {
    doc.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  } else if (elementPrototype.mozRequestFullScreen) {
    doc.mozRequestFullScreen();
  } else {
    // fail silently
  }

});
