/*var a = 10;
var b = 21;
var res = a + b;
console.log(res);

var arr = [2, 'dd', true, function () { return 'cao'}];

var secondEl = arr[3]()
var secondEl = arr[1]; //var od 1 - dd vrednost



var car1 = { color: 'red', year: '2020', name: 'peugeot', model: '2008', honk: function() {return 'biiii biiip'} };
var car2 = { color: 'green', year: '2019', name: 'mazda', model: '6' };

var onomatopeja = car1.honk();
var cars = [car1, car2]
var cars = [
    {
        color: 'red',
        year: '2020',
        name: 'peugeot',
        model: '2008'
    },
    {
        color: 'green',
        year: '2019',
        name: 'mazda',
        model: '6'
    }
]

var car1Color = car1.color;*/

var car1 = {
    color: 'red',
    year: '2020',
    name: 'peugeot',
    owner: {
        firstName: 'Jovana',
        lastName: 'Peric'
    },
    model: '2008'
};

function sayHello() {
    console.log('caooo')
};

carOwnerFirstName = car1.owner.firstName;

console.log(window);
console.log(window.navigator);
console.log(window.screen);
console.log(window.location);

window.localStorage.setItem ('userAge',50)

console.log(window.history);
window.alert('caoo');
var response = windiw.confirm('da li imate vise od 18 godina');
if (response) { 
    console.log('prikazacu sadrzaj')
}
var response = windiw.prompt('Koje vam je omiljeno jelo');
window.localStorage.setItem('userFavoriteDish', response);

setTimeout(function () {
    console.log('Caooo');
}, 3000);

setInterval(function () {
    console.log('caoooo');
}, 1000);

var IntervalRef = sefInterval(function () {
    console.log('caoooo');
}, 1000);

setTimeout(function () {
    clearInterval(IntervalRef)
}, 15000);