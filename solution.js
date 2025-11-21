var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function formatValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return !value;
    }
}
function getLength(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else if (Array.isArray(value)) {
        return value.length;
    }
}
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getDetails = function () {
        return "'Name: ".concat(this.name, ", Age: ").concat(this.age, "'");
    };
    return Person;
}());
function filterByRating(items) {
    return items.filter(function (item) { return item.rating >= 4; });
}
function filterActiveUsers(users) {
    return users.filter(function (user) { return user.isActive === true; });
}
function printBookDetails(book) {
    var availability = book.isAvailable ? "Yes" : "No";
}
function getUniqueValues(arr1, arr2) {
    var combined = __spreadArray(__spreadArray([], arr1, true), arr2, true);
    var unique = [];
    for (var _i = 0, combined_1 = combined; _i < combined_1.length; _i++) {
        var item = combined_1[_i];
        var isDuplicate = false;
        for (var _a = 0, unique_1 = unique; _a < unique_1.length; _a++) {
            var uniqueItem = unique_1[_a];
            if (uniqueItem === item) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            unique.push(item);
        }
    }
    return unique;
}
