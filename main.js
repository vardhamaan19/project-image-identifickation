video="";
function preload()
{
    video=createVideo("video.mp4");
}

function setup()
{
    canvas=createCanvas(480,380);
    canvas.center();
    video.hide();
}

function start()
{
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTMl="status:detectingobjects";
}
function modelLoaded()
{
    console.log("model loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}