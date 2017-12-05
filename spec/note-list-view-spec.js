(function(exports) {

  const beforeTest = function(exports) {
    function NoteDouble(string) {
      this._text = string
    }

    NoteDouble.prototype.text = function () {
      return this._text;
    };

    function NoteListDouble(arrayOfNoteDoubles) {
      this._notes = arrayOfNoteDoubles;
    }

    NoteListDouble.prototype.notes = function () {
      return this._notes;
    };

    exports.NoteDouble = NoteDouble;
    exports.NoteListDouble = NoteListDouble;
  }

  function returnsStringOfHTML() {
    beforeTest(this);
    var noteListView = new NoteListView(new NoteListDouble([
      new NoteDouble('hello world'),
      new NoteDouble('hello Allan'),
      new NoteDouble('hello Tom')
    ]));
    HTMLstring = '<ul><li><div> hello world </div></li>' +
    '<li><div> hello Allan </div></li>' +
    '<li><div> hello Tom </div></li></ul>'
    assert.isTrue(noteListView.render() === HTMLstring)
  };

  returnsStringOfHTML();

  function testNoteListViewWithNoNotes() {
    beforeTest(this)
    var noteListView = new NoteListView(new NoteListDouble([]));
    HTMLstring = "<ul></ul>"
    assert.isTrue(noteListView.render() === HTMLstring)
  };

  testNoteListViewWithNoNotes();

  function testNoteListViewWithOneNote() {
    var noteListView = new NoteListView(new NoteListDouble([new NoteDouble('hi')]));
    HTMLstring = "<ul><li><div> hi </div></li></ul>"
    assert.isTrue(noteListView.render() === HTMLstring)
  }

  testNoteListViewWithOneNote();

})(this);
