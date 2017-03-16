class Queue:
    def __init__(self):
        self.items=[]
    def add(self, item):
        self.items.append(item)
    def delete(self):
        itemToDelete=self.items[0]
        del self.items[0]
        return itemToDelete
    def size(self):
        return len(self.items)
    def report(self):
        return self.items

queue=Queue()
print(queue.size())
queue.add("first item in queue")
queue.add("second item in queue")
queue.add("third item in queue")
print(queue.size())
print(queue.report())
print(queue.delete())
print(queue.size())
print(queue.report())
print(queue.delete())
print(queue.size())
print(queue.report())
