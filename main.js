let menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  addDishToCourse: function (courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice
    }

    this.courses[courseName].push(dish);

  },

  getRandomDishFromCourse: function (courseName) {
    let dishes = this.courses[courseName];

    return dishes[Math.floor(Math.random() * dishes.length)];

  },

  generateRandomMeal: function () {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');

    let totalPrice = appetizer.price + main.price + dessert.price;

    return (`Hello! Here is your random meal:
    Appetizer: ${appetizer.name} \n\
    Main Course: ${main.name} \n\
    Dessert: ${dessert.name}\n\
Your total today will be $${totalPrice}.`
    );

  },

};

menu.addDishToCourse(['appetizers'], 'Wings', 10);
menu.addDishToCourse(['appetizers'], 'Chips and Salsa', 6);
menu.addDishToCourse(['appetizers'], 'Bruschetta', 8);

menu.addDishToCourse(['mains'], 'Burger', 14);
menu.addDishToCourse(['mains'], 'Tacos', 12);
menu.addDishToCourse(['mains'], 'Chicken Alfredo', 15);

menu.addDishToCourse(['desserts'], 'Ice Cream', 5);
menu.addDishToCourse(['desserts'], 'Cheesecake', 7);
menu.addDishToCourse(['desserts'], 'Skillet Cookie', 8);

var meal = menu.generateRandomMeal();

console.log(meal);
