let XLSX = require("xlsx-style");
let fs = require("fs");
let transliterate = require("./transliterate");

preprocess_excel("./data/ngo_2019_04_01.xlsx", "./data/data.json");

function preprocess_excel(input_path, output_path) {
  let table = XLSX.readFile(input_path);
  let districtFeatures = {};

  let sheetNames = table.SheetNames.filter(
    name => !["ЗАГАЛЬНА ІНФОРМАЦІЯ"].includes(name)
  );

  for (let sheetNumber = 0; sheetNumber < sheetNames.length; sheetNumber++) {
    const sheet = table.Sheets[sheetNames[sheetNumber]];

    let range = XLSX.utils.decode_range(sheet["!ref"]);
    for (let rowNum = range.s.r + 5; rowNum <= range.e.r; rowNum++) {
      // column to extract from excel
      let columns = [0, 4, 9, 10, 11, 12];
      let row = [];

      for (let i = 0; i < columns.length; i++) {
        let cell = sheet[XLSX.utils.encode_cell({ r: rowNum, c: columns[i] })];
        if (!cell) break;
        row.push(sheet[XLSX.utils.encode_cell({ r: rowNum, c: columns[i] })].v);
      }
      if (!row[0] || !/^\d+$/.test(row[0])) continue;

      let region = transliterate.transliterate(
        row[1].split(" ")[0].toLowerCase()
      );

      if (region in districtFeatures) {
        districtFeatures[region].push(row);
      } else {
        districtFeatures[region] = [row];
      }
    }
  }

  for (let districtName in districtFeatures) {
    let price = 0;
    let population = 0;
    let area = 0;
    let correctNumberArea = 0;
    let correctNumberPrice = 0;
    let correctNumberPopulation = 0;

    districtFeatures[districtName].forEach(d => {
      if (/^-?\d+(?:[.,]\d*?)?$/.test(d[5])) {
        correctNumberPrice += 1;
        price += d[5];
      }
      if (/^\d+$/.test(d[3])) {
        correctNumberPopulation += 1;
        population += d[3];
      }

      if (/^-?\d+(?:[.,]\d*?)?$/.test(d[2])) {
        correctNumberArea += 1;
        area += d[2];
      }
    });

    price = correctNumberPrice ? price / correctNumberPrice : undefined;
    population = correctNumberPopulation ? population : undefined;
    area = correctNumberArea ? area : undefined;
    let name = districtFeatures[districtName][0][1].toLowerCase();
    name = name.charAt(0).toUpperCase() + name.slice(1);

    if (population < 500) {
      console.log(districtFeatures[districtName]);
      throw Error;
    }
    let density = population / area;

    districtFeatures[districtName] = [name, price, population, density];
  }

  fs.writeFile(output_path, JSON.stringify(districtFeatures), function(err) {
    if (err) throw err;
    console.log("complete");
  });
}
