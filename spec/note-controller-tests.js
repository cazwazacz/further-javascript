(function(exports) {
  function noteControllerAddsHTMLtoDiv() {

    function NoteListDouble() {}

    NoteListDouble.prototype.add = function (argument) {}

    function NoteListViewDouble(argument) {}

    NoteListViewDouble.prototype.render = function () {
      return '<ul><li><div> Favourite drink: seltzer </div></li></ul>';
    };

    var noteController = new NoteController(new NoteListDouble(), NoteListViewDouble);
    var mainDiv = document.getElementById('app');

    string = '<ul><li><div> Favourite drink: seltzer </div></li></ul>';
    noteController.insertHTML();
    assert.isTrue(mainDiv.innerHTML === string);
  }

  noteControllerAddsHTMLtoDiv();
})(this);
