'use strict';
(function () {
  var userDialog = document.querySelector('.setup');
  var userDialogUpload = userDialog.querySelector('.upload');
  var inputFile = userDialog.querySelector('[type="file"]');


  var userdDialogInputClickHandler = function (evt) {
    evt.preventDefault();
  };

  // var userdDialogInputClickRemoveHandler = function () {
  //   inputFile.removeEventListener('click', userdDialogInputClickHandler);
  // };

  var userDialogUploadMousedownHandler = function (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    var userdDialogAvatar = evt.currentTarget.firstElementChild;
    // inputFile.addEventListener('click', userdDialogInputClickHandler);
    if (userdDialogAvatar) {
      var userDialogStartCooord = {
        x: evt.clientX,
        y: evt.clientY
      };

      var userDialogMousemoveHAndler = function (moveEvt) {
        moveEvt.preventDefault();
        moveEvt.stopPropagation();
        var shift = {
          x: userDialogStartCooord.x - moveEvt.clientX,
          y: userDialogStartCooord.y - moveEvt.clientY,
        };

        userDialogStartCooord = {
          x: moveEvt.clientX,
          y: moveEvt.clientY,
        };

        userDialog.style.top = (userDialog.offsetTop - shift.y + 'px');
        userDialog.style.left = (userDialog.offsetLeft - shift.x + 'px');
      };

      var userDialogUploadMouseupHandler = function (upEvt) {
        document.removeEventListener('mousemove', userDialogMousemoveHAndler);
        document.removeEventListener('mouseup', userDialogUploadMouseupHandler);
        // inputFile.removeEventListener('click', userdDialogInputClickHandler);
        upEvt.preventDefault();
        upEvt.stopPropagation();
        evt.preventDefault();
        evt.stopPropagation();
      };
      document.addEventListener('mousemove', userDialogMousemoveHAndler);
      document.addEventListener('mouseup', userDialogUploadMouseupHandler);

    }
  };

  userDialogUpload.addEventListener('mousedown', userDialogUploadMousedownHandler);

})();
