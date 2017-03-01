function kin(day, month, year){
    this.calculate = function(day, month, year){
      var kin = this.yearFactor(year) + this.monthFactor(month) + day;
      if(kin > 260)
        kin = kin - 260;
      return kin;
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
    this.kin = this.calculate(day, month, year);
  }
