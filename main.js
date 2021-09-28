var song = "";
var leftX;
var leftY;
var rightX;
var rightY;
var leftC;
var rightC;
function preset(){
    song = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(500,500);
    canvas.position(525,150);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,pose);
    poseNet.on("pose",gotPoses);
}
function pose(){
    console.log("I Work");
}
function Play(){
    console.log("Works");
    song.play();
    song.rate(1);
    song.setVolume(1);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftC = results[0].pose.keypoints[9].score;
        leftX = results[0].pose.leftWrist.x;
        leftY = results[0].pose.leftWrist.y;
        rightX = results[0].pose.rightWrist.x;
        rightY = results[0].pose.rightWrist.y;
        rightC = results[0].pose.keypoints[10].score;
    }
}
function draw(){
    image(video,0,0,500,500);
    if(leftC > 0.00000000000000001){
        fill("#C9AE5D");
        stroke("#C9AE5D");
        circle(leftX,leftY,40);
        NleftY1 = Number(leftY);
        NleftY2 = floor(NleftY1);
        NleftY3 = NleftY2/500;
        document.getElementById("Volume").innerHTML = "Volume : " + NleftY3;
        //song.setVolume(NleftY3);
    }
    if(rightC > 0.0001){
        circle(rightX,floor(rightY),40);
        rightY1 = floor(rightY)/100;
        rightY2 = floor(rightY1);
        rightY3 = rightY2 + rightY/200;
        document.getElementById("Speed").innerHTML = "Speed: " + rightY3;
        //song.rate(rightY);
    }
}