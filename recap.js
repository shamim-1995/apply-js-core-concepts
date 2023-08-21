//1. variable.
var myName = 'khan';

//math operation: +, -, *, /
//shorthand: +=, --, *=, /=
//++, -- 

//2.Array.

var friends = ['shamim', 'abul', 'babul', 'salam', 'kalam'];
 var thirdFriend = friends[2];
 friends[3] = 'sonjoy';

 //3. conditionals.
//>, <, >=, <=, ==, ===, !=, !==
if(friends.length <2){
    console.log('you have no friends');

}
else{

}

//4.loop.

var number = 0;
while(number <= 6){
    console.log(number);
    number++;
}

for(var i = 0; i <= 10; i++){

}

//5.function.

function isMoonUp(time){
    if(time > 7){
        return true;
    }
}

//6. Objects.

var fatty = {
    height: 60,
    romanticism:'heavy',
    career:'rich'
}