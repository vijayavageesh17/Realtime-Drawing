noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;


function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(550,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function draw(){
    background('orange');
    document.getElementById("squareside").innerHTML="The Height and Width of the square is "+difference+"px";
    fill('red');
    stroke('green');
    square(noseX,noseY,difference);
}

function modelLoaded(){
    console.log("PoseNet is initialized!");
}

function gotPoses(results){
    if(results.length>0){
       console.log(results);
          noseX=results[0].pose.nose.x;
          noseY=results[0].pose.nose.y;
          console.log("NoseX = "+noseX+"NoseY = "+noseY);
          leftWristX=results[0].pose.leftWrist.x;
          rightWristX=results[0].pose.rightWrist.x;
          difference=leftWristX-rightWristX;
          console.log("LeftWristX = "+leftWristX+"RightWristX = "+rightWristX+"Difference = "+difference);

    }
}