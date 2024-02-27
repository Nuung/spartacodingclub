var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make) {
        this.make = make;
    }
    Vehicle.prototype.start = function () {
        console.log("".concat(this.make, " is starting"));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model) {
        var _this = _super.call(this, make) || this; // 부모 클래스의 생성자 호출
        _this.model = model;
        return _this;
    }
    Car.prototype.displayInfo = function () {
        console.log("Make: ".concat(this.make, ", Model: ").concat(this.model));
    };
    return Car;
}(Vehicle));
var myCar = new Car("Toyota", "Camry");
myCar.start(); // Toyota is starting
myCar.displayInfo(); // Make: Toyota, Model: Camry
