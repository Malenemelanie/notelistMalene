//testing if the js is connected to the index
//console.log("testing script");

//circle braces indicate it's a function
function getLocal()
{
  var notes = localStorage.getItem("noteList");

  //console.log(notes); to check is the problem is here
  if(notes != null)
  {
    //console.log("is it on if"); to check is the problem is here
    return JSON.parse(notes);
  }
  else
  {
    //console.log("is it on else"); to check is the problem is here
    //returns an empty array
    return [];
  }
}
function setLocal(inputText, inputDate, inputImportant, inputIcon)
{
  //orig for original
  var origNotes = getLocal();
  var newNote = {
      //text is a key, asigning the inputText to the key. Same for the others
      text:       inputText,
      date:       inputDate,
      important:  inputImportant,
      icon:       inputIcon
  };
  //appending it
  origNotes.push(newNote);

  //console.log(origNotes); to check is the problem is here

  //converting it
  var newNotes = JSON.stringify(origNotes);

  //saving it
  localStorage.setItem("noteList", newNotes);
}

setLocal("cry", "2018/03/07 11:30:00", false, "empire");
//function() is anonymous
window.onload = function()
{
    //to test if it's working
    //console.log("window onload");
    var notes = getLocal();
    //to test if it's working
    //console.log(notes);

    //in a larger project you would want to use an id instead of just ul
    var ulElm = document.querySelector("ul");

    for(var i = 0; i < notes.length; i++)
    {
      //creating an element
      var liElm = document.createElement("li");
      var pElm = document.createElement("p");

      //getting the value from the key text
      pElm.innerHTML = notes[i].text;

      liElm.appendChild(pElm);

      ulElm.appendChild(liElm);
    }
}
