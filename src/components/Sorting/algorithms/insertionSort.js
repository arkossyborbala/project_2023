import {delay} from '../../../App.js'

async function InsertionSort(arr, arraySetter, numberOfSortedSetter, highlightOne, highlightTwo, sleepTime) {
    const len = arr.length;

    for (let i = 1; i < len; i++) {
        highlightTwo(i);
        numberOfSortedSetter(i);

        const key = arr[i];
        let left = 0;
        let right = i - 1;

        // Binary search for the correct position of the current element
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            highlightOne(mid);
            await delay(sleepTime);

            if (arr[mid] > key) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        // Shift elements to make space for the current element
        for (let j = i - 1; j >= left; j--) {
            arr[j + 1] = arr[j];
        }

        // Insert the current element at the correct position
        arr[left] = key;
        arraySetter([...arr]);
        await delay(sleepTime);
    }

    numberOfSortedSetter(len);
    highlightOne(-1);
    highlightTwo(-1);
}

export default InsertionSort;
