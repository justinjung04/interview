/* 
Bubble Sort - O(N^2)
Selection Sort - O(N^2)
Insertion Sort - O(N^2)
Quick Sort - O(N^2) ~ O(Nlog(N))
Merge Sort - O(Nlog(N))
*/

const baseArray = [7, 4, 2, 5, 8, 9, 12, 3, 1, 6, 11, 10];

const bubbleSort = array => {
	for(let i=0; i<array.length-1; i++) {
		let swapCount = 0;
		for(let j=0; j<array.length-1-i; j++) {
			if(array[j] > array[j+1]) {
				const tmp = array[j];
				array[j] = array[j+1];
				array[j+1] = tmp;
				swapCount++;
			}
		}
		if(swapCount == 0) {
			break;
		}
	}
	console.log(array);
};

const selectionSort = array => {
	for(let i=0; i<array.length-1; i++) {
		let minIndex = i;
		for(let j=i+1; j<array.length-1; j++) {
			if(array[j] < array[minIndex]) {
				minIndex = j;
			}
		}
		if(i !== minIndex) {
			const tmp = array[i];
			array[i] = array[minIndex];
			array[minIndex] = tmp;
		}
	}
	console.log(array);
};

const mergeSort = array => {

	const merge = (sub1, sub2) => {
		for(let i=0; i<sub1.length+sub2.length-1; i++) {

		}
	};
};

window.onload = () => {
	bubbleSort(baseArray);
	selectionSort(baseArray);
}