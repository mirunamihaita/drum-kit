// document.querySelector('button').addEventListener('click', handleClick);

// function handleClick(){
//     alert('click')
// }

// FUNCTIE ANONIMA

// document.querySelector('button').addEventListener('click', function (){
//     alert('click')
// });

let numberOfDrumButtons = document.querySelectorAll(".drum").length;

// console.log(numberOfDrumButtons)
// const array = [9, 100, 4]

// console.log(array[1])


for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("click");
  });
}