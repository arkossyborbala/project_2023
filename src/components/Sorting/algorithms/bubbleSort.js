function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function BubbleSort(array, numberOfSortedSetter, highlighttOne, sleepTime) {
    for(let i = 0; i < array.length; i++) {
        numberOfSortedSetter(i);
        await delay(sleepTime);
    }
}
export default BubbleSort;