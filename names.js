let names = ['Kurt', 'Haley', 'Rhone', 'Wit', 'Kirra'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Kirra') { // we could rewrite with a negated if condtional to
    continue;                     // get rid of teh continue
  }

  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName)
}

console.log(upperNames); // => [ 'KURT', 'HALEY', 'RHONE', 'WIT' ]