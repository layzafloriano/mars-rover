// Rover Object Goes Here
// ======================
const roverData = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [],
};

// ======================
function turnLeft() {
  switch (roverData.direction) {
    case 'N':
      roverData.direction = 'W';
      break;
    case 'S':
      roverData.direction = 'E';
      break;
    case 'E':
      roverData.direction = 'N';
      break;
    case 'W':
      roverData.direction = 'S';
      break;
    default:
      break;
  }
  /* console.log(rover.direction); */
}

function turnRight() {
  /*  console.log('turnRight was called!'); */
  switch (roverData.direction) {
    case 'N':
      roverData.direction = 'E';
      break;
    case 'S':
      roverData.direction = 'W';
      break;
    case 'E':
      roverData.direction = 'S';
      break;
    case 'W':
      roverData.direction = 'N';
      break;
    default:
      break;
  }
  /* console.log(rover.direction); */
}

function moveForward() {
  switch (roverData.direction) {
    case 'N':
      roverData.y -= 1;
      break;
    case 'S':
      roverData.y += 1;
      break;
    case 'E':
      roverData.x += 1;
      break;
    case 'W':
      roverData.x -= 1;
      break;
    default:
      break;
  }
  /* console.log(roverData.x + roverData.y); */
}

function setTracking() {
  roverData.travelLog.push({
    x: roverData.x,
    y: roverData.y,
  });
}

function printTracking() {
  console.log('TRACKING:');
  for (let i = 0; i < roverData.travelLog.length; i += 1) {
    console.log(`(${roverData.travelLog[i].x}, ${roverData.travelLog[i].y})`);
  }
}

function commandsRover() {
  const command = prompt('Set the commands: ');
  console.log('command', command);
  for (let i = 0; i < command.length; i += 1) {
    switch (command[i]) {
      case 'f':
        moveForward();
        break;
      case 'l':
        turnLeft();
        break;
      case 'r':
        turnRight();
        break;
      default:
        break;
    }
    setTracking();
  }
  printTracking();
}


commandsRover();
