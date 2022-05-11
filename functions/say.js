function say(words = "Howdy") { // created a default parameter
  console.log(words + '!');
}

say("hello") // => hello!
say("What it do?!") // What it do?!!
say("Getting it") // Getting it!
say(); // Howdy!