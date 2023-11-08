function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function BitonicSort(arr, arraySetter, numberOfSortedSetter,highlightOne, sleepTime) {
    async function bitonicMerge(arr, up, arraySetter, highlightOne, sleepTime) {
        const n = arr.length;
        if (n > 1) {
            const m = Math.floor(n / 2);
            for (let i = 0; i < m; i++) {
                if ((arr[i] > arr[i + m]) === up) {
                    // Swap elements if they are out of order
                    highlightOne(i);
                    highlightOne(i + m);
                    await delay(sleepTime);
                    const temp = arr[i];
                    arr[i] = arr[i + m];
                    arr[i + m] = temp;
                    arraySetter([...arr]);
                }
            }
            await bitonicMerge(arr.slice(0, m), up, arraySetter, highlightOne, sleepTime);
            await bitonicMerge(arr.slice(m), up, arraySetter, highlightOne, sleepTime);
        }
    }

    async function bitonicSort(arr, up, arraySetter, highlightOne, sleepTime) {
        const n = arr.length;
        if (n > 1) {
            const m = Math.floor(n / 2);
            await bitonicSort(arr.slice(0, m), true, arraySetter, highlightOne, sleepTime);
            await bitonicSort(arr.slice(m), false, arraySetter, highlightOne, sleepTime);
            await bitonicMerge(arr, up, arraySetter, highlightOne, sleepTime);
        }
    }

    await bitonicSort(arr, true, arraySetter, highlightOne, sleepTime);
}

export default BitonicSort;
