(function(exports) {
  function NoteListView(noteList) {
    this._noteList = noteList;
  }

  NoteListView.prototype = {
    render: function() {
      result = ""
      this._noteList.notes().forEach(function(note) {
        result += `<li><div> ${note.text()} </div></li>`
      })
      return `<ul>${result}</ul>`
    }
  }

  exports.NoteListView = NoteListView
})(this);
