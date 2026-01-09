//기본 함수 선언 문법
function hello() {
  console.log("hello");
}

//함수 표현식 사용
const hello2 = function() {
  console.log("hello2");
}

//화살표 함수 사용
const hello3 = () => console.log("hello3");
//화살표 함수에서 매개변수가 하나일 때는 괄호 생략 가능

function intro1() {
  console.log("반가워");
  console.log("또 만나");
}

//함수 표현식
const intro2 = function() {
  console.log("반가워");
  console.log("또 만나");
}

//화살표 함수
const intro3 = () => {
  console.log("반가워");
  console.log("또 만나");
}