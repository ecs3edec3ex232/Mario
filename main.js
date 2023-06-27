function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet=ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded(){
	console.log("model loaded");
}

function gotPoses(results){
 if(results[0].length > 0){
	 noseX = results[0].pose.nose.x;
	 noseY = results[0].pose.nose.y;
	 console.log("nose X ="+noseX+"nose Y ="+noseY);
 }
}

function draw() {
	game()
}






