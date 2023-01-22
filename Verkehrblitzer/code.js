function main(){

  var inputmaxspeed = document.getElementById("maxspeed");
  var inputspeed = document.getElementById("speed");
  var inputdir = document.getElementById("dir");

  var maxspeed = parseInt(inputmaxspeed.value);
  var speed = parseInt(inputspeed.value);
  var isFacing = inputdir.ariaChecked;

  var maxSpeedWithOffset = maxSpeed + ((maxSpeed/100)*10)

  if(speed > maxSpeedWithOffset && isFacing == true){
  alert("Du wurdest geblitzt");
  }
}

  
