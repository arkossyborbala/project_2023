import {delay} from '../../../App.js'

async function QuickSort(arr, arraySetter, numberOfSortedSetter, highlighttOne, sleepTime) {
    async function partition(low, high) {
        let pivot = arr[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            highlighttOne(j);
            await delay(sleepTime);

            if (arr[j] < pivot) {
                i++;
                highlighttOne(i);
                await delay(sleepTime);
                // Swap arr[i] and arr[j]
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
                arraySetter(arr);
            }
        }

        // Swap arr[i + 1] and arr[high] (pivot)
        let tmp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = tmp;
        arraySetter(arr);

        return i + 1;
    }

    async function quickSort(low, high) {
        if (low < high) {
            let pivotIndex = await partition(low, high);
            await quickSort(low, pivotIndex - 1);
            await quickSort(pivotIndex + 1, high);
        }
    }

    await quickSort(0, arr.length - 1);
}

export default QuickSort;