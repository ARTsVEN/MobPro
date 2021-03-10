//ARRAY EXERCISES
let people = ["Greg", "Mary", "Devon", "James"];

//NO. 1
// for (let i = 0; i < people.length; ++i) {
//     console.log(people[i])
// }

//NO. 2
// people.forEach(function(item){
//     console.log(item);
// });

//NO. 3
// people.splice(0,1);
// console.log(people);

//NO. 4
// people.splice(1,1);
// console.log(people);

//NO. 5
// console.log("Matt,"+people);

//NO. 6
// console.log(people+","+"Arthur");

//NO. 7 
// for(let i=0;i<people.length;i++){
//     console.log(people[i])

//     if(people[i] == 'Mary'){
//         break;
//     }
// }

//NO. 8
// let slices1= people.slice(0,1);
// let slices2= people.slice(2,4);
// console.log(slices1+","+slices2);

//NO. 9
// people.splice(2,1,"Elizabeth", "Artie")
// console.log(people);

//NO. 10
// let withBob=people.concat("bob");
// console.log(withBob);





//OBJEXT EXERCISES
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//NO. 1
// console.log(programming.languages+",Go");

//NO. 2
// programming["difficulty"]=7;
// console.log(programming);

//NO. 3
// delete programming["jokes"];
// delete programming.jokes;
// console.log(programming);

//NO. 4
// programming.isFun=(true);
// console.log(programming);

//NO. 5
// programming.languages.map((function(idx,isi){
//     console.log(isi + ' - ' + idx)
// }))