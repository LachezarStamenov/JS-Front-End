
function substringFinder(substr, text) {
  let words = text.split(" ");
  let match = false;
  for (const word of words) {
    if (word.toLowerCase() === substr.toLowerCase()) {
      match = true;
      break;
    }
  }
  if (match) {
    console.log(substr);
  } else {
    console.log(`${substr} not found!`);
  }
}

substringFinder("javascript", "JavaScript is the best programming language");

substringFinder("python", "JavaScript is the best programming language");