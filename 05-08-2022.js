function score( dice ) {
    let scores = {}
    let score = [0]
    
    dice.forEach(n =>{
      scores[n] = ++scores[n] || 1
    })
    
    for(let num in scores){
      if(num == '1') { 
        let number =  scores[num] 
        if(number < 3) score.push(100 * number)
        else if(number === 3) score.push(1000)
        else if(number > 3){
            let result = Math.floor((number / 3)) 
            number = number - (result * 3)
            score.push(1000 * result)
            score.push (100 * number) 
        }
      }else if(num === '5' && scores[num] == 1) score.push(50)
      else if(num === '2' && (scores[num] == 3 || scores[num] > 3 )) score.push(200)
      else if(num === '3' && (scores[num] == 3 || scores[num] > 3 )) score.push(300)
      else if(num === '4' && (scores[num] == 3 || scores[num] > 3 )) score.push(400)
      else if(num === '5' && (scores[num] == 3 || scores[num] > 3 )) score.push(500)
      else if(num === '6' && (scores[num] == 3 || scores[num] > 3 )) score.push(600)
    }
    
    return score.reduce((acc,c)=> acc + c, 0)
  }

  score([1, 1, 1, 3, 1])