var cities;
var rowCount;

function preload() {
  cities = loadTable("cities.csv", "header")
}

function setup() {
  createCanvas(640, 480);

  rowCount = cities.getRowCount();
  background(0);
  fill(255);
  noStroke();

}

function draw() {
  scale(1.9);

  translate(width/2-250, height/2+250);
  console.log(mouseX);
  rotate(radians(270));

  for(var i = 0; i < rowCount; i++ ) {
    var latitude = cities.getNum(i, "lat");
    var longitude = cities.getNum(i, "lng");
    setXY(latitude, longitude);
  }
}

function setXY(lat, lng) {
  // console.log(lat, lng);
  var x = map(lat, -90, 90, 0, height);
  var y = map(lng, -180, 180, 0, width);
  ellipse(x, y, 0.25);
}
