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
// Problem 2
function getLength(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else if (Array.isArray(value)) {
        return value.length;
    }
}
console.log(getLength("Hello")); // Output: 5
console.log(getLength([1, 2, 3, 4, 5])); // Output: 5
