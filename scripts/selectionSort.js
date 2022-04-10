// O(n²)
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
    const newArr = []
    const lgth = arr.length
    for (let i = 0; i < lgth; i++) {
        const smallIndex = findSmaller(arr)
        newArr.push(arr[smallIndex])
        arr.splice(smallIndex, 1)
    }
    return newArr
}

console.log(selectionSort([3, 5, 1, 6, 7, 12, 4 , 6]))
