(function () {
    'use strict';

    function common() {
      var button = document.getElementById('js-click');
      button.addEventListener('click', function () {
        alert('awesome!!!');
      });
    }

    function wtf() {
      console.log('WTF');
    }

    common();
    wtf();

}());
