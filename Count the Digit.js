function nbDig(n, d) {
    let arrayOfSquares = [];
  
    for (let i = 0; i <= n; i++) {
      let squaredNumber = i * i;
      arrayOfSquares.push(squaredNumber);
    }
  
    let coundOfD = 0;
  
    let newArry = arrayOfSquares.join("").split("");
  
    newArry.map((digit) => {
      if (digit === d.toString()) {
        return (coundOfD += 1);
      }
      return;
    });
  
    return coundOfD;
  }