var rolledPoint = 0;
var roundPoint = 0;
var totalPoint = 0;


$(document).ready(function(){
  $("#player-1").submit(function(event){
    event.preventDefault();
      var name = $("#fala1").val();
      $("#gon").text(name);
  })

})
$(document).ready(function(){
  $("#player-2").submit(function(event){
    event.preventDefault();
      var name = $("#fala2").val();
      $("#kilua").text(name);
  })

})


function roll(){
  var randomNumber = Math.floor(Math.random()*6)+1;
  if(randomNumber === 1){
    document.getElementById("roll").innerHTML=randomNumber
    document.getElementById("img1").src = "images/downlod1.png";
    roundPoint = 0;
    document.getElementById("turn").innerHTML=roundPoint

  }
  else if(randomNumber === 2){
    document.getElementById("roll").innerHTML=randomNumber
    document.getElementById("img1").src = "images/downlod2.png";
    rolledPoint += randomNumber;
    roundPoint += rolledPoint
    rolledPoint = 0;
    document.getElementById("turn").innerHTML=roundPoint
  }
  else if(randomNumber === 3){
    document.getElementById("roll").innerHTML=randomNumber
    document.getElementById("img1").src = "images/downlod3.png";
    rolledPoint += randomNumber;
    roundPoint += rolledPoint
    rolledPoint = 0;
    document.getElementById("turn").innerHTML=roundPoint
  }
  else if(randomNumber === 4){
    document.getElementById("roll").innerHTML=randomNumber
    document.getElementById("img1").src = "images/downlod4.png";
    rolledPoint += randomNumber;
    roundPoint += rolledPoint
    rolledPoint = 0;
    document.getElementById("turn").innerHTML=roundPoint
  }
  else if(randomNumber === 5){
    document.getElementById("roll").innerHTML=randomNumber
    document.getElementById("img1").src = "images/downlod5.png";
    rolledPoint += randomNumber;
    roundPoint += rolledPoint
    rolledPoint = 0;
    document.getElementById("turn").innerHTML=roundPoint
  }
  else {
    document.getElementById("roll").innerHTML=randomNumber
    document.getElementById("img1").src = "images/downlod6.png";
    rolledPoint += randomNumber;
    roundPoint += rolledPoint
    rolledPoint = 0;
    document.getElementById("turn").innerHTML=roundPoint
  }
};

function hold1(){
  totalPoint += roundPoint
  document.getElementById("points").innerHTML=totalPoint
}
//player two roll and hold1
function roll1(){
  var randomNumber = Math.floor(Math.random()*6)+1;
  if(randomNumber === 1){
    document.getElementById("roll0").innerHTML=randomNumber
    document.getElementById("img2").src = "images/downlod1.png";
    roundPoint = 0;
    document.getElementById("turnt").innerHTML=roundPoint

  }
  else if(randomNumber === 2){
    document.getElementById("roll0").innerHTML=randomNumber
    document.getElementById("img2").src = "images/downlod2.png";
    rolledPoint += randomNumber;
    roundPoint += rolledPoint
    rolledPoint = 0;
    document.getElementById("turnt").innerHTML=roundPoint
  }
  else if(randomNumber === 3){
    document.getElementById("roll0").innerHTML=randomNumber
    document.getElementById("img2").src = "images/downlod3.png";
    rolledPoint += randomNumber;
    roundPoint += rolledPoint
    rolledPoint = 0;
    document.getElementById("turnt").innerHTML=roundPoint
  }
  else if(randomNumber === 4){
    document.getElementById("roll0").innerHTML=randomNumber
    document.getElementById("img2").src = "images/downlod4.png";
    rolledPoint += randomNumber;
    roundPoint += rolledPoint
    rolledPoint = 0;
    document.getElementById("turnt").innerHTML=roundPoint
  }
  else if(randomNumber === 5){
    document.getElementById("roll0").innerHTML=randomNumber
    document.getElementById("img2").src = "images/downlod5.png";
    rolledPoint += randomNumber;
    roundPoint += rolledPoint
    rolledPoint = 0;
    document.getElementById("turnt").innerHTML=roundPoint
  }
  else {
    document.getElementById("roll0").innerHTML=randomNumber
    document.getElementById("img2").src = "images/downlod6.png";
    rolledPoint += randomNumber;
    roundPoint += rolledPoint
    rolledPoint = 0;
    document.getElementById("turnt").innerHTML=roundPoint
  }
};

function hold2(){
  totalPoint += roundPoint
  document.getElementById("points1").innerHTML=totalPoint
}
