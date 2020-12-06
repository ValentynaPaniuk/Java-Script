console.log("Works!") //Вивести текст
//динамічна типізація
// let age = 20; //let - шостий стандарт; var - 5 стандарт
// console.log("Age = ", age);
// console.log(typeof age);
// age="Bill";
// console.log("Name = ", age);
// console.log(typeof age);

// console.warn("!WARNING!");
// console.error("!ERROR!");

/*Розробити програму, що переводить значення температури в градусах по Цельсію в температуру по Фаренгейту та навпаки. 
Співвідношення між температурами визначається формулою: TF = TC *1.8 +32. 
Діалог с користувачем реалізувати через систему меню. */


let a = parseInt(prompt("Exercise 1\nEnter temperature: "));
let farengate = 1;
farengate = a*1.8+32;
console.log("Temperature in graduce: ", a, "temperature in farengate: ", farengate);

/*Дано символ. Визначити чи символ є цифрою. */

let symbol = (prompt("Exercise 2\nEnter symbol: "));
if (parseInt(symbol))
{
    console.log("Symbol", symbol," is number");
}
else
{
    console.log("Symbol", symbol," is text");
}

/*Написати програму яка пропонує ввести три оцінки з клавіатури (від 2 до 5) 
підраховує середній бал. 
Якщо середній бал від 2 до 2.5 виводить BAD, 
                 до 3.3 SO-SO, 
                 до 4.2 GOOD, 
                 5.0 EXCELLENT*/

let x = parseInt(prompt("Exercise 3\nEnter mart one: "));
let y = parseInt(prompt("Enter mart two: "));
let z = parseInt(prompt("Enter mart tree: "));

let avarage = (x+y+z)/3;

console.log("Avarage => ", avarage);
if (avarage>=2 && avarage<=2.5)
{
    console.log("Level of training: BAD");
}
else if(avarage>2.5 && avarage<=3.3)
{
    console.log("Level of training: SO_SO");
}
else if(avarage>3.3 && avarage<=4.2)
{
    console.log("Level of training: NOT BED");
}
else if(avarage>4.2 && avarage<4.9)
{
    console.log("Level of training: VERY GOOD");
}
else if(avarage==5)
{
    console.log("Level of training: Exellent");
}



/*SWITCH


Написати повноцінний калькулятор. 
Введення цифр та вибір математичної операції виконати в діалоговому стилі 
(запитати у користувача, вивести меню). 
У програмі передбачити уникнення помилок (ділення на нуль і т.д.). 
Фантазія та «дизайн» меню – ціниться та вітається!!! */

let k = parseInt(prompt("Exercise 4\nCALCULATORE\nEnter number one: "));
console.log("");
let action = (prompt("Action: + ->addition, - ->subtraction, * -> multiplication, / -> division"));
let l = parseInt(prompt("Enter number two: "));
switch(action)
{
    
case("+"):{
    console.log(k+l);
break;
    }
case("-"):{
    console.log(k-l);
break;}
case("*"):{
    console.log(k*l);
break;}
case("/"):{
    if (l==0)
    console.log("");
    else
    console.log(k/l);
break;
}
default:
    console.log(`Enter the correct action`);

}

