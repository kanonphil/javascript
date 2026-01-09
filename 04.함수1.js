//함수 선언 -> 함수 호출
function hello() {
  console.log("hello");
}

hello(); //함수 호출

//매개변수로 정수 2개 전달
function printSum(a, b) {
  console.log(a + b);
}

printSum(10, 5);

//매개변수로 전달 된 두 수의 합을 return 하는 함수
function getSum(a, b) {
  return a + b;
}

console.log(getSum(10, 5));

const colors = ["red", "blue", "green", "yellow", "purple"];
let currentIndex = 0;

function getRandomColor() {
  document.body.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
}