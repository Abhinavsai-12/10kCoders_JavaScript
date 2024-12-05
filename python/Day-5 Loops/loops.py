# Loops

#range function:

for x in range(6):
    print(x)


for y in range(2,6):
    print(y)


#2 table
for z in range(2,21,2):
    print(z)


#For loop
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)


# The break Statement
fruits = ["apple", "banana", "cherry"]
for x in fruits:
#   print(x)
    print(x)
    if x == "banana":
      break


#Continue Statement
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  if x == "banana":
    continue
  print(x)



#nested loops
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
  for y in fruits:
    print(x, y)



#While loop
i = 1
while i < 6:
  print(i)
  i += 1
