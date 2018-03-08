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

    //returns data from the function and decode/convert it back to js
    return JSON.parse(notes);
  }
  else
  {
    //console.log("is it on else"); to check is the problem is here
    //returns an empty array
    return [];
  }
}
function setLocal(origNotes)
{
  //converting it to JSON
  var newNotes = JSON.stringify(origNotes);

  //saving it
  localStorage.setItem("noteList", newNotes);
}

function submitNote(inputText, inputDate, inputImportant, inputIcon)
{
  //console.log(origNotes); to check is the problem is here
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

  setLocal(origNotes);
}

//manually implement a note
//setLocal("cry", "2018/03/07 11:30:00", false, "empire");

function buildList()
{
  //to test if it's working
  //console.log("window onload");
  var notes = getLocal();
  //to test if it's working
  //console.log(notes);

  //in a larger project you would want to use an id instead of just ul
  var ulElm = document.querySelector("ul");
  ulElm.innerHTML = "";

  for(var i = 0; i < notes.length; i++)
  {
    //creating an element
    var liElm = document.createElement("li");
    var pElm = document.createElement("p");

    if(notes[i].important === true)
    {
      //These are called conditional styling
      liElm.style.backgroundColor ="deeppink";
      liElm.style.color ="white";
    }

    //getting the value from the key text
    pElm.innerHTML = notes[i].text;

    //adds a class to the first p element in the lists
    pElm.classList.add("pinkUnicorn");

    liElm.appendChild(pElm);

    if(notes[i].date !== "")
    {
      var pDateElm = document.createElement("p");
      pDateElm.innerHTML = notes[i].date;
      liElm.appendChild(pDateElm);
    }

    ulElm.appendChild(liElm);
  }
}

//function() is anonymous
window.onload = function()
{
  buildList();
}

var submitBtn = document.querySelector("#addNote");

submitBtn.addEventListener("click", function()
{
  var text = document.querySelector("#noteText");
  var important = document.querySelector("#noteImportant");
  var date = document.querySelector("#noteTime");
  //remember ICON
  //console.log(text + ", " + important + ", " + date);

  submitNote(text.value, date.value, important.checked, "");

  //just calling a function, makes it super easy
  buildList();

  text.value = "";
  date.value = "";
  important.checked = false;
});
