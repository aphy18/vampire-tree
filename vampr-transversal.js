class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }
  
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }
  get numberOfOffspring() {
    return this.offspring.length;
  }
  
  get numberOfVampiresFromOriginal() {
    let numberOfVampire = 0;
    let currentVampire = this;
  
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampire++;
    }
    return numberOfVampire;
  }
  
  isMoreSeniorThan(vampire) {
    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    }
    return false;
  }
  
  vampireWithName(name) {
      
    if (this.name === name) {
      return this;
    } else {
      for (let offspring in this.offspring) {
        if (this.offspring[offspring].name === name) {
          return this.offspring[offspring];
        }
        for (let secondLineOffSpring in this.offspring[offspring].offspring) {
          if (this.offspring[offspring].offspring[secondLineOffSpring].name === name) {
            return this.offspring[offspring].offspring[secondLineOffSpring];
          }
          for (let thirdLineOffSpring in this.offspring[offspring].offspring[secondLineOffSpring].offspring) {
            if (this.offspring[offspring].offspring[secondLineOffSpring].offspring[thirdLineOffSpring].name === name) {
              return this.offspring[offspring].offspring[secondLineOffSpring].offspring[thirdLineOffSpring];
            }
          }
        }
      }
      return null;
    }
  }
  
  get totalDescendents() {
    let count = 0;
    for (let offspring in this.offspring) {
      count++;
      for (let secondLineOffSpring in this.offspring[offspring].offspring) {
        count ++;
        for (let thirdLineOffSpring in this.offspring[offspring].offspring[secondLineOffSpring].offspring) {
          count++;
          for (let fourthLineOffspring in this.offspring[offspring].offspring[secondLineOffSpring].offspring[thirdLineOffSpring].offspring) {
            count++;
          }
        }
      }
    }
    return count;
  }
  
  get allMillennialVampires() {
    let count = [];
    for (let offspring in this.offspring) {
      if (this.offspring[offspring].yearConverted > 1980) {
        count.push(this.offspring[offspring]);
      }
      for (let secondLineOffSpring in this.offspring[offspring].offspring) {
        if (this.offspring[offspring].offspring[secondLineOffSpring].yearConverted > 1980) {
          count.push(this.offspring[offspring].offspring[secondLineOffSpring]);
        }
        for (let thirdLineOffSpring in this.offspring[offspring].offspring[secondLineOffSpring].offspring) {
          if (this.offspring[offspring].offspring[secondLineOffSpring].offspring[thirdLineOffSpring].yearConverted > 1980) {
            count.push(this.offspring[offspring].offspring[secondLineOffSpring].offspring[thirdLineOffSpring])
          }
          for (let fourthLineOffspring in this.offspring[offspring].offspring[secondLineOffSpring].offspring[thirdLineOffSpring].offspring) {
            if (this.offspring[offspring].offspring[secondLineOffSpring].offspring[thirdLineOffSpring].offspring[fourthLineOffspring].yearConverted > 1980) {
              count.push(this.offspring[offspring].offspring[secondLineOffSpring].offspring[thirdLineOffSpring].offspring[fourthLineOffspring]);
            }
          }
        }
      }
    }
    return count;
  }

module.exports = Vampire;
