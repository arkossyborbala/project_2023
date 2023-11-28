import {delay} from '../../../App.js'

async function MergeSort(arr, arraySetter, numberOfSortedSetter, highlightOne, sleepTime) {
    async function merge(left, right) {
        const result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {

            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
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
    arraySetter(mergedArray);//visszállítja a rendezetlent amikor nem számítasz rá...
    await delay(sleepTime);
    highlightOne(-1);
    return mergedArray;
}

export default MergeSort;