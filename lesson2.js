////////////////////////////
//1. Почему код даёт именно такие результаты?
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 Сначало идет сложение, потом присвоение
d = b++; alert(d);           // 1 Сначало идет присвоение, затем сложение
c = (2 + ++a); alert(c);      // 5 Сначало увеличивается а, затем происходит сложение
d = (2 + b++); alert(d);      // 4 сначало происходит сложение 2 и b, а затем инкримент b
alert(a);                    // 3 был дважды инкримент выше
alert(b);                    // 3 был дважды инкремент выше

///////////////////////////
//2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);           // 5  = 2*2+1

//////////////////////////////////////////////
//3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
var a = 1, b = 1;
if ((a > 0) && (b > 0)) {
    console.log(a - b)
}
else if ((a < 0) && (b < 0)) { console.log(a * b) }
else { console.log(a + b) }

////////////////////////////////////////////
//4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15
var a = 1
switch (a) {
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
        break;
}

//////////////////////////////////////////
//5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. 
function sum(a, b) {
    return (a + b)
}
function minus(a, b) {
    return (a - b)
}
function proizv(a, b) {
    return (a * b)
}
function divide(a, b) {
    return (a / b)
}
var a = 1, b = 1;
console.log(sum(a, b));
console.log(minus(a, b));
console.log(proizv(a, b));
console.log(divide(a, b));


/////////////////////////////////////////////////////
//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, 
//operation – строка с названием операции. 
//В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch). 

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "sum":
            return (arg1 + arg2);

        case "minus":
            return (arg1 - arg2);
        case "proizv":
            return (arg1 * arg2);
        case "divide":
            return (arg1 / arg2);
    }

}

var a = 3, b = 4;
console.log(mathOperation(a, b, "sum"));
console.log(mathOperation(a, b, "minus"));
console.log(mathOperation(a, b, "proizv"));
console.log(mathOperation(a, b, "divide"));

///////////////////////////////////////////////////////////
//7. *Сравнить null и 0. Попробуйте объяснить результат.
if (null = 0) { console.log("ravni"); }
else { console.log("ne ravni"); }
//ne ravni
// 0 - это значение тектовое или числовое. Нулл - это отсутствие значение, оно не имеет осмысленного типа

////////////////////////////////////
//8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
function power(val, pow) {
    if (pow <= 1)
        return val
    power(val * val, (pow - 1))
}
