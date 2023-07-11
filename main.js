console.log ("Вивести на сторінку в один рядок через кому числа від 10 до 20.");

let result = "";

for (let i = 10; i <= 20; i++ ) {

    if (i === 20) {
        result += i; 
    } else  {
        result += i + ", " ;
    }

}

console.log (result);

console.log ("Вивести квадрати чисел від 10 до 20.")

result = "";

for (let i=10; i <=20; i++) {

    if (i === 20) {
        result += i*i; 
    } else  {
        result += i*i + ", " ;
    }
}

console.log (result);

console.log ("Вивести таблицю множення на 7.");


for (let i = 0; i <= 10; i++ ) {

    console.log ( i + " * 7 = " + i *7);
}

console.log ("Знайти суму всіх цілих чисел від 1 до 15.")

result = 0;

for (let i = 1; i <= 15; i++ ) {

    result += i;

}

console.log (result);

console.log ("Знайти добуток усіх цілих чисел від 15 до 35.")

result = 1n;

for (let i=15n; i<= 35n; i++) {

    result *= i;
}

console.log (result);


console.log ("Знайти середнє арифметичне всіх цілих чисел від 1 до 500.");

const k = 500;
result = 0;

for (let i = 0; i <= k; i++) {

    result +=i;
}

console.log (result / k);

console.log ("Вивести суму лише парних чисел в діапазоні від 30 до 80.")

result = 0;

for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {

        result +=i;
    }

}

console.log (result);

console.log ("Вивести всі числа в діапазоні від 100 до 200 кратні 3.")

result = "";

for (let i = 100; i<= 200; i++) {

    if (i % 3 === 0) {

        result += i + ", ";
    }

}

console.log (result);

console.log (`Дано натуральне число. Знайти та вивести на сторінку всі його дільники. 
Визначити кількість його парних дільників.
Знайти суму його парних дільників.`);

const n = 18;
result = "";
let counter = 0;
let sum = 0;


for (let i = 1; i <= n; i++) {

    if (n % i ===0 ) {

        result += i + ",";

        if (i % 2 === 0) {

            counter += 1;
            sum += i;
        }
    }



}

console.log (result, counter, sum);

console.log ("Надрукувати повну таблицю множення від 1 до 10.");

for (let i = 1; i <= 10; i++) {

    for (let j = 1; j <= 10; j++) {

        console.log (i +" * " + j + " = " + i * j)
    }
}

