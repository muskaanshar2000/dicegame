var randnum1 = Math.floor(Math.random() *6) + 1;

var randimg1 = "images" + "/dice" + randnum1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src" , randimg1);


var randnum2 = Math.floor(Math.random() *6) + 1;

var randimg2 = "images" + "/dice" + randnum2 + ".png";


document.querySelectorAll("img")[1].setAttribute("src" , randimg2);



if(randnum1 > randnum2)
{
    document.querySelectorAll("h1")[0].innerHTML = "PLayer 1 won!"
}

if(randnum1 < randnum2)
{
    document.querySelectorAll("h1")[0].innerHTML = "PLayer 2 won!"
}

if(randnum1 === randnum2)
{
    document.querySelectorAll("h1")[0].innerHTML = "It's a draw!"
}