const сyrillicToLatin = {
  й: "i",
  ц: "ts",
  у: "u",
  к: "k",
  е: "e",
  н: "n",
  г: "h",
  ш: "sh",
  щ: "shch",
  з: "z",
  х: "kh",
  і: "i",
  ф: "f",
  в: "v",
  а: "a",
  п: "p",
  р: "r",
  о: "o",
  л: "l",
  д: "d",
  ж: "zh",
  э: "e",
  я: "ia",
  ч: "ch",
  с: "s",
  м: "m",
  и: "y",
  т: "t",
  є: "ie",
  ї: "ii",
  б: "b",
  ю: "ui",
};

function transliterate(word) {
  if (!word) return "";
  return word
    .split("")
    .map(char => сyrillicToLatin[char])
    .join("");
}

module.exports.transliterate = transliterate;
