export default {
     equationWin(score){
        let newScore = score + 2;
        let numberOne = Math.floor(Math.random()*newScore);
        let numberTwo = Math.floor(Math.random()*newScore);
    },
    
     equationLose(score){
        let newScore = score -3;
        let numberOne = Math.floor(Math.random()*newScore);
        let numberTwo = Math.floor(Math.random()*newScore);
    },
    
     equationSkip(score){
        let newScore = score--;
        let numberOne = Math.floor(Math.random()*newScore);
        let numberTwo = Math.floor(Math.random()*newScore);
        return [newScore, numberOne, numberTwo]
    }
}
