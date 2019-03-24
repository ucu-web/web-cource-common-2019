// Works only for array of non negative numbers.
function countingSort(array) {
    if (array.length === 0) return;

    let countingArray = new Array(getMaxElement(array) + 1);
    countingArray.fill(0);

    for(let i = 0; i < array.length; ++i){
        countingArray[array[i]]++;
    }

    let totalAdded = 0;
    for (let i = 0; i < countingArray.length; ++i) {
        for (let j = 0; j < countingArray[i]; ++j) {
            array[totalAdded++] = i;
        }
    }
}

function getMaxElement(array) {
    let result = array[0];

    for (let i = 1; i < array.length; ++i) {
        if (array[i] > result) {
            result = array[i];
        }
    }

    return result;
}
