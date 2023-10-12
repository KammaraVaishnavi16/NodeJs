function isAdult(user) {
    return user.age >= 18;
}
var Vaishnavi = {
    name: "vaishnavi",
    age: 25,
};
var isVaishnavi = isAdult(Vaishnavi);
console.log("Is ".concat(Vaishnavi.name, " an adult? ").concat(isVaishnavi));
