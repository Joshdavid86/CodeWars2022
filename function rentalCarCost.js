function rentalCarCost(d) {
    const dRate = d * 40
    if(d < 3){
      return dRate
    }else if(d < 7){
      return dRate - 20
    }else(d > 7)
      return dRate - 50
  }