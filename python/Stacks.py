class Stack(object):
    def __init__(self):
        global ls
        #new list of size 10
        ls = [0] * 100

    def push(self, item):
        for i in range(0, len(ls)-1):
            if(ls[i] == 0):
                ls[i]=item
                return

    def pop(self):
        for i in range(len(ls)-1, -1, -1):
            if(ls[i] is not 0):
                
                temp=ls[i]
                ls[i]=0
                return temp
        return "empty list"
            

    def peek(self):
        for i in reversed(ls):
            if i is not 0:
                return i
        return "empty list"

    def isEmpty(self):
        for i in ls:
            if(i is not 0):
                return False
        return True
    def size(self):
        for i in range(0, len(ls)-1):
            if(ls[i]==0):
                return i
        return "empty list"

    
        
        

s = Stack()
print(s.isEmpty())
s.push(4)
s.push("dog")
print(s.peek())
s.push(True)
print(s.size())
print(s.isEmpty())
s.push(8.4)
print(s.pop())
print(s.pop())
print(s.size())
