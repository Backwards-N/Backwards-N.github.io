class smodAttribute {
  constructor(special_internal_name) {
    this.sin = special_internal_name;
  }
  
  trigger() {console.log(this.sin + ' has been triggered!');}
  attack() {console.log(this.sin + ' has been triggered!');}
  onDie() {console.log(this.sin + ' has been triggered!');}
  onHit() {console.log(this.sin + ' has been triggered!');}
}

class deaconAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    console.log('DQ0N has arrived.');
    super.trigger();
  }
  attack() {
    console.log('DQ0N has arrived.');
    super.attack();
  }
  onDie() {
    console.log('DQ0N has arrived.');
    super.onDie();
  }
  onHit() {
    console.log('DQ0N has arrived.');
    super.onHit();
  }
}

var deacon = new deaconAttribute('Deacon');
