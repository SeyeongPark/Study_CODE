a = 'egg'
b = 'add'

aa = set(a) # {'g', 'e'} : make a set char except duplied value
bb = set(b) # {'a', 'd'} 

# use the tuple() function to display a readable version of the result

tuple(zip(aa,bb)) # (('g', 'a'), ('e', 'd')) : zip as same index position

# https://docs.python.org/3/tutorial/datastructures.html

# 205. Isomorphic Strings

class Solution(object):
    def isIsomorphic(self, s, t):
        return len(set(s)) == len(set(t)) == len(set(zip(s, t)))
