def find_smaller(arr):
    small = arr[0]
    small_index = 0
    for i in range(1, len(arr)):
        if arr[i] < small:
            small = arr[i]
            small_index = i
    return small_index
    
def selection_sort(arr):
    newArr = []
    for i in range(len(arr)):
        small_index = find_smaller(arr)
        newArr.append(arr.pop(small_index))
    return newArr
    
print(selection_sort([2, 4, 1, 6, 4, 12, 5]))
