//Factory functions
function  person (name){
    return{
        name,
        greeting(){
            let msg = `My name is ${this.name}`;
            console.log(msg);
        }
    };
}

let hem = person('Hemanth');
hem.greeting();

function Person (name){
    this.name = name;
    this.greeting = function(){

    }
}
let person = new Person(hem);
person.greeting();