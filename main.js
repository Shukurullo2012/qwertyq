
let fruits = ["яблоко", "банан", "вишня", "персик", "ананас"];

fruits.forEach(fruit => {
  if (fruit.includes('я')) {
    console.log(`В фрукте ${fruit} есть буква "я"`);
  } else {
    console.log(`В фрукте ${fruit} нет буквы "я"`);
  }
});
