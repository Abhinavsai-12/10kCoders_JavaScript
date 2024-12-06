#Modules


def add(*args):
    res=0
    for i in args:
        res+=i
    return res


def sub(*args):
    res=args[0]
    for i in args[1:]:
        res-=i
    return res


def mul(*args):
    res=0
    for i in args:
        res*=i
    return res

def expo(a,b):
    res=a*b
    return res

def div(a,b):
    res=a/b
    return res

def mod(a,b):
    res=a%b
    return res


def floor(a,b):
    res=a//b
    return res



