log = console.log;
var greeter = (name = 'user') => {
    log('Hello ' + name);
}

greeter("Mike");
greeter();