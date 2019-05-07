function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function bubble_sort(arr){
    let swapped = true;
    while(swapped){
        swapped = false;
        for(let i = 0; i < arr.length; i++){
            if (arr[i] > arr[i + 1]){
                swap(arr, i, i + 1);
                swapped = true;
            }
        }
    }
}

function selection_sort(arr){
    for (let i = 0; i < arr.length - 1; i++){
        let min = i;
        for (let j = i; j < arr.length; j++){
            if (arr[j] < arr[min]){
                min = j;
            }
        }
        swap(arr, min, i);
    }
}

function insertion_sort(arr){
    let i = 1;
    while(i < arr.length){
        let j = i;
        while(j > 0 && arr[j-1] > arr[j]){
            swap(arr, j, j-1);
            j --;
        }
        i ++;
    }
}

function merge(left, right){
    let result = [];
    let right_index = 0, left_index = 0;
    while (right_index < right.length && left_index < left.length){
        if (left[left_index] < right[right_index]){
            result.push(left[left_index]);
            left_index ++;
        }
        else{
            result.push(right[right_index]);
            right_index ++;
        }
    }
    result = result.concat(right.slice(right_index, right.length));
    result = result.concat(left.slice(left_index, left.length));
    return result;
}

function merge_sort(arr){
    if (arr.length < 2){
        return arr;
    }
    let half = Math.floor(arr.length / 2);
    let left = merge_sort(arr.slice(0, half));
    let right = merge_sort(arr.slice(half, arr.length));
    return merge(left, right);
}

function quick_sort(arr, p, r){
    if (p < r){
        let q = partition(arr, p, r);
        quick_sort(arr, p, q-1);
        quick_sort(arr, q+1, r);
    }
}

function partition(arr, p, r){
    let x = arr[r];
    let i = p - 1;
    for (let j = p; j < r; j++){
        if (arr[j] <= x){
            i++;
            swap(arr,i, j);
        }
    }
    swap(arr, r, i + 1);
    return i + 1;
}

function randomized_quick_sort(arr, p, r){
    if (p < r){
        let q = randomized_partition(arr, p, r);
        quick_sort(arr, p, q-1);
        quick_sort(arr, q+1, r);
    }
}

function randomized_partition(arr, p, r){
    let i = Math.floor(Math.random() * (r)) + p;  //including???
    swap(arr, r, i);
    return partition(arr, p, r);
}

function counting_sort(arr){
    let count = new Array(Math.max.apply(null, arr) + 1).fill(0);
    let res = [];
    for (let i = 0; i < arr.length; i ++){
        count[arr[i]]++;
    }
    for(let i = 0; i < count.length; i++){
        while(count[i] > 0) {
            res.push(i);
            count[i]--;
        }
    }
    return res;
}

arr = [1,4,2,5, 3,10,21, 11];
console.log(counting_sort(arr));
console.log(arr);