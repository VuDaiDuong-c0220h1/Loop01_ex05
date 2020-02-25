let a = 0;
let b = 1;
let c;
let result = 0;
for (count = 0; count < 20; count++) {
    c = b;
    b = b + a;
    a = c;
    result += b;
    console.log(b , result);
}
alert(result);