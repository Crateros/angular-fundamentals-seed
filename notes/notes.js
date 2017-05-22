function ShoppingList() {
  this.groceries = [];
}

ShoppingList.prototype.addItem = function (item) {
  this.groceries = this.groceries.concat([item]);
};

ShoppingList.prototype.removeItem = function(item) {
  this.groceries = this.groceries.filter(function (grocery) {
    return item !== grocery;
  });
};

var myList = new ShoppingList();

myList.addItem('Banana');
myList.addItem('Apple');

console.log(myList.groceries);

myList.removeItem('Banana');

console.log(myList.groceries);


//TypeScript method with ES6 classses
class ShoppingList2 {
  groceries: string[];
  constructor() {
    this.groceries = [];
  }
  addItem(item) {
    //Merges new array with spread operator, then adds item
    this.groceries = [ ...this.groceries, item];
  }
  // removeItem(item) {
  //   this.groceries = this.groceries.filter(function (grocery) {
  //     return item !== grocery;
  //   });
  // }

  //ES6 syntax
  removeItem(item) {
    this.groceries = this.groceries.filter((grocery) => item !== grocery);
  }
}

const myNewList = new ShoppingList2();

myNewList.addItem('Pear');
myNewList.addItem('Pizza');


console.log(myNewList);
