let stud = 1
for(stud = 1; stud <= 10; stud++){
    
    if(stud % 2 !== 0){
        console.log('Count' + stud);
    }
    
}

while (stud<=15 ) {
    if(stud % 2 !== 0){
        console.log('Count While' + stud);   
    }
    stud++
    //console.log(stud);
}
//16
do {
    //console.log(stud);  
    if(stud % 2 !== 0){
        console.log('Count Do-While' + stud);   
    }
    stud++
} while (stud<=20 ){
    
}

const person = {
    Fname : 'Hemanth',
    Lname : 'Rajaa',
    Gender: 'Male',
    colors: ['red', 'blue', 'green']
};
for(let details in person){
    console.log(details, person[details]);
}
for(let detail of stud){
    console.log(detail);
}
