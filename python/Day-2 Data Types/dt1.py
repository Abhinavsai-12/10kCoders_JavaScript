#Data Types
# type():- it is used to determine which data type it is

#Numbers: used to represent the numeric values
# 1. Integer
# 2. Float
# 3. Complex

a=1
b=2.5
c=(2+3j)

# print(a)
# print(b)
# print(c)

print(type(a))
print(type(b))
print(type(c))


# sequence data type:
# 1.String
# 2.list 
# 3.tuple


# String 
str1="Hello"
str2='welcome'
str3="""hello 
        welcome 
        to python 
        class"""

print(str1)
print(str2)
print(str3)

print(type(str3))


#List[]

l1=[1,2,3,2,4,5]
print(l1)
print(type(l1))

#Tuple()

t1=(1,2,3,2,4,5)
print(t1)
print(type(t1))


#Set{}

s1={1,2,3,4,5}
print(s1)
print(type(s1))


#Dictionary

person={
    "name":"Abhi",
    "age":22,
    "city":"Hyd"
}

print(person["name"])
print(person["age"])
print(person["city"])
print(type(person))


