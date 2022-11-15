//object literal
let petSalon = {
    name: "The Fashion Pet",
    address: {
        street:"University",
        number:"262",
        zip: "22400"
    },
    pets:[]
}


//CONSTRUCTOR
let c=0;
function Pet(name, age, gender, breed,service,owner,phone) {
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.ownerName=owner;
    this.contactPhone=phone; 
    this.id=c++;
}

//create pets
    let inputName = document.getElementById("txtName");
    let inputAge = document.getElementById("txtAge");
    let inputGender = document.getElementById("txtGender");
    let inputBreed = document.getElementById("txtBreed");
    let inputService =document.getElementById("selService");
    let inputOwner = document.getElementById("txtOwner");
    let inputContact = document.getElementById("txtContact");


function isValid(aPet){
    let valid=true;
    //clear the input error borders
    inputName.classList.remove("error");
    inputService.classList.remove("error");
    inputContact.classList.remove("error");
    
    //check the conditions
    if(aPet.name=="") {
        valid=false;
        inputName.classList.add("error");
    } 
    if(aPet.service=="") {
        valid=false;
        inputService.classList.add("error");
    }
    if(aPet.contactPhone=="") {
        valid=false;
        inputContact.classList.add("error");
    }
    return valid;
}


//Creating the obj by collecting data 
function register() { 
    let thePet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,
    inputService.value,inputOwner.value,inputContact.value);
    
    if(isValid(thePet)==true) {
        petSalon.pets.push(thePet);  //push obj into the array
        displayCards();
        displayTable();
        console.log(petSalon.pets);
        clearForm();
    }
}

function clearForm() {
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "";
    inputOwner.value = "";
    inputContact.value = "";
}


function deletePet(aPetID){
    console.log("Deleting pet id: " + aPetID);
    document.getElementById(aPetID).remove();
    let deleteIndex;
    for(let i=0; i<petSalon.legnth; i++){
        let pet = petSalon.pets[i];
        if(pet.id==aPetID){
            deleteIndex=i;
        }
    }
    petSalon.pets.splice(deleteIndex,1);
}


function init() {
    console.log("init");
    let pet1 = new Pet("scooby",60,"male","Dane","Grooming","Shaggy","555-555-2334");
    let pet2 = new Pet("Thunder",10,"female","German Shepherd","Nail","Alex","123-325-2334");
    console.log(pet1);
    petSalon.pets.push(pet1,pet2);
    displayCards();
    displayTable();
}

window.onload = init;

