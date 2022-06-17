
var date = new Date('2022-06-18T00:00:00')
let dateFormat = new Date(date)

dateFormat.setMinutes(dateFormat.getMinutes() + dateFormat.getTimezoneOffset())

let dateStr = dateFormat.toDateString();
document.getElementById("date").innerHTML = dateStr;

const dat= new Date();

let day_date= dat.getMinutes()
document.getElementById("minutes").innerHTML = day_date;

let hrs= dat.getHours();
document.getElementById("hrs").innerHTML = hrs;