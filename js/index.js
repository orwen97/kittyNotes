// calendar section
//
const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const months = ["January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"];

// printing month and month numbers on dom

const MONTH = document.getElementById("month");
MONTH.innerText = months[4];

const NUMBERS = document.getElementById("numbers");

if(MONTH.innerText === "May") {
    days.forEach(day => {
        if(day < 31) {
            let div = document.createElement("div");
            div.className = `day${day}`;
            div.innerText = day;
            numbers.appendChild(div);
            }
    });
};0.

//printing days name on the calendar

const DAYS_NAME = document.getElementById("daysName");
DAYS_NAME.innerHTML = `
                        <ul class = "listDays">
                            <li>S</li>
                            <li>M</li>
                            <li>T</li>
                            <li>W</li>
                            <li>T</li>
                            <li>F</li>
                            <li>S</li>
                        </ul>`










