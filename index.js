var boardWidth = 900;
var boardHeight = 600;
var context;
var board;


var deathSound = new Audio();
deathSound.src = "audio/death.mp3";

var hitwallSound = new Audio();
hitwallSound.src = "audio/shotbullet.mp3";

var shotbulletSound = new Audio();
shotbulletSound.src = "audio/hitwall.mp3";

var player1 = {
    x: 30,
    y: 250,
    width: 50,
    height: 50,
    velocityX: 0,
    velocityY: 0,
    points: 0,
}

var player2 = {
    x: 820,
    y: 250,
    width: 50,
    height: 50,
    velocityX: 0,
    velocityY: 0,
    points: 0,
}


var bullet1 = {
    x: 5000,
    y: 50,
    width: 10,
    height: 10,
    velocityX: 0,
    velocityY: 0,
}


var bullet2 = {
    x: 5000,
    y: 50,
    width: 10,
    height: 10,
    velocityX: 0,
    velocityY: 0,
}

var b1 = {
    x: 430,
    y: 100,
    width: 40,
    height: 90,
}
var b2 = {
    x: 430,
    y: 350,
    width: 40,
    height: 90,
}
var b3 = {
    x: 250,
    y: 250,
    width: 90,
    height: 40,
}
var b4 = {
    x: 550,
    y: 250,
    width: 90,
    height: 40,
}
var b5 = {
    x: 780,
    y: 190,
    width: 20,
    height: 160,
}
var b6 = {
    x: 100,
    y: 190,
    width: 20,
    height: 160,
}

function drawBoard(){
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d");
    document.addEventListener("keyup", keyup);
    document.addEventListener("keydown", keydown);
}


function drawScore(){

    context.fillStyle = "red";
    context.font = "50px Trickster";
    context.fillText(player2.points, 600, 70);

    context.fillStyle = "lightblue";
    context.font = "50px Trickster";
    context.fillText(player1.points, 250, 70);
}

window.onload = function(){
    drawBoard();
    requestAnimationFrame(update);
}
function update(){
    requestAnimationFrame(update);
    drawPlayers();
    drawMap();
    drawBullets();
    playerCollisions();
    drawScore();
}

function drawMap(){
        context.fillStyle = "white";
        for (let i = 1; i <= 6; i++){
        var ProButton = window['b' + i];
        context.fillRect(ProButton.x, ProButton.y, ProButton.width, ProButton.height);
        }

}


function playerCollisions(){


    console.log("X: " + bullet2.x);





    for (let i = 1; i <= 2; i ++){
    var players = window['player' + i]
    var bullets = window['bullet' + i]
    if (players.x < 0){
        players.x = 0;
    }
    if (players.x > 850){
        players.x = 850;
    }

    if (players.y < 0){
        players.y = 0;
    }
    if (players.y > 550){
        players.y = 550;
    }

    if (bullets.x < 0 && bullets.x != 5000){
        bullets.velocityX *= -1;
    }
    if (bullets.x > 890 && bullets.x != 5000){
        bullets.velocityX *= -1;
    }

    if (bullets.y < 0){
        bullets.velocityY *= -1;
    }
    if (bullets.y > 590){
        bullets.velocityY *= -1;
    }

    if (detectCollision(players, b6) && players.x >= 52 && players.x <= 53 && players.y > 144 && players.y < 347){
        players.x = 50;
    }
    if (detectCollision(players, b6) && players.x <= 122 && players.x <= 119 && players.y > 144 && players.y < 347){
        players.x = 120;
    }
    if (detectCollision(players, b6) && players.y == 142){
        players.y = 140;
    }
    if (detectCollision(players, b6) && players.y == 348){
        players.y = 350;
    }

    if (detectCollision(players, b5) && players.x <= 798 && players.x >= 797 && players.y > 144 && players.y < 347){
        players.x = 800;
    }
    if (detectCollision(players, b5) && players.x >= 730 && players.x >= 734 && players.y > 144 && players.y < 347){
        players.x = 732;
    }
    if (detectCollision(players, b5) && players.y == 142){
        players.y = 140;
    }
    if (detectCollision(players, b5) && players.y == 348){
        players.y = 350;
    }

    if (detectCollision(players, b4) && players.y <= 290 && players.y >= 287){
        players.y = 290;
    }
    if (detectCollision(players, b4) && players.y >= 200 && players.y <= 203){
        players.y = 200;
    }
    if (detectCollision(players, b4) && players.x <= 640 && players.x >= 637){
        players.x = 640;
    }
    if (detectCollision(players, b4) && players.x >= 500 && players.x <= 503){
        players.x = 500;
    }

    if (detectCollision(players, b3) && players.y <= 290 && players.y >= 287){
        players.y = 290;
    }
    if (detectCollision(players, b3) && players.y >= 200 && players.y <= 203){
        players.y = 200;
    }
    if (detectCollision(players, b3) && players.x <= 340 && players.x >= 337){
        players.x = 340;
    }
    if (detectCollision(players, b3) && players.x >= 200 && players.x <= 203){
        players.x = 200;
    }


    if (detectCollision(players, b2) && players.y >= 300 && players.y <= 303){
        players.y = 300;
    }
    if (detectCollision(players, b2) && players.y <= 440 && players.y >= 437){
        players.y = 440;
    }
    if (detectCollision(players, b2) && players.x <= 470 && players.x >= 467){
        players.x = 470;
    }
    if (detectCollision(players, b2) && players.x >= 380 && players.x <= 383){
        players.x = 380;
    }

    if (detectCollision(players, b1) && players.y >= 50 && players.y <= 53){
        players.y = 50;
    }
    if (detectCollision(players, b1) && players.y <= 190 && players.y >= 187){
        players.y = 190;
    }
    if (detectCollision(players, b1) && players.x <= 470 && players.x >= 467){
        players.x = 470;
    }
    if (detectCollision(players, b1) && players.x >= 380 && players.x <= 383){
        players.x = 380;
    }

}

}


function drawBullets(){
    context.fillStyle = "lightblue";
    bullet1.x += bullet1.velocityX;
    bullet1.y += bullet1.velocityY;
    context.fillRect(bullet1.x, bullet1.y, bullet1.width, bullet1.height);

    context.fillStyle = "red";
    bullet2.x += bullet2.velocityX;
    bullet2.y += bullet2.velocityY;
    context.fillRect(bullet2.x, bullet2.y, bullet2.width, bullet2.height);


if (detectCollision(b1, bullet1)){
    hitwallSound.play();
    bullet1.velocityX *= -1;
     bullet1.velocityY *= -1;
}
if (detectCollision(b2, bullet1)){
    hitwallSound.play();
        bullet1.velocityX *= -1;
        bullet1.velocityY *= -1;
}
if (detectCollision(b3, bullet1)){
    hitwallSound.play();
    bullet1.velocityX *= -1;
    bullet1.velocityY *= -1;
}
if (detectCollision(b4, bullet1)){
    hitwallSound.play();
    bullet1.velocityX *= -1;
    bullet1.velocityY *= -1;
}
if (detectCollision(b5, bullet1)){
    hitwallSound.play();
    bullet1.velocityX *= -1;
    bullet1.velocityY *= -1;
}
if (detectCollision(b6, bullet1)){
    hitwallSound.play();
    bullet1.velocityX *= -1;
}

if (detectCollision(b1, bullet2)){
    hitwallSound.play();
    bullet2.velocityX *= -1;
    bullet2.velocityY *= -1;
}
if (detectCollision(b2, bullet2)){
    hitwallSound.play();
    bullet2.velocityX *= -1;
    bullet2.velocityY *= -1;
}
if (detectCollision(b3, bullet2)){
    hitwallSound.play();
    bullet2.velocityX *= -1;
    bullet2.velocityY *= -1;
}
if (detectCollision(b4, bullet2)){
    hitwallSound.play();
    bullet2.velocityX *= -1;
    bullet2.velocityY *= -1;
}
if (detectCollision(b5, bullet2)){
    hitwallSound.play();
    bullet2.velocityX *= -1;
    bullet2.velocityY *= -1;
}
if (detectCollision(b6, bullet2)){
    hitwallSound.play();
    bullet2.velocityX *= -1;
}
/*x: 820,
y: 250,
x: 30,
y: 250,
*/
if (detectCollision(bullet1, player2)){
    deathSound.play();
    player2.x = 820;
    player2.y = 250;
    bullet1.velocityX = 0;
    bullet1.x = 5000;
    player1.points++;
}
if (detectCollision(bullet1, player1)){
    deathSound.play();
    player1.x = 30;
    player1.y = 250;
    bullet1.velocityX = 0;
    bullet1.x = 5000;
    player2.points++;
}
if (detectCollision(bullet2, player2)){
    deathSound.play();
    player2.x = 820;
    player2.y = 250;
    bullet2.velocityX = 0;
    bullet2.x = 5000;
    player1.points++;
}
if (detectCollision(bullet2, player1)){
    deathSound.play();
    player1.x = 30;
    player1.y = 250;
    bullet2.velocityX = 0;
    bullet2.x = 5000;
    player2.points++;
}

}
function drawPlayers(){
    context.clearRect(0, 0, board.width, board.height);
    context.fillStyle = "lightblue";
    player1.x += player1.velocityX;
    player1.y += player1.velocityY;
    context.fillRect(player1.x, player1.y, player1.width, player1.height);

    context.fillStyle = "red";
    player2.x += player2.velocityX;
    player2.y += player2.velocityY;
    context.fillRect(player2.x, player2.y, player2.width, player2.height);
}


function keyup(e){
    if (e.code == "ArrowUp" && player1.velocityY != 2){
        player1.velocityY = 0;
    }
    if (e.code == "ArrowDown" && player1.velocityY != -2){
        player1.velocityY = 0;
    }
    if (e.code == "ArrowRight" && player1.velocityX != -2){
        player1.velocityX = 0;
    }
    if (e.code == "ArrowLeft" && player1.velocityX != 2){
        player1.velocityX = 0;
    }

    if (e.code == "KeyW" && player2.velocityY != 2){
        player2.velocityY = 0;
    }
    if (e.code == "KeyS" && player2.velocityY != -2){
        player2.velocityY = 0;
    }
    if (e.code == "KeyD" && player2.velocityX != -2){
        player2.velocityX = 0;
    }
    if (e.code == "KeyA" && player2.velocityX != 2){
        player2.velocityX = 0;
    }
}

function keydown(e){

    //p1
    if (e.code == "ArrowUp"){
        player1.velocityY = -2;
    }
    if (e.code == "ArrowDown"){
        player1.velocityY = 2;
    }
    if (e.code == "ArrowRight"){
        player1.velocityX = 2;
    }
    if (e.code == "ArrowLeft"){
        player1.velocityX = -2;
    }

    //p2
    if (e.code == "KeyW"){
        player2.velocityY = -2;
    }
    if (e.code == "KeyS"){
        player2.velocityY = 2;
    }
    if (e.code == "KeyD"){
        player2.velocityX = 2;
    }
    if (e.code == "KeyA"){
        player2.velocityX = -2;
    }



    var xspeed = 4;
    
    //player1shoot
    if (e.code == "Enter" && player1.velocityX == 2 && player1.velocityY == 2){
        bullet1.x = player1.x+50;
        bullet1.y = player1.y+70;
        shotbulletSound.play();
        bullet1.velocityX = xspeed;
        bullet1.velocityY = xspeed;
    }
    if (e.code == "Enter" && player1.velocityX == 2 && player1.velocityY == -2){
        bullet1.x = player1.x+50;
        bullet1.y = player1.y-50;
        shotbulletSound.play();
        bullet1.velocityX = xspeed;
        bullet1.velocityY = -xspeed;
    }
    if (e.code == "Enter" && player1.velocityX == 2 && player1.velocityY == 0){
        bullet1.x = player1.x+55;
        bullet1.y = player1.y;
        shotbulletSound.play();
        bullet1.velocityX = xspeed;
        bullet1.velocityY = 0;
    }
    if (e.code == "Enter" && player1.velocityX == -2 && player1.velocityY == 0){
        bullet1.x = player1.x-50;
        bullet1.y = player1.y;
        shotbulletSound.play();
        bullet1.velocityX = -xspeed;
        bullet1.velocityY = 0;
    }
    if (e.code == "Enter" && player1.velocityX == -2 && player1.velocityY == -2){
        bullet1.x = player1.x-50;
        bullet1.y = player1.y-50;
        shotbulletSound.play();
        bullet1.velocityX = -xspeed;
        bullet1.velocityY = -xspeed;
    }
    if (e.code == "Enter" && player1.velocityX == 0 && player1.velocityY == -2){
        bullet1.x = player1.x;
        bullet1.y = player1.y-20;
        shotbulletSound.play();
        bullet1.velocityX = xspeed;
        bullet1.velocityY = -xspeed;
    }
    if (e.code == "Enter" && player1.velocityX == 0 && player1.velocityY == -2){
        bullet1.x = player1.x;
        bullet1.y = player1.y-20;
        shotbulletSound.play();
        bullet1.velocityX = 0;
        bullet1.velocityY = -xspeed;
    }
    if (e.code == "Enter" && player1.velocityX == 0 && player1.velocityY == 2){
        bullet1.x = player1.x;
        bullet1.y = player1.y+80;
        shotbulletSound.play();
        bullet1.velocityX = 0;
        bullet1.velocityY = xspeed;
    }
    if (e.code == "Enter" && player1.velocityX == -2 && player1.velocityY == 2){
        bullet1.x = player1.x;
        bullet1.y = player1.y+80;
        shotbulletSound.play();
        bullet1.velocityX = -xspeed;
        bullet1.velocityY = xspeed;
    }

    //player2shoot
    if (e.code == "Space" && player2.velocityX == 2 && player2.velocityY == 2){
        bullet2.x = player2.x+50;
        bullet2.y = player2.y+70;
        shotbulletSound.play();
        bullet2.velocityX = xspeed;
        bullet2.velocityY = xspeed;
    }
    if (e.code == "Space" && player2.velocityX == 2 && player2.velocityY == -2){
        bullet2.x = player2.x+50;
        bullet2.y = player2.y-50;
        shotbulletSound.play();
        bullet2.velocityX = xspeed;
        bullet2.velocityY = -xspeed;
    }
    if (e.code == "Space" && player2.velocityX == 2 && player2.velocityY == 0){
        bullet2.x = player2.x+55;
        bullet2.y = player2.y;
        shotbulletSound.play();
        bullet2.velocityX = xspeed;
        bullet2.velocityY = 0;
    }
    if (e.code == "Space" && player2.velocityX == -2 && player2.velocityY == 0){
        bullet2.x = player2.x-50;
        bullet2.y = player2.y;
        shotbulletSound.play();
        bullet2.velocityX = -xspeed;
        bullet2.velocityY = 0;
    }
    if (e.code == "Space" && player2.velocityX == -2 && player2.velocityY == -2){
        bullet2.x = player2.x-50;
        bullet2.y = player2.y-50;
        shotbulletSound.play();
        bullet2.velocityX = -xspeed;
        bullet2.velocityY = -xspeed;
    }
    if (e.code == "Space" && player2.velocityX == 0 && player2.velocityY == -2){
        bullet2.x = player2.x;
        bullet2.y = player2.y-20;
        shotbulletSound.play();
        bullet2.velocityX = 0;
        bullet2.velocityY = -xspeed;
    }
    if (e.code == "Space" && player2.velocityX == 0 && player2.velocityY == -2){
        bullet2.x = player2.x;
        bullet2.y = player2.y-20;
        shotbulletSound.play();
        bullet2.velocityX = 0;
        bullet2.velocityY = -xspeed;
    }
    if (e.code == "Space" && player2.velocityX == 0 && player2.velocityY == 2){
        bullet2.x = player2.x;
        bullet2.y = player2.y+80;
        shotbulletSound.play();
        bullet2.velocityX = 0;
        bullet2.velocityY = xspeed;
    }
    if (e.code == "Space" && player2.velocityX == -2 && player2.velocityY == 2){
        bullet2.x = player2.x;
        bullet2.y = player2.y+80;
        shotbulletSound.play();
        bullet2.velocityX = -xspeed;
        bullet2.velocityY = xspeed;
    }
}
function detectCollision(a, b){
    return a.x < b.x + b.width &&
           a.x + a.width > b.x && // for detecting square collisions
           a.y < b.y + b.height &&
           a.y + a.height > b.y;
}