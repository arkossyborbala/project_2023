function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function MergeSort(arr, arraySetter, numberOfSortedSetter, highlightOne, sleepTime) {
    async function merge(left, right) {
        const result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            highlightOne(leftIndex);
            highlightOne(right.length + rightIndex);
            await delay(sleepTime);

            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    }

    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    const sortedLeft = await MergeSort(left, arraySetter, numberOfSortedSetter, highlightOne, sleepTime);
    const sortedRight = await MergeSort(right, arraySetter, numberOfSortedSetter, highlightOne, sleepTime);

    const mergedArray = await merge(sortedLeft, sortedRight);
    arraySetter(mergedArray);

    return mergedArray;
}

export default MergeSort;