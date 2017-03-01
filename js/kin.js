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
    this.generateDescription = function(seal, tone){
      var a = this.creativePower(tone);
      var b = this.b(seal);
      var c = this.action(tone);
      var d = this.d(seal);
      var e = this.e(seal);
      var f = this.f(seal);
      var g = this.toneMantra(tone);
      var h = this.function(tone);
      return [
        "I " + a + " in order to " + b,
        c + ' ' + d,
        'I seal the ' + e + ' of ' + f,
        'With the ' + g + ' tone of ' + h
      ];
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
    this.creativePower = function(tone){
      return {
        1: "Unify",
        2: "Polarize",
        3: "Activate",
        4: "Define",
        5: "Empower",
        6: "Organize",
        7: "Channel",
        8: "Harmonize",
        9: "Pulse",
        10: "Perfect",
        11: "Dissolve",
        12: "Dedicate",
        13: "Endure",
      }[tone];
    }
    this.action = function(tone){
      return {
        1: "Attracting",
        2: "Stabilizing",
        3: "Bonding",
        4: "Measuring",
        5: "Commanding",
        6: "Balancing",
        7: "Inspiring",
        8: "Modeling",
        9: "Realizing",
        10: "Producing",
        11: "Releasing",
        12: "Universalizing",
        13: "Transcending",
      }[tone];
    }
    this.function = function(tone){
      return {
        1: "Purpose",
        2: "Challenge",
        3: "Service",
        4: "Form",
        5: "Radiance",
        6: "Equality",
        7: "Attunement",
        8: "Integrity",
        9: "Intention",
        10: "Manifestation",
        11: "Liberation",
        12: "Cooperation",
        13: "Presence",
      }[tone];
    }
    this.b = function(seal){
      return {
        1: "Nurture",
        2: "Communicate",
        3: "Dream",
        4: "Target",
        5: "Survive",
        6: "Equalize",
        7: "Know",
        8: "Beautify",
        9: "Purify",
        10: "Love",
        11: "Play",
        12: "Influence",
        13: "Explore",
        14: "Enchant",
        15: "Create",
        16: "Question",
        17: "Evolve",
        18: "Reflect",
        19: "Catalyze",
        20: "Enlighten",
      }[seal];
    }
    this.d = function(seal){
      return {
        1: "Being",
        2: "Breath",
        3: "Intuition",
        4: "Awareness",
        5: "Instinct",
        6: "Opportunity",
        7: "Healing",
        8: "Art",
        9: "Flow",
        10: "Loyalty",
        11: "Illusion",
        12: "Wisdom",
        13: "Wakefulness",
        14: "Receptivity",
        15: "Mind",
        16: "Fearlessness",
        17: "Synchronicity",
        18: "Order",
        19: "Energy",
        20: "Life",
      }[seal];
    }
    this.e = function(seal){
      return {
        1: "Input",
        2: "Input",
        3: "Input",
        4: "Input",
        5: "Store",
        6: "Store",
        7: "Store",
        8: "Store",
        9: "Process",
        10: "Process",
        11: "Process",
        12: "Process",
        13: "Output",
        14: "Output",
        15: "Output",
        16: "Output",
        17: "Matrix",
        18: "Matrix",
        19: "Matrix",
        20: "Matrix",
      }[seal];
    }
    this.f = function(seal){
      return {
        1: "Birth",
        2: "Spirit",
        3: "Abundance",
        4: "Flowering",
        5: "Life Force",
        6: "Death",
        7: "Accomplishment",
        8: "Elegance",
        9: "Universal Water",
        10: "Heart",
        11: "Magic",
        12: "Free Will",
        13: "Space",
        14: "Timelessness",
        15: "Vision",
        16: "Intelligence",
        17: "Navigation",
        18: "Endlessness",
        19: "Self-Generation",
        20: "Universal Fire",
      }[seal];
    }
    this.calculate(day, month, year);
  }
