function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function InsertionSort(arr, arraySetter, highlightOne, sleepTime) {
    const len = arr.length;
    
    for (let i = 1; i < len; i++) {
        const key = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            highlightOne(j + 1);
            await delay(sleepTime);

            arr[j + 1] = arr[j];
            arraySetter([...arr]);

            j--;
        }
        
        arr[j + 1] = key;
        arraySetter([...arr]);
    }
}

export default InsertionSort;
