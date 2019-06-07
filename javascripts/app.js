// Rover Object Goes Here
// ======================
const roverS = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [],
};

// ======================
function turnLeft(rover) {
  // eslint-disable-next-line default-case
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'W':
      rover.direction = 'S'
      break;
  }
  /* console.log(rover.direction); */
}

function turnRight(rover) {
  /*  console.log('turnRight was called!'); */
  // eslint-disable-next-line default-case
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
  /* console.log(rover.direction); */
}

function moveForward(rover) {
  // eslint-disable-next-line default-case
  switch (rover.direction) {
    case 'N':
      y -= 1;
      break;
    case 'S':
      y -= 1;
      break;
    case 'E':
      x += 1;
      break;
    case 'W':
      x -= 1;
      break;
  }
  console.log(rover.x + rover.y);
}

function commandsRover() {
  const command = prompt('Set the commands: ');
  console.log(command);
  for (let i = 0; i < command.length; i += 1) {
    // eslint-disable-next-line default-case
    switch (command[i]) {
      case 'f':
        moveForward(roverS);
        break;
      case 'l':
        turnLeft(roverS);
        break;
      case 'r':
        turnRight(roverS);
        break;
    }
  }
}

commandsRover();
