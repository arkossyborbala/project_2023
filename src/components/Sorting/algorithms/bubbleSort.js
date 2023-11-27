import {delay} from '../../../App.js'

async function BubbleSort(arr, arraySetter, numberOfSortedSetter, highlighttOne, highlightTwo, sleepTime) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        let newN = 0;
        for (let i = 1; i < n; i++) {
            await delay(sleepTime);
            highlighttOne(i);
            if (arr[i - 1] > arr[i]) {
                highlightTwo(-1);
                // Swap the elements
                let temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
                arraySetter([...arr]);
                swapped = true;
                newN = i;
            }
            else {
                highlightTwo(i);
            }
        }
        n = newN;
        numberOfSortedSetter(n);
    } while (swapped);
    highlighttOne(-1);
    highlightTwo(-1);
}

export default BubbleSort;