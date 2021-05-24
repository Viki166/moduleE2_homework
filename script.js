//Задание 1
let value = prompt("Введите число: ");
value= + value;
if (Number.isInteger(value) && value%2 == 0) {
console.log(`Число ${value} четное`)
}else if (Number.isInteger(value)) {
    console.log(`Число ${value} нечётное`)
}else {
   console.log("Упс, кажется вы ошиблись")
} ;

// Задание 2
let x = 'True';
value = typeof(x);
switch(value) {
case "string":
    console.log("X - строка")
    break;
case "number":
    console.log("X - число")
    break;
case "boolean":
    console.log("X - логический тип")
    break;
default:
    console.log("Тип X не определен")
};

//Задание 3
let str = "Hello";
let value = "";
for (i = str.length-1; i>=0; i--){
    value += str[i]
};
console.log(value);

//Задание 4
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min 
};
console.log(getRandomInt(0,101));

//Задание 5
let arr = ['apple', 'orange', 'banana', 'cherry', 'plum'];
console.log(`Длина массива - ${arr.length}`);
arr.forEach(function(item, index, arr){
    console.log(item)
});

//Задание 6
let arr = ['1', '1', 1, '1'];
for (i = 0; i < arr.length; i++){
    for (j = i+1; j< arr.length; j++){
        value = arr[i] === arr[j]? 'True':'False'
    };
};
console.log(value);

//Задание 7
let arr = [0,'Null', 'Undefined', 'NaN', ,2,3,'4','5', 0, 1 ,9 ];
let evenNumCounter = 0;
let oddCounter = 0;
let zeroElementCounter = 0;
for (i = 0; i < arr.length; i++){
    if (Number.isInteger(arr[i]) && arr[i] %2 ==0 && arr[i] != 0){
        evenNumCounter += 1 
    }else if (arr[i] == 0) {
        zeroElementCounter +=1
    } else if (Number.isInteger(arr[i])){
        oddCounter +=1
        };
};
console.log('Количество четных чисел - ' + evenNumCounter);
console.log('Количество нечетных чисел - ' + oddCounter);
console.log('Количество нулей - ' + zeroElementCounter);

// //Задание 8
let mass = new Map([
                [1, 'one'],
                [2, 'two'],
                [3, 'three'],
                 ]);
for (let [name, value] of mass) {
     console.log(`Ключ - ${name}, значение - ${value} `) 
}


