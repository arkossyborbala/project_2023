import { Box } from '@mui/system';

export default function ExplanatoryText({ index }) {
  const texts = [
    '<p> This is merge sort.</p>' +
    '<p> In computer science, merge sort (also commonly spelled mergesort) is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the implementation preserves the input order of equal elements in the sorted output.</p> Mergesort is a divide and conquer algorithm that was invented by John von Neumann in 1945.</p>' + 
    '<p> An example of merge sort. First divide the list into the smallest unit (1 element), then compare each element with the adjacent list to sort and merge the two adjacent lists. Finally all the elements are sorted and merged. See the <a href="https://miro.medium.com/v2/0*K7cD17vfL7FdTTLK.gif" target="_blank">example</a>.' +
    '<p> <img src="/https://github.com/arkossyborbala/project_2023/blob/main/public/merge_sort_image.png" alt="Merge Sort" />'+
    '<p> A recursive merge sort algorithm used to sort an array of 7 integer values. These are the steps a human would take to emulate merge sort (top-down).' +
    '<p> Learn more about Merge Sort on <a href="https://en.wikipedia.org/wiki/Merge_sort" target="_blank">Wikipedia</a>.</p>'+
    '<p> Here you can see an animation of the Merge Sort algorithm:</p>' +
    '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=ZRPoEKHXTJg&ab_channel=TimoBingmann" frameborder="0" allowfullscreen></iframe>',
    '<p> This is quick sort.</p>' +
    '<p> Quicksort is a divide and conquer algorithm.Quicksort first divides a large array into two smallersub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays.' +
    '<p>  The steps are:' +
    '<p>    1. Pick an element, called a pivot, from the array.' +
    '<p>    2. Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.' +
    '<p>    3. Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.' +
    '<p> Animated visualization of the quicksort algorithm. The horizontal lines are pivot values.'+
    ' Here you can see the <a href="https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif" target="_blank">quicksort example</a>.</p>',
    '<p>This is bubble sort.</p>' +
    '<p>Bubble sort is a simple and intuitive sorting algorithm used to arrange elements in a specific order within a list or array. It works by repeatedly comparing adjacent elements and swapping them if they are in the wrong order. The algorithm derives its name from the way smaller elements "bubble" to the top of the list during each pass. It operates by comparing adjacent elements in the list and swapping them if they are out of order.</p>' +
    '<p>The algorithm continues this process for each element in the list, iterating through it multiple times until no more swaps are needed. It is particularly useful for small lists or nearly sorted data, but it quickly becomes inefficient for large datasets. While bubble sort is not typically used in production code due to its inefficiency, understanding its basic principles can be valuable for learning about sorting algorithms and computer science concepts.</p>' +
    '<p> Animated visualization of the quicksort algorithm. The horizontal lines are pivot values. </p>'+
    ' Here you can see list plotted in Cartesion coordiante system using <a href="https://upload.wikimedia.org/wikipedia/commons/3/37/Bubble_sort_animation.gif" target="_blank">bubble sorting</a>.</p>',
    '<p>This is radix sort.</p>'+
    '<p>In computer science, RADIX SORT is a non-comparative integer sorting algorithm that sorts data with integer keys by grouping keys by the individual digits which share the same significant position and value. A positional notation is required, but because integers can represent strings of characters (e.g., names or dates) and specially formatted floating point numbers, radix sort is not limited to integers.</p>'+
    '<p>Efficiency.</p>'+
    '<p>The topic of the efficiency of radix sort compared to other sorting algorithms is somewhat tricky and subject to quite a lot of misunderstandings. Whether radix sort is equally efficient, less efficient or more efficient than the best comparison-based algorithms depends on the details of the assumptions made.</p>'+
    '<p> Animated visualization of the radix sort algorithm.'+
    ' Here you can see the <a href="https://i.makeagif.com/media/7-17-2016/hlfsiC.gif" target="_blank">radix sort example</a>.</p>',
    '<p>This is insertion sort.</p>'+
    '<p>Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.</p>'+
    '<p> Animated visualization of the insertion sort algorithm.'+
    '<p> Here you can see the <a href="https://upload.wikimedia.org/wikipedia/commons/4/42/Insertion_sort.gif" target="_blank"> non-number insertion sort example</a>.</p>'+
    '<p> Here you can see the <a href="https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif" target="_blank"> number insertion sort example</a>.</p>',
    '<p>This is bitonic sort.</p>'+
    '<p> Bitonic sort is a comparison-based sorting algorithm commonly used in parallel systems and hardware implementations. Bitonic sort is a comparison-based sorting algorithm commonly used in parallel systems and hardware implementations. </p>' +
    '<p>Bitonic sort consists of the following steps: </p>'+
    '<p>1. Creating Increasing Bitonic Sequences:</p>'+
 
    '<p>   - The input sequence is divided into two parts. </p>'+
    '<p>   - One part is used to create an increasing sequence, while the other part forms a decreasing sequence.</p>'+
    '<p>2. Merging Bitonic Sequences: </p>'+
    '<p>   - Bitonic sequences are recursively merged. </p>'+
    '<p>   - Initially, the sequence is split into two parts, and each part is independently sorted in ascending or descending order.</p>'+
    '<p>   - Finally, the sorted segments are pairwise merged, ensuring one segment is in increasing order and the other in decreasing order.</p>'+
    '<p>3. Writing Back the Results: </p>'+
    '<p>   - After the last merge, the result is written back into the original input sequence.</p>'+
    '<p> Here you can see <a href="https://upload.wikimedia.org/wikipedia/commons/9/98/Batcher_Bitonic_Mergesort_for_eight_inputs.svg" target="_blank"> a bitonic sort network with eight inputs.</a>.</p>',
    '<p>This is heap sort.</p>'+
    '<p>Heapsort is a comparison-based sorting algorithm. Heapsort can be thought of as an improved selection sort: like that algorithm, it divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element and moving that to the sorted region. The improvement consists of the use of a heap data structure rather than a linear-time search to find the maximum.</p>'+
    '<p> Here you can see the <a href="https://upload.wikimedia.org/wikipedia/commons/1/1b/Sorting_heapsort_anim.gif" target="_blank"> non-number heap sort example</a>.</p>'+
    '<p> Here you can see the <a href="https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif" target="_blank"> number heap sort example</a>.</p>',
  ];

  return (
    <Box component="span" sx={{ display: 'block' }}>
      <div dangerouslySetInnerHTML={{ __html: texts[index] }} />
    </Box>
  );
}