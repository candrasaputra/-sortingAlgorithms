function bubbleSort(array) {
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