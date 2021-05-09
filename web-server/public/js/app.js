// fetch('http://puzzle.mead.io/puzzle').then(res => {
//     res.json().then(data => {
//         console.log(data);
//     })
// })

// fetch('http://localhost:3000/weather?address=vancouver').then(res => {
//     res.json().then(data => {
//         console.log(data);
//     })
// })


var weatherForm = document.querySelector('form');
var searchInput = document.querySelector('input');
var m1 = document.querySelector('#m1ID');
var m2 = document.querySelector('#m2ID');

weatherForm.addEventListener('submit', e => {
    e.preventDefault();
    var locatiion = searchInput.value;
    fetch('http://localhost:3000/weather?address=' + locatiion).then(res => {
        res.json().then(data => {
            console.log(data);
            if (data.error) {
                m1.textContent = data.error;
                m2.textContent = '';
            } else {
                m1.textContent = data.location;
                m2.textContent = data.forecast;
            }
        })
    })
})