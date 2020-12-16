// 1. async

//프로미스 동작
function fetchUser() {
  // 요청하면 10초 걸리는 함수
  // 내가 언제 유저의 데이터를 받아올지 모르겠지만
  //내가 약속할게 내가 프로젝트 오브젝트를 가지고 있으면 너가 then이라는 콜백함수만 등록해 놓으면 유저의 데이터가 준비되는 대로 콜백함수를 불러줄게
  return new Promise((resolve, reject) => {
    resolve("ellie");
  });
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//이렇게 프로미스를 이용하지 않고도 간편하게 비동기를 작성하는 방법이 있다.
//함수앞에 async 를 붙여주면 됨
async function fetchUser() {
  return "ellie";
}

//async라는 키워드를 함수를 쓰면 코드블록이 자동으로 promise로 바뀜

//2.await

//async 가 붙은 함수에만 사용 가능.

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//await가 실행되면 delay가 끝날때까지 기다려줌 . 그리고 apple 리턴
async function getApple() {
  await delay(1000);
  throw "error"; //에러처리
  return "apple";
}

/*
이렇게 적는 거보다 동기적인 코드를 쓰는 것처럼 보이는 것이 보기 좋다.
function getBanana(){
    return delay(3000)
    .then(()=>'banana')
}
*/

async function getBanana() {
  await delay(1000);
  return "banana";
}

async function pickFruits() {
  //promise 를 실행시킴 . 만들자마자 실행 됨.
  //이렇게 동시에 실행이 가능 한 경우 병렬적으로 기능을 수행.
  const applePromise = getApple();
  const bananaPromise = getBanana();
  //여기서 동기화 시켜줌 . 이러면 1초만에 병렬적으로 실행 됨.
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple}+${banana}`;
}

pickFruits().then(console.log);

//3.useful Promise APIs
//동시에 실행이 가능 한 경우 병렬적으로 다 받을 때까지 모아주는 아이
//다 받아지면 다 받아진 배열이 전달 됨.
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join("+")
  );
}

pickFruits().then(console.log);

//가장 빠른 것 하나만 리턴
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
