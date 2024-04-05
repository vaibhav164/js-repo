/** 
 Objects in Array
*/

const foodList = [
    { name: 'kheer', taste: 'sweet' },
    { name: 'aludum', taste: 'green spicy' },
    { name: 'neemona', taste: 'salty' },
    { name: 'puri', taste: 'crispy' },
    { name: 'gajar ka Halwa', taste: 'sweet' }
];

const [first, second, third, ...restData] = foodList;

const [{ taste: firstDishTaste }, , , , { name: fifthDishName }] = foodList;
/**
we can update for this value
first.name = null;
console.log(foodList);
 */

console.log('first', firstDishTaste, 'second', fifthDishName);