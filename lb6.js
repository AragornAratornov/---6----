var num_1 = prompt('Введите первое число: ', 0);
var num_2 = prompt('Введите второе число: ');
function f(x, y){
    if (Math.sqrt(x)==Math.abs(y)){
        console.log(`Число ${x} является квадратом числа ${y}`)
    }else{
        console.log(`Число ${x} не является квадратом числа ${y}`)
    }
}
f(num_1, num_2);