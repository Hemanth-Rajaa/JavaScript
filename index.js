//1 create variables using let & const
let name = "Hemanth";
        
const school = "SFMHS";


//2 create function which should return string
function greet(value, value1){
    return "Welcome "+value+" "+value1;
}
console.log(greet( name , school));

//3 store personal details in object
let employee = {
    name:'Hemanth', 
    age:25, 
    email:'hemanthrockz.rajaa@gmail.com', 
    phone:7401111426
};


console.log(employee);

//4 store an electronic items in an array and print it
let electronicItems = ['monitor','keyboard','mouse','CPU','CD','pendrive'];
console.log('Printing electronic items' + '-' + electronicItems);
//console.log(electronicItems);
