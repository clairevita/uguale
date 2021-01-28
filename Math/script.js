$(document).ready(function () {

    let board = $(".board");
    const submit = $(".submit");
    let answ = $("input").val();
    let difficulty = 2;
    // let difficulty = Math.exp(3);
    let score = 0;
    let random1 = Math.floor(Math.random() * (10 * difficulty));
    let random2 = Math.floor(Math.random() * (10 * difficulty));
    let add;
    // let questions = Math.floor(Math.exp(difficulty));
    let questions = difficulty * 20;

    console.log(board.text());
    console.log(questions);
 
    function math () {
            
            random1 = Math.floor(Math.random() * (10 * difficulty));
            random2 = Math.floor(Math.random() * (10 * difficulty));
            board.text(random1 + "+" + random2)
            add = random1 + random2;
            console.log(add)
    }

    $(".submit").click(function () {
        $(".board").empty();
        math();
        answ = $("input").val();
        console.log(answ)

        if (answ === add) {
            score += 1;
            console.log(score);
        } 

        if (score === 20) {
            difficulty += 1;
        }
    })

    // function getRandomIntInclusive(min, max) {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min + 1) + min); 
    //     }
});