let names = ['Kurt', 'Haley', 'Rhone', 'Wit'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseNames = names[index].toUpperCase();
  upperNames.push(upperCaseNames);
  index += 1;
}

console.log(upperNames); // => [ 'KURT', 'HALEY', 'RHONE', 'WIT' ]