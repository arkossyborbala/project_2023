
import { Box } from '@mui/system';

export default function ExplanatoryText({ index }) {
  const texts = [
    '<p> This is merge sort.</p>' +
    '<p> In computer science, merge sort (also commonly spelled mergesort) is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the implementation preserves the input order of equal elements in the sorted output.</p> Mergesort is a divide and conquer algorithm that was invented by John von Neumann in 1945.</p>' + 
    '<p> An example of merge sort. First divide the list into the smallest unit (1 element), then compare each element with the adjacent list to sort and merge the two adjacent lists. Finally all the elements are sorted and merged. See the <a href="https://miro.medium.com/v2/0*K7cD17vfL7FdTTLK.gif" target="_blank">example</a>.' +
    '<p> <img src="/merge_sort_image.png" alt="Merge Sort" />'+
    '<p> A recursive merge sort algorithm used to sort an array of 7 integer values. These are the steps a human would take to emulate merge sort (top-down).' +
    '<p> Learn more about Merge Sort on <a href="https://en.wikipedia.org/wiki/Merge_sort" target="_blank">Wikipedia</a>.</p>',

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
    ' Here you can see list plotted in Cartesion coordiante system using <a href="https://upload.wikimedia.org/wikipedia/commons/3/37/Bubble_sort_animation.gif" target="_blank">bubble sorting</a>.</p>'
  ];

  return (
    <Box component="span" sx={{ display: 'block' }}>
      <div dangerouslySetInnerHTML={{ __html: texts[index] }} />
    </Box>
  );
}
