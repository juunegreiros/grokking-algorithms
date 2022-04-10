const binarySearch = (list, item) => {
    let low = 0;
    let high = list.length - 1

    while(low <= high) {
        const middle = (low + high) / 2
        const guess = list[middle]
        
        if(guess === item) {
            return middle
        } else if(guess < item) {
            low = middle + 1
        } else {
            high = middle - 1
        }
    }
    return none
}

const list = [1, 2, 3, 4, 5, 6, 7]
const item = 5

console.log(binarySearch(list, item))
