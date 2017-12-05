(function(exports) {

  (function returnsStringOfHTML() {
    var noteList = new NoteList(Note);
    noteList.add('hello world');
    noteList.add('hello Allan');
    noteList.add('hello Tom');
    var noteListView = new NoteListView(noteList);
    HTMLstring = '<ul><li><div> hello world </div></li>' +
    '<li><div> hello Allan </div></li>' +
    '<li><div> hello Tom </div></li></ul>'
    assert.isTrue(noteListView.render() === HTMLstring)
  })();

  (function testNoteListViewWithNoNotes() {
    var noteList = new NoteList(Note);
    var noteListView = new NoteListView(noteList);
    HTMLstring = "<ul></ul>"
    assert.isTrue(noteListView.render() === HTMLstring)
  })();

  (function testNoteListViewWithOneNote() {
    var noteList = new NoteList(Note);
    noteList.add('hi')
    var noteListView = new NoteListView(noteList);
    HTMLstring = "<ul><li><div> hi </div></li></ul>"
    assert.isTrue(noteListView.render() === HTMLstring)
  })()

})(this);
