function bmi(weight, height) {
    const i = weight / (height*height)
      if(i <= 18.5){
        return "Underweight"
      }
      else if (i <= 25.0){
        return "Normal"
    }
      else if (i <= 30.0){
        return "Overweight"
    }
      else
        return 'Obese'
     }; 