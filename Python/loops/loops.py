numbers = [1, 2, 3, 4, 5]

print('== for loop ===')

for item in numbers:
    print(item)
    # 1
    # 2
    # 3
    # 4
    # 5

print('== while loop ===')

i = 0
while i < len(numbers):
    print(numbers[i])
    i += 1

