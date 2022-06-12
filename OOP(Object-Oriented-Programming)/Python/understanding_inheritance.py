# Python OOP by Joe Marini course example
# Understanding inheritance
class Publication:
    def __init__(self, title, price):
      self.title = title
      self.price = price

class Periodical(Publication):
  def __init__(self, title, price, period, publisher):
    super().__init__(title, price)
    self.period = period
    self.publisher = publisher

class Book(Publication):
  def __init__(self, title, author, pages, price):
    super().__init__(title, price)
    self.author = author
    self.pages = pages

b1 = Book("Hello, World!", "Seyeong", 311, 29.0)

class Newspaper(Periodical):
  def __init__(self, title, publisher, price, period):
    super().__init__(title, price, period, publisher)

n1 = Newspaper("NY Times", "New York Times Company", 6.0, "Daily")

print(b1.title) # Hello, World!
print(b1.author) # Seyeong
print(b1.price, n1.price) # 29.0 6.0
