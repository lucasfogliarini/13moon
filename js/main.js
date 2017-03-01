function changeDate(){
    var kin = new Kin(day.value, month.value, year.value);
    kin_element.innerHTML = kin.kin.mantra + ' (' + kin.kin.number + ')';
}

var day = document.getElementById('d');
var month = document.getElementById('m');
var year = document.getElementById('y');
var kin_element = document.getElementById('kin');
day.addEventListener("input", changeDate);
month.addEventListener("input", changeDate);
year.addEventListener("input", changeDate);
