const student = {name : 'kim', age : 20, score : 90};

console.log(student.name);
console.log(student);

student.age = 30;
student.addr = '울산';
console.log(student);

////////////////////////////////////
const arr = [
  1, 
  5.5, 
  'abc', 
  [6, 7, 8], 
  {name : 'kim', age : 20}
];

console.log(arr[1]); //5.5
console.log(arr[3][2]); //8
console.log(arr[4].name); //'kim'

///////////////////////////////////////
//List<Student> list = new ArrayList<>();

const studentList = [
  {stuNum : 1, name : 'kim', score : 80},
  {stuNum : 2, name : 'lee', score : 90},
  {stuNum : 3, name : 'park', score : 100}
];

console.log(studentList);
console.log(studentList[1].name);

//studentList에 저장된 모든 학생의 점수 총합을 출력
//for
let sum = 0;
for (let i; i < studentList.length; i++) {
  sum += studentList[i].score;
}
console.log(sum);

//학번이 짝수인 학생의 이름을 출력
//for-each
for(const e of studentList) {
  if(e.stuNum % 2 == 0) {
    console.log(e.name);
  }
}

let result = studentList.filter((e) => e.stuNum % 2 == 0).forEach(e => console.log(e.name));