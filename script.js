$("#BLeft").on("click", LeftTurn);
$("#BRight").on("click", RightTurn);

$("#windowkeyarea").on("click", getWindowKey);
//console.log("WorkingLoad");
var wallNum = 1;
//var PicNumOld;

var WindowKeyInv = false;


function showWall(imgNum){
  console.log(imgNum);
  hideAllWalls();
  switch (imgNum) {
    case 1:
      showDoor();
      break;
    case 2:
      showFrame();
      break;
    case 3:
      showBookshelf();
      break;
    case 4:
      showWindow();
      break;
  }

}

function getWindowKey(){
  //alert("HOLYSHITHAVWKYEY");
  console.log("Alert KEY");
  WindowKeyInv = true;
  showDoor();
}

function showDoor(){
  document.getElementById("door").style.display = "inline";
  if(WindowKeyInv == true){
    document.getElementById("door-windowkey").style.display = "none";
    document.getElementById("inv-windowkey").style.display = "inline";
  }
  else {
    document.getElementById("door-windowkey").style.display = "inline";
    document.getElementById("inv-windowkey").style.display = "none";
  }

}

function hideDoorItems() {
  document.getElementById("door-windowkey").style.display = "none";
}

function showFrame(){
  document.getElementById("frame").style.display = "inline";
  hideDoorItems();
}

function showBookshelf(){
  document.getElementById("bookshelf").style.display = "inline";
  hideDoorItems();
}

function showWindow(){
  document.getElementById("window").style.display = "inline";
  hideDoorItems();
}

function hideAllWalls(){
  document.getElementById("door").style.display = "none";
  document.getElementById("frame").style.display = "none";
  document.getElementById("bookshelf").style.display = "none";
  document.getElementById("window").style.display = "none";
}

function LeftTurn(){
  if(wallNum === 1){
    wallNum = 4;
  }
  else{
    wallNum = wallNum - 1;
  }
  console.log("Left Working");
  console.log(wallNum);
  showWall(wallNum);
}

function RightTurn(){
  if(wallNum === 4){
    wallNum = 1;
  }
  else{
    wallNum = wallNum + 1;
  }
  console.log("Right Working");
  console.log(wallNum);
  showWall(wallNum);
}

//document.getElementById("p" + 1).style.display = "inline";
showWall(wallNum);
