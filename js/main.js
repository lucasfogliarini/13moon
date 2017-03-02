function changeDate(){
    clear();
    if(!day.value || !month.value || !year.value){
      return;
    }
    var kin = new Kin(day.value, month.value, year.value);
    kin_title.innerHTML = kin.kin.mantra + ' (' + kin.kin.number + ')';
    kin_image.src = 'http://www.lawoftime.org/decode/sealstones/kin/'+kin.kin.number +'.gif';

    var description = kin.generateDescription(kin.kin.seal.number, kin.kin.tone.number);
    kin_description.innerHTML = '';
    for (var i = 0; i < description.length; i++) {
      var p = "<p>" + description[i] + "</p>";
      kin_description.insertAdjacentHTML('beforeend', p);
    }
}

function clear(){
   kin_title.innerHTML = '';
   kin_image.src = '';
   kin_description.innerHTML = '';
}

var day = document.getElementById('d');
var month = document.getElementById('m');
var year = document.getElementById('y');
var kin_title = document.getElementById('kin_title');
var kin_image = document.getElementById('kin_image');
var kin_description = document.getElementById('kin_description');
day.addEventListener("input", changeDate);
month.addEventListener("input", changeDate);
year.addEventListener("input", changeDate);

var now = new Date();
day.value = now.getDate();
month.value = now.getMonth();
year.value = now.getFullYear();
changeDate();
