var Button1 = $("#b1").on("click", RandomNum);
var Button2 = $("#BLeft").on("click", LeftTest);
var Button3 = $("#BRight").on("click", RightTest);
console.log("WorkingLoad");
var PicNum = 3;
var PicNumOld;
//var Pic1 = <img class="p1resize" src="Photo 1.jpg" alt="LightSaber" style="display:none">
//let images = [];

//images[PicNum];

//images[1] = 'Photo 1.jpg';
//images[2] = 'Photo 2.jpg';
//images[3] = 'Photo 3.jpg';
//images[4] = 'Photo 4.jpg';
//images[5] = 'Photo 5.jpg';


function showImage(imgNum){
  //document.slide.src = images[i];
  console.log("ImageShown: " + imgNum);
  var i;
  for (i = 1; i <= 5; i++) {
    document.getElementById("p" + i).style.display = "none";
  }
  document.getElementById("p" + imgNum).style.display = "inline";
}

function RandomNum(){
  PicNum = PicNumOld;
  PicNum = Math.floor((Math.random() * 5) + 1);

  if(PicNumOld === PicNum){
    console.log("Repeat Number: " + PicNum);
    RandomNum();
    }
  else
  {
    console.log("New Number: " + PicNum);
  }
  showImage(PicNum);
}

function LeftTest(){

  if(PicNum === 1){
    PicNum = 5;
  }
  else{
    PicNum = PicNum - 1;
  }
  console.log("Left Working");
  console.log(PicNum);
  showImage(PicNum);

}

function RightTest(){
  if(PicNum === 5){
    PicNum = 1;
  }
  else{
    PicNum = PicNum + 1;
  }
  console.log("Right Working");
  console.log(PicNum);
  showImage(PicNum);
}

document.getElementById("p" + 1).style.display = "inline";


//<img class="p1resize" src="Photo 1.jpg" alt="LightSaber">
