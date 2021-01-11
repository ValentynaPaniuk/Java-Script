window.addEventListener("load", () => {

    if (location.pathname.includes("persons.html")){
        console.log(location.pathname);
        Request(`${BASE_API_URL}people/`).then(data => {
            RenderPersons(data.results);
        })
    }
    
    else if (location.pathname.includes("planets.html"))
    {
        console.log(location.pathname);
        Request(`${BASE_API_URL}planets/`).then(data => {
            RenderPlanets(data.results);
        })
    }

    else if (location.pathname.includes("vehicles.html"))
    {
        console.log(location.pathname);
        Request(`${BASE_API_URL}vehicles/`).then(data => {
            RenderVehicles(data.results);
        })
    }

    else if (location.pathname.includes("films.html"))
    {
        console.log(location.pathname);
        Request(`${BASE_API_URL}films/`).then(data => {
            RenderFilms(data.results);
        })
    }

    else if (location.pathname.includes("species.html"))
    {
        console.log(location.pathname);
        Request(`${BASE_API_URL}species/`).then(data => {
            RenderFilms(data.results);
        })
    }

})

const BASE_API_URL = "https://swapi.dev/api/";

const Request = (URL) => {
    const data = fetch(URL).then(res => {
        return res.json();
    }).then(res => {
        return res;
    }).catch(error => {
        return error.response;
    })
    return data;
}

const RenderPersons = (persons) => {
    console.log("RenderPersons ", persons);
    // console.log("RenderPersons ", persons.results);
    let person_table = document.querySelector("#person_table");

    persons.map(person => {
        let tr = document.createElement("tr"); //Створюємо рядок

        let tdName = document.createElement("td"); 
        tdName.innerHTML = person.name;

        let tdHeight = document.createElement("td");
        tdHeight.innerHTML = person.height;

        let tdMass=document.createElement("td");
        tdMass.innerHTML=person.mass;

        let tdHair_color = document.createElement("td");
        tdHair_color.innerHTML=person.hair_color;

        let tdSkin_color=document.createElement("td");
        tdSkin_color.innerHTML=person.skin_color;
        
        let tdEye_color=document.createElement("td");
        tdEye_color.innerHTML=person.eye_color;
      
        let tdBirth_year=document.createElement("td");
        tdBirth_year.innerHTML=person.birth_year;

        let tdGender=document.createElement("td");
        tdGender.innerHTML=person.gender;

       

        tr.appendChild(tdName);
        tr.appendChild(tdHeight);
        tr.appendChild(tdMass);
        tr.appendChild(tdHair_color);
        tr.appendChild(tdSkin_color);
        tr.appendChild(tdEye_color);
        tr.appendChild(tdBirth_year);
        tr.appendChild(tdGender);
       
       
        person_table.appendChild(tr);

    })
   
}


/*Planets*/

const RenderPlanets = (planets) => {
    console.log("RenderPlanets ", planets);
    // console.log("RenderPersons ", persons.results);
    let planets_table = document.querySelector("#planets_table");

    planets.map(planet=> {
        let tr = document.createElement("tr"); //Створюємо рядок

        let tdPlanetName = document.createElement("td"); 
        tdPlanetName.innerHTML = planet.name;

        let tdRotation_period = document.createElement("td"); 
        tdRotation_period.innerHTML = planet.rotation_period;
      
        let tdOrbital_period = document.createElement("td"); 
        tdOrbital_period.innerHTML = planet.orbital_period;
        
        let tdDiameter = document.createElement("td"); 
        tdDiameter.innerHTML = planet.diameter;

        let tdClimate = document.createElement("td");
        tdClimate.innerHTML = planet.climate;

        let tdGravity = document.createElement("td");
        tdGravity.innerHTML = planet.gravity;
       
        let tdTerrain = document.createElement("td");
        tdTerrain.innerHTML = planet.terrain;

        let tdSurface_water = document.createElement("td");
        tdSurface_water.innerHTML = planet.surface_water;

        let tdPopulation = document.createElement("td");
        tdPopulation.innerHTML = planet.population;

        tr.appendChild(tdPlanetName);
        tr.appendChild(tdRotation_period);
        tr.appendChild(tdOrbital_period);
        tr.appendChild(tdDiameter);
        tr.appendChild(tdDiameter);
        tr.appendChild(tdClimate);
        tr.appendChild(tdGravity);
        tr.appendChild(tdTerrain);
        tr.appendChild(tdSurface_water);
        tr.appendChild(tdPopulation);
        
             
        planets_table.appendChild(tr);

    })
   
}

/*Vehicles*/

const RenderVehicles = (vehicles) => {
    console.log("RenderVehicles ", vehicles);
    // console.log("RenderPersons ", persons.results);
    let vehicles_table = document.querySelector("#vehicles_table");

    vehicles.map(vehicle=> {
        let tr = document.createElement("tr"); //Створюємо рядок

        let tdVehicleName = document.createElement("td"); 
        tdVehicleName.innerHTML = vehicle.name;

        let manufacturer=document.createElement("td");
        manufacturer.innerHTML=vehicle.manufacturer;

        let cost_in_credits=document.createElement("td");
        cost_in_credits.innerHTML=vehicle.cost_in_credits;

        let tdLength=document.createElement("td"); 
        tdLength.innerHTML=vehicle.length;

        let tdMax_atmosphering_speed = document.createElement("td");
        tdMax_atmosphering_speed.innerHTML=vehicle.max_atmosphering_speed;

        let tdCrew = document.createElement("td");
        tdCrew.innerHTML = vehicle.crew;

        let tdPassengers = document.createElement("td");
        tdPassengers.innerHTML = vehicle.passengers;

        let tdCargo_capacity = document.createElement("td");
        tdCargo_capacity.innerHTML=vehicle.cargo_capacity;

        let tdConsumables = document.createElement("td");
        tdConsumables.innerHTML=vehicle.consumables;

        let tdVehicle_class = document.createElement("td");
        tdVehicle_class.innerHTML=vehicle.vehicle_class;

    

  
        tr.appendChild(tdVehicleName);
        tr.appendChild(manufacturer);
        tr.appendChild(cost_in_credits);
        tr.appendChild(tdLength);
        tr.appendChild(tdMax_atmosphering_speed);
        tr.appendChild(tdCrew);
        tr.appendChild(tdPassengers);
        tr.appendChild(tdCargo_capacity);
        tr.appendChild(tdConsumables);
        tr.appendChild(tdVehicle_class);
       
        
             
        vehicles_table.appendChild(tr);

    })
   
   
}

/*Films */

const RenderFilms = (films) => {
    console.log("RenderFilms ", films);
    // console.log("RenderPersons ", persons.results);
    let films_table = document.querySelector("#films_table");

    films.map(film=> {
        let tr = document.createElement("tr"); //Створюємо рядок

        /*"title": "A New Hope",
			"episode_id": 4,
			"opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
			"director": "George Lucas",
			"producer": "Gary Kurtz, Rick McCallum",
			"release_date": "1977-05-25", */
        let tdTitle = document.createElement("td"); 
        tdTitle.innerHTML = film.title;

        let tdEpisode = document.createElement("td"); 
        tdEpisode.innerHTML = film.episode_id;

        let tdOpening_crawl = document.createElement("td"); 
        tdOpening_crawl.innerHTML = film.opening_crawl;

        let tdDirector = document.createElement("td"); 
        tdDirector.innerHTML = film.director;

        let tdProducer = document.createElement("td"); 
        tdProducer.innerHTML = film.producer;

        
        let tdRelease_date = document.createElement("td"); 
        tdRelease_date.innerHTML = film.release_date;
  
        tr.appendChild(tdTitle);
        tr.appendChild(tdEpisode);
        tr.appendChild(tdOpening_crawl);
        tr.appendChild(tdDirector);
        tr.appendChild(tdProducer);
        tr.appendChild(tdRelease_date);
        
        
             
        films_table.appendChild(tr);

    })
   
  
}