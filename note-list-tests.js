(function(exports) {

  const beforeTest = function(exports) {
    function NoteDouble(string) {
    }
    var list = new NoteList(NoteDouble);
    exports.list = list;
    exports.NoteDouble = NoteDouble;
  }

  function createsAndStoresNotes() {
    beforeTest(this);
    list.add('Hello');
    list.add('How are you?');
    list.add('Wazzaaaaa');
    assert.isTrue(list.notes().length === 3);
  };

  createsAndStoresNotes();

  function storeAnInstanceOfNote() {
    beforeTest(this);
    list.add('Hello');
    assert.isInstanceOf(list.notes()[0], NoteDouble);
  };

  storeAnInstanceOfNote();


})(this);
