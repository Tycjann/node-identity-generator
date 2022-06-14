const fs = require('fs');

let firstName = '';
let lastName = '';
let email = '';
const people = [];

const firstNameFemale = [
  'Anna',
  'Kasia',
  'Basia',
  'Zosia',
  'Krysia',
  'Monia',
];
const firstNameMale = [
  'Adam',
  'Michał',
  'Bronek',
  'Wiesiek',
  'Janek',
  'Józek',
];
const lastNameAll = [
  'Babinicz',
  'Wątroba',
  'Gruszka',
  'Tofu',
  'Wiadro',
  'Marchewka',
  'Jelitko',
  'Kłaczek',
  'Kalarepka',
  'Psikawka',
  'Salcesonik',
]

const getRandomItem = (items) => {
  return items[Math.floor(Math.random() * items.length)];
};

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomPhoneNumber = () => {
  let phone = '';
  for (let index = 0; index < 9; index++) {
    phone += getRandomInteger(0, 9);
  }
  return phone;
}

for (let index = 0; index < 20; index++) {  
  (getRandomItem(['M', 'F']) === 'M') ? firstName = getRandomItem(firstNameMale) : firstName = getRandomItem(firstNameFemale);
  
  lastName = getRandomItem(lastNameAll);

  email = (firstName + '.' + lastName) + '@gmail.com';

  people.push(
    {
      firstName: firstName,
      lastName: lastName,
      email: email.toLowerCase(),
      age: getRandomInteger(18, 78),
      phoneNumber: getRandomPhoneNumber(),
    }
  );
}
const myJSON = JSON.stringify(people);

fs.writeFile('people.txt', myJSON, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

// console.log(myJSON);