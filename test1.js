const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const procVowel = (wordsList) => {
  const vowelList = wordsList.filter(
    (el) => el === "a" || el === "i" || el === "u" || el === "e" || el === "o"
  );
  const vowel = vowelList
    .sort((a, b) => vowelList.indexOf(a) - vowelList.indexOf(b))
    .join("");
  return vowel;
};

const procConsonant = (wordsList) => {
  const consonantList = wordsList.filter(
    (el) => el !== "a" && el !== "i" && el !== "u" && el !== "e" && el !== "o"
  );
  const consonant = consonantList
    .sort((a, b) => consonantList.indexOf(a) - consonantList.indexOf(b))
    .join("");
  return consonant;
};

rl.question("Input one line of words (S) : ", (words) => {
  const wordsWithoutSpaceList = words
    .replace(/\s/g, "")
    .split("")
    .map((el) => el.toLowerCase());

  const vowel = procVowel(wordsWithoutSpaceList);
  const consonant = procConsonant(wordsWithoutSpaceList);

  console.log("Vowel Characters :");
  console.log(vowel);
  console.log("Consonant Characters :");
  console.log(consonant);
});