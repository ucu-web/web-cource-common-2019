var testArray = [ 331, 454, 230, 34, 343, 45, 59, 453, 345, 231, 9 ];

function radixBucketSort (arr) {
    let radix, radixKey, currBucket;
    let radices = {}, buckets = {};

    let len2 = 10;
    for (let idx1 = 0;idx1 < arr.length;idx1++) {
        radices[arr[idx1].toString().length] = 0;
    }

    for (radix in radices) {
        for (let idx1 = 0;idx1 < arr.length;idx1++) {
            if (arr[idx1].toString().length >= radix) {
                radixKey = arr[idx1].toString()[arr[idx1].toString().length - radix];
                if (!buckets.hasOwnProperty(radixKey)) {
                    buckets[radixKey] = [];
                }
                buckets[radixKey].push(arr[idx1]);
            } else {
                if (!buckets.hasOwnProperty('0')) {
                    buckets['0'] = [];
                }
                buckets['0'].push(arr[idx1]);
            }
        }
        let idx1 = 0;
        for (let idx2 = 0;idx2 < len2;idx2++) {
            if (buckets[idx2] != null) {
                currBucket = buckets[idx2];
                let len1 = currBucket.length;
                for (let idx3 = 0; idx3 < len1;idx3++) {
                    arr[idx1++] = currBucket[idx3];
                }
            }
        }
        buckets = {};
    }
}
radixBucketSort(testArray);
console.log(testArray);