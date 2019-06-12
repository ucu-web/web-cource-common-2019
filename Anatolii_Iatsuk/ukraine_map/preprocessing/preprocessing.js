XLSX = require('xlsx-style');
var fs = require('fs');


let table = XLSX.readFile('./data/ngo_2019_04_01.xlsx');
data = {};

sheetNames = table.SheetNames.filter((name) => !(['ЗАГАЛЬНА ІНФОРМАЦІЯ'].includes(name)));

for (let p = 0; p < sheetNames.length; p++) {
    const sheet = table.Sheets[sheetNames[p]];

    let range = XLSX.utils.decode_range(sheet['!ref']);
    for (let rowNum = range.s.r + 5; rowNum <= range.e.r; rowNum++) {
        // Example: Get second cell in each row, i.e. Column "B"
        let columns = [0, 4, 9, 10, 11, 12];
        let row = [];

        for (let i = 0; i < columns.length; i++) {
            let cell = sheet[XLSX.utils.encode_cell({r: rowNum, c: columns[i]})];
            if (!cell) break;
            row.push(sheet[XLSX.utils.encode_cell({r: rowNum, c: columns[i]})].v);
        }
        if (!row[0] || !/^\d+$/.test(row[0])) continue;

        let region = row[0].slice(0, 5);

        if (region in data) {
            data[region].push(row);
        } else {
            data[region] = [row];
        }
    }
}

for (let code in data) {
    let price = 0;
    let population = 0;
    let area = 0;
    let correct_number_area = 0;
    let correct_number_price = 0;
    let correct_number_population = 0;
    data[code].forEach(d => {
            if (/^-?\d+(?:[.,]\d*?)?$/.test(d[5])) {
                correct_number_price += 1;
                price += d[5];
            }
            if (/^\d+$/.test(d[3])) {
                correct_number_population += 1;
                population += d[3];
            }

            if (/^-?\d+(?:[.,]\d*?)?$/.test(d[2])) {
                correct_number_area += 1;
                area += d[2];
            }
        }
    );

    price = (correct_number_price) ? price / correct_number_price : undefined;
    population = (correct_number_population) ? population : undefined;
    area = (correct_number_area) ? area : undefined;

    if (population < 500){
        console.log(data[code]);
        throw Error;
    }
    let density = population / area;

    data[code] = [data[code][0][1], price, population, density]
}

fs.writeFile("./data/data.json", JSON.stringify(data), function (err) {
        if (err) throw err;
        console.log('complete');
    }
);