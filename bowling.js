var Bowling = function (rolls) {
  this.score = function() {
    var result = 0;
    for (var i = 0; i < rolls.length; i++) {
      result += rolls[i]

    }
    return result
  }

};

module.exports = Bowling ;
