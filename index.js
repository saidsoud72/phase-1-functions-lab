// Code your solution in this file!
let headqBlock = 42;

function distanceFromHqInBlocks(blocks){
    if (blocks > 42){
        return blocks - headqBlock;
    }else {
        return headqBlock - blocks;
    }
}

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks)*264;
}

function distanceTravelledInFeet(blocks,blocksf) {
    const distanceTravelledInFeet = (distanceFromHqInFeet(blocks) - distanceFromHqInFeet(blocksf))
    if ( distanceTravelledInFeet >= 0) {
        return distanceTravelledInFeet;
    } else {
        return ( distanceTravelledInFeet * -1);
    }
  }

  function calculatesFarePrice(start, end){
    let distance = distanceTravelledInFeet(start, end);
    if (distance<= 400){
      return 0;
    }
    if (distance > 400 && distance <= 2000){
      return (distance-400)* 0.02;
    }
    else if(distance > 2000 && distance <= 2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    };
  }