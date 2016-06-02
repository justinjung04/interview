/* 
Bubble Sort - O(n^2)
Selection Sort - O(n^2)
Insertion Sort - O(n^2)
Quick Sort - O(n log n) ~ O(n^2)
Merge Sort - O(n log n)
*/

const baseArray = [7, 4, 2, 5, 8, 9, 11, 3, 1, 6, 10];

const swap = (array, index1, index2) => {
	if(index1 == index2) {
		return;
	}
	
	const tmp = array[index1];
	array[index1] = array[index2];
	array[index2] = tmp;
};

const bubbleSort = array => {
	for(let i=0; i<array.length; i++) {
		let swapCount = 0;

		for(let j=0; j<array.length-i; j++) {
			if(array[j] > array[j+1]) {
				swap(array, j, j+1);
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
	for(let i=0; i<array.length; i++) {
		let minIndex = i;

		for(let j=i+1; j<array.length; j++) {
			if(array[j] < array[minIndex]) {
				minIndex = j;
			}
		}

		if(i !== minIndex) {
			swap(array, i, minIndex);
		}
	}

	console.log(array);
};

const insertionSort = array => {
	for(let i=0; i<array.length; i++) {
		for(let j=i+1; j>0; j--) {
			if(array[j] < array[j-1]) {
				swap(array, j, j-1);
			}
		}
	}

	console.log(array);
};

const quickSort = (array) => {
	let start = 0;
	let end = array.length - 1;
	let iterations = 0;

	const partition = (array, start, end) => {
		let index = start - 1;
		
		for(let i=start; i<=end; i++) {
			if(array[i] < array[end]) {
				index++;
				swap(array, i, index);
			} else if(i == end) {
				index++;
				swap(array, end, index);
			}
		}

		if(index > start + 1) {
			partition(array, start, index - 1);
		} else if(index < end - 1) {
			partition(array, index + 1, end);
		}
	};

	partition(array, start, end);
	console.log(array);
};

const mergeSort = array => {
	let output = [];

	for(let i=0; i<array.length; i++) {
		output.push([array[i]]);
	}

	const merge = (arr1, arr2) => {
		const sum = [];
		let cnt1 = 0;
		let cnt2 = 0;
		for(let i=0; i<arr1.length + arr2.length; i++) {
			if(cnt2 >= arr2.length || arr1[cnt1] < arr2[cnt2]) {
				sum.push(arr1[cnt1]);
				cnt1++;
			} else {
				sum.push(arr2[cnt2]);
				cnt2++;
			}
		}
		return sum;
	};

	while(output.length > 1) {
		const tmp = [];
		for(let i=0; i<output.length; i += 2) {
			if(i + 1 == output.length) {
				tmp.push(output[i]);
			} else {
				tmp.push(merge(output[i], output[i + 1]));
			}
		}
		output = tmp;
	}

	console.log(output[0]);
};

window.onload = () => {
	bubbleSort(baseArray.slice());
	selectionSort(baseArray.slice());
	insertionSort(baseArray.slice());	
	quickSort(baseArray.slice());
	mergeSort(baseArray.slice());
}