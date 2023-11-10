function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function BubbleSort(arr, arraySetter, numberOfSortedSetter, highlighttOne, sleepTime) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        let newN = 0;
        for (let i = 1; i < n; i++) {
            await delay(sleepTime);
            highlighttOne(i - 1);
            if (arr[i - 1] > arr[i]) {
                highlighttOne(i);
                // Swap the elements
                let temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
                arraySetter([...arr]);
                swapped = true;
                newN = i;
            }
        }
        n = newN;
        numberOfSortedSetter(n);
    } while (swapped);
    highlighttOne(-1);
}

export default BubbleSort;