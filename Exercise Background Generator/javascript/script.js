var h3 = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.querySelector('body');
var randomBtn = document.querySelector('#random');
function setGradient(){
  body.setAttribute('style','background:linear-gradient(to right,'+color1.value +','+ color2.value+')');
  h3.textContent = body.style.background;
}
function generateRandomColors(){
  var hexDomain = '0123456789ABCDEF'.split('');
       var colorString = '#';
       for (var i = 0; i < 6; i++ ) {
           colorString += hexDomain[Math.round(Math.random() * 15)];

       }
       return colorString;
}
function paintRandomColors(){
   color1.value = generateRandomColors();
   color2.value = generateRandomColors();
  setGradient();
}

randomBtn.addEventListener('click',paintRandomColors);
color1.addEventListener('input',setGradient);

color2.addEventListener('input',setGradient);
