const findSmaller = (arr) => {
    let small = arr[0]
    let smallIndex = 0

    for (i in arr) {
        if(arr[i] < small) {
            small = arr[i]
            smallIndex = i
        }
    }
    return smallIndex 
}

const selectionSort = (arr) => {
    findSmaller(arr)
}

console.log(selectionSort([3, 5, 1, 6, 7, 12, 4 , 6]))
