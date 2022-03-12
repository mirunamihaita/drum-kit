
// BELLBOY 1

// let bellBoyName = "Tom";
// let bellBoyAge = 19;
// let bellBoyPreviousExperience = true;
// let bellBoyLanguages = ["English", "French"]


// BELLBOY 2

// let bellBoyName2 = "John";
// let bellBoyAge2 = 18;
// let bellBoyPreviousExperience2 = false;
// let bellBoyLanguages2 = ["English", "German"]



// const bellBoy1 = {
//     name: "Tom",
//     age: 19,
//     experience: true,
//     languages: ["English", "French"]
// }

// const bellBoy2 = {
//     name: "John",
//     age: 18,
//     experience: false,
//     languages: ["English", "French"]
// }

// console.log(bellBoy1.age)

// let houseKeeper1 = {
//     name: "Jane",
//     yearsOfExperience : 12,
//     hotelsWoked : ['hotel1', 'hotel2']
// }
function HouseKeeper(name, yearsOfExperience, hotelsWoked){
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.hotelsWoked = hotelsWoked;
}

let houseKeeper1 = new HouseKeeper("Jane", 12, ['hotel1', 'hotel2'])

console.log(houseKeeper1.firstName)



// let bellBoy1 = new BellBoy("Tom", 19, true, ["eng", 'fr'])
// let bellBoy2 = new BellBoy("John", 18, false, ["eng", 'de'])

// console.log(bellBoy1.age)



// const bellBoy1 = {
//     name: "Tom",
//     age: 19,
//     experience: true,
//     languages: ["English", "French"],
//     moveSuitcase: function (){
//         alert('May I move your suitcase?');
//         pickUpSuitcase();
//         move();
//     }
// }

// bellBoy1.moveSuitcase();


// CONSTRUCTOR FUNCTION

function BellBoy (name, age, experience, languages){
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.languages = languages;
    this.moveSuitcase = function(){
        console.log('the method works')
    }
}

let bellBoy1 = new BellBoy("Tom", 19, true, ["eng", 'fr'])

bellBoy1.moveSuitcase();

// 1. adaugati metoda moveSuitcase la functia constructor
// 2. creati un obiect nou cu ajutorul functiei constructor
// 3. apelati metoda din noul obiect


//CONSTRUCTOR FUNCTION

function Audio(fileLocation){
    this.fileLocation = fileLocation;
    this.play = function(){
        //Find the audio on the hardware
        //Check location to see if file exists
        //Play the file in fileLocation
    }
}

let tom2 = new Audio("sounds/tom-2.mp3");
tom2.play();