// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

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
      }else if(num === '5'){
        let number =  scores[num] 
        if(number < 3) score.push(50 * number)
        else if(number === 3) score.push(500)
        else if(number > 3){
            let result = Math.floor((number / 3)) 
            number = number - (result * 3)
            score.push(500 * result)
            score.push (50 * number) 
        }   
      }else if(num === '2' && (scores[num] == 3 || scores[num] > 3 )){
        let number =  scores[num] 
            if(number === 3) score.push(200)
            else if(number > 3){
            let result = Math.floor((number / 3))
            score.push(200 * result)
        }
      }else if(num === '3' && (scores[num] == 3 || scores[num] > 3 )){
         let number =  scores[num] 
            if(number === 3) score.push(300)
            else if(number > 3){
            let result = Math.floor((number / 3))
            score.push(300 * result)
        }
      }else if(num === '4' && (scores[num] == 3 || scores[num] > 3 )){
        let number =  scores[num] 
            if(number === 3) score.push(400)
            else if(number > 3){
            let result = Math.floor((number / 3))
            score.push(400 * result)
        }
      }else if(num === '6' && (scores[num] == 3 || scores[num] > 3 )){
        let number =  scores[num] 
            if(number === 3) score.push(600)
            else if(number > 3){
            let result = Math.floor((number / 3))
            score.push(600 * result)
        }
      } 
    }
    
    return score.reduce((acc,c)=> acc + c, 0)
  }

  score([5, 5, 5, 3, 5])