var log = console.log;

// setTimeout(() => {
//     log('2 secs are up')
// }, 2000)

// var names = ['Mike', 'Niki', 'Elena']
// var shortNames = names.filter(xName => {
//     return xName <= 4
// });

// var geoCode = (address, callback) => {
//     setTimeout(() => {
//         var data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 2000);
// }

// geoCode('NY', data => {
//     log(data)
// })
//






// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

var add = (a, b, callback) => {
    setTimeout(() => {
        var sum = a + b;
        callback(sum);
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})