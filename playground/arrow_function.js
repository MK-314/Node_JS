const log = console.log;
// var square = function(x) {
//     return x * x;
// };

// var square = (x) => {
//     return x * x;
// };

// var square = (x) => x * x;

// log(square(2));

var myevent = {
    name: "Huge party",
    guestList: ["Mike", "Nikki", "Elena"],
    printGuests() {
        log("Guest list for " + this.name);

        this.guestList.forEach(guest => {
            log(guest + ' is attending ' + this.name);
        });
    }
};

myevent.printGuests();