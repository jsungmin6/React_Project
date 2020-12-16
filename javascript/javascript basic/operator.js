//1.Stirng concatenation
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals: 1+2 = ${1 + 2}`);

//2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;

//4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

//5. conparison operators (비교연산자)

//6. logical operators: ||(or), &&(and), !(not)
//or 연산자는 ture 가 나오면 멈춘다는 개념 중요.
//심플한것을 앞에 두고 마지막에 복잡하고 무거운 함수 배치해야 한다.(효율적)

//7.Equality
const stringFive = "5";
const numberFive = 5;

// ==loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// ==strict equality, no type conversion 이것을 사용하는게 더 좋다.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true

//8.conditional operatiors : if // 흔한 if문 설명

//9.ternary operator ; ? // 조건 연산자
//condition ? value1 : value2

//10.Switch statemet
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS

//11.loops
//while loop, while the condition is truthy,
//body code is executed.

//do while loop, body code is executed first
//then check the condition.

//for loop, for(begin; condition; step)

//nested loops 이중포문 등 가능
//이런 작성은 피하는게 좋다 o"^2 이라서

//break(끝냄) , continue(스킵 후 넘어감)
for(let i=0; i<11; i++){
    if(i%2===0){
        console.log(i)
    }
}

for(let i=0; i<11; i++){
    if(i===8){
        break;
    }
    console.log(i)
}