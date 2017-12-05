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

  describe("Returns HTML string", function() {
    beforeTest(this);
    var noteListView = new NoteListView(new NoteListDouble([
      new NoteDouble('hello world'),
      new NoteDouble('hello Allan'),
      new NoteDouble('hello Tom')
    ]));
    HTMLstring = '<ul><li><div> hello world </div></li>' +
    '<li><div> hello Allan </div></li>' +
    '<li><div> hello Tom </div></li></ul>'
    return assert.isTrue(noteListView.render() === HTMLstring)
  })

  describe("Note List View with No Notes", function() {
    beforeTest(this)
    var noteListView = new NoteListView(new NoteListDouble([]));
    HTMLstring = "<ul></ul>"
    return assert.isTrue(noteListView.render() === HTMLstring)
  })

  describe("Note list view with one note", function() {
    var noteListView = new NoteListView(new NoteListDouble([new NoteDouble('hi')]));
    HTMLstring = "<ul><li><div> hi </div></li></ul>"
    return assert.isTrue(noteListView.render() === HTMLstring)
  })

})(this);
