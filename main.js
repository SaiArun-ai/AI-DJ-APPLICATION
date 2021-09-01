var song = "";
var leftX;
var leftY;
var rightX;
var rightY;
function preset(){
    song = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(500,450);
    canvas.position(525,150);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,pose);
    poseNet.on("pose",gotPose);
}
function pose(){
    console.log("I Work");
}
function draw(){
    image(video,0,0,0,0);
}
function Play(){
    console.log("Works");
    song.play();
    song.rate(1);
    song.setVolume(1);
}
function gotPose(error,result){
    if(error){
        //console.error(error);
    }else{
        //console.log(result);
        leftX = result[0].pose.leftWrist.x;
        leftY = result[0].pose.leftWrist.y;
        rightX = result[0].pose.rightWrist.x;
        rightY = result[0].pose.rightWrist.y;
    }
}
