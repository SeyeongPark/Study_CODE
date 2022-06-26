tuple = (1,2,('3','4'),5,'banana',5)

# count() => "how many (value) have in the tuple? "
print(tuple.count(2)) #1
print(tuple.count(5)) #2

print(tuple.count(-1)) #0

print(tuple) #(1, 2, 3, 4, 'banana')
print(len(tuple)) #5

print(type(tuple)) #<class 'tuple'>
print(type(tuple[1])) #<class 'int'>
print(type(tuple[4])) #<class 'str'>


# value in tuple =>"does the tuple have the value?"
print('banana' in tuple) # true
print(3 in tuple) # False