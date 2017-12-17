var iPhone6S = new Phone("Apple", 2250, "silver", "4.7 inch", "2GB");
var samsungGalaxyS6 = new Phone("Samsung", 1840, "navy", "5.1 inch", "3GB");
var onePlusOne = new Phone("OnePlus", 1020, "white", "5.5 inch", "3GB");

function Phone(brand, price, color, screen, ram){
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.screen = screen;
	this.ram = ram;

};

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". It has " + this.screen + "screen and " + this.ram + " RAM.");
};

Phone.prototype.calculateDiscount = function() {
	var newPrice = this.price * 0.85;
	console.log("If you buy this phone now you'll receive a 15% discount. The new price is " + newPrice + ".");
};

iPhone6S.printInfo();
iPhone6S.calculateDiscount();
samsungGalaxyS6.printInfo();
samsungGalaxyS6.calculateDiscount();
onePlusOne.printInfo();
onePlusOne.calculateDiscount();