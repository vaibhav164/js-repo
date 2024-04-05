/** here we can see that we can even sort a constant array as const variable in JS
 * prevents reasignment of variable not the modification of updation in value
 */


const test = [5, 4, 3, 5, 6, 8, 6, 67, 4, 3, 32];

// console.log(test.sort((a,b)=>a-b))


const productList = [
    { productName: 'p1', productId: 1, price: 3400 },
    { productName: 'p2', productId: 2, price: 200 },
    { productName: 'p3', productId: 3, price: 4000 },
    { productName: 'p4', productId: 4, price: 300 },
    { productName: 'p5', productId: 4, price: 400 },
]

productList.sort((a, b) => {
    return a.price - b.price
})

console.log(productList)