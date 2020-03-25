# import sys

# print(f"Values sent by Nodejs: {sys.argv}")

# fromaddr = list(sys.argv[3].split(','))

# print(fromaddr)

# print("Hello world!")

import subprocess
import os

# subprocess.call([r'C:\Users\Nevil\Desktop\book1.xlsx'])

# subprocess.check_call("open", "-a", "Microsoft Excel")

os.system("start Excel.exe  C:/Users/Nevil/Desktop/book1.xlsx")
