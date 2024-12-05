# List

#Creating a list
list1=[2,3,5,7,8]
print(list1)


#Accessing Lists
print(list1[0])
print(list1[-1])


#iterating through for loop 
for i in list1:
    print(i)


#iterating through while loop 
index=0
while index < len(list1):
    print(list1[index])
    index +=1


#list Methods

#1. append
num1=[1,2,3,4]
num1.append(5)
print(num1)


#copy
num_copy=num1.copy()
print("copy() method: ",num_copy)

#clear
num1.clear()
print("clear() method : ",num1)

#count
num=[1,2,3,4,2]
print(num.count(2))

#extends
num.extend([4,5])
print(num)

#index
print(num.index(4))

#insert
num.insert(2,3)
print(num)

#pop
num.pop()
print(num)

#remove
num.remove(2)
print(num)

#reverse
num.reverse()
print("reverse",num)

#Sort
num.sort()
print("Sort",num)

#min and Max
print(min(num),"minimum number")
print(max(num),"Maximum number")

#list comprehesion:
squares=[x**2 for x in range(5)]
print(squares)


