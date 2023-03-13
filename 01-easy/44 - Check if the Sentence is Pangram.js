const checkIfPangram = (sentence) => {
  for (let i = 97; i <= 122; i++) {
    let ch = String.fromCharCode(i);
    if (!sentence.includes(ch)) {
      return false;
    }
  }
  return true;
};

const checkIfPangram1 = (sentence) => {
  return new Set(sentence).size === 26;
};

const sentence = "thequickbrownfoxjumpsoverthelazydog";
console.log(checkIfPangram(sentence));
