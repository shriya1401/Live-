status="";
objects=[];

function preload() {
  
}

function setup(){
canvas=createCanvas(350,350);
canvas.center();
video=createCapture(VIDEO);
video.hide();
video.size(350,350);
//code for importing the ssd model
objectDetector=ml5.objectDetector('cocossd',modelLoaded)


}

function getResults(error,results){
    
if (error) {
    console.log(error);
}
else{
    console.log(results);

    objects=results;
}


}

function modelLoaded(){
    console.log('Hey Shriya!!!! Your model is working now! :D')
    document.getElementById('status').innerHTML='Status:Detecting Objects!! :D'
    status=true
}

function draw() {
//code for drawing the image over the canvas
image(video,0,0,350,350);
//text(text to be typed on the canvas,x,y)
//rect(x,y,width,height)

if (status !="") {
    //code for identification....
objectDetector.detect(video,getResults);
    for (let i = 0; i < objects.length; i++) {
       document.getElementById("status").innerHTML='Status:Objects Detected! :)'
       document.getElementById("number").innerHTML="Number  of Objects Detected : " + objects.length
      
       r=random(255);
       g=random(255);
       b=random(255);
       object_name=objects[i].label
      width=objects[i].width;
      height=objects[i].height;
      x=objects[i].x; 
      y=objects[i].y;
      accuracy=floor(objects[i].confidence*100)+"%"; 
      fill(r,g,b);
      text(object_name+" "+accuracy,x,y);
      textSize(15);
      noFill();
      stroke(r,g,b);
      rect(x,y,width,height)

    }  
}

}