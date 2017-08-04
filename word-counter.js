function wordCounter(content){

  var
    text,
    words = [],
    counter = {},
    result = [];


  text = content
  .replace(/\./g, "")
  .replace(/\,/g, "")
  .replace(/\?/g, "")
  .replace(/\!/g, "")
  .replace(/\-/g, " ")
  .replace(/\_/g, " ")
  .split(" ");


  for(var i =0; i < text.length; i++){
    if(words.indexOf(text[i]) > -1){
      counter[text[i]] += 1;
    } else {
      words.push(text[i]);
      counter[text[i]] = 1;
    }
  }

  for(var j = 0; j < words.length; j++){
    var data = counter[words[j]];
    result.push({
      word : words[j],
      count : counter[words[j]]
    });
  }

  return result;

}
