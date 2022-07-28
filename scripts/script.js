//Time and Date
window.onload = function () {
    window.setInterval(function () {
        let date = new Date();
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let day = date.getDay();
        let month = date.getMonth();
        let dates = date.getDate();


        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        // if (dates < 10) dates = "0" + dates;

        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;

        let full_date =  days[day] + ", "+ dates + " " + months[month];

        let clock = hours + ":" + minutes + ":" + seconds;

        document.getElementById("time").innerHTML = clock;
        document.getElementById("date").innerHTML = full_date;
        },1000);
};

