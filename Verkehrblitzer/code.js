function main(){

  var inputmaxspeed = document.getElementById("maxspeed");
  var inputspeed = document.getElementById("speed");
  var inputdir = document.getElementById("dir");

  var maxspeed = parseInt(inputmaxspeed.value);
  var speed = parseInt(inputspeed.value);
  var isFacing = inputdir.checked;

  var maxspeedWithOffset = maxspeed + ((maxspeed/100)*10);

  console.log(maxspeedWithOffset);

  if(speed > maxspeedWithOffset && isFacing == true){
  alert("Du wurdest geblitzt");
  }
}
  
