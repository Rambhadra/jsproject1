/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function(value){
    if(value.marks>50){
      console.log(value);
    }
  });

}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(value){
    if(value.marks>50){
      console.log(value);
    }
  })

}

function addData() {
  //Write your code here, just console.log
  let newStudent={id:4,name:"Added Student",age:"20",marks:50}
  arr.push(newStudent)
  console.log(arr);

}

function removeFailedStudent() {
  //Write your code here, just console.log
  let passedStudents = arr.filter(student => student.marks >= 50);
  let failedStudents = arr.filter(student => student.marks < 50);
  arr = passedStudents;
  console.log(arr);

}

function concatenateArray() {
  //Write your code here, just console.log
let newStudents = [{id:4,name:"piyush",age:"21",marks:90}, {id:5, name:"umesh",age:"19", marks:70}, {id:6, name:"alka", age:"20",marks:60}];
  arr = arr.concat(newStudents);
  console.log(arr);

}
