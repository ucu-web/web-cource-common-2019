export function saveToJson(data, filename) {
    data = JSON.stringify(data);
    const blob = new Blob([data], {type: "application/json;charset=utf-8"});
    // saveAs(blob, filename+".txt");
}