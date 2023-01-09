//Random number 1 codes - Method 01
var randomNumber1 =Math.floor((Math.random()*6)+1); //random number selecting
var randomNumber1Img= "dice"+randomNumber1+".png"; //selecting img
var randomImgSource= "/images/"+randomNumber1Img; //selecting from source images/dice1.png -images/dice6.png
var image1=document.querySelectorAll("img")[0].setAttribute("src",randomImgSource);

var randomNumber2=Math.floor((Math.random()*6)+1);
var randomNumber2Img ="dice"+randomNumber2+".png";
var randomImgSource2="/images/"+randomNumber2Img;
var image2=document.querySelectorAll("img")[1].setAttribute("src",randomImgSource2);



/* Method 02 to Select Dice

if(randomNumber1===1){
    document.querySelector("img").setAttribute("href","/images/dice1.png");
}
else if(randomNumber1===2){
    document.querySelector("img").setAttribute("href","/images/dice2.png");
}
else if(randomNumber1===3){
    document.querySelector("img").setAttribute("href","/images/dice3.png");
}
else if(randomNumber1===4){
    document.querySelector("img").setAttribute("src","/images/dice4.png");
}
else if(randomNumber1===5){
    document.querySelector("img").setAttribute("src","/images/dice5.png");
}
else{
    document.querySelector("img").setAttribute("src","/images/dice6.png");
}



if(randomNumber2===1){
    document.getElementsById("img2").setAttribute("src","/images/dice1.png");

}
else if(randomNumber2===2){
    document.getElementById("img2").setAttribute("src","/images/dice2.png");
}
else if(randomNumber2===3){
    document.getElementById("img2").setAttribute("src","/images/dice3.png");
}
else if(randomNumber2===4){
    document.getElementById("img2").setAttribute("src","/images/dice4.png");
}
else if(randomNumber2===5){
    document.getElementById("img2").setAttribute("src","/images/dice5.png");
}
else{
    document.getElementById("img2").setAttribute("src","/images/dice6.png");
}
*/


if(randomNumber1>randomNumber2){
   document.querySelector("h1").innerHTML="Player 1 Wins!!!";
}
if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!!!";
 }
 else{
    document.querySelector("h1").innerHTML="Draw!!!";
 }

