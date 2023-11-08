function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function HeapSort(arr, arraySetter, highlightOne, sleepTime) {
    // Build a max heap
    async function heapify(arr, n, i) {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== i) {
            highlightOne(i);
            await delay(sleepTime);

            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            arraySetter([...arr]);

            await heapify(arr, n, largest);
        }
    }

    const n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(arr, n, i);
    }

    // Heap sort
    for (let i = n - 1; i >= 0; i--) {
        highlightOne(i);
        await delay(sleepTime);

        [arr[0], arr[i]] = [arr[i], arr[0]];
        arraySetter([...arr]);

        await heapify(arr, i, 0);
    }
}

export default HeapSort;
