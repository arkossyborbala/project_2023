import {delay} from '../../../App.js'

async function InsertionSort(arr, arraySetter, numberOfSortedSetter, highlightOne, highlightTwo, sleepTime) {
    const len = arr.length;
    
    for (let i = 1; i < len; i++) {
        highlightTwo(i);
        numberOfSortedSetter(i);
        const key = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            highlightOne(j);
            await delay(sleepTime);

            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = key;
        arraySetter([...arr]);
        await delay(sleepTime);
    }
    numberOfSortedSetter(len);
    highlightOne(-1);
    highlightTwo(-1);
}

export default InsertionSort;
