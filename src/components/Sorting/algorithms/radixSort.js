function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function RadixSort(arr, arraySetter, highlightOne, sleepTime) {
    const maxDigitCount = Math.max(...arr).toString().length;

    for (let digitPlace = 0; digitPlace < maxDigitCount; digitPlace++) {
        const buckets = Array(10).fill().map(() => []);

        for (let i = 0; i < arr.length; i++) {
            const digit = Math.floor(arr[i] / Math.pow(10, digitPlace)) % 10;
            buckets[digit].push(arr[i]);
            await delay(sleepTime);
        }

        arr = buckets.flat();
        arraySetter([...arr]);

        for (let i = 0; i < 10; i++) {
            highlightOne(i); // Highlight each bucket
            await delay(sleepTime);
        }
    }
}

export default RadixSort;
