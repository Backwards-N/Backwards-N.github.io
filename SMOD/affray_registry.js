// Definitions.

class smodAffray {
  constructor(pwr, typ, special_fx, special_internal_name) {
    this.power = pwr;
    this.type = typ;
    this.sfx = special_fx;
    this.sin = special_internal_name;
  }
}

function useAffray(affray, level, grit, wep_power) {
  var outputDamage;

  if (affray.type == 'melee') {
    outputDamage = (((((2 * level) / 10) + 2) * affray.power * (wep_power + (grit / 10))) + 2) / 75;
  } else if (affray.type == 'ranged') {
    outputDamage = (((((2 * level) / 10) + 2) * affray.power * wep_power) + 2) / 75;
  } else if (affray.type == 'aspect') {
    outputDamage = ((((level ^ (1 + (affray.power / 300))) + 2) * affray.power) + 2) / 75;
  } else if (affray.type == 'effect') {
    outputDamage = 0;
  } else {
    outputDamage = ((2 * level) / 5) / 50;
  }

  return Math.ceil(outputDamage);
}

var aggrieve = new smodAffray(40, 'melee', null, 'Aggrieve');
