function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(550,160);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}
function draw(){
    background('#9966ff');
}
function modelLoaded(){
    console.log("Posenet is Initialized!");
}
function gotPoses(){
    if(results.length > 0){
        console.log(results);
    }
}