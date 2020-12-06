console.log("Works!") //Вивести текст

//Lesson 2

// Написаим функцію яка виводить на екран наступну інформацію:
// - браузер
// - розширення екрану
// - Мову оs
// - операційну систeму


// function exercise (){
// let browser = document.getElementById("browser");
// let screen = document.getElementById("screen");
// let language = document.getElementById("language");
// let os = document.getElementById("os");

// browser = navigator.userAgent;
// screen=navigator.screen;
// language=navigator.language;
// os=navigator.userAgent;

// console.log("browser => ", browser);
// console.log("screen => ", screen);
// console.log("language => ", language);
// console.log("os => ", os);

// document.getElementById("browser").innerHTML = browser;
// document.getElementById("screen").innerHTML = screen;
// document.getElementById("language").innerHTML = language;
// document.getElementById("os").innerHTML = os;

//}
//exercise()

function getData(){
    const log="user";
    const pass="1";

   
    const true_="IT IS CORRECT!!!!!!!!!!!!!!!!!!";
    const false_="IT IS NOT CORRECT!!!!!!!!!!!!!!!!!!";

    if (document.getElementById("email").value ==log && document.getElementById("pass").value==pass)
    {
        document.getElementById("emailHelp").innerHTML=true_;
    }
    else
    {
        document.getElementById("emailHelp").innerHTML=false_;
    }

}

