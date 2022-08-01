window.onload = function () {
    const btn_ref = document.getElementById("change-quote");
    window.setInterval(function () {
            let date = new Date();
            let greeting;
            let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            let day = date.getDay();
            let month = date.getMonth();
            let dates = date.getDate();

            let hello = date.getHours();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            if (hello <= 11 && 6 <= hello) {
                greeting = "Good morning";
            } else if (hello <= 17 && 12 <= hello) {
                greeting = "Good afternoon";
            } else if (hello <= 23 && 18 <= hello) {
                greeting = "Good evening";
            } else {
                greeting = "Good night";
            }


            if (hours < 10) hours = "0" + hours;
            if (minutes < 10) minutes = "0" + minutes;
            if (seconds < 10) seconds = "0" + seconds;


            document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
            document.getElementById("date").innerHTML = days[day] + ", " + months[month] + " " + dates;
            document.getElementById("greeting").innerHTML = greeting;
        },
        0);
    randomQuote();
    btn_ref.addEventListener("click", randomQuote);
};