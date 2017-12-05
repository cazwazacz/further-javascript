(function(exports) {
  var mainDiv = document.getElementById('app');

  function NoteController(noteListModel, noteListView) {
    this._noteListModel = noteListModel;
    this._noteListModel.add('Favourite drink: seltzer');
    this._noteListView = new noteListView(this._noteListModel);
  }

  NoteController.prototype.insertHTML = function () {
    mainDiv.innerHTML = this._noteListView.render();
  };

  exports.NoteController = NoteController;

})(this);

var noteController = new NoteController(new NoteList(Note), NoteListView);
noteController.insertHTML();
