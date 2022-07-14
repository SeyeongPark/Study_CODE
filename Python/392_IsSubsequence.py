class Solution(object):
    def isIsomorphic(self, s, t):
        s = "egg"
        t = "add"
        return len(set(s)) == len(set(t)) == len(set(zip(s, t)))