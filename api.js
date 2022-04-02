
 
fetch('https://619f39821ac52a0017ba467e.mockapi.io/patientDetails')
.then((data1)=>{

 
//   const gj= data1.json();
//  console.log(gj);
 return data1.json();
})
.then((mainData)=>{
const mydata = mainData[0];

console.log(mydata);
console.log(mydata.Gender);

document.getElementById('b').innerHTML=mydata.Gender;
document.getElementById('d').innerHTML=mydata["Street Address"];
document.getElementById('f').innerHTML=mydata["Member Status"];
document.getElementById('n').innerHTML=mydata["Phone Number"];
document.getElementById('p').innerHTML=mydata["ZIP Code"];
document.getElementById('l').innerHTML=mydata["Register Date"];
document.getElementById('h').innerHTML=mydata.Birthday;




}).catch((error)=>{
  console.log(`${error}`);
});
 


fetch('https://619f39821ac52a0017ba467e.mockapi.io/appointment_details')
.then((data2)=>{

 
//   const gj= data2.json();
//  console.log(gj);
 return data2.json();
})
.then((mainData2)=>{
const mydata1 = mainData2[0]["Post Appointment"];

// console.log(mydata);
console.log(mydata1);

document.getElementById('1').innerHTML=mydata1.Date;
document.getElementById('2').innerHTML=mydata1.Time;
document.getElementById('3').innerHTML=mydata1.Treatment;
document.getElementById('4').innerHTML=mydata1.Dentist;
document.getElementById('5').innerHTML=mydata1.Nurse;

document.getElementById('11').innerHTML=mydata1.Date;
document.getElementById('21').innerHTML=mydata1.Time;
document.getElementById('31').innerHTML=mydata1.Treatment;
document.getElementById('41').innerHTML=mydata1.Dentist;
document.getElementById('51').innerHTML=mydata1.Nurse;






}).catch((error1)=>{
  console.log(`${error1}`);
});
 


fetch('https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails')
.then((data10)=>{

 
//   const gj= data10.json();
//  console.log(gj);
 return data10.json();
})
.then((mainData0)=>{
const mydata0 = mainData0[0];

console.log(mydata0.name);
// console.log(mydata0.Gender);


document.getElementById('y').innerHTML=mydata0.name;



}).catch((error0)=>{
  console.log(`${error0}`);
});



fetch('https://619f39821ac52a0017ba467e.mockapi.io/Files')
.then((data11)=>{

 
//   const gj= data11.json();
//  console.log(gj);
 return data11.json();
})
.then((mainData9)=>{
const mydata9 = mainData9[0].files;

console.log(mydata9[0]);
// // console.log(mydata9.Gender);


document.getElementById('demo').innerHTML=mydata9[0];
document.getElementById('demo1').innerHTML=mydata9[1];
document.getElementById('demo2').innerHTML=mydata9[2];
document.getElementById('demo3').innerHTML=mydata9[3];



}).catch((error9)=>{
  console.log(`${error9}`);
});

