function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function BubbleSort(arr, arraySetter, numberOfSortedSetter, highlighttOne, sleepTime) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        highlighttOne(j);
        await delay(sleepTime);
        if (arr[j] > arr[j + 1]) {
            highlighttOne(j);
            await delay(sleepTime);
            let tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
            arraySetter(arr);
        }
      }
    }
}

export default BubbleSort;