(function(exports) {
  function NoteList(note) {
    this._notes = [];
    this._note = note;
  }

  NoteList.prototype = {
    add: function(string) {
      this._notes.push(new this._note(string));
    },
    notes: function() {
      return this._notes;
    }
  }

  exports.NoteList = NoteList;
})(this);
