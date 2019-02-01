// bubbleSort.js
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];

for (let i = list.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (list[j] > list[j + 1]) {
            let temp = list[j];
            list[j] = list[j+1];
            list[j+1] = temp;
        }
    }
}

console.log(list); // => 0,1,2,4,7,8,9,13,16

// opgave 1.3
function binarySearch(arr, i) {
    var mid = Math.floor(arr.length / 2);


    if (arr[mid] === i) {
        return arr[mid];
    } else if (arr[mid] < i && arr.length > 1) {
        return binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
    } else if (arr[mid] > i && arr.length > 1) {
        return binarySearch(arr.splice(0, mid), i);
    } else {
        console.log('The input', i, "is not here");
        return -1;
    }
}

console.log(binarySearch(list, 7))