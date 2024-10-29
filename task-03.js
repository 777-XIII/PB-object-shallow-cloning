const person = {
  firstName: "James",
  lastName: "Ensor",
  age: 13,
};

const addFullName = (person) => {
  return { ...person, fullName: `${person.firstName} ${person.lastName}` };
};

console.log(addFullName(person));
console.log(person);
