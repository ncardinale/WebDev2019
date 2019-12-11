var Button2 = $("#BLeft").on("click", LeftTurn);
var Button3 = $("#BRight").on("click", RightTurn);
//console.log("WorkingLoad");
var wallNum = 1;
//var PicNumOld;

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


function showDoor(){
  document.getElementById("door").style.display = "inline";
}

function showFrame(){
  document.getElementById("frame").style.display = "inline";
}

function showBookshelf(){
  document.getElementById("bookshelf").style.display = "inline";
}

function showWindow(){
  document.getElementById("window").style.display = "inline";
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
