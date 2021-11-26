console.log("Welcome to my quiz app!! ");
console.log("     ** LEVEL-1 **      ");
console.log("##  Atleast you have to give minimum 2 correct answer for passing level-1  ##");
var readlinesync = require("readline-sync");
var mark=0;
console.log("[4,8,9,2,6]");
function level1(user){
    if (user === 2){
        console.log(" ** CONGRATULATIONS YOUR FIRST ANSWER IS CORRECT **");
        mark = mark + 1;
    }
    else if (user === "n"){
        console.log(" ** CONGRATULATIONS YOUR SECOND ANSWER IS CORRECT **");
        mark = mark + 1;

    }
    else if (user==="I"){
        console.log(" ** CONGRATULATIONS YOUR THIRD ANSWER IS CORRECT **");
        mark = mark + 1;
    }
}
level1(readlinesync.questionInt("Select a prime number from the above array :"));
level1(readlinesync.question("Is 5 a even number : y/n"));
level1(readlinesync.question("Is javascript a interpreter language or compiler-I/C"));
if (mark < 2){
    console.log(" ! GAME OVER !")
    return;
}
else{
    console.log("You passed the level-1")
    console.log("your mark is : ",mark,"/",3)
    console.log("  ** LEVEL-2 **  ")
    var mark1 = 0;
    function level2(user1){
        if (user1 === "delhi"){
            console.log(" ** CONGRATULATIONS YOUR FIRST ANSWER IS CORRECT **");
            mark1 = mark1 + 1;
        }
        else if (user1 === "rice"){
            console.log(" ** CONGRATULATIONS YOUR SECOND ANSWER IS CORRECT **");
            mark1 = mark1 + 1;
        }
        else if ( user1 === "jpur"){
            console.log(" ** CONGRATULATIONS YOUR THIRD ANSWER IS CORRECT **");
            mark1 = mark1 + 1;
        }
    }
    level2(readlinesync.question("Capital of India! : delhi/punjab"));
    level2(readlinesync.question("Main food of odisha : rice/chapati"));
    level2(readlinesync.question("PINK CITY : jpur/jajpur"));
    if (mark1 >= 2){
        console.log("your mark is : ",mark1,"/",3)
        console.log("* VERY GOOD *")
    }
    else{
        return;
    }
}