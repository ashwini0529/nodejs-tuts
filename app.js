var flight = require ('./flight');

var pdxlax = {
	number : 847,
	origin : 'PDX',
	destination : 'LAX'
};

var pl = flight.create(pdxlax);
pl.triggerDepart();
pl.triggerArrive()
var ausdca = {
	number : 341,
	origin : 'AUS',
	destination  : 'DCA'
};

var ad = flight.create(ausdca);
ad.triggerArrive();
ad.triggerDepart();
console.log(ad.getInformation());
console.log(pl.getInformation());

console.log(flight.getCount());
console.log(flight.getDestinations());