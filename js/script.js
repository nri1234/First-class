'use strict';

var phone = document.getElementById('phone');

function Phone(brand, price, color, picture) {
    this.brand = brand;
    this.price = price;
    this.color = color;
};

Phone.prototype.printInfo = function () {
    console.log("Brand: " + this.brand + "<br>" + "Color: " + this.color + "<br>" + "Price: " + this.price + "<br>" + "Extended warranty: " + this.getWarrantyCost() + "<br>" + "Total price: " + this.TotalCost() + ".");
    phone.innerHTML = phone.innerHTML + "Brand: " + this.brand + "<br>" + "Color: " + this.color + "<br>" + "Price: " + this.price + "<br>" + "Extended warranty: " + this.getWarrantyCost() + "<br>" + "Total price: " + this.TotalCost() + " <br><br>";
};
Phone.prototype.getWarrantyCost = function () {
    return this.price * 0.1;
};
Phone.prototype.TotalCost = function () {
    return this.price * 0.1 + this.price;
};
Phone.prototype.printSystemInfo = function () {
    if (this.brand === 'Aple') {
        console.log("The phone works on iOS operating system");
    } else {
        console.log("The phone works Android operating system");
    };
};

var iPhone6S = new Phone("Aple", 2250, "white");
iPhone6S.printInfo();
iPhone6S.printSystemInfo();

var SamsungGalaxyS6 = new Phone("Samsung", 1300, "black");
SamsungGalaxyS6.printInfo();
SamsungGalaxyS6.printSystemInfo();

var Oneplus5 = new Phone("Oneplus", 1600, "black");
Oneplus5.printInfo();
Oneplus5.printSystemInfo();

var Xiaomi = new Phone("Xiaomi", 500, "pink");
Xiaomi.printInfo();
Xiaomi.printSystemInfo();
