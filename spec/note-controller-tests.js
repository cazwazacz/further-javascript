(function(exports) {

  describe("NoteController adds HTML to Div", function() {
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
    return assert.isTrue(mainDiv.innerHTML === string);
  })

})(this);
