class Book:
  def __init__(self, title):
    self.title = title

class Newspaper:
  def __init__(self, title):
    self.title = title
    
b1 = Book("Brave New World")
b2 = Book("War and Peace")
n1 = Newspaper("The Ontario Post")
n2 = Newspaper("The New York Times")

print(b1) #<__main__.Book object at 0x7fb73d3ac5b0>
print(b2.title) #War and Peace

# compare two types together
print(type(b1) == type(b2)) #True
print(type(b1) == type(n1)) #False

# use isinstance to compare a specific instance to a known type
print(isinstance(b1, Book)) #True
print(isinstance(b1, Newspaper)) #False
print(isinstance(n1, object)) #True

