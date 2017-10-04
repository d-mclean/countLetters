/* 20171004 DM - LHL w1d3 count letters

Returnsan object that can represent the stats for
the sentence it is given: all the characters found
in the input string, and their respective counts

*/

function countLetters(strInput){
  var objOutput = {};

  //Remove all spaces and lower case the input.
  strInput = strInput.replace(/ /g,'').toLowerCase();

  //Loop through each letter in the input.
  for (var i = 0; i < strInput.length; i++){
    //Increment key for a given letter unless it's 0.
    if (strInput[i] in objOutput)
      objOutput[strInput[i]] += 1;
    else
      objOutput[strInput[i]] = 1;
  }

  // return objOutput;
  console.log(objOutput);
}

countLetters("lighthouse in the House");