document.write ("Вивести на сторінку в один рядок через кому числа від 10 до 20.");
document.write ("<br>");


for (let i=10; i<=20; i++ ) {
    document.write (str =i +", ")
};

document.write ("<br>");

document.write ("Вивести квадрати чисел від 10 до 20.")
document.write ("<br>");


for (let j=10; j<=20; j++ ) {
    document.write (str =j*j + ", ")
};

document.write ("<br>");



document.write ("Вивести таблицю множення на 7.");
document.write ("<br>");


for (let j = 7; j <= 7; j++) {  

    for (let i = 1; i <=7; i++)  { 
    document.write(i + "*" + j + "=" +(i*j) + "<br>");  
    }
} 

document.write ("<br>");



document.write ("Знайти суму всіх цілих чисел від 1 до 15.");
document.write ("<br>");

let sum = 0;

for (let i=1; i<=15; i++) {
    sum += i; 
}
document.write(sum);

document.write ("<br>");

document.write ("Знайти добуток усіх цілих чисел від 15 до 35.");
document.write ("<br>");

let mult=1;

for (let i= 15; i <=35; i++) {
   mult *=i;
    
}
document.write(mult);

document.write ("<br>");

document.write ("Знайти середнє арифметичне всіх цілих чисел від 1 до 500.");
document.write ("<br>");

let n=500;
let s=0;

for(let i=1; i<=n; i++) {
    s+=i 
}
s=s/n
document.write(s);

document.write ("<br>");

document.write ("Вивести суму лише парних чисел в діапазоні від 30 до 80.");
document.write ("<br>");

let sum1=0;

for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
    sum1 +=i;
    };
}

document.write(sum1);

document.write ("<br>");

document.write ("Вивести всі числа в діапазоні від 100 до 200 кратні 3.");
document.write ("<br>");

for (let i = 100; i <= 200; i++) {
    if (i % 3 == 0) {
     document.write(i + "  ");
    };
}

document.write ("<br>");

document.write ("Дано натуральне число. Знайти та вивести на сторінку всі його дільники.");
document.write ("<br>");

let g=7;

nextPrime:
for (let i=2; i<=g; i++) {

    for(let j=2; j<i; j++) {
     if (i % j == 0) continue nextPrime;   
    }
    document.write (i + "  ")
}
document.write ("<br>");


document.write ("Надрукувати повну таблицю множення від 1 до 10.");
document.write ("<br>");


for (let j = 1; j <= 10; j++){  
    
    for (let i = 1; i <=10; i++)  
    { 
    document.write(i + "*" + j + "=" +(i*j) + "<br>"); 
    }  
}

