type User = {
  name: String;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

const Vaishnavi: User = {
  name: "vaishnavi",
  age: 25,
};

const isVaishnavi = isAdult(Vaishnavi);
console.log(`Is ${Vaishnavi.name} an adult? ${isVaishnavi}`);
