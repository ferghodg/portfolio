class Queue:
    def __init__(self):
        self.maxSize=10
        self.listSize=10
        self.items=self.listSize*[0]
        self.startPointer=0
        self.endPointer=0
        
    def add(self, item):
        if((self.endPointer-self.startPointer)<self.maxSize):
            if(not self.endPointer>=self.listSize):
                self.items[self.endPointer]=item
            else:
                self.items.append(item)
                self.listSize+=1
            self.endPointer+=1
        else:
            return "Queue full"
    def report(self):
        return self.items
    def delete(self):
        toDelete=self.items[self.startPointer]
        self.items[self.startPointer]=0
        self.startPointer+=1
        return toDelete
    def size(self):
        return len(self.items)
        


queue=Queue()
print(queue.size())
queue.add("first item in queue")
queue.add("second item in queue")
queue.add("third item in queue")
queue.add("forth item in queue")
queue.add("fifth item in queue")
queue.add("sixth item in queue")
queue.add("7th item in queue")
queue.add("8 item in queue")
queue.add("9 item in queue")
print(queue.size())
print(queue.report())
print(queue.delete())
print(queue.delete())
print(queue.delete())
print(queue.size())

queue.add("10 item in queue")
queue.add("11 item in queue")

print(queue.delete())
print(queue.size())
print(queue.report())
