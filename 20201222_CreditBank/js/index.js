/*function GetData() {

var url = "test.json";
console.log(url);
return url;
}

//===================

var SaveData = function(){
    var url = "blog.json";
    console.log(url);
}

SaveData();
//=========================

var func = GetData();
console.log(func);*/

//==============

/*================================= */
window.addEventListener('load', function(){
  let id = getRandomArbitrary(100000, 999999);   
  console.log(id)
  document.querySelector('.id').value = id

})

function getRandomArbitrary(min, max) {
return Math.round(Math.random() * (max - min) + min) 
}

/*================================= */

var ClientDB = [];

function GetData() {
  var name = document.querySelector(".name").value;
  var surname = document.querySelector(".surname").value;
  var amount = parseInt(document.querySelector(".amount").value);
  var period = parseInt(document.querySelector(".period").value);
  var id = parseInt(document.querySelector(".id").value);
  var ShowPersonInfo = Validate();
  ShowPersonInfo(name, surname, amount, period, id);


}

function Validate() {

  var rate = 12;

  let alterMassage = document.querySelector('#alterMassage');
  
  return function (name, surname, amount, period, id) {
    
    document.getElementById("alert").style.display = "block"

    if (name.length < 3 || name.length > 16) {
      alterMassage.textContent = "Name: the number of characters must be between 3 and 16"
    } else if (surname.length < 3 || surname.length > 16) {      
      alterMassage.textContent = "Surname: the number of characters must be between 3 and 16"
    } else if (amount< 100 ||amount > 5000) {
      alterMassage.textContent = "The amount must be more than 100 and less than 5000"
    } else if (period == null || (period > 24 || period < 6)) {
      alterMassage.textContent = "The period should be from 6 to 24 months!"
    } else if (!/^[a-zA-Z\u00C0-\u00ff]+$/.test(name)) {
      alterMassage.textContent = "Name must have alphabetcharactersonly";
      name.focus();
    } else if (!/^[a-zA-Z\u00C0-\u00ff]+$/.test(surname)) {
      alterMassage.textContent = "Surname must have alphabetcharactersonly";
      surname.focus();
    } else if (!/^[0-9]+$/.test(amount)) {
      alterMassage.textContent = "Please only enter numeric characters";
      amount.focus();
    }
   

    else {
      alterMassage.textContent = "Success!"
      document.getElementById("alert").style.backgroundColor = 'yellow'
      
      console.log("Success!");
      var newClient = new SaveData(name, surname, amount, period, rate);
      console.log("New client=>>> ",newClient);
      ClientDB.push(newClient);
      
    }
  };
 
}

function SaveData(name, surname, amount, period, rate) {
  this.name = name;
  this.surname = surname;
  this.amount = amount;
  this.period = period;
  this.rate = rate;
}



function ShowPersonInfo (){
  ClientDB.forEach(function(item, key){
    console.log(item, " ", key);

    /*======================== */
    ClientDB.map(item=> {
      let row = document.createElement("tr");
      for(let key in item)
      {
        var cell = document.createElement("td");
        var cellText = document.createTextNode(item[key]);
  
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
     
      

       document.getElementById("tbl-content").appendChild(row);


             
     
      
    })


  })

  /*=====================*/

  console.log("ClinetDB length", ClientDB.length);
  console.log("==============================>>>>>");
  console.log("New Client Added");


}

ShowPersonInfo();




