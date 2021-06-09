var imageDir = "assets/";
var images = [
  ['WS 1.png', 'WS 2.png', 'WS 3.png', 'WS 4.png', 'WS 5.png',],
  ['Chapel (2020).png', 'Owl Haunt (2020).png', 'That Barn (2020).png', 'The Dream machine 1.png', 'The Dream machine 2.png', 'Untitled.png'],
  ['UL 2.png', 'UL 3.png', 'UL 4.png', 'UL 5.png', 'UL 6.png', 'UL 7.png', 'UL 8.png', 'UL 9.png', 'UL 10.png', 'UL 11.png', 'UL 12.png',],
  ['KADH 1.png', 'KADH 2.png', 'KADH 3.png', 'KADH 4.png', 'KADH 5.png', 'KADH 6.png', 'KADH 7.png', 'KADH 8.png', 'KADH 9.png', 'KADH 10.png', 'KADH 11.png'],
  ['DH 1.png', 'DH 2.png', 'DH 3.png', 'DH 4.png', 'DH 5.png', 'DH 6.png', 'DH 7.png', 'DH 8.png']
];

var descriptions = [
  ['2020', '2020', '2020', '2020', '2020'],

  ['2020', '2020', '2020', '2020', '2020', '2020'],

  ['2020', '2020', '2020', '2020', '2020', '2020', '2020', '2020', '2020', '2020', '2020'],

  ['2021', '2021', '2021', '2021', '2021', '2021', '2021', '2021', '2021', '2021', '2021'],

  ['2021', '2021', '2021', '2021', '2021', '2021', '2021', '2021']
];

var project;
var slide;

function projectSelect(x) {
  slide = 0;
  project = x;

  document.getElementById("currentImage").src = (imageDir.concat(images[project][slide]));
  document.getElementById("desc").innerHTML = (descriptions[project][slide]);

  document.querySelector('.right').addEventListener('click', () => {
    if (slide + 1 < (images[project]).length){
      slide++;
    }

    else if ((slide + 1 >= images[project].length) && (images[project].length > 1)){
      slide = 0;
    }

    document.getElementById("currentImage").src = (imageDir.concat(images[project][slide]));
    document.getElementById("desc").innerHTML = (descriptions[project][slide]);
  });

  document.querySelector('.left').addEventListener('click', () => {

    if (slide <= 0){
      slide = (images[project].length - 1);
    }

    else if ((slide  >= 1)){
      slide--;
    }

    document.getElementById("currentImage").src = (imageDir.concat(images[project][slide]));
    document.getElementById("desc").innerHTML = (descriptions[project][slide]);
  });
}
