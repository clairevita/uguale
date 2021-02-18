// This is the curriculum script. All difficulty modification and number generation is sourced from these exports

module.exports = {
    equationWin(score){
        console.log("Win");
        let newScore = score + 2;
        let numberOne = Math.ceil((1+Math.random())*newScore);
        let numberTwo = Math.ceil((1+Math.random())*newScore);
        return [newScore, numberOne, numberTwo]
    },
    
    equationLose(score){
        console.log("Lose");
        let newScore = score - 1;
        let numberOne = Math.ceil(Math.random()*newScore);
        let numberTwo = Math.ceil(Math.random()*newScore);
        return [newScore, numberOne, numberTwo]
    },
    
    equationSkip(score){
        console.log("Skip")
        let newScore = score;
        let numberOne = Math.ceil(Math.random()*newScore);
        let numberTwo = Math.ceil(Math.random()*newScore);
        return [newScore, numberOne, numberTwo]
    }
};


