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

console.log(bubbleSort([6,8,1,4,3,2,1]));