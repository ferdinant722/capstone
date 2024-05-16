function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

// let b = document.getElementById("btn");
// let names = document.getElementById("myName");
// console.log(names);
// console.log(b);
// b.addEventListener("click",(e)=>{
//   e.preventDefault();
//   alert(`hey hello, ${names.value}`)
// })






// let button = document.getElementById('submitButton');
// button.addEventListener("click", function(event){
//     event.preventDefault();

//     console.log("submitted");

// });

// button.addEventListener("click", function(event) {
//   messageElement.textContent = "Successfully sent!";
// });



// let btn = document.getElementById('btn btn-color-1');
// btn.addEventListener('click', ()=> {
//     let headings = document.getElementsByTagName('div');
//     alert(`The number of H2 tags: ${headings.length}`);
// });



// let dim = document.getElementById("downloadButton").addEventListener("click", function() {

//      downloadWindow = window.open('./assets/my-cv.pdf');

//     downloadWindow.onload = function() {
        
//         document.getElementById("successMessage").style.display = "block";
//     };
//     console.log(dim.downloadWindow)
// });
// let i = 1;
// while (i <= 10){
//     console.log(i);
//     i++;
// }

// let num1 = 5;
// let num2 = 8;
// let sum = num1 + num2;
// console.log(sum);


// function add(num1, num2) {
//     let res =  num1 + num2;
//     return res;
// }


// function output(){
//     let myres = add(3,4);
//     // console.log(myres);
// }
// output();



// function output2(){
//     output();
//     let newRes = add(18,20)
//     console.log(newRes);
// }
// output2();

// let students =[ {name: 'Zeesham', Age:72, height: 59},
//                 {name: 'james', Age: 92, height: 4 }
// ];
//  students.forEach(function(student)
//    {

//     console.log(student.name);
//     console.log(student.Age);
//     console.log(student.height);
//     console.log('------------------');

//    });

