function Kin(day, month, year){
    this.calculate = function(day, month, year){
      day = parseInt(day);
      month = parseInt(month);
      year = parseInt(year);
      var kin = this.yearFactor(year) + this.monthFactor(month) + day;
      if(kin > 260)
        kin = kin - 260;

      this.kin = {
        number: kin,
        seal: {
          number: this.mod(kin, 20)
        },
        tone: {
          number: this.mod(kin, 13)
        }
      }
      this.kin.seal.mantra = this.sealMantra(this.kin.seal.number);
      this.kin.tone.mantra = this.toneMantra(this.kin.tone.number);
      this.kin.mantra = this.kin.seal.mantra + ' ' + this.kin.tone.mantra;
      return this.kin;
    }
    this.mod = function(number, factor){
      var mod = number % factor;
      return mod == 0 ? factor : mod;
    }
    this.monthFactor = function(month){
      return {
        1: 0,
        2: 31,
        3: 59,
        4: 90,
        5: 120,
        6: 151,
        7: 181,
        8: 212,
        9: 243,
        10: 13,
        11: 44,
        12: 74
      }[month];
    }
    this.yearFactor = function(year){
      var b52 = year % 52;
      var b5 = b52 % 5;
      var balance = b52 - b5;
      var yearFactor = 232 + balance;

      if(b5 == 1)
        yearFactor = yearFactor + 105;
      else if(b5 == 2)
        yearFactor = yearFactor < 50 ? yearFactor + 210 : yearFactor - 50;
      else if(b5 == 3)
        yearFactor = yearFactor + 55;
      else if(b5 == 4)
        yearFactor = yearFactor + 160;

      if(yearFactor > 260)
        yearFactor = yearFactor - 260;

      return yearFactor;
    }
    this.sealMantra = function(seal){
      return {
        1: "Dragon",
        2: "Wind",
        3: "Night",
        4: "Seed",
        5: "Serpent",
        6: "World-Bridger",
        7: "Hand",
        8: "Star",
        9: "Moon",
        10: "Dog",
        11: "Monkey",
        12: "Human",
        13: "Sky-Walker",
        14: "Wizard",
        15: "Eagle",
        16: "Warrior",
        17: "Earth",
        18: "Mirror",
        19: "Storm",
        20: "Sun",
      }[seal];
    }
    this.toneMantra = function(tone){
      return {
        1: "Magnetic",
        2: "Lunar",
        3: "Eletric",
        4: "Self-Existing",
        5: "Overtone",
        6: "Rhythmic",
        7: "Resonant",
        8: "Galactic",
        9: "Solar",
        10: "Planetary",
        11: "Spectral",
        12: "Crystal",
        13: "Cosmic",
      }[tone];
    }
    this.calculate(day, month, year);
  }
