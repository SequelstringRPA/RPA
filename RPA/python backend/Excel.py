from win32com.client import Dispatch
from openpyxl import load_workbook

# xl = Dispatch("Excel.Application")
# xl.Visible = True  # otherwise excel is hidden

# # newest excel does not accept forward slash in path
# wb = xl.Workbooks.Open(r'C:\Users\Nevil\Desktop\Book2.ods')
# wb.Close()
# xl.Quit()

xl = Dispatch("Excel.Application")
givenPath = r'C:\Users\Nevil\Desktop\book1.xlsx'


def launch():
    xl.Visible = True

    global wb
    wb = xl.Workbooks.Open(givenPath)


def quit(save=False):
    global wb
    if save:
        wb.Close(True)
    else:
        wb.Close()
    xl.Quit()


def saveExcel():
    # wbCopy = load_workbook(givenPath)
    # wbCopy.save("Book1.xlsx")
    global wb
    wb.Saved = 0
    wb.Save()


# if __name__ == "__main__":
#     if int(input("Launch: ")):
#         launch()

#     if int(input("Save Excel: ")):
#         saveExcel()

#     if int(input("Quit without saving? ")):
#         quit(save=False)
#     else:
#         quit(save=True)

# launch()

# temp = int(input())

# if temp == 1:
#     print("Launch")
# elif temp == 2:
#     print("Save")
# elif temp == 3:
#     print("Quit")

elList = list(input().split(","))

for el in elList:
    print(el)
    if el == 'launch':
        launch()
    if el == 'saveExcel':
        saveExcel()
    if el == 'quitExcel':
        quit()
