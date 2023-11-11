function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function RadixSort(arr, arraySetter, colorSetter, sleepTime) {
    const maxDigitCount = Math.max(...arr).toString().length;
    const colors = ['#FFB6C1', '#FFD700', '#87CEEB', '#98FB98', '#FFA07A', '#DDA0DD', '#20B2AA', '#F08080', '#00CED1', '#9370DB']
    
    for (let digitPlace = 0; digitPlace < maxDigitCount; digitPlace++) {
        const buckets = Array(10).fill().map(() => []);
        const color_buckets = Array(10).fill().map(() => []);

        for (let i = 0; i < arr.length; i++) {
            const digit = Math.floor(arr[i] / Math.pow(10, digitPlace)) % 10;
            buckets[digit].push(arr[i]);
            color_buckets[digit].push(colors[digit]);
        }
        
        arr = buckets.flat();
        const col_arr = color_buckets.flat();
        console.log(col_arr);
        arraySetter([...arr]);
        colorSetter([...col_arr]);
        await delay(5*sleepTime);
    }
    colorSetter(Array(arr.length).fill('#fac420'));
}

export default RadixSort;
