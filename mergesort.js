function split(wholeArray) {
    /* your code here to define the firstHalf and secondHalf arrays */
    let firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length / 2));
    let secondHalf = wholeArray.slice(Math.floor(wholeArray.length / 2));
    return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
    //<---using recursion -->
    // //base case
    // if (arr1.length === 0) return mergedArr.concat(arr2);
    // if (arr2.lenght === 0) return mergedArr.concat(arr1);
    // //recursion and return the merged and sorted array
    // mergedArr.push(arr1[0] > arr2[0] ? arr2.shift() : arr1.shift());
    // return merge(arr1, arr2, mergedArr);

    let mergedArr = [];
    let leftIdx = 0;
    let rightIdx = 0;
    while (leftIdx < arr1.length && rightIdx < arr2.length) {
        if (arr1[leftIdx] > arr2[rightIdx]) mergedArr.push(arr2[rightIdx++]);
        else mergedArr.push(arr1[leftIdx++]);
    }
    if (leftIdx === arr1.length) {
        mergedArr = mergedArr.concat(arr2.slice(rightIdx));
    } else mergedArr = mergedArr.concat(arr1.slice(leftIdx));
    return mergedArr;
}

function mergeSort(array) {
    if (array.length < 2) return array;
    let splitedArray = split(array);
    return merge(mergeSort(splitedArray[0]), mergeSort(splitedArray[1]));
}

console.log(mergeSort([2, 7, 4, 2, 1, 3, 5]));