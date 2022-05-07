function findDifference(a, b) {
    const volA = a[0] * a[1] * a[2]
    const volB = b[0] * b[1] * b[2]
      return Math.abs(volA - volB)
    }