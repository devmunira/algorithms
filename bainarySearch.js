// Sorted Number Algoritms
const array = [];
for (let i = 0; i <= 10000000; i++) {
    array.push(i);
}

let i = 0;

function binarySearch(item, low = 0, high = array.length - 1) {
    if (low > high) {
        return false;
    }
    i++;
    const mid = Math.floor((low + high) / 2);
    const guess = array[mid];

    if (guess === item) {
        console.log(`The number ${item} was found at index ${i}.`);
        return mid;
    } else if (guess < item) {
        return binarySearch(item, mid + 1, high);
    } else {
        return binarySearch(item, low, mid - 1);
    }
}

const targetNumber = 9999999;
const index = binarySearch(targetNumber);

if (index !== false) {
    console.log(`The number ${targetNumber} was found at index ${index}.`);
} else {
    console.log(`The number ${targetNumber} was not found in the array.`);
}

// UnSorted Number Binary Search
const unSortedArray = [
    5,
    36,
    86,
    47,
    952,
    258
]

function unSortedArrayBinarySearch(array, target, low = 0, high = unSortedArray.length - 1) {
    if (low > high) {
        return false;
    };  
    let i = 1;
    array = array.sort((a , b) => a -b)
    while (low <= high) {
        i++
        let mid = Math.floor((low + high) / 2)
        let guess = array[mid]
        if(guess == target){
            console.log(`The number ${target} was found it's need to retrive ${i}.`);
            return mid;
        }else if(guess < target){
            return unSortedArrayBinarySearch(array,target,mid+1,high)
        }else{
            return unSortedArrayBinarySearch(array,target,low,mid-1)         
        }
    }
}


const target = 36;
const ind = unSortedArrayBinarySearch(unSortedArray, target);

if (ind !== false) {
    console.log(`The number ${target} was found at index ${ind}.`);
} else {
    console.log(`The number ${target} was not found in the array.`);
}

