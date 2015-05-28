var wordCount = function(phrase) {
  var words = phrase.split(" ");
  var wordStore = {};
  var output = []

  for (var i = 0; i < words.length; i++) {
    if (wordStore.hasOwnProperty(words[i])) {
      wordStore[words[i]] = wordStore[words[i]] + 1
    } else {
      wordStore[words[i]] = 1
    }
  }

  var finalWords = Object.keys(wordStore)

  for (var i = 0; i <finalWords.length; i++){
    output.push(wordStore[finalWords[i]] + " " + finalWords[i]);
  }
  return output.sort().reverse().join(" ");

};

$(document).ready(function() {
  $("#calculator").submit(function(event) {
    var input = ($("input#phrase").val());
    var phraseCounts = wordCount(input);

    $(".result").text(phraseCounts);
    $("#result").show();
    event.preventDefault();
  });
});
