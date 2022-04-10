def binary_search(arr, item):
    low = 0
    high = len(arr) - 1
    
    while low <= high:
        middle = round((low + high) / 2)
        guess = arr[middle]
        
        if guess == item:
            return middle
        if guess > item:
            high = middle - 1
        else:
            low = middle + 1
    return None
    
my_arr = [1, 3, 4, 6, 7, 20]

print(binary_search(my_arr, 3))
