function displayCards(){
    let card="";
    for(let i=0;i<petSalon.pets.length;i++) {
        let pet = petSalon.pets[i];
        card+=`
            <div id="${pet.id}" class="pet">
                <p>Name: ${pet.name}</p>
                <p>Age: ${pet.age}</p>
                <p>Gener: ${pet.gender}</p>
                <p>Breed: ${pet.breed}</p>
                <p>Service: ${pet.service}</p>
                <p>Owner: ${pet.ownerName}</p>
                <p>Phone: ${pet.contactPhone}</p>
                <button onclick="deletePet(${pet.id})">Delete</button>
            </div>
        `;
    }
    console.log(card); 
    document.getElementById("pets").innerHTML=card;
}


/* function distalplyTable */
function displayTable(){
    let table="";
    for(let i=0; i<petSalon.pets.length; i++){
        console.log(petSalon.pets[i].name)
        let pet=petSalon.pets[i]
        table += `
            <tr class="pet">
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td>${pet.ownerName}</td>
                <td>${pet.contactPhone}</td>
            </tr>
            `
    }   
    console.log(table);
    document.getElementById('pets-table').innerHTML=table
}
