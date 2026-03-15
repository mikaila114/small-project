let products = [
    'apple',
    'banana',
    'pineiple',
    'orange',
    'mango',
    'bananas',
]

const mainContainer = document.getElementById('main-container');
const search = document.getElementById('search');

products.forEach(product => {
    mainContainer.innerHTML += `<p>${product}</p>`;
})

search.addEventListener('input', function greet() {

    mainContainer.innerHTML = ""; // yana goge tsohon result

    let value = search.value.toLowerCase();


        product = products.filter(fin => fin.toLowerCase().includes(value));

        for(let i = 0; i < product.length; i++){
            console.log(product[i]);
            mainContainer.innerHTML += `<p>${product[i]}</p>`;
        }



})
   
    
































// Output: 30

// Explanation:
// The reduce() method takes a callback function that is executed on each element of the array, resulting in a single output value. In this case, the callback function takes two parameters: 'matattatara' (the accumulator) and 'numbanDaAkeDaita' (the current value). The function adds the current value to the accumulator and returns the result, which becomes the new value of the accumulator for the next iteration. After processing all elements in the array, the final value of the accumulator is returned as the total sum of the numbers in the array.