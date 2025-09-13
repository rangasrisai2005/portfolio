

let speed = 30;
const maxSpeed = 120;
const timeHours = 96 / 60; // convert minutes to hours

// Double speed every 10 km/h until maxSpeed
while (speed < maxSpeed) {
  speed *= 2;
  if (speed > maxSpeed) {
    speed = maxSpeed;
    break;
  }
}

const distance = speed * timeHours;

console.log("Final speed:", speed, "km/h");
console.log("Distance traveled:", distance.toFixed(2), "km");
