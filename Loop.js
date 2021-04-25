for(var i=1; i<21; i+=2) {
    console.log(i);
}

for(var i=4; i>-3; i-=1.5) {
    console.log(i);
}

var sum = 0;
var number = 1;

while(number <= 100) {
    sum += number;
    number ++;
}
console.log(sum)

function product(x) { 
    if (x === 0)
{
    return 1;
}
    return x * product(x-1);
}
console.log(product(100));