(function(exports) {
  function describe(string, callback) {
    console.log(string);
    // console.log(callback());
    callback();
  }

  exports.describe = describe;
})(this);
