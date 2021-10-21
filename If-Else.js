let isRaining = true;
let isCloudy = true;

if(isRaining || isCloudy){
console.log("Don't forget to take umbrella" );
}
else{
console.log("Sky is clear");
}

let time = new Date().getHours();

if (time >= 0 && time<= 13){
    console.log('Good Morning');
}
else if(time>= 13 && time <= 17){
console.log('Good Afternoon');
}
else{
    console.log('Good Evening');
}

let grade = 'A';

switch(grade){
    case 'A':
        console.log('First Class');
        break;
    case 'B':
        console.log('Second Class');
        break;
        case 'U':
            console.log('Fail');
            break;
            default:
                console.log('Unknown Grade');
                
}

