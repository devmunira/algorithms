const array = [500,200,300,100,700,5000];


function findSmallestItem(array){
    let samllestItem  = array[0];
    let samllestIndex = 0;

    for(let i = 1; i <= array.length ; i++){
        if(array[i] < samllestItem){
            samllestItem = array[i]
            samllestIndex = i;
        }
    }
    return samllestIndex;
}


// Create a new array by desc order Big O(n*n)
function selectionSort(array){
    let newArray = [];
    let copyArray = [...array]
    for(let i = 0 ; i <= array.length - 1 ; i++){
        let index = findSmallestItem(copyArray)
        newArray.push(copyArray.splice(index , 1)[0]) 
    }

    return newArray;
}


// Get Generated Output
console.log(selectionSort(array))