var imageDir = "assets/";

var project;
var slide;
var run = false;
var writingRun = false;
var currentColour;
var colourIndex;
var div = document.getElementById("contentBox");

function setup(){
  colourIndex = floor(random(0, colours.length));
  currentColour = colours[colourIndex];
  document.body.style.background = currentColour;
}

document.addEventListener("click", changeColour);

function changeColour(){
  if (colourIndex < colours.length){
    colourIndex++;
  }
  else{
    colourIndex = 0;
  }

  currentColour = colours[colourIndex];
  document.body.style.background = currentColour;
}


function contentSelect(x){
  var titleContent = x;

  document.getElementById("ghost").style.display = "none";
  // document.getElementById("landingImage").style.display = "none";

  switch(titleContent){
    case 0:
      //show work titles
      document.getElementById("workTitles").style.display = "block";

      document.getElementById("writingTitles").style.display = "none";
      document.getElementById("contactInfo").style.display = "none";
    break;

    case 1:
      document.getElementById("writingTitles").style.display = "block";

      document.getElementById("workTitles").style.display = "none";
      document.getElementById("contactInfo").style.display = "none";
    break;

    case 2:
      if (run == true){
        clearBox();
        run = false;
      }

      if (writingRun == true){
        clearWriting();
        writingRun = false;
      }
      document.getElementById("contactInfo").style.display = "block";
      document.getElementById("ghost").style.display = "block";

      document.getElementById("workTitles").style.display = "none";
      document.getElementById("writingTitles").style.display = "none";
    break;

    default:
    //
  }

}
function workDisplay(contentID){
  if (run == true){
    clearBox();
    run = false;
  }

  if (writingRun == true){
    clearWriting();
    writingRun = false;
  }

  document.getElementById(contentID).style.display = "block";
  run = true;
}

function clearBox(){
  document.getElementById('KADH').style.display = "none";
  document.getElementById('UDH').style.display = "none";
  document.getElementById('Q').style.display = "none";
  document.getElementById('WS').style.display = "none";
  document.getElementById('UL').style.display = "none";
  document.getElementById('JL').style.display = "none";
}


function writingDisplay(x){
  var project = x;
  var div = document.getElementById("writingBox");

  if (run == true){
    clearBox();
    run = false;
  }

  if (writingRun == true){
    clearWriting();
    writingRun = false;
  }

  div.innerHTML += writings[project];
  writingRun = true;
}

function clearWriting(){
  var div = document.getElementById("writingBox");
  div.innerHTML = "";
}
