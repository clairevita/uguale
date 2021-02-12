// This is the curriculum script. All difficulty modification and number generation is sourced from these exports
module.exports = {
    equationWin(score){
        console.log(score + "Payload delivered")
        let newScore = score + 2;
        let numberOne = Math.ceil(Math.random()*newScore);
        let numberTwo = Math.ceil(Math.random()*newScore);
        return [newScore, numberOne, numberTwo]
    },
    
    equationLose(score){
        let newScore = score -3;
        let numberOne = Math.ceil(Math.random()*newScore);
        let numberTwo = Math.ceil(Math.random()*newScore);
        return [newScore, numberOne, numberTwo]
    },
    
    equationSkip(score){
        let newScore = score--;
        let numberOne = Math.ceil(Math.random()*newScore);
        let numberTwo = Math.ceil(Math.random()*newScore);
        return [newScore, numberOne, numberTwo]
    }
};


