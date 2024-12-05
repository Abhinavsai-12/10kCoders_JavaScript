user=input("Enter Username")
password=input("Enter password")
# user="Abhi"
def login():
    if user== "Abhi" and password=="1234":
        return True
    else:
        return False

output = (login())

def login_msg():
    if output:
        print("Login Sucessful")
    else:
        print("Invalid Credintials")


login_msg()