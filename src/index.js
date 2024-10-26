module.exports = function reverse(n) {
    const str = n.toString();
    return +(str.charAt(0) === "-"
        ? str.slice(1).split("").reverse().join("")
        : str.split("").reverse().join(""));
};
