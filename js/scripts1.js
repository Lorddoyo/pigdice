var rolledPoint = 0;
var roundPoint = 0;
var totalPoint = 0;
var array = [2,3,4,5,6];


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
  array.forEach(function(item){
    if(item === randomNumber){
      document.getElementById("roll").innerHTML=randomNumber
      document.getElementById("img1").src = "images/downlod" + item + ".png";
      rolledPoint += randomNumber;
      roundPoint += rolledPoint
      rolledPoint = 0;
      document.getElementById("turn").innerHTML=roundPoint
    }
  })
};

function hold1(){
  totalPoint += roundPoint
  document.getElementById("points").innerHTML=totalPoint
}