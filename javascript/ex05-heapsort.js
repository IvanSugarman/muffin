function heapSort(arr) {
    if (!arr || !Array.isArray(arr)) {
        return;
    }

    if (arr.length < 2) {
        return arr;
    }

    // 把无序数列构建成最大堆
    for (let i = Math.floor(arr.length / 2); i >= 0; --i) {
        adjustHeap(arr, i, arr.length);
    }

    for (let i = arr.length - 1; i > 0; --i) {
        // 交换元素
        [arr[0], arr[i]] = [arr[i], arr[0]];
        // 调整最大堆
        adjustHeap(arr, 0, i);
    }

    return arr;
}

/*
[1, 3, 2, 4, 6, 5, 8, 7, 9]
*/
function adjustHeap(arr, parentIndex, length) {
    let tmp = arr[parentIndex];
    // 子节点位置
    let childIndex = parentIndex * 2 + 1;

    while (childIndex < length) {
        // 如果有右子节点，右子节点大于左子节点，定位到右子节点
        if (childIndex + 1 < length && arr[childIndex + 1] > arr[childIndex]) {
            childIndex++;
        }

        // 父节点大于任何一个子节点的值
        if (tmp >= arr[childIndex]) {
            break;
        }

        /* 无序交换，单向赋值即可 */
        arr[parentIndex] = arr[childIndex];
        parentIndex = childIndex;
        childIndex = 2 * childIndex + 1;
    }

    arr[parentIndex] = tmp;
}

heapSort([1, 3, 2, 4, 6, 5, 8, 7, 9]);