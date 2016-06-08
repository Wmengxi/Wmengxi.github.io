(function() {
  angular.module('myApp').controller('helpCtrl', helpCtrl);

  function helpCtrl($scope) {
    $(document).ready(function() {
      $(".newUser").hide();
      $(".second").hide();
      $(".centerClick").hide();
      $(".new").hide();
      $("a").hover(function() {
        $(this).css("font-weight", "bold");
      });
      $("a.newstart").click(function() {
        $(".helpmenu").hide();
        $(".new").show();
        $(".newUser").show();
      });
      $("a.howtouse").click(function() {
        $(".first").hide();
        $(".centerClick").hide();
        $(".second").show();
      });
      $("a.return").click(function() {
        $(".newUser").hide();
        $(".helpmenu").show();
      });
      $("a.helpCenter").click(function() {
        $(".second").hide();
        $(".new").hide();
        $(".centerClick").hide();
        $(".first").show();
        $(".newUser").hide();
        $(".helpmenu").show();
      });
      $("a#howtocalculate").click(function() {
        $(".second").hide();
        $(".new").hide();
        $(".first").hide();
        $(".centerClick").show();
        $(".newUser").hide();
        $(".helpmenu").show();
      });
    });
    //侧边菜单
    new mlPushMenu(document.getElementById('mp-menu'), document.getElementById('trigger'));
    //搜索框
    (function() {
      var morphSearch = document.getElementById('morphsearch'),
        input = morphSearch.querySelector('input.morphsearch-input'),
        ctrlClose = morphSearch.querySelector('span.morphsearch-close'),
        isOpen = isAnimating = false,
        // show/hide search area
        toggleSearch = function(evt) {
          // return if open and the input gets focused
          if (evt.type.toLowerCase() === 'focus' && isOpen) return false;

          var offsets = morphsearch.getBoundingClientRect();
          if (isOpen) {
            classie.remove(morphSearch, 'open');

            // trick to hide input text once the search overlay closes 
            // todo: hardcoded times, should be done after transition ends
            if (input.value !== '') {
              setTimeout(function() {
                classie.add(morphSearch, 'hideInput');
                setTimeout(function() {
                  classie.remove(morphSearch, 'hideInput');
                  input.value = '';
                }, 300);
              }, 500);
            }

            input.blur();
          } else {
            classie.add(morphSearch, 'open');
          }
          isOpen = !isOpen;
        };

      // events
      input.addEventListener('focus', toggleSearch);
      ctrlClose.addEventListener('click', toggleSearch);
      // esc key closes search overlay
      // keyboard navigation events
      document.addEventListener('keydown', function(ev) {
        var keyCode = ev.keyCode || ev.which;
        if (keyCode === 27 && isOpen) {
          toggleSearch(ev);
        }
      });
    })();
  }
})();