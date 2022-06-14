function countSheeps(arrayOfSheep) {
    let numberOfSheep = 0
    arrayOfSheep.forEach(sheep => sheep ? numberOfSheep++ : false)
    return numberOfSheep
  }