(function(exports) {

  describe("Note has text", function() {
    var note = new Note("My favourite language is JavaScript");
    return assert.isTrue(note.text() === "My favourite language is JavaScript");
  })

})(this);
