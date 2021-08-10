var song = "";
function preset(){
    song = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(500,450);
    canvas.position(525,150);
    song.play();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,0,0);
}
function Play(){

}