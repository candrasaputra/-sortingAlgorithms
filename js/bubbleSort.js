// SOLUTION 1 : Non recursive
function bubbleSort(array) {
    let isNotSorted = true;
    while (isNotSorted){
        isNotSorted = false;

        for (let i = 0; i < array.length; i++) {
            let tmp;

            if (array[i] > array[i+1]) {
                tmp = array[i+1];
                array[i+1] = array[i];
                array[i] = tmp;

                isNotSorted = true;
            }
        }
    }

    return array;
}

// SOLUTION 2 : Using recursive
function bubbleSortRecursive(array) {
    let length  = array.length;
    let isNotSorted = true;
    let tmp;

    for (let i = 0; i < length; i++) {
        if (array[i] > array[i+1]) {
            tmp = array[i];
            array[i] = array[i+1];
            array[i+1] = tmp;

            isNotSorted = false;
        }
    }

    if (isNotSorted) {
        return array;
    } else {
        return bubbleSort(array);
    }
}

console.log(bubbleSort([6,8,1,4,3,2,1]));
console.log(bubbleSortRecursive([6,8,1,4,3,2,1]));