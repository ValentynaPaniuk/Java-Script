const URL = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
const URL2 = "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11"

function Request(URL, callback){

    let xhr = new XMLHttpRequest();

    xhr.open("GET", URL, true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState!=4) return;
    
        if(xhr.status !=200){
            let errStatus = xhr.status;
            let errText = xhr.statusText;
            console.log(errStatus, " ", errText);
        }
        else{
            let data = JSON.parse(xhr.responseText);
            //console.log(data);
            callback(data);
        }
    }
}

function CashCurrency(data){
    //console.log("CashCurrency : ", currency);
    // let data = currency;
    // data.map(item=>{
    //     console.log(`${item.ccy} => ${item.base_ccy} | BUY ${item.buy} | SALE ${item.sale}`);
    // })

    //let root = document.getElementById("root");
    let root = document.querySelector("#root");           //#-id  .-class
    //let sp = document.createElement("span");
    //sp.innerHTML = "SPAN";
    //sp.setAttribute("class", "col");
    //root.appendChild(sp);
    //console.log(root);

    for(let i=0; i<data.length; i++){
        let tr = document.createElement("tr");

        let th = document.createElement("th");
        th.setAttribute("scope", "row");

        th.innerHTML= `${data[i].ccy} - ${data[i].base_ccy}`;
        tr.appendChild(th);

        let td_buy = document.createElement("td");
        td_buy.innerHTML = `${data[i].buy}`;
        tr.appendChild(td_buy);

        let td_sale = document.createElement("td");
        td_sale.innerHTML = `${data[i].sale}`;
        tr.appendChild(td_sale);

        root.appendChild(tr);
    }

    Convert_valute(data);
}

function CardCurrency(currency){
    //console.log("CardCurrency : ", currency);
    console.log("===================================");
    let data = currency;
    
    data.map(item=>{
        console.log(item);
    })
}


//  Request(URL, CashCurrency);
//  Request(URL2, CardCurrency);

window.addEventListener("load", Request(URL, CashCurrency))

function Convert_valute (currency) {

   let dol_buy = parseInt(currency[0]).buy;
   let eur_buy = parseInt(currency[1]).buy;
   let rub_buy = parseInt(currency[2]).buy;
   let btn_buy = parseInt(currency[3]).buy;

   console.log(currency);

    let c = {'USD': 28, 'EUR':  10, 'RUB':  5, 'BTN':  3} ; // Устанавливаем курс валют


    let val = document.getElementById('val'); // Получаем элемент ввода данных
    let currency1 = document.getElementById('cur1'); // Получаем первый селект
    let currency2 = document.getElementById('cur2'); // Получаем второй селект
    let result = document.getElementsByClassName('convert_result')[0]; // Получаем поле куда будем писать результат
    function summ() { // Делаем функцию
        let z = 0;
        
        if(currency1.value === currency2.value){ // Если оба значения в селектах равны
            result.innerText = val.value; // То просто вписываем данные из поля ввода
        } else {
            if(currency1.value != 'GRN'){ // Если не равны GRN, то
                z = val.value*c[currency1.value]; // Переводим сумму в рубли
                result.innerHTML = Math.ceil((z/c[currency2.value])*100)/100; // Делим на курс и округляем до сотых
            } else { // Если не равны
                result.innerHTML = Math.ceil((val.value*c[currency2.value])*100)/100; // Умножаем на курс и округляем до сотых
            }
        }
    }
    val.oninput = function () { // При вводе данных в поле вызываем функцию.
        summ();
    };
    currency1.onchange = function () { // При смене первого селекта вызываем функцию.
        summ();
    };
    currency2.onchange = function () { // При смене второго селекта вызываем функцию.
        summ();
    }
}
