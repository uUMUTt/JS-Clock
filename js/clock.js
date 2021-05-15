function getName() {
    let name = prompt("What is your name?");
    document.getElementById("myName").innerText = name;
}

function printDate() {
    var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    if (day == 1) {
        day = "Monday";
    } else if (day == 2) {
        day = "Tuesday";
    } else if (day == 3) {
        day = "Wednesday";
    } else if (day == 4) {
        day = "Thursday";
    } else if (day == 5) {
        day = "Friday";
    } else if (day == 6) {
        day = "Saturday";
    } else if (day == 0) {
        day = "Sunday";
    }

    if (hour < 10){
        hour = "0" + hour
    }
    if (minute < 10){
        minute = "0" + minute
    } 
    if (second < 10){
        second = "0" + second
    }
    
    var time = hour + ":" + minute + ":" + second + " " + day;
    
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setTimeout(printDate, 1000);
}


getName();
printDate();
