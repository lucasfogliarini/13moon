function changeDate(){
    clear();
    if(!day.value || !month.value || !year.value){
      return;
    }
    var kin = new Kin(day.value, month.value, year.value);
    kin_element.innerHTML = kin.kin.mantra + ' (' + kin.kin.number + ')';
    tone.src = 'tones/'+ kin.kin.tone.number + '.png';
    seal.src = 'seals/'+ kin.kin.seal.number + '.png';

    var description = kin.generateDescription(kin.kin.seal.number, kin.kin.tone.number);
    description_element.innerHTML = '';
    for (var i = 0; i < description.length; i++) {
      var p = "<p>" + description[i] + "</p>";
      description_element.insertAdjacentHTML('beforeend', p);
    }
}

function clear(){
   kin_element.innerHTML = '';
   tone.src = '';
   seal.src = '';
   description_element.innerHTML = '';
}

var day = document.getElementById('d');
var month = document.getElementById('m');
var year = document.getElementById('y');
var kin_element = document.getElementById('kin');
var tone = document.getElementById('tone');
var seal = document.getElementById('seal');
var description_element = document.getElementById('description');
day.addEventListener("input", changeDate);
month.addEventListener("input", changeDate);
year.addEventListener("input", changeDate);

var now = new Date();
day.value = now.getDate();
month.value = now.getMonth();
year.value = now.getFullYear();
changeDate();
