console.log('js sourced');


class BackPack {
  constructor(sizeLiter, color, material, carryCapacity) {
    this.sizeLiter = sizeLiter; //
    this.color = color;
    this.material = material;
    this.carryCapacity = carryCapacity; // Weight the backpack holds
  }

  // Add liquid if space is available
  fill(weightToAdd) {
    if(this.sizeLiter + weightToAdd <= this.carryCapacity) {
      this.sizeLiter = this.sizeLiter + weightToAdd;
    } else {
      console.log('Backack is full!');
    }
  }
}

let DayPack = new BackPack(10, 'blue', 'canvas', 12);

console.log(DayPack.sizeLiter);
console.log(DayPack.carryCapacity);
DayPack.fill(1);
console.log(DayPack.sizeLiter); // Will log 11
DayPack.fill(4); // A total of 12 would put us over the limit
console.log(DayPack.sizeLiter); //
