//1. Use strict
//added in Es 5
//use this for Valina javascript.
"use strict";

//2 .Variable. rw(read/write) //variable 은 메모리에 읽고 쓰기가 가능하다.
//let (added in ES6)

let name = "ellie";
console.log(name);
name = "hello";
console.log(name);

//var (don`t ever use this!)
//var hoisting(move declaration from bottom to top)
//has no block scope
{
  age = 4;
  var age;
}
console.log(age); // 정상 출력, 이런유연성을 이용해 프로그램을 만들었지만 규모있는 프로젝트에선 선언하지도 않은 변수가 할당되는 문제 발생

//3. contant, r(read only) 읽기만 가능. 다른값으로 쓰는것은 불가능
//use const whenever possible.
//only use let if varialbe needs to change.
// favor immutable data type always for a few reasons;
// -security
// -thread safety
// -reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//Note!
//immutable data types: primitive types, frozen objects( i.e object.freeze())
//데이터 자체를 변경할 수 없는 것.
//mutable data types : all objects by default are mutable in JS
//변경이 가능한 타입. 기본적으로 모든오브젝트는 변경이 가능.
//favor immutalbe data type always for a few reasons;

//4. variable types
//primitive(더이상 작은 단위로 나눠질 수 없는 한가지의 아이템), single item: number boolean, null, undefined, symbol
//object(싱글아이템을 여러개 묶어서 한 단위로 관리), box container
//function, first-class fuction(이 프로그래밍 언어에서는 fuction도 변수에 할당이 가능, 파라미터 리턴타입으로도 가능)

const count = 17; //integer
const size = 15.1; //decimal number
console.log(`type : ${typeof count}`);
console.log(`type : ${typeof size}`);

// number - special numeric values
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt(fairly new, don`t use it yet)
const bigInt = 1234214253544546536454522n; //over (-2*53 ~ 2*53)
//최근에 추가 다른 브라우저에선 지원이 안됨

//string
const taemin = "taemin gona";

console.log(`value : ${taemin}`);

//boolean
//false: 0,null, undefined, nan, ''
//true : any other value
const canRead = true;
const test = 3 < 1; // false

//null
let nothing = null; // 값이 비었다고 할당이 됨

//undefined
let x;

//symbol, create unique identifiers for objects
//심볼은 나중에 자료구조에서 고유한 식별자가 필요하거나, 동시다발적인코드에서 우선순위를 주고싶을 때 정말고유한 식별자가 필요할 때 사용.
//간혹 식별자를 스트링을 쓰면 다른모듈이나 다른파일에서 동일한 스트링을 썻을 대 동일한 식별자로 간주
//심볼같은 경우 동일해도 두가지의 심볼은 다른경우이다.
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); //true
console.log(`value : ${symbol1.description}, type: ${typeof symbol1}`); //symbol은 출력할때 에러발생하니 스트링으로 변환해서 출력해야 한다.

//5.Dynamic typing : dynamically typed language
//자바스크립트는 다이나믹 타입 랭귀지 이다.
//선언 할 때 어떤 타입인지 선언하지 않고, 런타임(프로그램 동작) 할당된 값에 따라서 타입이 변경 될 수 있다는 것을 맗마
//규모있는 프로젝트에서는 위험 할 수 있다.

let text = "hellow";
console.log(`value : ${text}, type: ${typeof text}`);
text = 1;
console.log(`value : ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value : ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value : ${text}, type: ${typeof text}`);
//런타임에서 에러가 많이 발생해서 type script 발생
//java scirpt 위에 type이 얹어진 것
//타입스크립트는 브라우저가 이해할수 있는 자바스크립트로 트랜스 컴파일러 해야 함.
