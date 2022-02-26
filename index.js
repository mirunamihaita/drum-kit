// document.querySelector('button').addEventListener('click', handleClick);

// function handleClick(){
//     alert('click')
// }

// FUNCTIE ANONIMA

// document.querySelector('button').addEventListener('click', function (){
//     alert('click')
// });


// console.log(numberOfDrumButtons)
// const array = [9, 100, 4]

// console.log(array[1])


let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
   
    this.style.color = "white"


    let audio = new Audio('sounds/tom-1.mp3');
    audio.play();    
    
    
    // SWITCH


  });
}



