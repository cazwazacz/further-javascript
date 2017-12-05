(function(exports) {

  const beforeTest = function(exports) {
    function NoteDouble(string) {}
    var list = new NoteList(NoteDouble);
    exports.list = list;
    exports.NoteDouble = NoteDouble;
  }

  describe("Creates and stores notes", function() {
    beforeTest(this);
    list.add('Hello');
    list.add('How are you?');
    list.add('Wazzaaaaa');
    assert.isTrue(list.notes().length === 3);
  })

  describe("Store an instance of note", function() {
    beforeTest(this);
    list.add('Hello');
    assert.isInstanceOf(list.notes()[0], NoteDouble);
  })

})(this);
