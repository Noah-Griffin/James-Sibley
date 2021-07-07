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

  if (run == true){
    clearText();
    clearBox();
  }
  if (writingRun == true){
    clearWriting();
    writingRun = false;
  }

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
      document.getElementById("contactInfo").style.display = "block";
      document.getElementById("ghost").style.display = "block";

      document.getElementById("workTitles").style.display = "none";
      document.getElementById("writingTitles").style.display = "none";
    break;

    default:
    //
  }
}


function workDisplay(x){
  var div = document.getElementById("contentBox");
  var project = x;

  if (run == true){
    clearText();
    clearBox();
  }
  if (writingRun == true){
    clearWriting();
    writingRun = false;
  }

  images[project].forEach(function(image) {
    var img = document.createElement('img');
    var index = images[project].indexOf(image);

    if (image != ''){
      img.src = (imageDir.concat(image));

      currentImages.push(img);
      div.appendChild(img);

      currentText.push(document.createTextNode(descriptions[project][index]));
      div.appendChild(currentText[index]);

      lineBreaks.push(document.createElement('br'));
      div.appendChild(lineBreaks[index]);
    }
  });

  for (i=0; i < extras[project].length; i++){
    if (extras[project][i] != ''){
      var extraContent = document.createElement('extraContent');
      extraContent.innerHTML += extras[project][i];
      currentExtras.push(extraContent);
      div.appendChild(currentExtras[i]);
    }
  }

  run = true;
}

function clearText(){
  for (i = 0; i < currentText.length; i++){
    document.getElementById("contentBox").removeChild(currentText[i]);
    document.getElementById("contentBox").removeChild(lineBreaks[i]);
  }
  currentText = [];
}

function clearBox(){
  for (i = 0; i < currentImages.length; i++){
    document.getElementById("contentBox").removeChild(currentImages[i]);
  }
  currentImages = [];

  for (i = 0; i < currentExtras.length; i++){
    document.getElementById("contentBox").removeChild(currentExtras[i]);
  }
  currentExtras = [];
}

function writingDisplay(x){
  var project = x;
  var div = document.getElementById("writingBox");

  if (run == true){
    clearText();
    clearBox();
    run = false;
  }

  if (writingRun == true){
    clearWriting();
  }

  div.innerHTML += writings[project];
  writingRun = true;
}

function clearWriting(){
  var div = document.getElementById("writingBox");
  div.innerHTML = "";
}
