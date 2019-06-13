let XLSX = require("xlsx-style");
let fs = require("fs");
let transliterate = require("./transliterate");

preprocess_excel("./data/ngo_2019_04_01.xlsx", "./data/data.json");

function preprocess_excel(inputPath, outputPath) {
  let table = XLSX.readFile(inputPath);
  let districtsFeatures = {};

  let sheetNames = table.SheetNames.filter(
    name => name !== "ЗАГАЛЬНА ІНФОРМАЦІЯ"
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

      let districtName = transliterate.transliterate(
        row[1].split(" ")[0].toLowerCase()
      );

      if (districtName in districtsFeatures) {
        districtsFeatures[districtName].push(row);
      } else {
        districtsFeatures[districtName] = [row];
      }
    }
  }

  // calculate features of district by it subunits
  for (let districtName in districtsFeatures) {
    // average features of district
    let price = 0;
    let population = 0;
    let area = 0;
    // numbers of correct values
    let correctNumberArea = 0;
    let correctNumberPrice = 0;
    let correctNumberPopulation = 0;

    districtsFeatures[districtName].forEach(subDistrictFeatures => {
      // check if feature is correct and the add it to final
      if (/^-?\d+(?:[.,]\d*?)?$/.test(subDistrictFeatures[5])) {
        correctNumberPrice += 1;
        price += subDistrictFeatures[5];
      }
      if (/^\d+$/.test(subDistrictFeatures[3])) {
        correctNumberPopulation += 1;
        population += subDistrictFeatures[3];
      }

      if (/^-?\d+(?:[.,]\d*?)?$/.test(subDistrictFeatures[2])) {
        correctNumberArea += 1;
        area += subDistrictFeatures[2];
      }
    });

    // calculate average features for district
    price = correctNumberPrice ? price / correctNumberPrice : undefined;
    population = correctNumberPopulation ? population : undefined;
    area = correctNumberArea ? area : undefined;
    let density = population / area;

    // create name in ukrainian for printing
    let name = districtsFeatures[districtName][0][1].toLowerCase();
    name = name.charAt(0).toUpperCase() + name.slice(1);

    // update information for district
    districtsFeatures[districtName] = [name, price, population, density];
  }

  // write preprocessed data to file
  fs.writeFile(outputPath, JSON.stringify(districtsFeatures), function(err) {
    if (err) throw err;
    console.log("complete");
  });
}
